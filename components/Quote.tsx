"use client";

const Quote = () => {
  return (
    <section className="bg-gray-100 lg:grid grid-cols-2 mt-10">
      <div className="px-5 sm:px-10 md:px-20 lg:p-0">
        <img src="/images/quote.jpg" alt="" className="w-full" />
      </div>
      <div className="px-5 sm:px-10 md:px-20 lg:flex flex-col justify-center lg:mr-10 lg:px-10">
        <h1 className="mt-5 text-2xl font-bold lg:text-4xl">Free Quote __</h1>
        <p className="text-justify mt-5 text-gray-600">
          Send us in few words, your wants and needs we can reach you within
          minutes and also we can suggest & assist you early as possible.
        </p>
        <div className="flex flex-col gap-3 mt-5 sm:grid grid-cols-2">
          <input
            placeholder="Enter your name"
            type="text"
            className="bg-white border border-gray-300 
            h-15 px-3 focus:outline-none focus:ring-2 ring-primary-ring"
          />
          <input
            placeholder="Enter your Email address"
            type="text"
            className="bg-white border border-gray-300 
            h-15 px-3 focus:outline-none focus:ring-2 ring-primary-ring"
          />
        </div>
        <div className="flex flex-col gap-3 mt-3 sm:grid grid-cols-2">
          <input
            placeholder="Enter your Mobile No."
            type="text"
            className="bg-white border border-gray-300 
            h-15 px-3 focus:outline-none focus:ring-2 ring-primary-ring"
          />
          <select
            name=""
            id=""
            className="bg-white border border-gray-300 
            h-15 px-3 focus:outline-none focus:ring-2 ring-primary-ring"
          >
            <option value="Select">Select</option>
            <option value="">Enquiry</option>
            <option value="">Suggessions</option>
            <option value="">Complaints</option>
          </select>
        </div>
        <div className="mt-3">
          <textarea
            placeholder=" Type your Message"
            name=""
            id=""
            className="bg-white border border-gray-300 p-2 w-full h-18
             focus:outline-none focus:ring-2 ring-primary-ring"
          ></textarea>
        </div>
        <div className="mt-3">
          <button
            className="bg-primary w-full h-15 text-white
            font-bold hover:bg-primary-hover"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quote;
