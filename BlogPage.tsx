
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FloatingCTA from './components/FloatingCTA';
import { blogService, BlogPost } from './services/blogService';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await blogService.getPosts();
      setPosts(data);
      setLoading(false);
    };
    fetch();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      <Header />
      
      <section className="pt-32 pb-20 px-5 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-8 leading-tight">
              Notas sobre <br/><span className="italic font-light text-[#7A8C7A]">o Sentir</span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
              Explorações e reflexões direto do nosso banco de dados para te ajudar na sua jornada.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20 text-stone-300 uppercase tracking-widest text-xs font-bold">Buscando notas...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <article key={post.id} className="group flex flex-col h-full animate-fade-in">
                  <Link to={`/blog/${post.id}`} className="relative h-72 md:h-80 rounded-[40px] overflow-hidden mb-8 block shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={post.imageUrl || 'https://images.unsplash.com/photo-1506126613408-eca07ce68773'} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  
                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex items-center gap-4 text-stone-400 text-[10px] mb-4 uppercase tracking-widest font-bold">
                      <span>{post.date}</span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-[#7A8C7A] transition-colors leading-tight">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-stone-500 text-sm leading-relaxed mb-8 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <Link to={`/blog/${post.id}`} className="mt-auto flex items-center gap-2 text-[#7A8C7A] font-bold text-xs uppercase tracking-widest group/btn">
                      Ler artigo completo <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-300"/>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
          
          {!loading && posts.length === 0 && (
             <div className="text-center py-20 text-stone-400 font-serif italic">Nenhum pensamento registrado ainda.</div>
          )}
        </div>
      </section>

      <footer className="py-20 bg-white border-t border-stone-100 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <div className="font-serif font-bold text-stone-800 text-2xl italic mb-4">Mapeamento do Sentir</div>
          <div className="text-stone-300 text-[10px] uppercase tracking-widest font-bold">© {new Date().getFullYear()}</div>
        </div>
      </footer>
      
      <FloatingCTA />
    </main>
  );
};

export default BlogPage;
