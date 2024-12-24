import React from "react";
import NganjukKotaku from "../assets/portfolio/nganjuk-kotaku.png";
import KalkulatorWeb from "../assets/portfolio/kalkulator-web.png";
import TheSazbiro from "../assets/portfolio/the-sazbiro.png";
import TodoApps from "../assets/portfolio/todo-apps.png";
import BookshelfApps from "../assets/portfolio/bookshelf-apps.png";
import NotesApps from "../assets/portfolio/notes-apps.png";
import JapanFoods from "../assets/portfolio/japanfoods.png";
import SeleksiBeasiswa from "../assets/portfolio/seleksi-beasiswa.png";
import BudalTravel from "../assets/portfolio/budal-travel.png";
import Sidik from "../assets/portfolio/sidik.png";
import TbcClassification from "../assets/portfolio/tbc-classification.png";
import PsychologyEffects from "../assets/portfolio/psychology-effects.png";
import PlantBigdata from "../assets/portfolio/plant-bigdata.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "SIDIK",
      desc: "Sistem Informasi Data Indikator Kinerja to do recaps and reports conducted by lecturers.",
      image: Sidik,
      live: "https://sidik.sakera.id/",
      github: "https://github.com/meinhere/sidik-trunojoyo",
    },
    {
      title: "Budal Travel",
      desc: "E-travel website where you can revervate buses for transportation on tours in East Java.",
      image: BudalTravel,
      live: "https://budaltravel.ranwiesiel.serv00.net/",
      github: "https://github.com/meinhere/budal-travel",
    },
    {
      title: "Sistem Penerimaan Beasiswa",
      desc: "Decision support system for scholarship recipients for new students.",
      image: SeleksiBeasiswa,
      live: "",
      github: "https://github.com/meinhere/seleksi-beasiswa",
    },
    {
      title: "Japan Foods",
      desc: "A modern Japanese restaurant website that allows you to order food.",
      image: JapanFoods,
      live: "",
      github: "https://github.com/meinhere/ta-kelompok-paw",
    },
    {
      title: "The Sazbiro",
      desc: "A website containing information and accommodation for hotels in the Bali area.",
      image: TheSazbiro,
      live: "https://meinhere.github.io/ta-kelompok-dpw/",
      github: "https://github.com/meinhere/ta-kelompok-dpw",
    },
    {
      title: "Big Data on Plants",
      desc: "The application of big data on plants in all provinces in Indonesia.",
      image: PlantBigdata,
      live: "https://abd-project.domcloud.dev/",
      github: "https://github.com/meinhere/abd-project",
    },
    {
      title: "Psychology Effects Classification",
      desc: "Data processing system to classify the psychological impact during the COVID-19.",
      image: PsychologyEffects,
      live: "https://meinhere-psychology-effects.streamlit.app/",
      github: "https://github.com/meinhere/ta-psd",
    },
    {
      title: "TBC Classification",
      desc: "Data processing system for TB disease classification with Machine Learning.",
      image: TbcClassification,
      live: "https://meinhere-tuberculosis.streamlit.app/",
      github: "https://github.com/meinhere/ta-kk",
    },
    {
      title: "Notes Apps",
      desc: "Website to be able to add a record of daily activities.",
      image: NotesApps,
      live: "https://dicoding-react-web.vercel.app/",
      github: "https://github.com/meinhere/dicoding-react-web",
    },
    {
      title: "Bookshelf Apps",
      desc: "Application for bookshelves that can add to the reading list.",
      image: BookshelfApps,
      live: "https://meinhere.github.io/dicoding-frontend-pemula/",
      github: "https://github.com/meinhere/dicoding-frontend-pemula",
    },
    {
      title: "Todo Apps",
      desc: "Application to create Todo List using HTML CSS and Javascript.",
      image: TodoApps,
      live: "https://meinhere.github.io/dicoding-todo-apps/",
      github: "https://github.com/meinhere/dicoding-todo-apps",
    },
    {
      title: "Nganjuk Kotaku",
      desc: "Nganjuk kotaku is a responsive website that contains information and history of nganjuk district.",
      image: NganjukKotaku,
      live: "https://meinhere.github.io/dasar-pemrograman-web/front-end/",
      github: "https://github.com/meinhere/dasar-pemrograman-web/tree/master/front-end",
    },
    {
      title: "Kalkulator based on Website",
      desc: "Calculator that can be accessed using a website. At the same time can see the calculation history.",
      image: KalkulatorWeb,
      live: "https://meinhere.github.io/dasar-pemrograman-web/kalkulator/",
      github: "https://github.com/meinhere/dasar-pemrograman-web/tree/master/kalkulator",
    },
  ];

  return (
    <section id="project" className="relative bg-gray-700 py-20 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-amber-500 w-max pb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Cards key={items.title} item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
