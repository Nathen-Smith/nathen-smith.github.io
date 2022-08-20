import React from 'react';
import { skillIcons } from '../constants';
import isDarkMode from '../utils';

function SkillsIcons() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-2 lg:gap-4">
      {skillIcons.map((icon) => (
        <div key={icon.src} className="flex flex-col justify-center">
          <img
            src={icon.src}
            alt={icon.alt}
            className="block w-20 max-h-20 mx-auto"
            style={
              icon.darkMode
              && (isDarkMode())
                ? {
                  filter: 'brightness(0) saturate(100%) invert(1)',
                }
                : {}
            }
          />
          <div className="text-center text-sm font-medium mt-2 text-gray-600 dark:text-gray-300">
            {icon.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsIcons;
