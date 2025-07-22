import { BsCheckLg } from "react-icons/bs";
import { LuDraftingCompass } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";

const FeatureDetails = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="bg-gray-100 p-20 text-gray-600">
        <h1 className="text-5xl font-bold text-black">Why Choose Us __</h1>
        <p className="mt-5">
          We have experience around 10 years in this field and also we provide
          quality products and materials for our Clients and customers and more
          over we ensuring the 100% customer satisfaction.
        </p>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="flex flex-row gap-5">
            <BsCheckLg className="text-6xl text-primary bg-white" />
            <div className="">
              <span className="">Quality</span>
              <span className="text-xl font-bold">Products</span>
            </div>
          </div>
          <div>
            <LuDraftingCompass className="text-6xl text-primary bg-white" />
            <div>
              <span>Free</span>
              <span>Consultation</span>
            </div>
          </div>
          <div>
            <BiSupport className="text-6xl text-primary bg-white" />
            <div>
              <span>Customer</span>
              <span>Support</span>
            </div>
          </div>
          <div>
            <FaUserCheck className="text-6xl text-primary bg-white" />
            <div>
              <span>Well Trained</span>
              <span>Staffs</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/feature.jpg" alt="" />
      </div>
    </section>
  );
};

export default FeatureDetails;
