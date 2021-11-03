import React from "react";

const data = [
  {
    title: "Software Development Engineer Intern @ Forward Data Lab",
    date: "Sep 2021 - May 2022",
    description:
      "I am responsible for performance, scalability, frontend and backend bugs and enhancements, database management, and deployment for the Education Today web application. I increased the performance of the slowest MySQL queries by 5 times down to 4s by using indexing and simplifying the query. I deployed the backend MySQL server to be accessible by ssh tunnel, containerized with Docker, and cached database queries with Redis.",
  },
  {
    title: "Database Systems CS 411 Course Assistant",
    date: "Aug 2021 - Present",
    description:
      "I guided students to find solutions to SQL, NoSQL, database problems during lecture, in office hours, and the class forum. I gave feedback and advice to final project design choices, a database driven web app. Lastly, I reviewed and contributed to writing homework and exam questions, and graded homework.",
  },
  {
    title: "Full Stack Engineer Intern @ Ziggurat Technologies",
    date: "Jul 2021 - Sep 2021",
    description:
      "I implemented and designed user update functionality through frontend, database update, middleware, and Twilio Two-Factor Authentication APIs. The stack is React Native, Redux, Mongoose, Express.js. I am responsible for debugging API, frontend bugs, and assigning tasks to other inters. I maintained Jira issue tracking and documented build instructions for frontend backend connecting with mobile simulator.",
  },
];

interface screenType {
  type: string;
}

export const Experience: React.FC<screenType> = ({ type }) => {
  return (
    <div className="pb-10">
      {data.map(({ title, date, description }) => {
        if (type === "lg") {
          return (
            <div className="flow-root pb-2 mx-1" key={title}>
              <p className="float-left text-gray-200 text-xl">{title}</p>
              <p className="float-right text-gray-300 text-xl">{date}</p>
              <br />
              <p className="float-right text-gray-400 text-lg">{description}</p>
            </div>
          );
        }
        return (
          <div className="flow-root pb-2 mx-1" key={title}>
            <p className="text-gray-200 text-lg">{title}</p>
            <p className=" text-gray-300 text-lg">{date}</p>
            <p className="float-right text-gray-400">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
