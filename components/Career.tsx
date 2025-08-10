import React from "react";

const Career = () => {
  return (
    <div className="bg-gray-100 mt-10 lg:grid grid-cols-2">
      <div className="grid gap-5 p-5 sm:px-20 lg:p-15">
        <h1 className="content-title">Get Hired __</h1>
        <p className="text-justify">
          Send us your latest credentials by filling the following application
          and get hired with best packages, we will contact you later.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          <input type="text" className="text-input" />
          <input type="text" className="text-input" />
          <input type="text" className="text-input" />
          <input type="text" className="text-input" />
          <input type="text" className="text-input" />
          <input type="text" className="text-input" />
          <select name="" id="" className="text-input">
            <option value=""></option>
          </select>
          <input type="text" className="text-input" />
          <input type="text" className="text-input" />
          <input type="text" className="text-input" />
          <select name="" id="" className="text-input">
            <option value=""></option>
          </select>
          <input type="text" className="text-input" />
        </div>
        <div className="grid gap-5 lg:grid grid-rows-2 ">
          <textarea
            name=""
            id=""
            className="text-area"
            placeholder="
            Do You have any previous experience? if Yes, Please specify"
          ></textarea>
          <button className="btn-primary">Submit</button>
        </div>
      </div>
      <div className="mt-10 px-5 sm:px-20 lg:m-0 lg:p-0">
        <img
          src="/images/career.jpg"
          alt=""
          className="object-cover lg:h-full"
        />
      </div>
    </div>
  );
};

export default Career;
