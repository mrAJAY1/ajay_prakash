// 0 -> completed and hosted
// 1 -> completed
// 2 -> progressing

const Work = [
  {
    id: 1,
    name: "Bloggy",
    description:
      "Blogging site developed using EJS, and Express Js and MongoDB database. You can read, write and search for blogs here.",
    tags: ["Nodejs", "EJS", "ExpressJS", "mongoDB"],
    date: "15 May 2022",
    status: 0,
    demo: "https://bloggy.ml/",
    github: "https://github.com/mrAJAY1/Bloggy",
  },
  {
    id: 2,
    name: "TurnOut",
    description:
      "Social Media platform with E-Commerce where you can share posts and stories , send direct messages and video calls and an e-commerce platform to buy products online",
    tags: [
      "react",
      "Nodejs",
      "ExpressJs",
      "socket.io",
      "webRTC",
      "nodemailer",
      "mongodb",
    ],
    date: "15 Sep 2022",
    status: 2,
    demo: "",
    github: "https://github.com/mrAJAY1/social_media",
  },
  {
    id: 3,
    name: "Incubation Management project",
    description:
      "Incubation management project where new users can submit application and admins can either approve or reject them and books slots for the approved users.",
    tags: ["react", "api", "sass", "jwt", "material-UI"],
    date: "7 Jul 2022",
    status: 1,
    demo: "",
    github: "https://github.com/mrAJAY1/incubation_management",
  },
  {
    id: 4,
    name: "NetFlix clone",
    description: "Netflix clone developed using reactjs , TMDB API",
    tags: ["react", "TMDB", "css"],
    date: "24 Jun 2022",
    status: 1,
    demo: "",
    github: "https://github.com/mrAJAY1/netflix",
  },
  {
    id: 5,
    name: "OLX clone",
    description: "Clone of OLX application with a backend of firebase.",
    tags: ["react", "css", "react-router"],
    date: "2 Jul 2022",
    status: 1,
    demo: "",
    github: "https://github.com/mrAJAY1/olx_clone",
  },
  {
    id: 6,
    name: "Todo App React",
    description:
      "A todo app build using react and focused on learning useReducer hook.",
    tags: ["react", "framer-motion"],
    date: "13 Sep 2022",
    status: 1,
    demo: "",
    github: "https://github.com/mrAJAY1/todo_using_usereducer",
  },
  {
    id: 7,
    name: "Cart Manager (React, Redux)",
    description:
      "Cart manager application built using React and Redux-toolkit.",
    tags: ["react", "Redux-Toolkit", "css"],
    date: "14 Sep 2022",
    status: 1,
    demo: "",
    github: "https://github.com/mrAJAY1/cart-manager-redux-toolkit",
  },
  {
    id: 8,
    name: "React Avatar editor modal",
    description:
      "Avatar editor where users can crop image before they upload it.",
    tags: ["avatar-crop", "react", "scss", "material UI"],
    date: "13 Sep 2022",
    status: 1,
    demo: "https://codesandbox.io/s/github/mrAJAY1/react-avatar-editor-modal-sandbox",
    github: "https://github.com/mrAJAY1/react-avatar-editor-modal-sandbox",
  },
  {
    id: 9,
    name: "Movie Finder",
    description: "Movie Finder App developed in react and tmdb api",
    tags: ["react", "TMDB", "css"],
    date: "18 Jun 2022",
    status: 1,
    demo: "",
    github: "https://github.com/mrAJAY1/React-Movie-finder-App",
  },
  {
    id: 10,
    name: "Video Streaming application",
    description:
      "Video streaming platform where users can upload videos and watch them.",
    tags: ["react", "Firebase", "material UI", "Redux toolkit"],
    date: "30 Sep 2022",
    status: 2,
    demo: "",
    github: "https://github.com/mrAJAY1/video_stream",
  },
];

export default Work;
