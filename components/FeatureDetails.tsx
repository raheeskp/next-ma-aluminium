import { BsCheckLg } from "react-icons/bs";
import { LuDraftingCompass } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";

const FeatureDetails = () => {
  return (
    <section className="bg-gray-100 grid gap-5 py-10 sm:px-20 md:px-30 lg:grid-cols-2 lg:px-10">
      <div className="text-gray-600 flex flex-col justify-center gap-5 px-5 sm:p-10 md:p-20 lg:p-10">
        <h1 className="text-2xl font-bold text-black">Why Choose Us __</h1>
        <p className="text-justify">
          We have experience around 11+ years in this field and also we provide
          quality products and materials for our Clients and customers and more
          over we ensuring the 100% customer satisfaction.
        </p>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-row gap-5 items-center">
            <BsCheckLg className="size-12 text-primary bg-white rounded-lg" />
            <div className="flex flex-col justify-center">
              <span className="text-sm">Quality</span>
              <span className="text-md font-bold">Products</span>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <LuDraftingCompass className="size-12 text-primary bg-white rounded-lg" />
            <div className="flex flex-col justify-center">
              <span className="text-sm">Free</span>
              <span className="text-md font-bold">Consultation</span>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <BiSupport className="size-12 text-primary bg-white rounded-lg" />
            <div className="flex flex-col justify-center">
              <span className="text-sm">Customer</span>
              <span className="text-md font-bold">Support</span>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <FaUserCheck className="size-12 text-primary bg-white rounded-lg" />
            <div className="flex flex-col justify-center">
              <span className="text-sm">Well Trained</span>
              <span className="text-md font-bold">Staffs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <img src="/images/feature.jpg" alt="" className="" />
      </div>
    </section>
  );
};

export default FeatureDetails;
