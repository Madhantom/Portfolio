import React from "react";
import Profile from "../assets/pro.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="px-8 lg:mb-36 mt-4">
      <div className="flex flex-wrap lg:flex-row ">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-6">
            <img
              src={Profile}
              alt="profile-pic"
              className="border border-purple-600 rounded-3xl object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-5xl tracking-tighter lg:text-7xl mt-8 text-gray-800 font-semibold">
              Madhan T
            </h2>
            <span className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-3xl tracking-tight text-transparent">
              Python Full Stack Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              Enthusiastic and detail-oriented Python Developer with a strong foundation in object-oriented programming and data structures. Proficient in writing clean, efficient, and maintainable Python code. Hands-on experience with Django through academic and personal projects. Passionate about problem-solving and continuous learning, with a strong desire to contribute to real-world software development challenges in collaborative environments.
            </p>

            <div className="flex gap-6 items-center justify-center">
              <a
                href="https://drive.google.com/file/d/1E4oHCgvb5_qxABMy95FI4IZ2ae8MjWY7/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-purple-800 text-white rounded-full px-6 py-4 text-sm font-medium"
              >
                Download Resume
              </a>

              <a href="https://www.linkedin.com/in/tmadhan/" target="_blank">
                <FaLinkedin className="text-4xl text-[#126BC4]" />
              </a>
              <a href="https://github.com/Madhantom" target="_blank">
                <FaGithub className="text-4xl text-[#F05539]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
