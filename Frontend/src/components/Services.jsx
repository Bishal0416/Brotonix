import React from "react";
// import Heading from "../layout/Heading";
import ServiceCard from "../layout/ServiceCard";
import DiseaseImg from "../assets/disease.svg";
import FertilizerImg from "../assets/fertilizer.svg";
import IdentificationImg from "../assets/identification.svg";
const Courses = () => {
  return (
    <div id="services" className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      {/* <Heading title1="Our" title2="Services" /> */}

      <h2 className="text-5xl text-green-900 leading-tight font-semibold">
        Our
        <span className="text-green-800 font-normal"> Service</span>
      </h2>

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <ServiceCard img={DiseaseImg} title="Dieases Detection" desc="Lorem ipsum, dolor sit consectetur adipisicing elit this is the web" url="/disease-detection"/>
        <ServiceCard img={IdentificationImg} title="Crop Identification" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit this is the web" url="/crop-identification" />
        <ServiceCard img={FertilizerImg} title="Fertilizer Prediction" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit this is the web" url="/fertilizer-prediction" />
      </div>
    </div>
  );
};

export default Courses;
