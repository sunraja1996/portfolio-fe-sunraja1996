
import resume from "../Assests/pdf/Shanmugaraja Gajendran resume.pdf"
import coverletter from "../Assests/pdf/Coverletter.pdf"
const About = () => {
  const skills = [
    "React JS",
    "Node JS",
    "JavaScript",
    "Express JS",
    "Mongo DB",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
  ];

  return (
    <>
      <section className="bg-white font-Monserrat">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-indigo-400">
              About me 
            </h2>
            <p className="mb-4 text-gray-600 font-medium">
              Passionate <span className="font-extrabold">full stack developer</span> with a creative foundation as a
              graphic designer for 4 years. Excited to leverage my design
              expertise and embark on a dynamic journey in full stack
              development. Proficient in <span className="font-extrabold">front-end and back-end technologies</span>, I
              bring a <span className="font-extrabold">unique blend of creativity</span> and technical acumen to create
              innovative and user-centric solutions.
            </p>
        </div>
      </section>


      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-gray-900 text-white rounded-xl">
  <div className="px-4 sm:px-0">
    <h3 className="text-base font-semibold text-indigo-400">Applicant Information</h3>
    <p className="mt-1 max-w-2xl text-sm text-gray-400">Personal details and application.</p>
  </div>
  <div className="mt-6 border-t border-gray-700">
    <dl className="divide-y divide-gray-700">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-indigo-300">Full name</dt>
        <dd className="mt-1 text-sm text-gray-100 sm:col-span-2 sm:mt-0">Shanmugaraja Gajendran</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-indigo-300">Application for</dt>
        <dd className="mt-1 text-sm text-gray-100 sm:col-span-2 sm:mt-0">Full Stack Developer</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-indigo-300">Email address</dt>
        <a href="mailto:sunraja1996@gmail.com" target="_blank"><dd className="mt-1 text-sm text-gray-100 sm:col-span-2 sm:mt-0">sunraja1996@gmail.com</dd></a>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-indigo-300">Phone Number</dt>
        <dd className="mt-1 text-sm text-gray-100 sm:col-span-2 sm:mt-0">
        <a href="tel:+918903709112" target="_blank"><span>+91 89037 09112</span></a> <br />
        <a href="tel:+918903709112" target="_blank"><span>+91 63856 75061</span></a>
  </dd>
      </div>
      
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-indigo-300">Attachments</dt>
        <dd className="mt-2 text-sm text-gray-100 sm:col-span-2 sm:mt-0">
          <ul role="list" className="divide-y divide-gray-700 rounded-md border border-gray-600">
            <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm">
              <div className="flex w-0 flex-1 items-center">
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate font-mono text-indigo-400">Shanmugaraja Gajendran resume.pdf</span>
                  <span className="shrink-0 text-gray-500">46 kb</span>
                </div>
              </div>
              <div className="ml-4 shrink-0">
                <a href={resume} target="_blank" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
            <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm">
              <div className="flex w-0 flex-1 items-center">
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate font-mono text-indigo-400">coverletter.pdf</span>
                  <span className="shrink-0 text-gray-500">52 kb</span>
                </div>
              </div>
              <div className="ml-4 shrink-0">
                <a href={coverletter} target="_blank" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>



      <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-indigo-400">
              Skills
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-red-400 text-white px-4 py-2 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="bg-white mt-2">
              <p className="mb-4 font-medium">
                Proficient in creating responsive, accessible, and user-friendly
                websites using modern HTML, CSS, and JavaScript
              </p>
              <p className="mb-4 font-medium">
                Expertise in using ReactJS to build dynamic and interactive UIs
              </p>
              <p className="mb-4 font-medium">
                Back-end Development with server-side technologies like Node.js
              </p>
              <p className="mb-4 font-medium">
                Skilled in working with databases such as MySQL, MongoDB and
                Firebase for data storage
              </p>
              <p className="mb-4 font-medium">
                Ability to create mobile-first and cross-browser compatible
                websites using CSS frameworks like Bootstrap or Tailwind CSS.
              </p>
            </div>
          </div>
        </section>




    </>
  );
};

export default About;
