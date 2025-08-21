import React from 'react';
import { WhatsappIcon } from '@/components/icons/IconComponents';
import { SITE_CONFIG } from '@/constants/content';

export function WhatsappButton() {
  return (
    <a 
      href={SITE_CONFIG.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl hover:bg-green-600 transition-all transform hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappIcon className="w-8 h-8" />
    </a>
  );
}