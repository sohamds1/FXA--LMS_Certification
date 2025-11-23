import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="text-2xl font-bold uppercase tracking-tighter text-white">
          Future <span className="text-acid-green">X</span>
        </div>
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <div className="text-xs text-gray-600">
          © {new Date().getFullYear()} Future X Academy.
        </div>
      </div>
    </footer>
  );
};

export default Footer;