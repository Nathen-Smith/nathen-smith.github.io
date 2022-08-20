import React from 'react';
import { experience } from '../constants';

function Experience() {
  return (
    <div>
      {experience.map(({
        title, date, description, company,
      }) => (
        <div
          className="flow-root sm:transition-none ease-in-out delay-200 overflow-hidden"
          key={title}
        >
          <p className="text-md md:float-left sm:text-lg md:text-xl text-black dark:text-white">
            {company}
          </p>
          <p className="text-md md:float-right sm:text-lg md:text-xl text-black dark:text-white">
            {date}
          </p>
          <p className="text-md md:float-left sm:text-lg md:text-xl dark:text-gray-200 text-gray-700">
            {title}
          </p>
          <p className="float-right dark:text-gray-400 text-gray-500 md:text-lg my-2">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
