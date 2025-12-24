import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '2348000000000';
  const message = encodeURIComponent('Hello, I would like to learn more about Derivative Group services.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground shadow-elevated hover:scale-110 transition-transform duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
