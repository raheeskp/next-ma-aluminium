import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-neutral-800 text-white p-7 mt-10 grid gap-5 sm:px-15 md:grid-cols-2 lg:grid-cols-4 lg:px-30">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Address</h1>
        <div className="flex gap-2">
          <FaLocationDot className="size-5" />
          Parappanpoyil, Thamarassery
        </div>
        <div className="flex gap-2">
          <FaPhoneAlt className="size-5" /> +91 95264 58081
        </div>
        <div className="flex gap-2">
          <FaPhoneAlt className="size-5" />
          +91 99469 42178
        </div>
        <div className="flex gap-2">
          <MdEmail className="size-6" /> maparappanpoyil@gmail.com
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Link href="" className="bg-white p-2 rounded-full">
            <FaFacebookF className="size-5" />
          </Link>
          <Link href="" className="bg-white p-2 rounded-full">
            <AiFillInstagram className="size-5" />
          </Link>
          <Link href="" className="bg-white p-2 rounded-full">
            <FaYoutube className="size-5" />
          </Link>
        </div>
      </div>
      <div className="grid gap-3">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="" className="flex gap-1 hover:text-primary-hover">
          <MdKeyboardArrowRight className="size-6" />
          Aluminium Profiles
        </Link>
        <Link href="" className="flex gap-1 hover:text-primary-hover">
          <MdKeyboardArrowRight className="size-6" />
          PVC Laminated Sheet
        </Link>
        <Link href="" className="flex gap-1 hover:text-primary-hover">
          <MdKeyboardArrowRight className="size-6" />
          Hardwares
        </Link>
        <Link href="" className="flex gap-1 hover:text-primary-hover">
          <MdKeyboardArrowRight className="size-6" />
          Ceiling Sheet & TKT
        </Link>
        <Link href="" className="flex gap-1 hover:text-primary-hover">
          <MdKeyboardArrowRight className="size-6" />
          Wall Panels
        </Link>
      </div>
      <div className="grid gap-3">
        <h1 className="text-2xl font-bold">Quick Links</h1>
        <Link href="/about" className="flex gap-1 hover:text-primary-hover">
          <MdKeyboardArrowRight className="size-6" />
          About Us
        </Link>
        <Link href="/contact" className="flex gap-1 hover:text-primary-hover">
          <MdKeyboardArrowRight className="size-6" />
          Contact Us
        </Link>
        <Link href="/products" className="flex gap-1 hover:text-primary-hover">
          <MdKeyboardArrowRight className="size-6" />
          Products
        </Link>
        <Link href="/quote" className="flex gap-1 hover:text-primary-hover">
          <MdKeyboardArrowRight className="size-6" />
          Support
        </Link>
        <Link href="/about" className="flex gap-1 hover:text-primary-hover">
          <MdKeyboardArrowRight className="size-6" />
          Terms & Conditions
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Get Hired!</h1>
        <p className="">
          Are you interested to be a part of MA Aluminium?, Please submit your
          latest credentials.
        </p>
        <div className="">
          <Link
            href="/career"
            className="bg-primary hover:bg-primary-hover flex justify-center py-2"
          >
            Apply now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
