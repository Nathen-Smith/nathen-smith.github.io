import { projects } from "../constants";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project) => (
          <div
            onClick={() => window.open(project.link, "_blank").focus()}
            key={project.src}
            className="cursor-pointer text-center shadow-md max-w-225px rounded-xl
              sm:hover:scale-110 sm:transition-all ease-in-out"
          >
            <img src={project.src} alt={project.alt} className="rounded-t-xl" />
            <div className="flex flex-row font-semibold justify-center ">
              <div>{project.name}</div>
              <ExternalLinkIcon className="h-5 ml-1" />
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {project.description}
            </div>
            <div className="space-x-2 space-y-2 mb-2">
              {project.tech.map(({ name, color, textColor }) => (
                <div
                  key={name}
                  className="border px-2 py-1 rounded text-sm inline-block"
                  style={
                    localStorage.theme === "dark" ||
                    (!("theme" in localStorage) &&
                      window.matchMedia("(prefers-color-scheme: dark)").matches)
                      ? {
                          color: textColor || "white",
                          borderColor: color,
                          backgroundColor: color,
                        }
                      : { borderColor: color, color }
                  }
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
