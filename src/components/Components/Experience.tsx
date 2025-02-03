import lumina from "../Assests/ld.jpg";
import sangamam from "../Assests/sangamam.jpg";

const Experience = () => {
  const experiences = [
    {
      company: "Lumina Datamatics Ltd",
      title: "Executive(Graphic Designer)",
      period: "August 2019 - February 2023",
      img: lumina,
      descriptions: [
        "Lumina Datamatics provides Content, Retail Support, and Technology Solutions for top global publishers and retailers. With 6500+ professionals across the USA, Germany, and India, we enhance efficiency through smart technologies. I work there as a Graphic Designer, creating visual content to support publishing and retail solutions.",
      ],
      roles: [
        "Responsible for cutting out and retouching product images for e-commerce websites, ensuring high-quality visuals with transparent backgrounds and optimal sizing.",
        "Create and modify detailed graphic representations of building components, ensuring accuracy and clear presentation for use in paint and construction-related materials.",
        "Edit and format PDF documents, ensuring professional layout, customizing them for print and digital use.",
        "Perform photo editing tasks such as color correction, image retouching, and enhancement, to deliver high-quality, visually compelling content.",
        "Design visually appealing posters, banners, and promotional materials for print and online media, ensuring consistent branding and engaging layouts.",
      ],
    },
    {
      company: "Sangamam Productions",
      title: "Graphic Designer",
      period: "May 2018 - July 2019",
      img: sangamam,
      descriptions: [
        "Sangamam Productions is a YouTube channel and a Production Company, where I did Image Editing, Poster Designs & Video editing.",
      ],
      roles: [
        "Create visually captivating and on-brand posters, thumbnails, and promotional materials for short films.",
        "Edit and assemble raw video footage, apply transitions, special effects, and audio enhancements.",
      ],
    },
  ];

  return (
    <>
       <section className="bg-white font-Monserrat">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-indigo-400">
            Experience
          </h2>
        

      <section className="bg-white flex justify-center items-center font-monserrat mx-auto max-w-screen-xl lg:py-16 lg:px-6 p-5">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between bg-white dark:bg-gray-800 shadow-md text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-4 px-6 font-monserrat"
            >
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center justify-center px-2 md:px-6">
                  <img
                    className="w-16 rounded-full ring-2 ring-indigo-500 m-2 md:block"
                    src={exp.img}
                    alt="Company"
                  />
                  <div className="text-left">
                    <h4 className="text-lg md:text-2xl lg:text-3xl ease-in-out duration-1000 uppercase">
                      <span className="text-red-400">{exp.title}</span>
                    </h4>
                    <h4 className="text-sm md:text-base font-bold dark:text-gray-200">
                      {exp.company}
                    </h4>
                  </div>
                </div>
                <div className="text-sm font-medium md:text-base text-right p-2 gap-4 ease-in-out duration-500">
                  <p className="text-sm md:text-base text-gray-800 dark:text-gray-200">
                    {exp.period}
                  </p>
                </div>
              </div>
              <div className="text-left p-2">
                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 pb-4">
                  {exp.descriptions.join(" ")}
                </p>
                <h4 className="text-base text-rose-700 font-semibold">Key Responsibilities</h4>
                <ul className="text-sm list-disc ml-6">
                  {exp.roles.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
      </section>
    </>
  );
};

export default Experience;
