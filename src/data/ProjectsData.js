const ProjectsData = [
  {
    id: 1,
    title: "Netflix Clone",
    details:
      "Web application that mimics the UI of Netflix, displays different types of movies using TMDB Api.",
    technologies: "ReactJS | Axios | Firebase",
    live_link: "https://netflix-clone-app-96hx.onrender.com/",
    source_code: "https://github.com/russellbanares322/netflix-clone",
    image: require("../assets/netflix_app.jpg"),
    video: null,
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

export default ProjectsData;
