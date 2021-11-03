import React from "react";

const classes = [
  "Data Structures",
  "Algorithms and Models of Computation",
  "Database Systems",
  "The Art of Web Programming",
  "Computer Systems Engineering",
  "Programming Methods for Deep Learning",
  "Distributed Systems",
  "Autonomous Systems",
  "Digital Systems Laboratory",
  "System Programming",
  "Discrete Structures",
];

interface screenType {
  type: string;
}

export const Classes: React.FC<screenType> = ({ type }) => {
  return (
    <div>
      {classes.map((item, idx) => {
        if (type === "lg") {
          return (
            <label className="flex inline-flex items-center" key={idx}>
              <div className="mx-1 bg-transparent py-2 px-4 border-2 border-gray-600 rounded">
                <span className="text-gray-300 font-semibold">{item}</span>
              </div>
            </label>
          );
        }
        return (
          <label className="flex inline-flex items-center" key={idx}>
            <div className="mx-1 bg-transparent py-1 px-2 border-2 border-gray-600 rounded">
              <span className="text-gray-300 font-semibold text-sm">
                {item}
              </span>
            </div>
          </label>
        );
      })}
    </div>
  );
};
