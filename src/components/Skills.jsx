import IconCloud from '../components/ui/icon-cloud'

const Skills = () => {
    const slugs = [
        "typescript",
        "javascript",
        "java",
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
        "firebase",
        "vercel",
        "git",
        "github",
        "gitlab",
        "visualstudiocode",
        "figma",

    ];

    const frontendSkills = ["ReactJs", "HTML5", "CSS3", "NextJs", "AstroJs"];
    const backendSkills = ["Nodejs", "ExpressJs", "NestJs", "Prisma", "Postgresql", "Mongoose"];
    const toolSkills = ["Typescript", "Javascript", "Firebase", "Vercel", "Git", "Git Hub", "Figma"];

    return (
        <section id='skills' className='px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 w-full overflow-hidden'>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold  text-center">
                Skills: Because superheroes need their tools too!
            </h2>

            <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                <div className="flex flex-1 justify-center gap-6">
                    <div className="w-full sm:w-1/3">
                        <h3 className="text-lg font-medium text-gray-800">Frontend</h3>
                        <ul className="list-none space-y-0.5 md:space-y-2">
                            {frontendSkills.map(skill => (
                                <li key={skill} className="text-gray-500 text-sm md:text-base">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/3">
                        <h3 className="text-lg font-medium text-gray-800">Backend</h3>
                        <ul className="list-none space-y-0.5 md:space-y-2">
                            {backendSkills.map(skill => (
                                <li key={skill} className="text-gray-500 text-sm md:text-base">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/3">
                        <h3 className="text-lg font-medium text-gray-800">Tools</h3>
                        <ul className="list-none space-y-0.5 md:space-y-2">
                            {toolSkills.map(skill => (
                                <li key={skill} className="text-gray-500 text-sm md:text-base">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-20 pb-10 flex-shrink-0 ">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </section>
    )
}

export default Skills;
