/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import { projects } from '../constants';
import isDarkMode from '../utils';

const Projects = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {projects.map((project) => (
      <div
        onClick={() => {
          window.open(project.link, '_blank').focus();
        }}
        key={project.src}
        className="cursor-pointer shadow-md max-w-225px rounded-xl
              sm:hover:scale-110 sm:transition-all ease-in-out sm:hover:shadow-xl text-center"
      >
        <img src={project.src} alt={project.alt} className="rounded-t-xl" loading="lazy" />
        <div className="m-2">
          <div className="flex flex-row font-semibold justify-center space-x-1">
            <div className="text-black dark:text-white">{project.name}</div>
            <ExternalLinkIcon className="h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            {project.description}
          </div>
          <div className="space-x-2 space-y-2">
            {project.tech.map(({ name, lightMode, darkMode }) => (
              <div
                key={name}
                className="inline-flex border px-3 sm:px-2 lg:px-3 py-1 rounded text-sm"
                style={
                    isDarkMode()
                      ? {
                        color: darkMode.textColor,
                        borderColor: darkMode.borderColor,
                        backgroundColor: darkMode.backgroundColor,
                      }
                      : {
                        color: lightMode.textColor,
                        borderColor: lightMode.borderColor,
                      }
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

export default Projects;
