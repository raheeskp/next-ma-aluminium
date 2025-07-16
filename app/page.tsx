"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HeroCarousel from "@/components/HeroCarousel";

export default function Page() {
  return (
    <div>
      <HeroCarousel />
    </div>
  );
}
