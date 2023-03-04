import React, {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Card from "./Card";

const Features = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const forClient = "What Can I Do For My Client ?".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex flex-col gap-4 font-titleFont mb-14">
        <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
          Features
        </h3>
        <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={forClient}
            idx={20}
          />
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Front-End Web Development"
          des="As a front-end web developer, I play a critical role in building web applications that are both visually appealing and functional, providing users with a seamless and enjoyable experience."
        />
        <Card
          title="Mobile Responsive Designing"
          des="As a mobile responsive web developer, I play a critical role in building web applications that provide a seamless and enjoyable experience for users on mobile devices, helping businesses and organizations reach a wider audience and achieve their goals."
        />
        <Card
          title="User Friendly"
          des="As a user-friendly web developer, I play a critical role in building web applications that provide a seamless and enjoyable experience for users, helping businesses and organizations achieve their goals and create meaningful connections with their audiences."
        />
      </div>
    </section>
  );
};

export default Features;
