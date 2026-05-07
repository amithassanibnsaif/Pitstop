import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Flame } from 'lucide-react';
import { PrimaryButton } from '../App';
import { Link } from 'react-router-dom';

export default function OrderPage({ lang, t }: { lang: any, t: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 bg-pit-bg min-h-screen flex items-center justify-center"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-24 h-24 bg-pit-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
           <ShoppingBag className="w-12 h-12 text-pit-orange" />
        </div>
        
        <h1 className="font-black italic text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-pit-dark">
          Online Ordering
        </h1>
        
        <p className="text-xl text-pit-dark/70 font-medium mb-12">
          Our online ordering system is getting a tune-up.<br/>
          It will be deployed very soon.
        </p>

        <div className="p-8 bg-pit-surface border border-pit-dark/10 rounded-xl max-w-md mx-auto mb-12 shadow-sm text-left">
           <h3 className="font-black italic text-xl uppercase tracking-tight text-pit-dark mb-4 border-b border-pit-dark/10 pb-4">In the meantime...</h3>
           <p className="text-pit-dark/80 mb-6 font-medium">Head over to our location or call us directly to place your order.</p>
           
           <div className="space-y-3 font-medium text-pit-dark mb-8">
              <p className="flex justify-between border-b border-pit-dark/5 pb-2">
                 <span className="text-pit-dark/60">Phone:</span>
                 <span className="font-bold">(555) PIT-STOP</span>
              </p>
              <p className="flex justify-between border-b border-pit-dark/5 pb-2">
                 <span className="text-pit-dark/60">Location:</span>
                 <span className="font-bold">1024 Fast Lane Blvd</span>
              </p>
           </div>
           
           <Link to="/menu" className="block text-center w-full bg-pit-dark/5 text-pit-dark font-black italic uppercase tracking-widest py-3 rounded hover:bg-pit-dark/10 transition-colors border border-pit-dark/10">
              Browse Menu
           </Link>
        </div>
      </div>
    </motion.div>
  );
}
