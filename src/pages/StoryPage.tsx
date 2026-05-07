import React from 'react';
import { motion } from 'motion/react';
import { Flame, Star } from 'lucide-react';
import { SectionHeading } from '../App';

export default function StoryPage({ lang, t }: { lang: any, t: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-pit-bg min-h-screen relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pit-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Flame className="w-12 h-12 text-pit-orange mx-auto mb-6" />
          <SectionHeading className="justify-center text-center">{t.story.title}</SectionHeading>
          <p className="text-base md:text-lg text-pit-dark/80 font-medium leading-relaxed">
            {t.story.desc}
          </p>
          <div className="mt-12 h-64 w-full bg-cover bg-center rounded-xl overflow-hidden shadow-lg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80)' }}></div>
        </div>

        <div className="mb-24">
          <h3 className="font-black italic text-3xl md:text-4xl uppercase tracking-tighter mb-12 text-pit-dark text-center">What the streets say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.reviews.map((review: any, i: number) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={i} 
                className="bg-pit-surface p-8 border-l-4 border-pit-orange relative shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute top-0 right-8 transform -translate-y-1/2 text-pit-dark/5">
                  <span className="text-8xl font-serif leading-none">"</span>
                </div>
                <div className="flex gap-1 text-pit-orange mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="fill-current w-5 h-5" />)}
                </div>
                <p className="text-sm italic text-pit-dark/80 mb-6 font-medium leading-relaxed">"{review.text}"</p>
                <p className="font-black italic text-xs tracking-widest text-pit-orange uppercase">— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
