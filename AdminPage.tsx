import React, { useState, useEffect } from 'react';
import { blogService, BlogPost } from './services/blogService';
import { auth } from './services/firebase';
import { 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  User 
} from "firebase/auth";
// Fix: Removed Loader2 from lucide-react imports as it is locally defined as a helper at the bottom of the file
import { Trash2, Plus, Save, LogOut, Lock, Upload, X, Image as ImageIcon, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [originalPost, setOriginalPost] = useState<BlogPost | null>(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    category: 'Autoconhecimento'
  });

  const quillModules = {
    toolbar: [
      [{ 'header': [2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'blockquote', 'clean'],
    ],
  };

  const quillFormats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'link', 'blockquote'
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        loadPosts();
      }
    });
    return () => unsubscribe();
  }, []);

  const loadPosts = async () => {
    const data = await blogService.getPosts();
    setPosts(data);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 700 * 1024) {
        alert("A imagem é muito pesada! Máximo recomendado: 700KB.");
        e.target.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setAuthLoading(true);
    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
    } catch (err: any) {
      setError("Credenciais inválidas.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => signOut(auth);

  const resetForm = () => {
    setFormData({ title: '', excerpt: '', content: '', imageUrl: '', category: 'Autoconhecimento' });
    setEditingId(null);
    setOriginalPost(null);
    setShowForm(false);
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
    setOriginalPost(post);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.imageUrl) {
      alert("Preencha título, conteúdo e imagem.");
      return;
    }
    
    try {
      if (editingId && originalPost) {
        // Objeto de atualização apenas com o que mudou
        const updates: any = {};
        if (formData.title !== originalPost.title) updates.title = formData.title;
        if (formData.excerpt !== originalPost.excerpt) updates.excerpt = formData.excerpt;
        if (formData.content !== originalPost.content) updates.content = formData.content;
        if (formData.category !== originalPost.category) updates.category = formData.category;
        
        // Só envia a imagem novamente se ela for diferente da original
        // Isso previne erro de tamanho de documento no Firebase ao reenviar o mesmo base64
        if (formData.imageUrl !== originalPost.imageUrl) {
          updates.imageUrl = formData.imageUrl;
        }

        if (Object.keys(updates).length > 0) {
          await blogService.updatePost(editingId, updates);
        }
      } else {
        await blogService.savePost(formData);
      }
      
      loadPosts();
      resetForm();
    } catch (err: any) {
      console.error("Erro completo do Firebase:", err);
      if (err.code === 'resource-exhausted' || err.message?.includes('too large')) {
        alert("Erro: O conteúdo é grande demais para o banco de dados. Tente reduzir o tamanho da imagem ou do texto.");
      } else {
        alert("Ocorreu um erro ao salvar. Verifique o console do navegador.");
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Excluir este texto permanentemente?')) {
      await blogService.deletePost(id);
      loadPosts();
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]">
      <Loader2 className="animate-spin text-stone-300" size={40} />
    </div>
  );

  if (!user) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-5">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-stone-100 w-full max-w-md animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-[#7A8C7A]/10 rounded-full text-[#7A8C7A]">
              <Lock size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-stone-800 font-serif text-center mb-8">Admin</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="email" 
              placeholder="E-mail"
              className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7A8C7A]/20"
              value={loginData.email}
              onChange={e => setLoginData({...loginData, email: e.target.value})}
            />
            <input 
              type="password" 
              placeholder="Senha"
              className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7A8C7A]/20"
              value={loginData.password}
              onChange={e => setLoginData({...loginData, password: e.target.value})}
            />
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button type="submit" className="w-full py-4 bg-[#7A8C7A] text-white rounded-2xl font-bold shadow-lg hover:bg-[#687868] transition-colors">Entrar</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] p-5 md:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-stone-800 font-serif">Painel Admin</h1>
            <p className="text-stone-500">Gerencie seu conteúdo.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => showForm ? resetForm() : setShowForm(true)}
              className="flex items-center gap-2 bg-[#7A8C7A] text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#687868] transition-all"
            >
              {showForm ? <X size={20} /> : <Plus size={20} />}
              {showForm ? "Cancelar" : "Nova Nota"}
            </button>
            <button onClick={handleLogout} className="text-stone-400 hover:text-red-500 p-2 transition-colors"><LogOut size={24} /></button>
          </div>
        </header>

        {showForm && (
          <form onSubmit={handleSave} className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-stone-100 mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold font-serif mb-8 text-stone-700">
              {editingId ? 'Editar Nota' : 'Nova Reflexão'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Título</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-[#7A8C7A]/20 outline-none"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    placeholder="Título da nota..."
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Categoria</label>
                  <select 
                    className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none"
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                  >
                    <option>Autoconhecimento</option>
                    <option>Organização</option>
                    <option>Sentimentos</option>
                    <option>Rotina</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Resumo Curto</label>
                  <textarea 
                    className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl h-24 resize-none outline-none"
                    value={formData.excerpt}
                    onChange={e => setFormData({...formData, excerpt: e.target.value})}
                    placeholder="Resumo para a listagem..."
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Imagem de Capa (Máx 700KB)</label>
                <div className="relative group aspect-video bg-stone-50 border-2 border-dashed border-stone-200 rounded-3xl overflow-hidden flex items-center justify-center">
                  {formData.imageUrl ? (
                    <>
                      <img src={formData.imageUrl} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button type="button" onClick={() => setFormData({...formData, imageUrl: ''})} className="bg-white text-red-500 p-2 rounded-full shadow-lg"><X size={20}/></button>
                      </div>
                    </>
                  ) : (
                    <label className="cursor-pointer flex flex-col items-center">
                      <Upload size={32} className="text-stone-300 mb-2" />
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-tighter">Escolher Imagem</span>
                      <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Conteúdo da Nota</label>
              <ReactQuill 
                theme="snow"
                value={formData.content}
                onChange={(val) => setFormData({...formData, content: val})}
                modules={quillModules}
                formats={quillFormats}
              />
            </div>

            <button type="submit" className="w-full py-5 bg-[#7A8C7A] text-white rounded-3xl font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-[#687868] transition-all">
              <Save size={24} /> {editingId ? 'Salvar Alterações' : 'Publicar Agora'}
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-[40px] p-8 border border-stone-100 shadow-sm flex flex-col group hover:shadow-md transition-all">
              <div className="aspect-video rounded-3xl overflow-hidden mb-6 bg-stone-100">
                <img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif line-clamp-1">{post.title}</h3>
              <p className="text-stone-400 text-[10px] uppercase font-bold tracking-widest mb-6">{post.date}</p>
              
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-50">
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(post)} className="p-2 text-stone-400 hover:text-[#7A8C7A] hover:bg-stone-50 rounded-full transition-all" title="Editar"><Edit3 size={18}/></button>
                  <button onClick={() => handleDelete(post.id)} className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all" title="Excluir"><Trash2 size={18}/></button>
                </div>
                <Link to={`/blog/${post.id}`} className="text-xs font-bold text-[#7A8C7A] hover:underline uppercase tracking-widest">Ver Link</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper Loader
const Loader2 = ({ className, size }: { className?: string, size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);

export default AdminPage;