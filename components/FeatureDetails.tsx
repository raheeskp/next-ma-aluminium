import { BsCheckLg } from "react-icons/bs";
import { LuDraftingCompass } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";

const FeatureDetails = () => {
  return (
    <section className="grid grid-cols-2 h-[500px]">
      <div className="bg-gray-100 text-gray-600 flex flex-col justify-center p-15">
        <h1 className="text-4xl font-bold text-black">Why Choose Us __</h1>
        <p className="mt-5">
          We have experience around 10 years in this field and also we provide
          quality products and materials for our Clients and customers and more
          over we ensuring the 100% customer satisfaction.
        </p>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="flex flex-row gap-5 items-center">
            <BsCheckLg className="text-6xl text-primary bg-white " />
            <div className="flex flex-col justify-center">
              <span className="">Quality</span>
              <span className="text-xl font-bold">Products</span>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <LuDraftingCompass className="text-6xl text-primary bg-white " />
            <div className="flex flex-col justify-center">
              <span className="">Free</span>
              <span className="text-xl font-bold">Consultation</span>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <BiSupport className="text-6xl text-primary bg-white " />
            <div className="flex flex-col justify-center">
              <span className="">Customer</span>
              <span className="text-xl font-bold">Support</span>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <FaUserCheck className="text-6xl text-primary bg-white " />
            <div className="flex flex-col justify-center">
              <span className="">Well Trained</span>
              <span className="text-xl font-bold">Staffs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <img src="/images/feature.jpg" alt="" className="h-[500px] w-full" />
      </div>
    </section>
  );
};

export default FeatureDetails;
