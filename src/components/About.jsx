import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import icon from '../assets/dj.png'

const About = () => {
  return (
    <section id="about">
      <div className="px-8 md:px-20 mb-10 mt-24">
        <h2 className="bg-gradient-to-r from-purple-400 to-gray-800 bg-clip-text text-transparent text-center text-4xl bg font-semibold">
          About Me
        </h2>
        <p className="py-15 text-xl leading-relaxed tracking-tighter">
          Enthusiastic and detail-oriented Python Developer with a strong foundation in object-oriented programming and data structures. Proficient in writing clean, efficient, and maintainable Python code. Hands-on experience with Django through academic and personal projects. Passionate about problem-solving and continuous learning, with a strong desire to contribute to real-world software development challenges in collaborative environments.
        </p>
      </div>
      <div className="mb-10 px-8 md:px-20">
        <h2 className="bg-gradient-to-r from-purple-400 to-gray-800 bg-clip-text text-transparent text-center text-4xl font-semibold">Technologies</h2>
        <div className="py-15 flex flex-wrap items-center justify-center gap-10">
          <div>
            <FaHtml5 className="text-7xl text-[#FF5225]" />
          </div>
          <div>
            <FaCss3Alt className="text-7xl text-[#2D53E5]" />
          </div>
          <div>
            <RiTailwindCssFill className="text-7xl text-[#3EBFF8]" />
          </div>
          <div>
            <IoLogoJavascript className="text-7xl text-[#E5A42D]" />
          </div>
          <div>
            <img src={icon} className="w-35" alt="" />
          </div>
          <div>
            <SiMysql className="text-7xl text-[#F79B21]" />
          </div>
          <div>
            <FaPython className="text-7xl text-[#FFD347]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
