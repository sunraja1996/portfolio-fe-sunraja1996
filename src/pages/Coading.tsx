import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  { title: "Project One", description: "A cool project", link: "#" },
  { title: "Project Two", description: "Another cool project", link: "#" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="text-gray-400">A showcase of my work and skills</p>
      </header>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["React", "JavaScript", "Tailwind CSS", "Node.js"].map((skill) => (
            <span key={skill} className="bg-blue-600 px-4 py-2 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer className="text-center mt-10">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <div className="flex justify-center gap-4 mt-3">
          <a href="#" className="text-gray-400 text-2xl">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 text-2xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
}
