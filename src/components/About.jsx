import React from "react";
// import Html from "../assets/Html.png";
// import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mysql from "../assets/Mysql.png";
import Postgre from "../assets/Postgre.png";
import Firebase from "../assets/Firebase.png";
import Express from "../assets/Express.png";
import Java from "../assets/Java.png";
import Python from "../assets/Python.png";
import Cpp from "../assets/C++.png";
import PHP from "../assets/PHP.png";
import Laravel from "../assets/Laravel.png";
import CodeIgniter from "../assets/CodeIgniter.svg";
import Flask from "../assets/Flask.png";
import Streamlit from "../assets/Streamlit.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg text-amber-600 font-semibold tracking-wide uppercase">About Me</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Sabil Ahmad Hidayat</p>
            <p className="mt-4 text-xl text-gray-500 lg:mx-auto">A Full-Stack Developer with expertise in Web Development, Machine Learning Application, and Server Environment.</p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
                <p className="mt-4 text-lg text-gray-600">
                  I started my journey as a full stack developer by creating responsive and minimalist applications. Then I started learning technologies like React, Laravel, Nodejs, Flask. I have
                  created projects such as E-Tourism, some Machine Learning Applications and Distributed Systems. My project implements a modern interface and user friendly, also integrate powerful
                  backend solutions with the latest technologies.
                </p>

                <div className="border border-amber-200 rounded-lg md:p-7 py-7 mt-4  flex flex-col gap-8 items-center shadow-lg shadow-amber-400">
                  <h3 className="text-2xl font-semibold text-amber-600">Programming Language</h3>
                  <div className="flex items-center justify-center flex-wrap gap-3">
                    <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                      <img src={Javascript} alt="" className="w-10" />
                      <span className="font-semibold">Javascript</span>
                    </div>
                    <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                      <img src={PHP} alt="" className="w-12" />
                      <span className="font-semibold">PHP</span>
                    </div>
                    <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                      <img src={Python} alt="" className="w-8" />
                      <span className="font-semibold">Python</span>
                    </div>
                    <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                      <img src={Cpp} alt="" className="w-8" />
                      <span className="font-semibold">C++</span>
                    </div>
                    <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                      <img src={Java} alt="" className="w-6" />
                      <span className="font-semibold">Java</span>
                    </div>
                  </div>
                </div>
                {/* <img src={MernStack} alt="" className="p-2 rounded-lg w-52 mt-4" /> */}
              </div>
              <div className="border border-amber-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-amber-400">
                <h3 className="text-2xl font-semibold text-amber-600">Skills & Technology</h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={Tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Tailwind CSS</span>
                  </div>
                  <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={Bootstrap} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={Laravel} alt="" className="w-10" />
                    <span className="font-semibold">Laravel</span>
                  </div>
                  <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={CodeIgniter} alt="" className="w-8" />
                    <span className="font-semibold">CodeIgniter</span>
                  </div>
                  <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={NodeLogo} alt="" className="w-10" />
                    <span className="font-semibold">Node Js</span>
                  </div>
                  <div className="border border-amber-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={Express} alt="" className="w-10" />
                    <span className="font-semibold">Express Js</span>
                  </div>
                  <div className="border border-amber-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={Mysql} alt="" className="w-16" />
                    <span className="font-semibold">Mysql</span>
                  </div>
                  <div className="border border-amber-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={Postgre} alt="" className="w-10" />
                    <span className="font-semibold">Postgre SQL</span>
                  </div>
                  <div className="border border-amber-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={Firebase} alt="" className="w-10" />
                    <span className="font-semibold">Firebase</span>
                  </div>
                  <div className="border border-amber-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={Flask} alt="" className="w-10" />
                    <span className="font-semibold">Flask</span>
                  </div>
                  <div className="border border-amber-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-amber-400">
                    <img src={Streamlit} alt="" className="w-16" />
                    <span className="font-semibold">Streamlit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">More About Me</h3>
            <p className="mt-4 text-lg text-gray-600">
              Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in the tech industry. I am also like to learn things related to
              networking, IT support, and also things about server configuration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
