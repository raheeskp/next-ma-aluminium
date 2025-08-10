import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import Link from "next/link";

const TopBar = () => {
  return (
    <header className="hidden bg-gray-100 lg:flex items-center justify-between h-14 px-10 text-sm">
      <div className="flex items-center text-slate-800 gap-3">
        <MdLocationPin className="text-xl text-primary" />
        <div>Parappanpoyil, Thamarassery</div>
        <FaClock className="text-lg text-primary" />
        <div>Mon - Sat : 08.00 AM - 07.00 PM</div>
      </div>
      <div className="flex items-center text-slate-800 gap-3">
        <div>
          <IoCall className="text-xl text-primary" />
        </div>
        <div>+91 95264 58081, +91 99469 42178</div>
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
    </header>
  );
};

export default TopBar;
