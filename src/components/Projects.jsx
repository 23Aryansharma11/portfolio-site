import MacScreen from "./MacScreen";
import { projects } from "../data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-4 sm:px-8 md:px-12 lg:px-16 py- sm:py-14 w-full overflow-hidden"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
        Projects: Making Ideas Happen, One Pixel at a Time
      </h2>

      <div className="mt-10">
        <div className="flex flex-row gap-6 py-10 overflow-x-auto scrollbar-hide">
          {projects.map((project, index) => (
            <MacScreen key={index} projectInfo={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
