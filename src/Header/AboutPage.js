import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaLaptopCode,
  FaCertificate,
  FaGamepad,
  FaBookOpen,
  FaMusic,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-xl text-white shadow-lg space-y-12">
      <h1 className="text-5xl font-extrabold mb-8 text-center">About Me</h1>

      {/* Personal Intro */}
      <section>
        <p className="text-xl leading-relaxed mb-4">
          Hi! I'm <span className="font-semibold text-indigo-400">Harsh Patel</span>, a passionate full-stack web developer specializing in building performant, scalable, and user-friendly web applications. I have a strong foundation in JavaScript and love working with modern technologies such as React, Node.js, and Tailwind CSS.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          With a background in computer science and hands-on experience across multiple projects, I aim to deliver clean, maintainable code and build products that make a difference. I'm constantly learning and growing, exploring new tools and techniques to enhance my craft.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b border-indigo-500 pb-2">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <FaReact className="text-5xl text-cyan-400" />
            <span>React.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaNodeJs className="text-5xl text-green-500" />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaDatabase className="text-5xl text-yellow-400" />
            <span>MongoDB & SQL</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaGitAlt className="text-5xl text-red-500" />
            <span>Git & GitHub</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaLaptopCode className="text-5xl text-indigo-400" />
            <span>JavaScript (ES6+)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl font-mono text-pink-400">CSS3</span>
            <span>CSS & Tailwind</span>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b border-indigo-500 pb-2">Experience & Projects</h2>
        <ul className="relative border-l border-indigo-500">
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-gray-900">
              2024
            </span>
            <h3 className="text-xl font-semibold text-indigo-400">Full-Stack Developer Intern</h3>
            <p className="text-gray-300 mb-2">XYZ Tech Company</p>
            <p className="text-gray-400">
              Developed interactive web applications using React and Node.js, collaborated in agile teams, and improved app performance by 30%.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-gray-900">
              2023
            </span>
            <h3 className="text-xl font-semibold text-indigo-400">Open Source Contributor</h3>
            <p className="text-gray-300 mb-2">Various Projects</p>
            <p className="text-gray-400">
              Contributed bug fixes and features to popular React and JavaScript libraries, improving documentation and code quality.
            </p>
          </li>
        </ul>
      </section>

      {/* Certificates Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b border-indigo-500 pb-2 flex items-center gap-2">
          <FaCertificate className="text-yellow-400 text-2xl" /> Certificates
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Full-Stack Web Development Certification</strong> – Coursera (2024)
          </li>
          <li>
            <strong>Data Structures & Algorithms Specialization</strong> – Udemy (2023)
          </li>
          <li>
            <strong>Microsoft Azure Fundamentals</strong> – Microsoft (2023)
          </li>
          <li>
            <strong>MongoDB Certified Developer Associate</strong> – MongoDB University (2023)
          </li>
        </ul>
      </section>

      {/* Passion & Interests */}
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b border-indigo-500 pb-2">What I'm Passionate About</h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          Beyond coding, I enjoy solving complex problems and creating intuitive interfaces that users love. I’m passionate about accessibility, performance optimization, and writing clean, reusable code. I thrive in collaborative environments where I can learn from others and share my knowledge.
        </p>

        {/* Fun Facts / Hobbies */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaGamepad className="text-purple-400" /> Fun Facts & Hobbies
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
            <li className="flex flex-col items-center">
              <FaBookOpen className="text-4xl mb-2 text-green-400" />
              <span>Reading Sci-Fi Novels</span>
            </li>
            <li className="flex flex-col items-center">
              <FaMusic className="text-4xl mb-2 text-pink-400" />
              <span>Playing Guitar & Music Production</span>
            </li>
            <li className="flex flex-col items-center">
              <FaGamepad className="text-4xl mb-2 text-indigo-400" />
              <span>Gaming & Problem Solving</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
