import IconCloud from '../components/ui/icon-cloud';

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
    const backendSkills = ["Nodejs", "ExpressJs", "NestJs", "Prisma", "Postgresql", "Mongoose"];
    const toolSkills = ["Typescript", "Javascript", "Firebase", "Vercel", "Git", "Git Hub", "Figma"];

    return (
        <section id='skills' className='px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 w-full overflow-hidden dark:bg-dark-100 dark:text-white'>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center dark:text-gray-200">
                Skills: Because superheroes need their tools too!
            </h2>

            <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                <div className="flex flex-1 justify-center gap-6">
                    <div className="w-full sm:w-1/3">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">Frontend</h3>
                        <ul className="list-none space-y-0.5 md:space-y-2 dark:text-gray-400">
                            {frontendSkills.map(skill => (
                                <li key={skill} className="text-gray-500 text-sm md:text-base dark:text-gray-400">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/3">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">Backend</h3>
                        <ul className="list-none space-y-0.5 md:space-y-2 dark:text-gray-400">
                            {backendSkills.map(skill => (
                                <li key={skill} className="text-gray-500 text-sm md:text-base dark:text-gray-400">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/3">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">Tools</h3>
                        <ul className="list-none space-y-0.5 md:space-y-2 dark:text-gray-400">
                            {toolSkills.map(skill => (
                                <li key={skill} className="text-gray-500 text-sm md:text-base dark:text-gray-400">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-20 pb-10 flex-shrink-0 cursor-pointer">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </section>
    );
}

export default Skills;
