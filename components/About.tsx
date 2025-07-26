import Link from "next/link";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";

const About = () => {
  return (
    <section className="lg:grid grid-cols-2">
      <div className="px-5">
        <img
          src="/images/about.jpg"
          alt=""
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 bg-gray-100 px-5 py-10 text-gray-600 sm:px-20">
        <h1 className="text-5xl font-bold text-black">About Us __</h1>
        <p className="text-justify">
          We are one of the leading Fabrications materials wholesale & Retails
          sales institution in Calicut district, Kerala. We have 11+ years of
          experience in this field and we providing quality products and
          services for our valuable customers.
        </p>
        <div className="flex flex-col gap-5 sm:grid grid-cols-2">
          <div className="flex flex-row gap-5">
            <HiUserGroup className="size-14 text-primary bg-white rounded-lg" />
            <div className="flex flex-col justify-center">
              <span className="text-primary font-bold text-xl">1000+</span>
              <span>Happy Clients</span>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <BsCheckLg className="size-14 text-primary bg-white rounded-lg" />
            <div className="flex flex-col justify-center">
              <span className="text-primary font-bold text-xl">5000+</span>
              <span>Dealings</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Link
            href="/about"
            className="text-sm bg-primary px-5 py-4 text-white font-bold hover:bg-primary-hover"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
