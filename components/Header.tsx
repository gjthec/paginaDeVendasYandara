
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CTAButton from './CTAButton';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Início', href: '/', internal: true },
    { name: 'Blog', href: '/blog', internal: true },
    { name: 'Como funciona', href: isHome ? '#como-funciona' : '/#como-funciona', internal: false },
    { name: 'Módulos', href: isHome ? '#modulos' : '/#modulos', internal: false },
    { name: 'Investimento', href: isHome ? '#investimento' : '/#investimento', internal: false },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight text-stone-800 font-serif">
          Mapeamento do Sentir
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.internal ? (
              <Link key={link.name} to={link.href} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                {link.name}
              </a>
            )
          ))}
          <CTAButton className="!py-2 !px-5 !text-sm shadow-none" />
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-stone-700 relative z-50" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white transition-all duration-500 ease-in-out z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navLinks.map((link, idx) => (
            link.internal ? (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-2xl font-serif text-stone-800 transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-2xl font-serif text-stone-800 transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            )
          ))}
          <div className={`pt-4 transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <CTAButton onClick={() => setIsOpen(false)} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
