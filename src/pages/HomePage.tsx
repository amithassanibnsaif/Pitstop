import React from 'react';
import { motion } from 'motion/react';
import { Flame, Clock, Leaf, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton, OutlineButton } from '../App';
import Logo from '../Logo';
import { AnimatePresence } from 'motion/react';

const BackgroundSlider = () => {
  const [index, setIndex] = React.useState(0);
  const images = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
    '/slide4.jpg'
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-pit-bg">
      <div className="absolute inset-0 bg-gradient-to-r from-pit-bg via-pit-bg/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-pit-bg/20 z-10" />
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt="Pitstop background"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
             // Fallback to unsplash if images are not uploaded yet
             e.currentTarget.src = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=80";
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default function HomePage({ lang, t }: { lang: any, t: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-6rem)] min-h-[600px] flex items-center overflow-hidden">
        <BackgroundSlider />

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-12 bg-pit-orange"></div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-pit-orange">{t.hero.subtitle}</span>
            </div>
            
            <Logo className="h-24 md:h-32 mb-8 drop-shadow-xl saturate-150" />

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-6 text-pit-dark text-shadow-xl" style={{ display: 'none' }}>
               {/* Hiding original title, as the logo has text */}
              {t.hero.title1} <br /><span className="text-pit-orange drop-shadow-[0_0_15px_rgba(217,92,39,0.3)]">{t.hero.title2}</span><br />{t.hero.title3}
            </h1>
            
            <h2 className="text-6xl md:text-7xl xl:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-6 text-pit-dark text-shadow-xl">
               <span className="text-pit-orange drop-shadow-[0_0_15px_rgba(217,92,39,0.3)]">{t.hero.title2}</span><br />{t.hero.title3}
            </h2>

            <p className="text-pit-dark/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/order">
                <PrimaryButton className="flex items-center justify-center gap-2">
                  {t.nav.order} <Flame size={20} />
                </PrimaryButton>
              </Link>
              <Link to="/menu">
                <OutlineButton>{t.hero.viewMenu}</OutlineButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-pit-surface relative border-y border-pit-dark/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((prop: any, i: number) => {
              const icons = [Clock, Flame, Leaf, DollarSign];
              const Icon = icons[i];
              return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-pit-bg/50 p-6 border-l-2 border-pit-orange group hover:bg-pit-bg transition-colors"
              >
                <div className="mb-4">
                  <Icon className="text-pit-orange w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-black italic uppercase tracking-tight text-xl text-pit-dark mb-2">{prop.title}</h3>
                <p className="text-pit-dark/70 text-sm leading-relaxed">{prop.desc}</p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="bg-pit-orange text-white">
        <div className="grid md:grid-cols-2">
          <div className="h-[50vh] md:h-auto overflow-hidden">
            <img 
              src="/wok_base.jpg" 
              alt="Signature Dish" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              onError={(e) => {
                 e.currentTarget.src = "https://images.unsplash.com/photo-1594212202875-96bd7164b8bb?auto=format&fit=crop&w=1200&q=80";
              }}
            />
          </div>
          <div className="p-12 lg:p-24 flex flex-col justify-center relative shadow-2xl shadow-pit-orange/20 z-10 box-border border-l-4 border-white">
            <div className="inline-block bg-white text-pit-orange font-black italic px-4 py-1 mb-6 text-xs uppercase tracking-widest w-max sm:transform sm:-skew-x-12 shadow-sm">
              <span className="block sm:transform sm:skew-x-12">{t.sig.tag}</span>
            </div>
            <h2 className="font-black italic text-5xl lg:text-7xl uppercase tracking-tighter mb-6 text-shadow-md">{t.sig.title}</h2>
            <p className="text-sm lg:text-base text-white/90 mb-8 font-medium leading-relaxed max-w-xl">
              {t.sig.desc}
            </p>
            <Link to="/order">
               <PrimaryButton className="w-max !bg-white !text-pit-orange hover:!bg-pit-bg shadow-black/10">{t.sig.btn}</PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
