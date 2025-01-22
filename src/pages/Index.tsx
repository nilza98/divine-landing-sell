import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ImageCarousel } from "@/components/ImageCarousel";
import { OrbEffect } from "@/components/ui/orb-effect";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HorizontalCarousel } from "@/components/ui/horizontal-carousel";
import "../styles/button-effect.css";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BackgroundGradientAnimation>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Casa de esquina à venda no bairro Divinéia
            </h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-lg">
              Um imóvel em um bairro tranquilo e que pode sempre valorizar. O seu imóvel do ano está aqui.
            </p>
            
            <div className="w-full max-w-md mx-auto mb-8">
              <img 
                src="https://i.im.ge/2025/01/22/HQelUx.WhatsApp-Image-2025-01-21-at-11-47-49-2.jpeg" 
                alt="Imagem principal da casa" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <a
              href="https://wa.me/5548998647038?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20im%C3%B3vel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block button-shine text-white font-bold py-3 px-8 rounded-full text-base transition-all duration-300"
            >
              ENTRE EM CONTATO!
            </a>
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl text-center mb-8">
          Veja mais detalhes deste imóvel incrível nas imagens abaixo:
        </h2>
        <div className="max-w-6xl mx-auto">
          <HorizontalCarousel />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-8">Confira um tour virtual da casa:</h2>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3atrbq8aOBE"
              title="Tour Virtual da Casa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <BackgroundGradientAnimation>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-4xl mx-auto text-center text-white p-4">
            <h2 className="text-4xl font-bold mb-8 drop-shadow-lg">Grande oportunidade!</h2>
            <div className="mb-8">
              <p className="text-xl mb-2 drop-shadow">De R$ 320.000 por apenas</p>
              <p className="text-5xl font-bold mb-4 drop-shadow-lg">R$ 250 Mil!</p>
              <p className="text-lg drop-shadow">
                Lembrando que podemos renegociar o valor, mas não aceitamos trocas.
              </p>
            </div>
            <a
              href="https://wa.me/5548998647038?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20im%C3%B3vel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block button-shine text-white font-bold py-3 px-8 rounded-full text-base transition-all duration-300"
            >
              QUERO NEGOCIAR AGORA!
            </a>
          </div>
        </div>
      </BackgroundGradientAnimation>

      <WhatsAppButton />
    </div>
  );
};

export default Index;