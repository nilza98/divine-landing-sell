import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

export const ThreeDPhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= images.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = images.length - 1;
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-black/5 rounded-xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.4 },
            rotateY: { duration: 0.4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full z-10 shadow-lg"
        onClick={() => paginate(-1)}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full z-10 shadow-lg"
        onClick={() => paginate(1)}
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const direction = index > currentIndex ? 1 : -1;
              setDirection(direction);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
