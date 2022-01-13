import { experience } from "../constants";

const Experience = () => {
  return (
    <div>
      {experience.map(({ title, date, description }) => (
        <div
          className="flow-root sm:transition-none ease-in-out delay-200 overflow-hidden"
          key={title}
        >
          <p className="text-md md:float-left sm:text-lg md:text-xl text-black dark:text-white">
            {title}
          </p>
          <p className="text-md md:float-right sm:text-lg md:text-xl text-black dark:text-white">
            {date}
          </p>
          <p className="float-right dark:text-gray-400 text-gray-500 md:text-lg my-2">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
