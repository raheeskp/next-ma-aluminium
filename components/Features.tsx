import { BsCheckLg } from "react-icons/bs";
import { LuDraftingCompass } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";

const Features = () => {
  return (
    <section>
      <div className="py-20 px-10 grid gap-10 md:grid md:grid-cols-2 sm:px-15 md:px-10 lg:grid lg:grid-cols-4 lg:gap-10 lg:px-20">
        <div className="">
          <div className="flex justify-between">
            <BsCheckLg className="size-14 text-primary bg-gray-100 rounded-lg" />
            <h1 className="text-7xl font-bold text-gray-100">01</h1>
          </div>
          <h4 className="text-xl font-bold mt-2">Quality Materials</h4>
        </div>
        <div className="">
          <div className="flex justify-between">
            <LuDraftingCompass className="size-14 text-primary bg-gray-100 rounded-lg" />
            <h1 className="text-7xl font-bold text-gray-100">02</h1>
          </div>
          <h4 className="text-xl font-bold mt-2">Free Consultation</h4>
        </div>
        <div className="">
          <div className="flex justify-between">
            <BiSupport className="size-14 text-primary bg-gray-100 rounded-lg" />
            <h1 className="text-7xl font-bold text-gray-100">03</h1>
          </div>
          <h4 className="text-xl font-bold mt-2">Customer Support</h4>
        </div>
        <div className="">
          <div className="flex justify-between">
            <FaUserCheck className="size-14 text-primary bg-gray-100 rounded-lg" />
            <h1 className="text-7xl font-bold text-gray-100">04</h1>
          </div>
          <h4 className="text-xl font-bold mt-2">Well Trained Staff</h4>
        </div>
      </div>
    </section>
  );
};

export default Features;
