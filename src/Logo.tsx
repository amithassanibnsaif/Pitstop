import React from 'react';

export default function Logo({ className = '' }: { className?: string }) {
  // We use the logo image from the public folder.
  // Please ensure your uploaded image is placed in the /public folder and named 'logo.png' or 'logo.jpg' (update the src below if it's a jpg).
  return (
    <img 
      src="/logo.jpg" 
      alt="Pitstop Logo" 
      className={`object-contain ${className}`} 
    />
  );
}
