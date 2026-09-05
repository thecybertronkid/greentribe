import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative bg-black rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl z-10 border border-emerald-900 aspect-video">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Embedded HTML5 Video player / YouTube demo frame */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&rel=0"
          title="GreenTribe NECBDC Bamboo & Cane Crafting Story"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
