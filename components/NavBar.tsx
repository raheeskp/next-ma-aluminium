"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex items-center justify-between h-[12vh] shadow-gray-300 shadow-sm">
      <Link href="/" className="flex items-center justify-center gap-2 px-10">
        <img src="/images/malogo.png" alt="logo" className="size-14" />
        <h1 className="text-3xl font-bold text-primary">MA ALUMINIUM</h1>
      </Link>
      <div className="flex gap-8 h-full">
        <ul className="flex items-center gap-8 text-base">
          <Link
            href="/"
            className={`${pathName === "/" && "text-primary font-semibold"}`}
          >
            HOME
          </Link>
          <Link
            href="about"
            className={`${
              pathName === "/about" && "text-primary font-semibold"
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="products"
            className={`${
              pathName === "/products" && "text-primary font-semibold"
            }`}
          >
            PRODUCTS
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 pointer">
              GO-TO
              <IoIosArrowDown />
            </button>
            <ul className="absolute left-0 w-40 gap-2 bg-yellow-400 rounded-md shadow-sm p-2 z-10 hidden group-hover:block ">
              <Link href="/features">Features</Link>
              <Link href="/quote">Free Quote</Link>
              <Link href="/team">Our Team</Link>
              <Link href="/testimonial">Testimonial</Link>
              <Link href="/career">Career</Link>
            </ul>
          </div>

          <Link
            href="contact"
            className={`${
              pathName === "/contact" && "text-primary font-semibold"
            }`}
          >
            CONTACT
          </Link>
        </ul>
        <Link
          href="/quote"
          className="bg-primary flex px-10 items-center justify-center text-white gap-2"
        >
          Get a Quote
          <FaArrowRight />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
