import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Flame } from 'lucide-react';
import { PrimaryButton, OutlineButton } from '../App';

export default function LocationPage({ lang, t }: { lang: any, t: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-6rem)]"
    >
      <div className="grid lg:grid-cols-2 h-full min-h-[calc(100vh-6rem)]">
        <div className="bg-pit-surface p-12 lg:p-24 flex flex-col justify-center">
          <h2 className="font-black italic text-5xl lg:text-7xl uppercase tracking-tighter mb-12 text-pit-dark">{t.location.title}</h2>
          
          <div className="space-y-10 mb-12">
            <div className="flex items-start gap-5">
              <div className="bg-white p-4 rounded-full shadow-sm"><MapPin className="text-pit-orange w-6 h-6 flex-shrink-0" /></div>
              <div>
                <h4 className="font-black italic text-xl uppercase tracking-tight text-pit-dark mb-2">{t.location.hq}</h4>
                <p className="text-pit-dark/70 text-base font-medium whitespace-pre-line">{t.location.hqDesc}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="bg-white p-4 rounded-full shadow-sm"><Clock className="text-pit-orange w-6 h-6 flex-shrink-0" /></div>
              <div>
                <h4 className="font-black italic text-xl uppercase tracking-tight text-pit-dark mb-2">{t.location.hours}</h4>
                <p className="text-pit-dark/70 text-base font-medium whitespace-pre-line">{t.location.hoursDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-white p-4 rounded-full shadow-sm"><Phone className="text-pit-orange w-6 h-6 flex-shrink-0" /></div>
              <div>
                <h4 className="font-black italic text-xl uppercase tracking-tight text-pit-dark mb-2">{t.location.call}</h4>
                <p className="text-pit-dark/70 text-base font-medium">(555) PIT-STOP</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <OutlineButton className="py-4 text-base">{t.location.getDir}</OutlineButton>
          </div>
        </div>
        <div className="h-[50vh] lg:h-auto min-h-[500px] bg-pit-bg relative">
          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-[#e4d6bc] overflow-hidden group">
            {/* Decorative grid pattern mimicking a map */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(var(--color-pit-surface)_1px,transparent_1px),linear-gradient(90deg,var(--color-pit-surface)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
               <div className="w-20 h-20 bg-pit-orange rounded-full flex items-center justify-center animate-bounce shadow-[0_0_40px_rgba(217,92,39,0.5)]">
                  <Flame className="text-white w-10 h-10" />
               </div>
               <div className="w-16 h-4 bg-pit-dark/20 blur-sm rounded-full mt-2"></div>
               <div className="mt-4 bg-white px-4 py-2 font-black italic uppercase tracking-widest text-pit-dark shadow-xl text-xs rounded-sm">
                  PITSTOP HQ
               </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
