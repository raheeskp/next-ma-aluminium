const Contact = () => {
  return (
    <div className="bg-gray-100 lg:grid grid-cols-2 mt-10">
      <div className="px-5 sm:px-10 md:px-20 lg:flex flex-col justify-center lg:mr-10 lg:px-10">
        <h1 className="mt-5 text-2xl font-bold lg:text-4xl">Contact Us __</h1>
        <p className="text-justify mt-5 text-gray-600">
          Send us in few words, your wants and needs we can reach you within
          minutes and also we can suggest & assist you early as possible.
        </p>
        <div className="flex flex-col gap-3 mt-5 sm:grid grid-cols-2">
          <input
            placeholder="Enter your name"
            type="text"
            className="text-input"
          />
          <input
            placeholder="Enter your Email address"
            type="text"
            className="text-input"
          />
        </div>
        <div className="flex flex-col gap-3 mt-3 sm:grid grid-cols-2">
          <input
            placeholder="Enter your Mobile No."
            type="text"
            className="text-input"
          />
          <select name="" id="" className="text-input">
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
            className="text-area"
          ></textarea>
        </div>
        <div className="mt-3">
          <button className="btn-primary">Submit</button>
        </div>
      </div>
      <div className="px-5 sm:px-10 md:px-20 lg:p-0">
        <iframe
          className="position-absolute w-100 h-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.164236300921!2d75.9237289!3d11.3956149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6684285132719%3A0xa059b186a9bb1dda!2sM.A%20Aluminium!5e0!3m2!1sen!2sin!4v1737301539366!5m2!1sen!2sin"
          //   frameborder="0"
          //   allowfullscreen=""
          aria-hidden="false"
          //   tabindex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
