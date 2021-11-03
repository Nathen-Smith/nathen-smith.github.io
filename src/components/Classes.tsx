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

export const Classes = () => {
  return (
    <div>
      {classes.map((item, idx) => {
        return (
          <label className="flex inline-flex items-center" key={idx}>
            <div className="mx-1 bg-transparent py-2 px-4 border-2 border-gray-600 rounded">
              <span className="text-gray-300 font-semibold">{item}</span>
            </div>
          </label>
        );
      })}
    </div>
  );
};
