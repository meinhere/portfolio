import React from "react";
import ExperienceCards from "./ExperienceCards";

const Experience = () => {

  const items = [
    {
      icon: "🎓",
      title: "Laboratory Assistant and Laboratory Admin",
      institution: "WargaLab, Universitas Trunojoyo Madura",
      desc: "As a lab administrator, I am responsible for overseeing the day-to-day operations of the lab, including ordering supplies, maintaining equipment, and ensuring the safety of all lab personnel.",
      date: "July 2023 - Now"
    },
    {
      icon: "💼",
      title: "Back End Mentor - Study Jam 2023 & 2024",
      institution: "GDGoC Universitas Trunojoyo Madura",
      desc: "In my mentorship program, I teach my students the fundamentals of Node.js, Firebase, and JavaScript. I also teach them how to fetch data, use APIs, and access, add, and delete data using Firebase.",
      date: "Nov - Des 2023 & Nov 2024"
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 relative py-20 px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-8">My Experience</h1>

        <div className="relative w-full max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gray-300"></div>

          {items.map((item) => {
            return <ExperienceCards key={item.title} item={item} />
          })}

        </div>
      </div>
    </section>
  );
};

export default Experience;
