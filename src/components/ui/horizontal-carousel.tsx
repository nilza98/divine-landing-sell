import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: "https://i.im.ge/2025/01/22/HQelUx.WhatsApp-Image-2025-01-21-at-11-47-49-2.jpeg",
    alt: "Vista frontal da casa"
  },
  {
    url: "https://i.im.ge/2025/01/22/HQerYa.WhatsApp-Image-2025-01-21-at-11-47-49-1.jpeg",
    alt: "Área externa da casa"
  },
  {
    url: "https://i.im.ge/2025/01/22/HQeu4J.WhatsApp-Image-2025-01-21-at-11-47-49.jpeg",
    alt: "Detalhes do banheiro"
  },
  {
    url: "https://i.im.ge/2025/01/22/HQeXTG.WhatsApp-Image-2025-01-21-at-11-47-48.jpeg",
    alt: "Interior da casa"
  },
  {
    url: "https://i.im.ge/2025/01/22/HQeTWL.WhatsApp-Image-2025-01-21-at-11-47-50.jpeg",
    alt: "Outra vista da casa"
  }
];

export const HorizontalCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <motion.div 
        className="flex gap-4 px-4"
        drag="x"
        dragConstraints={{
          right: 0,
          left: -1000 // Ajuste este valor baseado no número de imagens
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] min-h-[250px] relative rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
