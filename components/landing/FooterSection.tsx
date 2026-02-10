import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection: React.FC = () => (
  <footer className="py-12 bg-white text-stone-400 text-center text-xs px-5 border-t border-stone-50">
    <div className="max-w-7xl mx-auto flex flex-col gap-6 text-center">
      <div className="font-serif font-bold text-stone-800 text-lg italic">Mapeamento do Sentir</div>
      <div>
        © {new Date().getFullYear()} • Todos os direitos reservados •{' '}
        <Link to="/admin" className="hover:text-stone-800">
          Admin
        </Link>
      </div>
    </div>
  </footer>
);

export default FooterSection;
