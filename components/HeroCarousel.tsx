"use client";
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

      description: "Best fabrication materials wholesale & retailer",
      image: "/images/carousel-1.jpg",
    },
    {
      id: 2,

      description: "Customer support with real time Assistance",
      image: "/images/carousel-2.jpg",
    },
    {
      id: 3,

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
        speed={2000} // Speed controll
        pagination={{ clickable: true }} // Show pagination dots
        navigation={true} // Show next/prev buttons
        modules={[Autoplay, Pagination, Navigation]} // Load required modules
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.image}
                alt="img"
                className="h-[80vh] w-full object-cover"
              />
              <div className="absolute top-0 w-full h-full flex items-center justify-center bg-hero-back text-white p-5">
                <div className="flex flex-col items-center justify-center p-5 gap-5 text-center max-w-3xl mx-auto">
                  <h2 className="text-lg font-bold">WELCOME TO MA ALUMINIUM</h2>
                  <p className="text-6xl font-bold">{slide.description}</p>
                  <div className="flex gap-6 justify-center">
                    <Link
                      href="/about"
                      className="bg-primary w-36 py-4 hover:bg-primary-hover"
                    >
                      Read More
                    </Link>
                    <Link
                      href="/quote"
                      className="bg-white w-36 py-4 text-black"
                    >
                      Free Quote
                    </Link>
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
