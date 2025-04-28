import IconCloud from "../components/ui/icon-cloud";
import { motion } from "framer-motion";
import { MdDownload } from "react-icons/md";
import resume from "../assets/Aryan_Sharma_Resume.pdf";

const Skills = () => {
  const slugs = [
    "typescript",
    "javascript",
    "python",
    "c",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "vercel",
    "git",
    "github",
    "gitlab",
    "figma",
  ];

  const frontendSkills = ["ReactJs", "HTML5", "CSS3", "NextJs", "AstroJs"];
  const backendSkills = [
    "Nodejs",
    "ExpressJs",
    "NestJs",
    "Prisma",
    "Postgresql",
    "Mongoose",
  ];
  const toolSkills = [
    "Typescript",
    "Javascript",
    "Firebase",
    "Vercel",
    "Git",
    "Git Hub",
    "Figma",
  ];

  return (
    <section
      id="skills"
      className="dark:text-white w-full overflow-hidden px-4 py-10 dark:bg-dark-100 sm:px-8 sm:py-14 md:px-12 lg:px-16"
    >
      <div className="">
        <h2 className="text-center text-xl font-semibold dark:text-gray-200 sm:text-2xl lg:text-3xl">
          Skills: Because superheroes need their tools too!
        </h2>
        <motion.a
          href={resume}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group mx-auto mt-5 flex items-center justify-center gap-2 rounded-md border border-gray-500 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:bg-primary hover:text-white dark:border-gray-400 dark:text-gray-300 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white max-w-60"
        >
          <MdDownload className="text-lg group-hover:animate-bounce" />
          Download Resume
        </motion.a>
      </div>

      <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
        <div className="flex flex-1 justify-center gap-6">
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              Frontend
            </h3>
            <ul className="list-none space-y-0.5 dark:text-gray-400 md:space-y-2">
              {frontendSkills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-gray-500 dark:text-gray-400 md:text-base"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              Backend
            </h3>
            <ul className="list-none space-y-0.5 dark:text-gray-400 md:space-y-2">
              {backendSkills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-gray-500 dark:text-gray-400 md:text-base"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              Tools
            </h3>
            <ul className="list-none space-y-0.5 dark:text-gray-400 md:space-y-2">
              {toolSkills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-gray-500 dark:text-gray-400 md:text-base"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative flex size-full max-w-lg flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden px-20 pb-10">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
