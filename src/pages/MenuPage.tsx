import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../App';
import { menuData } from '../menuData';
import { ArrowLeft, ArrowRight, Camera } from 'lucide-react';

type DishItem = { name: string | Record<string, string>, price: string, desc: Record<string, string>, img?: string };

type PageItem = 
  | { type: 'dish', categoryKey: string, categoryTitle: string, item: DishItem }
  | { type: 'wok', categoryKey: 'wok', categoryTitle: string };

export default function MenuPage({ lang, t }: { lang: any, t: any }) {
  const pages = useMemo(() => {
    const list: PageItem[] = [];
    const categoriesList = Object.keys(t.menu.categories) as Array<keyof typeof t.menu.categories>;
    
    for (const cat of categoriesList) {
      if (cat === 'wok') {
         list.push({ type: 'wok', categoryKey: 'wok', categoryTitle: t.menu.categories.wok });
      } else {
         const items = menuData[cat] as DishItem[];
         for (const item of items) {
            list.push({ type: 'dish', categoryKey: cat as string, categoryTitle: t.menu.categories[cat], item });
         }
      }
    }
    return list;
  }, [t, lang]);

  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (pageIndex < pages.length - 1) {
      setDirection(1);
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (pageIndex > 0) {
      setDirection(-1);
      setPageIndex(pageIndex - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      filter: 'blur(4px)',
      transformOrigin: direction > 0 ? "left center" : "right center"
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transformOrigin: direction > 0 ? "left center" : "right center"
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      filter: 'blur(4px)',
      transformOrigin: direction < 0 ? "left center" : "right center"
    }),
  };

  const currentPage = pages[pageIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-pit-bg min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading className="mb-0">{t.menu.title}</SectionHeading>
        </div>

        <div className="relative">
          {/* Navigation Arrows (Desktop overlay vs Mobile stacked) */}
          <div className="flex justify-between items-center mb-6 px-2">
            <button
              onClick={handlePrev}
              disabled={pageIndex === 0}
              className="flex items-center gap-2 font-black italic uppercase tracking-widest text-sm text-pit-dark/80 hover:text-pit-orange disabled:opacity-30 disabled:hover:text-pit-dark/80 transition-colors"
            >
              <ArrowLeft size={20} /> <span className="hidden sm:inline">Prev Page</span>
            </button>
            <h2 className="font-black italic text-xl md:text-2xl uppercase tracking-tighter text-pit-dark/70">
              {currentPage.categoryTitle}
            </h2>
            <button
              onClick={handleNext}
              disabled={pageIndex === pages.length - 1}
              className="flex items-center gap-2 font-black italic uppercase tracking-widest text-sm text-pit-dark/80 hover:text-pit-orange disabled:opacity-30 disabled:hover:text-pit-dark/80 transition-colors"
            >
              <span className="hidden sm:inline">Next Page</span> <ArrowRight size={20} />
            </button>
          </div>

          {/* Book Page Container with perspective */}
          <div style={{ perspective: '1500px' }} className="relative min-h-[700px] flex">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={pageIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-[#fcf8f2] border-y-2 border-r-4 border-l-2 border-pit-dark/20 rounded-r-3xl rounded-l-md p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col w-full h-full min-h-[700px]"
              >
                 {/* Book Binding/Crease Illusion */}
                 <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-20" />
                 <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-black/5 pointer-events-none z-20" />

                 {/* Decorative bg (Book watermark) */}
                 <div className="absolute -top-32 -right-32 w-64 h-64 bg-pit-orange/5 rounded-full blur-[80px] pointer-events-none" />

                 <div className="relative z-10 flex-1 flex flex-col items-center">
                    {currentPage.type === 'dish' ? (
                       <div className="flex flex-col items-center text-center w-full max-w-2xl mx-auto flex-1">
                          {/* Photo Space */}
                          <div className="w-full max-w-md aspect-[4/3] bg-pit-dark/5 rounded-xl overflow-hidden mb-8 border border-pit-dark/10 shadow-inner relative group">
                             {currentPage.item.img ? (
                               <img src={currentPage.item.img} alt={currentPage.item.name} className="w-full h-full object-cover" />
                             ) : (
                               <div className="absolute inset-0 flex flex-col items-center justify-center text-pit-dark/20 gap-3 group-hover:text-pit-orange/50 transition-colors">
                                  <Camera size={48} strokeWidth={1.5} />
                                  <span className="font-bold uppercase tracking-widest text-xs">Photo Space</span>
                               </div>
                             )}
                          </div>
                          
                          <h3 className="font-black italic uppercase tracking-tighter text-4xl md:text-5xl text-pit-dark mb-4">
                            {typeof currentPage.item.name === 'string' ? currentPage.item.name : currentPage.item.name[lang as 'en'|'fi'|'sv'] || currentPage.item.name.en}
                          </h3>
                          
                          <div className="inline-block bg-pit-orange text-white font-black italic text-xl px-4 py-1 transform -skew-x-12 mb-8 shadow-sm">
                             <span className="block transform skew-x-12">{currentPage.item.price}</span>
                          </div>
                          
                          <p className="text-lg md:text-xl text-pit-dark/80 font-medium leading-relaxed max-w-lg mb-8">
                            {currentPage.item.desc[lang as 'en'|'fi'|'sv']}
                          </p>

                          {currentPage.categoryKey !== 'sides' && (
                             <div className="mt-auto border-t-2 border-pit-dark/10 pt-8 text-center w-full">
                                <p className="inline-block font-black italic uppercase tracking-widest text-pit-orange text-sm bg-white/50 px-6 py-2 rounded-sm border border-pit-orange/20">
                                  {t.menu.mealAddon}
                                </p>
                             </div>
                          )}
                       </div>
                    ) : (
                      <div className="space-y-12 w-full text-left">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          <div className="w-full md:w-1/3 aspect-[4/3] bg-pit-dark/5 rounded-xl overflow-hidden border border-pit-dark/10 shadow-inner relative group shrink-0">
                             <img src="/wok_base.jpg" alt="WOK Base" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                             <div className="absolute inset-0 flex flex-col items-center justify-center text-pit-dark/20 gap-3 group-hover:text-pit-orange/50 transition-colors" style={{ zIndex: -1 }}>
                                <Camera size={48} strokeWidth={1.5} />
                                <span className="font-bold uppercase tracking-widest text-xs">Photo Space</span>
                             </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-black italic text-2xl md:text-3xl uppercase tracking-tighter text-pit-dark mb-4 border-b border-pit-dark/10 pb-4">
                              WOK {lang === 'fi' ? menuData.wok.base.nameFi : lang === 'sv' ? menuData.wok.base.nameSv : menuData.wok.base.nameEn}
                            </h3>
                            <div className="flex justify-between items-start pt-4 flex-col sm:flex-row gap-4">
                                <p className="text-pit-dark font-medium max-w-2xl">{menuData.wok.base[lang as 'en'|'fi'|'sv']}</p>
                                <span className="font-black text-pit-orange text-xl bg-pit-orange/10 px-4 py-1 rounded-sm transform -skew-x-12 inline-block shadow-sm">
                                  <span className="block transform skew-x-12">{menuData.wok.base.price}</span>
                                </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                          <div>
                            <h4 className="font-black italic uppercase tracking-widest text-sm text-pit-dark mb-4 pl-3 border-l-2 border-pit-orange">{t.menu.wokAddons.veg}</h4>
                            <ul className="space-y-3 pr-4">
                              {menuData.wok.vegetables.map((v, i) => (
                                <li key={i} className="flex justify-between text-sm border-b border-pit-dark/5 pb-2 border-dashed">
                                  <span className="text-pit-dark/90 font-medium">{v.name[lang as 'en'|'fi'|'sv']}</span>
                                  <span className="font-bold text-pit-dark/60">{v.price}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-black italic uppercase tracking-widest text-sm text-pit-dark mb-4 pl-3 border-l-2 border-pit-orange">{t.menu.wokAddons.sauce}</h4>
                            <ul className="space-y-3 pr-4">
                              {menuData.wok.sauces.map((s, i) => (
                                <li key={i} className="text-sm font-medium text-pit-dark/90 border-b border-pit-dark/5 pb-2 border-dashed">
                                  {s.name[lang as 'en'|'fi'|'sv']}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-black italic uppercase tracking-widest text-sm text-pit-dark mb-4 pl-3 border-l-2 border-pit-orange">{t.menu.wokAddons.protein}</h4>
                            <ul className="space-y-3 pr-4">
                              {menuData.wok.protein.map((p, i) => (
                                <li key={i} className="flex justify-between text-sm border-b border-pit-dark/5 pb-2 border-dashed">
                                  <span className="text-pit-dark/90 font-medium">{p.name[lang as 'en'|'fi'|'sv']}</span>
                                  <span className="font-bold text-pit-orange">{p.price}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-black italic uppercase tracking-widest text-sm text-pit-dark mb-4 pl-3 border-l-2 border-pit-orange">{t.menu.wokAddons.toppings}</h4>
                            <ul className="space-y-3 pr-4">
                              {menuData.wok.toppings.map((tp, i) => (
                                <li key={i} className="text-sm font-medium text-pit-dark/90 border-b border-pit-dark/5 pb-2 border-dashed">
                                  {tp.name[lang as 'en'|'fi'|'sv']}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                 </div>

                {/* Page number indicators */}
                <div className="absolute bottom-6 right-8 text-pit-dark/30 font-black italic text-lg pointer-events-none select-none z-20">
                  {pageIndex + 1} / {pages.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

