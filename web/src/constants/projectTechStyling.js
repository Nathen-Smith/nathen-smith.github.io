const projectTechnologyColors = {
  "TypeScript" : {
    name: "TypeScript",
    lightMode: {
      textColor: "#007acc",
      borderColor: "#007acc"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#007acc",
      backgroundColor: "#007acc"
    }
  },
  "React" : {
    name: "React",
    lightMode: {
      textColor: "#61DBFB",
      borderColor: "#61DBFB"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#61DBFB",
      backgroundColor: "#61DBFB"
    }
  },
  "React-Router" : {
    name: "React-Router",
    lightMode: {
      textColor: "rgb(233, 73, 73)",
      borderColor: "rgb(233, 73, 73)"
    },
    darkMode: {
      textColor: "white",
      borderColor: "rgb(233, 73, 73)",
      backgroundColor: "rgb(233, 73, 73)"
    }
  },
  "Axios" : {
    name: "Axios",
    lightMode: {
      textColor: "#5a29e4",
      borderColor: "#5a29e4"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#5a29e4",
      backgroundColor: "#5a29e4"
    }
  },
  "Mongoose" : {
    name: "Mongoose",
    lightMode: {
      textColor: "#800",
      borderColor: "#800"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#800",
      backgroundColor: "#800"
    }
  },
  "MongoDB" : {
    name: "MongoDB",
    lightMode: {
      textColor: "#3FA037",
      borderColor: "#3FA037"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#3FA037",
      backgroundColor: "#3FA037"
    }
  },
  "Firebase" : {
    name: "Firebase",
    lightMode: {
      textColor: "#FFA000",
      borderColor: "#FFA000"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#FFA000",
      backgroundColor: "#FFA000"
    }
  },
  "Docker" : {
    name: "Docker",
    lightMode: {
      textColor: "#0db7ed",
      borderColor: "#0db7ed"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#0db7ed",
      backgroundColor: "#0db7ed"
    }
  },
  "SystemVerilog" : {
    name: "SystemVerilog",
    lightMode: {
      textColor: "#4B0082",
      borderColor: "#4B0082"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#4B0082",
      backgroundColor: "#4B0082"
    }
  },
  "C" : {
    name: "C",
    lightMode: {
      textColor: "gray",
      borderColor: "gray"
    },
    darkMode: {
      textColor: "white",
      borderColor: "gray",
      backgroundColor: "gray"
    }
  },
  "Python" : {
    name: "Python",
    lightMode: {
      textColor: "#306998",
      borderColor: "#306998"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#306998",
      backgroundColor: "#306998"
    }
  },
  "JavaScript" : {
    name: "JavaScript",
    lightMode: {
      textColor: "#F0DB4F",
      borderColor: "#F0DB4F"
    },
    darkMode: {
      textColor: "black",
      borderColor: "#F0DB4F",
      backgroundColor: "#F0DB4F"
    }
  },
  "Express.js" : {
    name: "Express.js",
    lightMode: {
      textColor: "#353535",
      borderColor: "#353535"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#353535",
      backgroundColor: "#353535"
    }
  },
  "Next.js" : {
    name: "Next.js",
    lightMode: {
      textColor: "black",
      borderColor: "black"
    },
    darkMode: {
      textColor: "black",
      borderColor: "white",
      backgroundColor: "white"
    }
  },
  "Flask" : {
    name: "Flask",
    lightMode: {
      textColor: "gray",
      borderColor: "gray"
    },
    darkMode: {
      textColor: "white",
      borderColor: "gray",
      backgroundColor: "gray"
    }
  },
  "MySQL" : {
    name: "MySQL",
    lightMode: {
      textColor: "#00758F",
      borderColor: "#00758F"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#00758F",
      backgroundColor: "#00758F"
    }
  },
  "x86" : {
    name: "x86",
    lightMode: {
      textColor: "#007DC3",
      borderColor: "#007DC3"
    },
    darkMode: {
      textColor: "white",
      borderColor: "#007DC3",
      backgroundColor: "#007DC3"
    }
  },
}

function getProjectTechStyles(techNames) {
  const techObjs = [];
  let currTech = '';
  for (let i = 0; i < techNames.length; i += 1) {
      currTech = techNames[i];
      techObjs.push(projectTechnologyColors[currTech])
  }
  return techObjs;
}

export default getProjectTechStyles;