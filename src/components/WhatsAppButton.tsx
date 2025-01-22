import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5548998647038?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20im%C3%B3vel."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 animate-float z-50"
    >
      <MessageCircle size={24} />
    </a>
  );
};