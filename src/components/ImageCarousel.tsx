import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  url: string;
  alt: string;
}

const images: Image[] = [
  {
    url: "https://i.im.ge/2025/01/22/HQeTWL.WhatsApp-Image-2025-01-21-at-11-47-50.jpeg",
    alt: "Imagem 1 da casa"
  },
  {
    url: "https://i.im.ge/2025/01/22/HQelUx.WhatsApp-Image-2025-01-21-at-11-47-49-2.jpeg",
    alt: "Imagem 2 da casa"
  },
  {
    url: "https://i.im.ge/2025/01/22/HQerYa.WhatsApp-Image-2025-01-21-at-11-47-49-1.jpeg",
    alt: "Imagem 3 da casa"
  },
  {
    url: "https://i.im.ge/2025/01/22/HQeu4J.WhatsApp-Image-2025-01-21-at-11-47-49.jpeg",
    alt: "Imagem 4 da casa"
  },
  {
    url: "https://i.im.ge/2025/01/22/HQeXTG.WhatsApp-Image-2025-01-21-at-11-47-48.jpeg",
    alt: "Imagem 5 da casa"
  }
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative aspect-video">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover rounded-lg"
        />
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`thumbnail w-20 h-20 rounded-md overflow-hidden ${
              currentIndex === index ? "active" : ""
            }`}
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};