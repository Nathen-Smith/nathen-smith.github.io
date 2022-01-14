import { projects } from "../constants";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {projects.map((project) => (
        <div
          onClick={() => window.open(project.link, "_blank").focus()}
          key={project.src}
          className="cursor-pointer shadow-md max-w-225px rounded-xl
              sm:hover:scale-110 sm:transition-all ease-in-out hover:shadow-xl text-center"
        >
          <img src={project.src} alt={project.alt} className="rounded-t-xl" />
          <div className="m-2">
            <div className="flex flex-row font-semibold justify-center space-x-1">
              <div>{project.name}</div>
              <ExternalLinkIcon className="h-5" />
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {project.description}
            </div>
            <div className="space-x-2 space-y-2">
              {project.tech.map(({ name, color, textColor }) => (
                <div
                  key={name}
                  className="flex inline-flex border px-3 sm:px-2 lg:px-3 py-1 rounded text-sm"
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
        </div>
      ))}
    </div>
  );
};

export default Projects;
