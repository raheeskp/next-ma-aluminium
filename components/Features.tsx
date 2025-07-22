import { BsCheckLg } from "react-icons/bs";
import { LuDraftingCompass } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-20">
      <div className="flex items-center justify-evenly">
        <div>
          <div className="flex items-center gap-14">
            <div className="bg-gray-100 p-2">
              <BsCheckLg className="text-7xl text-primary" />
            </div>
            <h1 className="text-7xl font-bold text-gray-300">01</h1>
          </div>
          <h4 className="text-xl font-bold mt-5">Quality Materials</h4>
        </div>
        <div>
          <div className="flex items-center gap-14">
            <div className="bg-gray-100 p-2">
              <LuDraftingCompass className="text-7xl text-primary" />
            </div>
            <h1 className="text-7xl font-bold text-gray-300">02</h1>
          </div>
          <h4 className="text-xl font-bold mt-5">Free Consultation</h4>
        </div>
        <div>
          <div className="flex items-center gap-14">
            <div className="bg-gray-100 p-2">
              <BiSupport className="text-7xl text-primary" />
            </div>
            <h1 className="text-7xl font-bold text-gray-300">03</h1>
          </div>
          <h4 className="text-xl font-bold mt-5">Customer Support</h4>
        </div>
        <div>
          <div className="flex items-center gap-14">
            <div className="bg-gray-100 p-2">
              <FaUserCheck className="text-7xl text-primary" />
            </div>
            <h1 className="text-7xl font-bold text-gray-300">04</h1>
          </div>
          <h4 className="text-xl font-bold mt-5">Trained Staffs</h4>
        </div>
      </div>
    </section>
  );
};

export default Features;
