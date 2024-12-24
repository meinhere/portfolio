import React from "react";
import hero from "../assets/Hero.png";
import reactLogo from "../assets/React.png";
import tailwind from "../assets/Tailwind Css.png";
import logoLinks from "./LogoLinks";
import { motion } from "framer-motion";
import CV from "../assets/cv/CV_Sabil_Ahmad_Hidayat.pdf";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              Sabil <span className="text-amber-500">Ahmad</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Full Stack Developer & Web Designer</p>
            <p className="mb-4">
              I'm a passionate Full Stack Developer with expertise in React, Laravel, Nodejs and modern web technologies. I like to make clean code and using best practices to create a seamless user
              experience.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a href={CV} target="_blank">
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[90vh] h-96" />
            <img src={reactLogo} alt="" className="absolute w-10 top-36 left-0 rounded-full md:hidden" />
            <img src={tailwind} alt="" className="absolute w-10 rounded-full right-0 bottom-36 md:hidden" />
          </div>
        </div>
      </div>

      <div className="absolute top-5 lg:top-20 right-5 hidden p-4 md:flex flex-col gap-6 rounded-full">
        {logoLinks.map((data, index) => {
          const Icon = data.icon;
          return (
            <motion.a
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex h-16 cursor-pointer items-center gap-5 rounded-xl border-2 border-black-primary bg-white p-3 text-black-primary shadow-button-card transition-all duration-200 hover:scale-105 hover:shadow-image-card"
              key={index}
              href={data.href}
              target="_blank"
            >
              <Icon />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
