import React from "react";
import img from "../assets/home.png";
import Button from "../layout/Button";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div id="home" className=" min-h-[100vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-20">
      <div className=" md:w-2/4 text-center">
        <h2 className="text-5xl text-green-900 font-bold leading-tight">
          Easy Framing With
          <span className="text-green-600 font-normal"> Brotonix</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae iste laboriosam rerum porro consequuntur sequi, fugit dolore alias facilis reprehenderit veritatis? Quod placeat similique neque in facilis sequi nihil.

        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
