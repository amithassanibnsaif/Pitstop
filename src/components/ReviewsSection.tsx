import React, { useEffect, useState } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function ReviewsSection({ t }: { t: any }) {
  const placesLib = useMapsLibrary('places');
  const [reviews, setReviews] = useState<google.maps.places.Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!placesLib) return;

    const fetchReviews = async () => {
      try {
        const place = new placesLib.Place({ id: 'ChIJpUwNVwB3jEYR45Dyre5bTN0' });
        await place.fetchFields({ fields: ['reviews'] });
        if (place.reviews) {
          setReviews(place.reviews.slice(0, 3));
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

  return (
    <section className="py-24 bg-pit-surface relative border-y border-pit-dark/10">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pit-orange to-transparent opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-pit-dark">{t.menu?.title === 'Ruokalista' ? 'Mitä ihmiset sanovat' : t.menu?.title === 'Meny' ? 'Vad folk säger' : 'What people say'}</h2>
          <div className="w-16 h-1 bg-pit-orange mx-auto mt-6"></div>
          <p className="mt-4 text-pit-dark/60 font-medium">Google Maps Reviews</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {finalReviews.map((review: any, i: number) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-pit-bg p-8 shadow-xl shadow-pit-dark/5 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex gap-1 text-pit-orange mb-6">
                {Array.from({ length: review.rating || 5 }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="italic text-pit-dark/80 mb-8 leading-relaxed line-clamp-4">"{review.text}"</p>
              <div className="flex items-center justify-between border-t border-pit-dark/10 pt-6 mt-auto">
                <div className="flex items-center gap-3">
                  {review.photoURI && (
                    <img src={review.photoURI} alt={review.author} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                  )}
                  <span className="font-bold text-pit-dark uppercase tracking-wide text-sm">{review.author}</span>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-1 h-0 bg-pit-orange group-hover:h-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
