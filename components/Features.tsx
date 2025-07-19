import { BsCheckLg } from "react-icons/bs";

const featuresData = [{ id: "1", text: "Quality Materials", icon: "" }];

const Features = () => {
  return (
    <section>
      <div className="container flex items-center justify-evenly">
        <div>
          <div className="flex items-center justify-between">
            <BsCheckLg className="text-6xl text-primary" />
            <h1 className="text-7xl font-bold text-gray-300">01</h1>
          </div>
          <h4 className="text-xl font-bold">Quality Materials</h4>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <BsCheckLg className="text-6xl" />
            <h1 className="text-7xl font-bold text-gray-300">01</h1>
          </div>
          <h4 className="text-xl font-bold">Quality Materials</h4>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <BsCheckLg className="text-6xl" />
            <h1 className="text-7xl font-bold text-gray-300">01</h1>
          </div>
          <h4 className="text-xl font-bold">Quality Materials</h4>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <BsCheckLg className="text-6xl" />
            <h1 className="text-7xl font-bold text-gray-300">01</h1>
          </div>
          <h4 className="text-xl font-bold">Quality Materials</h4>
        </div>
      </div>
    </section>
  );
};

export default Features;
