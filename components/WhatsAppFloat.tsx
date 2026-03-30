'use client';
import { useState } from 'react';

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);
  const phone = '254111532381';
  const message = encodeURIComponent("Hi Peter, I'd like to discuss a project with you.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span
        className="text-sm font-medium text-white bg-gray-900 px-3 py-1.5 rounded-lg border border-white/10 shadow-lg whitespace-nowrap transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(8px)' }}
      >
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 flex items-center justify-center rounded-full shadow-lg shadow-green-500/30 transition-transform duration-300 group-hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
      >
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7 relative z-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.855L.057 23.522a.75.75 0 0 0 .921.921l5.668-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.504-5.254-1.385l-.376-.217-3.913 1.013 1.013-3.912-.217-.377A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </div>
    </a>
  );
}
