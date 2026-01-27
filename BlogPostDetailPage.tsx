
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import Header from './components/Header';
import FloatingCTA from './components/FloatingCTA';
import { getPostById, type BlogPost } from './services/blogService';
import { offer } from './config/offer';

function Loader2({ className, size }: { className?: string, size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </svg>
  );
}

const BlogPostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        const found = await getPostById(id);
        if (found) {
          setPost(found);
          window.scrollTo(0, 0);
        } else {
          navigate('/blog');
        }
        setLoading(false);
      };
      fetch();
    }
  }, [id, navigate]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]">
      <Loader2 className="text-stone-300" size={32} />
    </div>
  );

  if (!post) return null;

  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      <Header />
      
      <article className="pt-32 pb-32 px-5 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-stone-400 hover:text-[#7A8C7A] transition-colors text-[10px] font-bold uppercase tracking-widest mb-12 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/> Voltar para o blog
          </Link>

          <header className="mb-16">
            <div className="inline-block bg-[#7A8C7A]/10 text-[#7A8C7A] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 leading-[1.1] tracking-tight font-serif">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-stone-400 text-xs py-4 border-y border-stone-100 font-medium">
               <Calendar size={14} /> {post.date}
            </div>
          </header>

          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-[40px] md:rounded-[60px] overflow-hidden mb-20 shadow-2xl border border-stone-100">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="max-w-2xl mx-auto">
            {post.excerpt && (
              <div className="text-2xl md:text-3xl text-stone-500 font-serif italic mb-16 border-l-4 border-[#D9A08B] pl-8 md:pl-10 leading-relaxed">
                {post.excerpt}
              </div>
            )}
            
            <div 
              className="prose prose-stone prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:text-stone-800 prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 custom-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-24 p-12 md:p-16 bg-[#2D352D] rounded-[40px] md:rounded-[60px] text-white text-center shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D9A08B]/10 rounded-full blur-3xl"></div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 italic font-serif relative z-10">Precisa de clareza?</h3>
                <p className="text-emerald-50/80 mb-10 text-lg font-light leading-relaxed max-w-md mx-auto relative z-10">
                  Agende uma sessão individual para organizar sua vida emocional e encontrar novos caminhos.
                </p>
                <a 
                  href={offer.purchaseLink} 
                  className="inline-block bg-[#D9A08B] text-white px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 hover:bg-[#C28A77] transition-all relative z-10"
                >
                  Agendar Sessão
                </a>
            </div>
          </div>
        </div>
      </article>

      <footer className="py-16 bg-white border-t border-stone-100 text-center">
        <div className="max-w-4xl mx-auto px-5">
          <div className="font-serif font-bold text-stone-800 text-2xl italic mb-4">Mapeamento do Sentir</div>
          <div className="text-stone-300 text-[10px] uppercase tracking-widest font-bold">© {new Date().getFullYear()}</div>
        </div>
      </footer>
      <FloatingCTA />
      <style>{`
        .custom-content img {
          display: block;
          max-width: 100%;
          height: auto;
          border-radius: 20px;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        .custom-content .ql-align-center { text-align: center; }
        .custom-content .ql-align-right { text-align: right; }
        .custom-content img.ql-align-center { margin-left: auto; margin-right: auto; }
        .custom-content img.ql-align-right { margin-left: auto; }
      `}</style>
    </main>
  );
};

export default BlogPostDetailPage;
