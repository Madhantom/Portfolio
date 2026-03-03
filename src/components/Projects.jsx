import React from "react";
import Proj1 from "../assets/proj1.jpeg";
import Proj2 from "../assets/proj2.jpeg";
import Proj3 from "../assets/proj3.jpeg";

const Projects = () => {
  const project = [
    {
      title: "Udemy-Clone Application",
      image: Proj1,
      desc: "Developed a responsive Udemy Clone Web Application using HTML and Tailwind CSS, focusing on modern UI/UX design and clean layout structure. Designed course listing pages, navigation bar, banners, and category sections with fully responsive design for mobile and desktop views. Implemented reusable components and utility-first styling using Tailwind CSS for better performance and maintainability. The project demonstrates strong frontend development skills, responsive design principles, and proficiency in building real-world website layouts.",
      technologies: ["HTML", "CSS"],
      source: "https://github.com/Madhantom/udemy__clone",
      live: "https://madhantom.github.io/udemy__clone/",
    },
    {
      title: "Greenden Website",
      image: Proj2,
      desc: "Developed a Greenden website project using HTML and CSS, focusing on building a clean and responsive user interface. Designed multiple sections including homepage, product listings, and contact page with proper layout structure and styling. Applied CSS concepts such as flexbox, positioning, and media queries to ensure mobile-friendly responsiveness. The project showcases strong fundamentals in frontend development, semantic HTML structure, and modern CSS design techniques.",
      technologies: ["HTML", "Tailwind CSS"],
      source: "https://github.com/Balaanand26/PS_form-website",
      live: "https://ps-form-website-frontend.onrender.com/",
    },
    {
      title: "Django Blog",
      image: Proj3,
      desc: "Developed a dynamic Blog Web Application using HTML, Bootstrap, SQL, and the Django framework. Designed responsive user interfaces with Bootstrap and handled backend logic using Django. Implemented user authentication and CRUD operations for managing blog posts. Integrated SQL database with Django ORM for efficient data storage and retrieval. The project demonstrates full-stack development skills including frontend design, backend development, and database management.",
      technologies: [
        "HTML",
        "BootStrap",
        "Django",
        "Sql",
      ],
      source: "",
      live: "",
    },
  ];
  return (
    <div id="project" className="px-8">
      <h2 className="bg-gradient-to-r from-purple-400 to-gray-800 bg-clip-text text-transparent text-center text-4xl font-semibold mb-20">
        Projects
      </h2>
      <div>
        {project.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap gap-4 lg:justify-center py-4"
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={350}
                height={350}
                className=" mb-6 rounded border border-gray-600"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-700">{project.desc}</p>
              <p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-gray-700 p-2 text-sm font-medium text-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </p>
              <div className="flex gap-4 mt-4">
                <button className="bg-purple-700 text-white px-6 py-2 rounded font-semibold">
                  <a href={project.source} target="_blank">
                    Source
                  </a>
                </button>
                <button className="bg-purple-700 text-white px-6 py-2 rounded font-semibold">
                  <a href={project.live} target="_blank">
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
