import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fsdprojects,
  reactprojects,
  nodeprojects,
  javascriptprojects,
  jsgamesprojects,
  cssprojects,
} from "../components/Resources/fsdprojects";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  const [isFsdOpen, setIsFsdOpen] = useState(false);
  const [isReactOpen, setIsReactOpen] = useState(false);
  const [isNodeOpen, setIsNodeOpen] = useState(false);
  const [isJsOpen, setIsJsOpen] = useState(false);
  const [isCssOpen, setIsCssOpen] = useState(false);
  const [isJsgameOpen, setIsJsgameOpen] = useState(false);

  // Toggle functions for each section
  const toggleFsd = () => setIsFsdOpen(!isFsdOpen);
  const toggleReact = () => setIsReactOpen(!isReactOpen);
  const toggleNode = () => setIsNodeOpen(!isNodeOpen);
  const toggleJs = () => setIsJsOpen(!isJsOpen);
  const toggleCss = () => setIsCssOpen(!isCssOpen);
  const toggleJsGame = () => setIsJsgameOpen(!isJsgameOpen);

  return (
    <>
      <section className="bg-white font-monserrat">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="flex justify-between items-center">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-indigo-400">
              Projects
            </h2>
            <button
              onClick={handleBackToHome}
              className="bg-teal-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-teal-600 transition-colors duration-200"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mb-4">
          <button
            onClick={toggleFsd}
            className="w-full text-left text-xl font-semibold text-gray-900 bg-white p-4 rounded-lg shadow-md  dark:text-sky-400 hover:bg-sky-400 hover:text-sky-100"
          >
            Full Stack Projects
          </button>
          {isFsdOpen && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fsdprojects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-red-700 mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                    <p className="text-lg font-bold text-slate-600 mt-2">
                      Duration taken:{" "}
                      <span className="text-red-400">{project.period}</span>
                    </p>
                    <div className="py-2">
                      <p className="text-lg font-bold text-teal-500">
                        Technologies Used:
                      </p>
                      <ul className="text-sm font-medium text-gray-600">
                        {project.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="m-4 space-y-4 flex flex-col">
                      <button
                        onClick={() => window.open(project.web, "_blank")}
                        className="bg-amber-400 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200"
                      >
                        View Project
                      </button>

                      {project.fe && (
                        <button
                          onClick={() => window.open(project.web, "_blank")}
                          className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
                        >
                          Frontend Repo
                        </button>
                      )}
                      {project.be && (
                        <button
                          onClick={() => window.open(project.web, "_blank")}
                          className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
                        >
                          Backend Repo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={toggleReact}
            className="w-full text-left text-xl font-semibold text-gray-900 bg-white p-4 rounded-lg shadow-md  dark:text-sky-400 hover:bg-sky-400 hover:text-sky-100"
          >
            Frontend Projects
          </button>
          {isReactOpen && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reactprojects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-red-700 mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                    <p className="text-lg font-bold text-slate-600 mt-2">
                      Duration taken:{" "}
                      <span className="text-red-400">{project.period}</span>
                    </p>
                    <div className="py-2">
                      <p className="text-lg font-bold text-teal-500">
                        Technologies Used:
                      </p>
                      <ul className="text-sm font-medium text-gray-600">
                        {project.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <button
                        onClick={() => window.open(project.web, "_blank")}
                        className="bg-amber-400 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200"
                      >
                        View Project
                      </button>
                      {project.fe && (
                        <button
                          onClick={() => window.open(project.fe, "_blank")}
                          className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
                        >
                          Frontend Repo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={toggleNode}
            className="w-full text-left text-xl font-semibold text-gray-900 bg-white p-4 rounded-lg shadow-md  dark:text-sky-400 hover:bg-sky-400 hover:text-sky-100"
          >
            Backend Projects
          </button>
          {isNodeOpen && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nodeprojects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-red-700 mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                    <p className="text-lg font-bold text-slate-600 mt-2">
                      Duration taken:{" "}
                      <span className="text-red-400">{project.period}</span>
                    </p>
                    <div className="py-2">
                      <p className="text-lg font-bold text-teal-500">
                        Technologies Used:
                      </p>
                      <ul className="text-sm font-medium text-gray-600">
                        {project.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <button
                        onClick={() => window.open(project.web, "_blank")}
                        className="bg-amber-400 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200"
                      >
                        View Project
                      </button>
                      {project.be && (
                        <button
                          onClick={() => window.open(project.be, "_blank")}
                          className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
                        >
                          Backend Repo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={toggleJs}
            className="w-full text-left text-xl font-semibold text-gray-900 bg-white p-4 rounded-lg shadow-md  dark:text-sky-400 hover:bg-sky-400 hover:text-sky-100"
          >
            JavaScript Projects
          </button>
          {isJsOpen && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {javascriptprojects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-red-700 mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                    <p className="text-lg font-bold text-slate-600 mt-2">
                      Duration taken:{" "}
                      <span className="text-red-400">{project.period}</span>
                    </p>
                    <div className="py-2">
                      <p className="text-lg font-bold text-teal-500">
                        Technologies Used:
                      </p>
                      <ul className="text-sm font-medium text-gray-600">
                        {project.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <button
                        onClick={() => window.open(project.web, "_blank")}
                        className="bg-amber-400 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200"
                      >
                        View Project
                      </button>
                      {project.fe && (
                        <button
                          onClick={() => window.open(project.fe, "_blank")}
                          className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
                        >
                          JavaScript Code Repo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={toggleCss}
            className="w-full text-left text-xl font-semibold text-gray-900 bg-white p-4 rounded-lg shadow-md  dark:text-sky-400 hover:bg-sky-400 hover:text-sky-100"
          >
            HTML CSS Projects
          </button>
          {isCssOpen && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cssprojects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-red-700 mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                    <p className="text-lg font-bold text-slate-600 mt-2">
                      Duration taken:{" "}
                      <span className="text-red-400">{project.period}</span>
                    </p>
                    <div className="py-2">
                      <p className="text-lg font-semibold text-teal-500">
                        Technologies Used:
                      </p>
                      <ul className="text-sm font-medium text-gray-600">
                        {project.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <button
                        onClick={() => window.open(project.web, "_blank")}
                        className="bg-amber-400 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200"
                      >
                        View Project
                      </button>
                      {project.fe && (
                        <button
                          onClick={() => window.open(project.fe, "_blank")}
                          className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
                        >
                          HTML CSS Code Repo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={toggleJsGame}
            className="w-full text-left text-xl font-semibold text-gray-900 bg-white p-4 rounded-lg shadow-md  dark:text-sky-400 hover:bg-sky-400 hover:text-sky-100"
          >
            JS Game Projects
          </button>
          {isJsgameOpen && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jsgamesprojects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-red-700 mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                    <p className="text-lg font-bold text-slate-600 mt-2">
                      Duration taken:{" "}
                      <span className="text-red-400"> {project.period} </span>
                    </p>
                    <div className="py-2">
                      <p className="text-lg font-bold text-teal-500">
                        Technologies Used:
                      </p>
                      <ul className="text-sm font-medium text-gray-600">
                        {project.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <button
                        onClick={() => window.open(project.web, "_blank")}
                        className="bg-amber-400 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200"
                      >
                        View Project
                      </button>
                      {project.fe && (
                        <button
                          onClick={() => window.open(project.fe, "_blank")}
                          className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
                        >
                          Javascript Code Repo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
