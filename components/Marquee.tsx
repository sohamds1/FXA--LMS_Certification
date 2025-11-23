import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "Global Certification", "ISO Certified", "Blockchain Verified", "AI-Powered Learning",
    "Expert Community", "Digital Badges", "Future-Ready Skills", "Abacus Mastery"
  ];

  return (
    <div className="relative flex overflow-hidden bg-charcoal py-4">
      <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-white/80 font-display font-bold text-lg uppercase tracking-wider">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-mint" />
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-charcoal to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-charcoal to-transparent z-10" />
    </div>
  );
};

export default Marquee;