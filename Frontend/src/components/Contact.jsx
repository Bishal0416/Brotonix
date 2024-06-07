import React from "react";
import Contactimg from "../assets/ContactUs.png";
import Button from "../layout/Button";

const Contact = () => {
  return (
    <div id="contact" className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <h2 className="text-5xl text-green-900 leading-tight font-semibold">
        Contact
        <span className="text-green-800 font-normal"> Us</span>
      </h2>

      <div className=" flex flex-col md:flex-row justify-between w-full">
      <div className=" w-full md:w-2/4">
        <img src={Contactimg} alt="img" />
      </div>
      
      <form className=" w-full md:w-2/5 space-y-5 pt-20">
          <div className=" flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="enter your name"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="enter your email"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="enter your number"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userMessage">Your Message</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userMessage"
              id="userMessage"
              placeholder="enter your meaasage"
            />
          </div>

          <div className=" flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
      </form>
      </div>
    </div>
  );
};

export default Contact;
