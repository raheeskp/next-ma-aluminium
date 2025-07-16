import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "WELCOME TO MA ALUMINIUM",
      description: "Best fabrication materials whole sale & retailer",
      image: "/images/carousel-1.jpg",
    },
    {
      id: 2,
      title: "WELCOME TO MA ALUMINIUM",
      description: "Customer support with real time assistance",
      image: "/images/carousel-2.jpg",
    },
    {
      id: 3,
      title: "WELCOME TO MA ALUMINIUM",
      description: "Quality materials with 100% Guarantee",
      image: "/images/carousel-3.jpg",
    },
  ];

  return (
    <div className="hero-carousel">
      <Swiper
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 3000, // Auto-slide every 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        pagination={{ clickable: true }} // Show pagination dots
        navigation={true} // Show next/prev buttons
        modules={[Autoplay, Pagination, Navigation]} // Load required modules
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-[80vh] w-full object-cover"
              />
              <div className="absolute top-0 w-full h-full flex items-center justify-center bg-hero-back text-white p-5 self-center">
                <div className="flex items-center justify-center self-center bg-black p-5 gap-5">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <div>
                    <Link href="/">Read More</Link>
                    <Link href="/">Free Quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
