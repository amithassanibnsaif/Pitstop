import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Menu as MenuIcon, X, Globe } from 'lucide-react';
import { tData, Language } from './i18n';
import Logo from './Logo';

import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import StoryPage from './pages/StoryPage';
import LocationPage from './pages/LocationPage';
import OrderPage from './pages/OrderPage';

export const PrimaryButton = ({ children, className = '', onClick }: any) => (
  <button
    onClick={onClick}
    className={`bg-pit-orange text-white font-black italic text-xs tracking-widest uppercase px-6 py-2 
    rounded-sm transform -skew-x-12 hover:bg-[#b84a1e] transition-all shadow-lg shadow-pit-orange/30 ${className}`}
  >
    <span className="inline-block skew-x-12">{children}</span>
  </button>
);

export const OutlineButton = ({ children, className = '', onClick }: any) => (
  <button
    onClick={onClick}
    className={`bg-pit-dark/5 text-pit-dark border border-pit-dark/20 font-black italic text-xs tracking-widest uppercase px-6 py-2 
    hover:bg-pit-dark/10 hover:border-pit-orange transition-all rounded-sm transform -skew-x-12 ${className}`}
  >
    <span className="inline-block skew-x-12">{children}</span>
  </button>
);

export const SectionHeading = ({ children, className = '' }: any) => (
  <h2 className={`font-black italic uppercase text-4xl md:text-5xl lg:text-6xl text-pit-dark mb-12 flex items-end gap-3 tracking-tighter ${className}`}>
    <div className="flex gap-1 pb-2">
      <span className="w-8 md:w-16 h-1 bg-pit-dark/10 hidden sm:block"></span>
      <span className="w-8 md:w-16 h-1 bg-pit-orange hidden sm:block"></span>
    </div>
    {children}
  </h2>
);

function AppContent() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [lang, setLang] = React.useState<Language>('en');
  const location = useLocation();

  const t = tData[lang];

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative selection:bg-pit-orange selection:text-white bg-pit-bg flex flex-col font-sans overflow-x-hidden select-none">
      {/* Background Detail: Motion Blur Overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_#d95c27_0%,_transparent_70%)] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-pit-dark/10 backdrop-blur-md bg-pit-bg/80 ${isScrolled ? 'py-3 shadow-lg shadow-pit-dark/5' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <Link to="/" className="flex items-center gap-3 cursor-pointer z-50">
            <Logo className="h-14 md:h-16 drop-shadow-md" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <Link to="/menu" className="text-pit-dark/80 hover:text-pit-orange transition-colors">{t.nav.menu}</Link>
            <Link to="/story" className="text-pit-dark/80 hover:text-pit-orange transition-colors">{t.nav.story}</Link>
            <Link to="/location" className="text-pit-dark/80 hover:text-pit-orange transition-colors">{t.nav.location}</Link>
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-pit-dark/80 hover:text-pit-orange transition-colors">
                <Globe size={16} /> {lang.toUpperCase()}
              </button>
              <div className="absolute top-full right-0 mt-2 bg-pit-surface border border-pit-dark/10 shadow-lg rounded flex flex-col py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {(['en', 'fi', 'sv'] as Language[]).map(l => (
                  <button 
                    key={l} 
                    onClick={() => setLang(l)}
                    className={`px-4 py-2 text-left hover:bg-pit-bg hover:text-pit-orange transition-colors ${lang === l ? 'text-pit-orange font-black' : 'text-pit-dark/80'}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <Link to="/order">
              <PrimaryButton className="px-6 py-2 text-lg">{t.nav.order}</PrimaryButton>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <div className="relative group">
              <button className="flex items-center gap-1 text-pit-dark/80 hover:text-pit-orange transition-colors text-xs font-bold tracking-widest">
                <Globe size={16} /> {lang.toUpperCase()}
              </button>
              <div className="absolute top-full right-0 mt-2 bg-pit-surface border border-pit-dark/10 shadow-lg rounded flex flex-col py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                 {(['en', 'fi', 'sv'] as Language[]).map(l => (
                  <button 
                    key={l} 
                    onClick={() => setLang(l)}
                    className={`px-4 py-2 text-left hover:bg-pit-bg hover:text-pit-orange transition-colors ${lang === l ? 'text-pit-orange font-black' : 'text-pit-dark/80'}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <button className="text-pit-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-pit-bg/98 backdrop-blur-xl pt-32 px-6 md:hidden flex flex-col gap-8 items-center"
          >
            <Link to="/menu" onClick={() => setMobileMenuOpen(false)} className="font-black italic uppercase tracking-tighter text-4xl hover:text-pit-orange text-pit-dark">{t.nav.menu}</Link>
            <Link to="/story" onClick={() => setMobileMenuOpen(false)} className="font-black italic uppercase tracking-tighter text-4xl hover:text-pit-orange text-pit-dark">{t.nav.story}</Link>
            <Link to="/location" onClick={() => setMobileMenuOpen(false)} className="font-black italic uppercase tracking-tighter text-4xl hover:text-pit-orange text-pit-dark">{t.nav.location}</Link>
            <Link to="/order" onClick={() => setMobileMenuOpen(false)} className="w-full max-w-sm mt-8">
              <PrimaryButton className="w-full">{t.nav.order}</PrimaryButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 pt-24">
         <AnimatePresence mode="wait">
           <Routes location={location}>
              <Route path="/" element={<HomePage lang={lang} t={t} />} />
              <Route path="/menu" element={<MenuPage lang={lang} t={t} />} />
              <Route path="/story" element={<StoryPage lang={lang} t={t} />} />
              <Route path="/location" element={<LocationPage lang={lang} t={t} />} />
              <Route path="/order" element={<OrderPage lang={lang} t={t} />} />
           </Routes>
         </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-pit-surface border-t border-pit-dark/10 py-12 text-[10px] uppercase font-bold tracking-widest text-pit-dark/50 z-10 w-full relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="h-20 drop-shadow-sm opacity-50 contrast-125 saturate-50 hover:opacity-100 transition-opacity" />
            </Link>
            
            <div className="flex gap-8">
              {[
                { label: t.nav.menu, id: '/menu' },
                { label: t.nav.story, id: '/story' },
                { label: t.nav.location, id: '/location' },
                { label: t.nav.order, id: '/order' }
              ].map((link) => (
                <Link key={link.id} to={link.id} className="text-xs text-pit-dark hover:text-pit-orange transition-colors uppercase">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-pit-dark/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-pit-orange">&copy; {new Date().getFullYear()} {t.footer.rights}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-pit-dark transition-colors">Instagram</a>
              <a href="#" className="hover:text-pit-dark transition-colors">TikTok</a>
              <a href="#" className="hover:text-pit-dark transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-pit-dark transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
