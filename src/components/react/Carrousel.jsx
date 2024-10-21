import { useState, useEffect } from 'react';

const Carrousel = ({ slides, duration }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // useEffect para el movimiento automático
  useEffect(() => {
    const interval = setInterval(nextSlide, duration);
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [duration, totalSlides]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor de los slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((item, index) => (
          <div
            className="w-full flex-shrink-0 flex flex-col sm:flex-row" // flex-col para pantallas pequeñas, flex-row para grandes
            key={index}
          >
            {/* Sección de texto (66% en pantallas grandes) */}
            <div className="sm:w-2/3 w-full p-4 flex items-center">
              <div>
                <h2 className={`text-center sm:text-left text-4xl sm:text-6xl font-bold mb-2 ${item.color_title}`}>
                  {item.title}
                </h2>
                <p className="text-center sm:text-left sm:text-2xl mb-4">{item.description}</p>
              </div>
            </div>

            {/* Sección de imagen (33% en pantallas grandes) */}
            <div className="sm:w-1/3 w-full">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores del slide como botones */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)} // Cambia el slide al índice correspondiente
            aria-label={`Slide ${index + 1}`} // Mejora la accesibilidad
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
