import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Datos de las slides
const slidesData = [
  {
    title: 'Descarga tu contenido favorito a toda velocidad',
    description: 'Descarga todo el contenido que necesitas sin cargos extra.',
    src: 'images/4.webp',
    imageAlt: 'Descarga rápida de contenido',
  },
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
];

const SlideShow = () => {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation 
      pagination={{ clickable: true , type: 'bullets' }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="w-full h-[400px] md:h-[500px]"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="relative w-full h-full flex items-center justify-start">
            <img src={slide.src} alt={slide.imageAlt} className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
            <div className="relative md:left-4 z-10 w-full md:w-1/2 flex flex-col h-full items-start justify-center p-4 md:p-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">{slide.title}</h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* Botones de navegación */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-500 text-white p-4 rounded-full hover:bg-gray-500 focus:outline-none md:block hidden"
        // onClick={prevSlide} // Puedes usar la navegación por botones aquí si lo necesitas.
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-500 text-white p-4 rounded-full hover:bg-gray-500 focus:outline-none md:block hidden"
        // onClick={nextSlide} // Lo mismo para el botón de siguiente.
      >
        ❯
      </button>
    </Swiper>
  );
};

export default SlideShow;
