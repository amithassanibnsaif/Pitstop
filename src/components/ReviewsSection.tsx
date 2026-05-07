import React, { useEffect, useState } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReviewsSection({ t }: { t: any }) {
  const placesLib = useMapsLibrary('places');
  const [reviews, setReviews] = useState<google.maps.places.Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!placesLib) return;

    const fetchReviews = async () => {
      try {
        const place = new placesLib.Place({ id: 'ChIJpUwNVwB3jEYR45Dyre5bTN0' });
        await place.fetchFields({ fields: ['reviews'] });
        if (place.reviews) {
          setReviews(place.reviews.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placesLib]);

  if (loading) {
    return <div className="py-20 text-center">Loading reviews...</div>;
  }

  // Fallback to static reviews if API fails or no key
  const finalReviews = reviews.length > 0 ? reviews.map(r => ({
    text: r.text || '',
    author: r.authorAttribution?.displayName || 'Anonymous',
    photoURI: r.authorAttribution?.photoURI || '',
    rating: r.rating || 5
  })) : t.reviews || [];

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % finalReviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + finalReviews.length) % finalReviews.length);

  return (
    <section className="py-24 bg-pit-surface relative border-y border-pit-dark/10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pit-orange to-transparent opacity-20"></div>
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-pit-dark">{t.menu?.title === 'Ruokalista' ? 'Mitä ihmiset sanovat' : t.menu?.title === 'Meny' ? 'Vad folk säger' : 'What people say'}</h2>
          <div className="w-16 h-1 bg-pit-orange mx-auto mt-6"></div>
          <p className="mt-4 text-pit-dark/60 font-medium">Google Maps Reviews</p>
        </div>
        
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-pit-bg p-8 md:p-12 shadow-xl shadow-pit-dark/5 relative w-full"
            >
              <div className="flex gap-1 text-pit-orange mb-6 justify-center">
                {Array.from({ length: finalReviews[currentIndex]?.rating || 5 }).map((_, j) => (
                  <Star key={j} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="italic text-pit-dark/80 mb-8 leading-relaxed text-lg md:text-xl text-center">"{finalReviews[currentIndex]?.text}"</p>
              <div className="flex items-center justify-center pt-6 mt-auto">
                <div className="flex items-center gap-4">
                  {finalReviews[currentIndex]?.photoURI && (
                    <img src={finalReviews[currentIndex].photoURI} alt={finalReviews[currentIndex].author} className="w-12 h-12 rounded-full shadow-md" referrerPolicy="no-referrer" />
                  )}
                  <span className="font-bold text-pit-dark uppercase tracking-wide">{finalReviews[currentIndex]?.author}</span>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-1 h-full bg-pit-orange"></div>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={prevReview}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-pit-dark text-pit-white p-2 md:p-3 rounded-full hover:bg-pit-orange transition-colors z-10"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-pit-dark text-pit-white p-2 md:p-3 rounded-full hover:bg-pit-orange transition-colors z-10"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {finalReviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-pit-orange' : 'bg-pit-dark/20 hover:bg-pit-dark/40'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
