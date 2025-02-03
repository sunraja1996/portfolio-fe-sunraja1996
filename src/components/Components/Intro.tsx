import profilepic from "../Assests/about.png";
import { useTypewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const [profile] = useTypewriter({
    words: ["Full Stack Developer"],
    loop: 0,
    typeSpeed: 200,
  });

  const navigate = useNavigate();

  const handleHireMe = () => {
    navigate("/hireme");
  };

  return (
    <>
      <div className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Shanmugaraja
            </h1>
            <h3 className="max-w-2xl mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-6xl">
              {profile}
            </h3>

            <button
              onClick={handleHireMe}
              className="bg-sky-500 hover:bg-sky-400 w-sm cursor-pointer text-white font-bold py-2 px-4 border-b-4 border-sky-700 hover:border-sky-500 rounded"
            >
              Hire Me
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={profilepic} alt="mockup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
