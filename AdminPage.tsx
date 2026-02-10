
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { getPosts, savePost, updatePost, deletePost, type BlogPost } from './services/blogService';
import { auth } from './services/firebase';
import { 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut
} from "firebase/auth";
import type { User } from "firebase/auth";
import { Trash2, Plus, LogOut, Lock, X, Edit3, Image as ImageIcon, AlignLeft, AlignCenter, AlignRight, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Funções utilitárias antes do componente
const compressImage = (base64Str: string, maxWidth: number, maxHeight: number, quality: number): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => resolve(base64Str);
  });
};

const ImageFormat: any = Quill.import('formats/image');
class CustomImage extends ImageFormat {
  static formats(domNode: HTMLElement) {
    const formats = (ImageFormat as any).formats(domNode);
    if (domNode.hasAttribute('width')) {
      formats.width = domNode.getAttribute('width');
    }
    return formats;
  }
  format(name: string, value: string) {
    if (name === 'width') {
      if (value) {
        (this as any).domNode.setAttribute('width', value);
        (this as any).domNode.style.width = value;
      } else {
        (this as any).domNode.removeAttribute('width');
        (this as any).domNode.style.width = '';
      }
    } else {
      super.format(name, value);
    }
  }
}
Quill.register(CustomImage, true);

const CustomLoader = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
  </svg>
);

const AdminPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  
  const [selectedImg, setSelectedImg] = useState<HTMLImageElement | null>(null);
  const [resizerRect, setResizerRect] = useState<{top: number, left: number, width: number, height: number} | null>(null);
  const isResizing = useRef(false);
  const quillRef = useRef<ReactQuill>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    category: 'Autoconhecimento'
  });

  const currentPayloadSize = useMemo(() => {
    return new Blob([JSON.stringify(formData)]).size;
  }, [formData]);

  const updateResizerRect = (img: HTMLImageElement) => {
    if (!img || !quillRef.current) return;
    const rect = img.getBoundingClientRect();
    const editorRoot = quillRef.current.getEditor().root;
    const containerRect = editorRoot?.parentElement?.getBoundingClientRect();
    
    if (containerRect && editorRoot) {
      setResizerRect({
        top: rect.top - containerRect.top + editorRoot.parentElement!.scrollTop,
        left: rect.left - containerRect.left,
        width: rect.width,
        height: rect.height
      });
    }
  };

  useEffect(() => {
    if (!selectedImg) return;
    const observer = new ResizeObserver(() => updateResizerRect(selectedImg));
    observer.observe(selectedImg);
    return () => observer.disconnect();
  }, [selectedImg]);

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (file) {
        const reader = new FileReader();
        reader.onload = async () => {
          const originalBase64 = reader.result as string;
          const compressed = await compressImage(originalBase64, 800, 800, 0.6);
          const quill = quillRef.current?.getEditor();
          const range = quill?.getSelection();
          if (quill && range) {
            quill.insertEmbed(range.index, 'image', compressed);
          }
        };
        reader.readAsDataURL(file);
      }
    };
  };

  useEffect(() => {
    if (!showForm) return;
    const editorRoot = quillRef.current?.getEditor().root;

    const handleEditorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' && editorRoot?.contains(target)) {
        e.preventDefault();
        e.stopPropagation();
        setSelectedImg(target as HTMLImageElement);
        updateResizerRect(target as HTMLImageElement);
      } else if (!(e.target as HTMLElement).closest('.resizer-overlay')) {
        setSelectedImg(null);
        setResizerRect(null);
      }
    };

    editorRoot?.addEventListener('click', handleEditorClick);
    return () => editorRoot?.removeEventListener('click', handleEditorClick);
  }, [showForm]);

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!selectedImg) return;
    isResizing.current = true;
    const startX = e.clientX;
    const startWidth = selectedImg.clientWidth;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isResizing.current || !selectedImg) return;
      const deltaX = moveEvent.clientX - startX;
      const newWidth = Math.max(50, startWidth + deltaX);
      selectedImg.style.width = `${newWidth}px`;
      selectedImg.style.height = 'auto';
      selectedImg.setAttribute('width', `${newWidth}px`);
      updateResizerRect(selectedImg);
    };

    const onMouseUp = () => {
      isResizing.current = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      const html = quillRef.current?.getEditor().root.innerHTML;
      if (html) setFormData(prev => ({ ...prev, content: html }));
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const setAlignment = (align: string | null) => {
    if (!selectedImg) return;
    const quill = quillRef.current?.getEditor();
    const index = quill?.getIndex(Quill.find(selectedImg));
    if (index !== undefined) {
      quill?.formatLine(index, 1, 'align', align);
      setTimeout(() => updateResizerRect(selectedImg), 50);
    }
  };

  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link', 'blockquote', 'image'],
        ['clean'],
      ],
      handlers: { image: imageHandler }
    }
  }), []);

  const quillFormats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'color', 'background',
    'list', 'bullet', 'link', 'blockquote', 'image', 'align', 'width'
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser as User | null);
      setLoading(false);
      if (currentUser) loadPosts();
    });
    return () => unsubscribe();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      console.error("Erro ao carregar posts:", err);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const originalBase64 = reader.result as string;
        const compressed = await compressImage(originalBase64, 1200, 1200, 0.7);
        setFormData(prev => ({ ...prev, imageUrl: compressed }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setActionLoading(true);
    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
    } catch (err: any) {
      setError("Credenciais inválidas. Verifique seu e-mail e senha.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleLogout = () => signOut(auth);

  const resetForm = () => {
    setFormData({ title: '', excerpt: '', content: '', imageUrl: '', category: 'Autoconhecimento' });
    setEditingId(null);
    setShowForm(false);
    setSelectedImg(null);
    setResizerRect(null);
  };

  const handleEdit = (post: BlogPost) => {
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      imageUrl: post.imageUrl,
      category: post.category
    });
    setEditingId(post.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.imageUrl) {
      alert("Título, Conteúdo e Capa são obrigatórios.");
      return;
    }
    
    setActionLoading(true);
    try {
      if (editingId) {
        await updatePost(editingId, formData);
      } else {
        await savePost(formData);
      }
      await loadPosts();
      resetForm();
      alert("Publicação salva com sucesso!");
    } catch (err: any) {
      console.error("Erro detalhado no salvamento:", err);
      alert(`Erro ao salvar: ${err.message || 'Erro desconhecido.'}`);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta publicação?')) {
      try {
        await deletePost(id);
        await loadPosts();
      } catch (err) {
        alert("Erro ao excluir.");
      }
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]"><CustomLoader size={40} /></div>;

  if (!user) return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-5">
      <div className="bg-white p-12 rounded-[50px] shadow-2xl w-full max-w-md text-center border border-stone-100">
        <div className="flex justify-center mb-8"><div className="p-5 bg-stone-50 rounded-full text-stone-400"><Lock size={32} /></div></div>
        <h1 className="text-3xl font-bold font-serif mb-8 text-stone-800">Acesso Restrito</h1>
        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <input type="email" placeholder="E-mail administrador" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl outline-none focus:border-[#7A8C7A] transition-colors" value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})} required />
          <input type="password" placeholder="Senha" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl outline-none focus:border-[#7A8C7A] transition-colors" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} required />
          {error && <p className="text-red-500 text-xs px-2 font-medium">{error}</p>}
          <button type="submit" disabled={actionLoading} className="w-full py-4 bg-[#7A8C7A] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#6a7b6a] transition-all">
            {actionLoading ? <CustomLoader size={20} className="text-white" /> : "Entrar no Painel"}
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFCFB] p-5 md:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-stone-400 hover:text-stone-800 transition-colors"><ArrowLeft size={24} /></Link>
            <h1 className="text-4xl font-bold font-serif text-stone-800">Painel de Escrita</h1>
          </div>
          <div className="flex gap-4">
            <button onClick={() => showForm ? resetForm() : setShowForm(true)} className="flex items-center gap-2 bg-[#7A8C7A] text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#6a7b6a] transition-all">
              {showForm ? <X size={20} /> : <Plus size={20} />} {showForm ? "Cancelar" : "Nova Nota"}
            </button>
            <button onClick={handleLogout} className="p-2 text-stone-400 hover:text-red-500 transition-colors" title="Sair"><LogOut size={24} /></button>
          </div>
        </header>

        {showForm && (
          <form onSubmit={handleSave} className="bg-white p-8 md:p-12 rounded-[50px] shadow-xl mb-16 animate-fade-in border border-stone-100">
            <h2 className="text-2xl font-bold font-serif mb-10 text-stone-800">{editingId ? 'Editar Reflexão' : 'Criar Nova Reflexão'}</h2>
            
            <div className={`mb-8 p-4 rounded-2xl flex items-center justify-between text-[10px] font-bold uppercase tracking-widest ${currentPayloadSize > 900000 ? 'bg-red-50 text-red-600' : 'bg-stone-50 text-stone-400'}`}>
              <div className="flex items-center gap-2">
                {currentPayloadSize > 900000 && <AlertTriangle size={16} />}
                Status de Armazenamento do Documento
              </div>
              <div>{Math.round((currentPayloadSize / 1048576) * 100)}% de 1.0 MB</div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div className="space-y-6">
                <div><label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Título da Nota</label><input type="text" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl outline-none focus:border-[#7A8C7A] transition-colors" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required /></div>
                <div><label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Categoria</label><select className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl outline-none focus:border-[#7A8C7A] transition-colors" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}><option>Autoconhecimento</option><option>Organização</option><option>Sentimentos</option><option>Rotina</option></select></div>
                <div><label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Resumo Curto (Excerpt)</label><textarea className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl h-24 resize-none outline-none focus:border-[#7A8C7A] transition-colors" value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} /></div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Imagem de Capa</label>
                <div className="relative group aspect-video bg-stone-50 border-2 border-dashed border-stone-100 rounded-[40px] overflow-hidden flex items-center justify-center">
                  {formData.imageUrl ? (
                    <><img src={formData.imageUrl} className="w-full h-full object-cover" alt="Capa" /><button type="button" onClick={() => setFormData({...formData, imageUrl: ''})} className="absolute bg-white text-red-500 p-3 rounded-full opacity-0 group-hover:opacity-100 shadow-lg transition-opacity"><X size={20}/></button></>
                  ) : (
                    <label className="cursor-pointer flex flex-col items-center group-hover:scale-105 transition-transform"><ImageIcon size={32} className="text-stone-300 mb-2" /><span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Selecionar Capa</span><input type="file" className="hidden" accept="image/*" onChange={handleFileChange} /></label>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-5">Conteúdo da Escrita</label>
              <div className="quill-wrapper relative border border-stone-100 rounded-[24px] overflow-hidden">
                <ReactQuill ref={quillRef} theme="snow" value={formData.content} onChange={(val) => setFormData({...formData, content: val})} modules={quillModules} formats={quillFormats} />
                
                {resizerRect && selectedImg && (
                  <div 
                    className="resizer-overlay absolute pointer-events-none z-[100] border-2 border-[#22C55E] box-border"
                    style={{ 
                      top: resizerRect.top, 
                      left: resizerRect.left, 
                      width: resizerRect.width, 
                      height: resizerRect.height 
                    }}
                  >
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-1 bg-white shadow-xl rounded-full p-1 border border-stone-100 pointer-events-auto">
                      <button type="button" onClick={() => setAlignment(null)} className="p-2 hover:bg-stone-50 rounded-full text-stone-400 hover:text-[#22C55E] transition-colors" title="Alinhar à esquerda"><AlignLeft size={16} /></button>
                      <button type="button" onClick={() => setAlignment('center')} className="p-2 hover:bg-stone-50 rounded-full text-stone-400 hover:text-[#22C55E] transition-colors" title="Centralizar"><AlignCenter size={16} /></button>
                      <button type="button" onClick={() => setAlignment('right')} className="p-2 hover:bg-stone-50 rounded-full text-stone-400 hover:text-[#22C55E] transition-colors" title="Alinhar à direita"><AlignRight size={16} /></button>
                      <div className="w-px h-5 bg-stone-100 self-center mx-1"></div>
                      <button type="button" onClick={() => {setSelectedImg(null); setResizerRect(null)}} className="p-2 hover:bg-red-50 text-red-400 rounded-full transition-colors"><X size={16} /></button>
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#22C55E] border-2 border-white rounded-full cursor-nwse-resize pointer-events-auto shadow-md hover:scale-125 transition-transform" style={{ transform: 'translate(50%, 50%)' }} onMouseDown={startResizing} />
                  </div>
                )}
              </div>
            </div>

            <button type="submit" disabled={actionLoading || currentPayloadSize > 1000000} className="w-full py-5 bg-[#7A8C7A] text-white rounded-[30px] font-bold shadow-xl flex items-center justify-center gap-3 hover:bg-[#6a7b6a] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              {actionLoading ? <CustomLoader size={24} className="text-white" /> : (editingId ? "Atualizar Publicação" : "Publicar Reflexão")}
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-[40px] p-6 border border-stone-100 shadow-sm flex flex-col group transition-all hover:shadow-md">
              <div className="aspect-video rounded-[25px] overflow-hidden mb-6 bg-stone-50"><img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <h3 className="text-lg font-bold font-serif mb-2 line-clamp-1 text-stone-800">{post.title}</h3>
              <p className="text-xs text-stone-400 mb-4 line-clamp-2">{post.excerpt || 'Sem resumo disponível.'}</p>
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-stone-50">
                <div className="flex gap-1"><button onClick={() => handleEdit(post)} className="p-2 text-stone-300 hover:text-[#7A8C7A] transition-colors"><Edit3 size={18}/></button><button onClick={() => handleDelete(post.id)} className="p-2 text-stone-300 hover:text-red-500 transition-colors"><Trash2 size={18}/></button></div>
                <Link to={`/blog/${post.id}`} className="text-[10px] font-bold uppercase tracking-widest text-[#7A8C7A] hover:underline">Ver Online</Link>
              </div>
            </div>
          ))}
          {!loading && posts.length === 0 && !showForm && (
            <div className="col-span-full py-20 text-center text-stone-300 italic font-serif">Nenhuma publicação encontrada. Comece a escrever!</div>
          )}
        </div>
      </div>
      <style>{`
        .ql-toolbar.ql-snow { border: none !important; border-bottom: 1px solid #f3f4f6 !important; }
        .ql-container.ql-snow { border: none !important; }
        .ql-editor { padding: 30px !important; }
        .quill-wrapper .ql-editor img {
          display: block;
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5rem 0;
          cursor: pointer;
          user-select: none;
          -webkit-user-drag: none;
        }
      `}</style>
    </div>
  );
};

export default AdminPage;
