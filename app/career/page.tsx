import Career from "@/components/Career";
import Link from "next/link";
import React from "react";

const career = () => {
  return (
    <section>
      <div className="overflow-hidden relative">
        <img
          src="/images/carousel-1.jpg"
          alt="image"
          className="h-[50vh] w-full object-cover"
        />
        <div
          className="bg-hero-back absolute h-full w-full flex flex-col justify-center gap-2 
              top-0 pl-10 md:pl-30 text-white"
        >
          <h1 className="text-4xl font-bold">Apply Now</h1>
          <div>
            <Link href="/">Home</Link> / <span>Go-To</span> /{" "}
            <span>Career</span>
          </div>
        </div>
      </div>
      <Career />
    </section>
  );
};

export default career;
