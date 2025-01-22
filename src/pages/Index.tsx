import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ImageCarousel } from "@/components/ImageCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/80" />
        <img
          src="https://i.im.ge/2025/01/22/HQeTWL.WhatsApp-Image-2025-01-21-at-11-47-50.jpeg"
          alt="Fachada da casa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl text-center font-bold mb-4">
            Casa de esquina à venda no bairro Divinéia
          </h1>
          <p className="text-lg md:text-xl text-center mb-8 max-w-2xl">
            Um imóvel em um bairro tranquilo e que pode sempre valorizar. O seu imóvel do ano está aqui.
          </p>
          <a
            href="https://wa.me/5548998647038?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20im%C3%B3vel."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-colors duration-300"
          >
            ENTRE EM CONTATO!
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl text-center mb-8">
          Veja mais detalhes deste imóvel incrível nas imagens abaixo:
        </h2>
        <ImageCarousel />
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-8">Confira um tour virtual da casa:</h2>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/seu-id-do-video"
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-primary mb-8">Grande oportunidade!</h2>
          <div className="mb-8">
            <p className="text-gray-500 text-xl mb-2">De R$ 320.000 por apenas</p>
            <p className="text-5xl font-bold text-primary-dark mb-4">R$ 250 Mil!</p>
            <p className="text-gray-600">
              Lembrando que podemos renegociar o valor, mas não aceitamos trocas.
            </p>
          </div>
          <a
            href="https://wa.me/5548998647038?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20im%C3%B3vel."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-colors duration-300"
          >
            QUERO NEGOCIAR AGORA!
          </a>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Index;