import React, { useState, useRef } from 'react';

const slidesData = [
  {
    title: 'Perfecto para trabajar desde casa',
    description: 'Trabaja desde casa con la confianza de una red de fibra óptica.',
    src: 'images/1.webp',
    imageAlt: 'Trabajando desde casa con red de fibra óptica',
  },
  {
    title: 'Mirar contenido sin interrupciones',
    description: 'Disfruta de mirar tus aplicaciones de streaming en alta resolución.',
    src: 'images/3.webp',
    imageAlt: 'Mirar contenido en streaming sin interrupciones',
  },
  {
    title: 'Juega sin límites ni interrupciones',
    description: 'Disfruta de una conexión estable y con baja latencia.',
    src: 'images/5.webp',
    imageAlt: 'Jugando en red sin interrupciones',
  },
  {
    title: 'Descarga tu contenido favorito a toda velocidad',
    description: 'Descarga todo el contenido que necesitas sin cargos extra.',
    src: 'images/4.webp',
    imageAlt: 'Descarga rápida de contenido',
  },
];

const Slide = ({ slide, isActive }) => (
  <div
    className={`relative min-w-full h-[400px] md:h-[500px] flex items-center justify-start ${
      isActive ? 'animate-fade-up' : ''
    }`}
  >
    <img src={slide.src} alt={slide.imageAlt} className="absolute top-0 left-0 w-full h-full object-cover" />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 via-transparent to-transparent"></div>
    <div className="relative z-10 w-full md:w-1/2 flex flex-col h-full items-start justify-center p-4 md:p-8 rounded-l-lg md:left-7">
      <h2 className="text-5xl sm:text-4xl md:text-6xl font-bold mb-4 text-white">{slide.title}</h2>
      <p className="text-2xl sm:text-lg md:text-2xl text-gray-300">{slide.description}</p>
    </div>
  </div>
);

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (Math.abs(touchStartX.current - touchEndX) > 50) {
      // touchStartX.current - touchEndX > 0 ? nextSlide() : prevSlide();
      (touchStartX.current - touchEndX > 0 ? nextSlide() : prevSlide)();
    }
  };

  return (
    <div className="relative overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <Slide key={index} slide={slide} isActive={index === currentSlide} />
        ))}
      </div>

      {/* Botones de navegación (ocultos en móviles) */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-500 text-white p-4 rounded-full hover:bg-gray-500 focus:outline-none hidden md:block"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-500 text-white p-4 rounded-full hover:bg-gray-500 focus:outline-none hidden md:block"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Carrousel;