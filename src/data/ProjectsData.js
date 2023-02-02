import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase, SiGit } from "react-icons/si";

export const projectsData = [
  {
    id: 1,
    title: "Netflix Clone",
    details:
      "Web application that mimics the UI of Netflix, displays different types of movies using TMDB Api. And allows the user to save movie to favorites.",
    technologies: "ReactJS | Axios | Firebase | ReactSplide",
    live_link: "https://netflix-clone-d2z2.onrender.com/",
    source_code: "https://github.com/russellbanares322/netflix-clone",
    image: require("../assets/netflix_app.jpg"),
    video: require("../components/projectVids/netflix_clone.mp4"),
  },
  {
    id: 2,
    title: "ReactJS Firebase Crud",
    details:
      "A project that you can create, read, update and delete record. It also has an image upload functionality.",
    technologies: "ReactJS | Firebase",
    live_link: "https://russcrud.netlify.app/",
    source_code: "https://github.com/russellbanares322/react-firebase-crud",
    image: require("../assets/firebase_crud.jpg"),
    video: require("../components/projectVids/firebase-crud.mp4"),
  },
  {
    id: 3,
    title: "Property Management System",
    details:
      "Our capstone project which display different kinds of property, and allowing the user to set an appointment.",
    technologies: "ReactJS | Firebase | EmailJS | Tawk.to Live Chat",
    live_link: null,
    source_code: "https://github.com/russellbanares322/propertyfinder-app",
    image: require("../assets/property_finder.jpg"),
    video: require("../components/projectVids/Property_Management_System.mp4"),
  },
  {
    id: 4,
    title: "Crypto Currency Tracker",
    details:
      "A project that uses an api to fetch data about crypto currency prices, with the help of axios library.",
    technologies: "ReactJS | Axios",
    live_link: "https://cryptotrackerapp-orpin.vercel.app/",
    source_code: "https://github.com/russellbanares322/cryptotrackerapp",
    image: require("../assets/crypto_currency_tracker_app.jpg"),
    video: require("../components/projectVids/Crypto-App.mp4"),
  },
  {
    id: 5,
    title: "Games List App",
    details:
      "Displaying different types of games with pagination, and axios library for api fetching.",
    technologies: "ReactJS | Axios",
    live_link: "https://games-list-viewer.vercel.app/",
    source_code: "https://github.com/russellbanares322/games-list-app",
    image: require("../assets/game_app.jpg"),
    video: require("../components/projectVids/Games_List_App.mkv"),
  },
];

export const techStacks = [
  {
    id: 1,
    name: "ReactJS",
    icon: <FaReact size={30} />,
    // color: "#5CCFEE",
  },
  {
    id: 2,
    name: "HTML",
    icon: <FaHtml5 size={30} />,
    // color: "#EB5403",
  },
  {
    id: 3,
    name: "Css",
    icon: <FaCss3Alt size={30} />,
    // color: "#2E49D4",
  },
  {
    id: 4,
    name: "Firebase",
    icon: <SiFirebase size={30} />,
    // color: "#F2C12B",
  },
  {
    id: 5,
    name: "Javascript",
    icon: <IoLogoJavascript size={30} />,
    // color: "#EAD41C",
  },
  {
    id: 6,
    name: "Git",
    icon: <SiGit size={30} />,
    // color: "#E84D31",
  },
];
