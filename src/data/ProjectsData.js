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
    thumbnail_image: require("../assets/projectImages/netflix/netflix_app.jpg"),
    images: [
      require("../assets/projectImages/netflix/signup_page.png"),
      require("../assets/projectImages/netflix/signin_page.png"),
      require("../assets/projectImages/netflix/full_page.png"),
      require("../assets/projectImages/netflix/details_page.png"),
    ],
    video: require("../assets/projectVids/netflix_clone.mp4"),
  },
  {
    id: 2,
    title: "ReactJS Firebase Crud",
    details:
      "A project that you can create, read, update and delete record. It also has an image upload functionality.",
    technologies: "ReactJS | Firebase",
    live_link: "https://russcrud.netlify.app/",
    source_code: "https://github.com/russellbanares322/react-firebase-crud",
    thumbnail_image: require("../assets/projectImages/firebase_crud/firebase_crud.jpg"),
    images: [
      require("../assets/projectImages/firebase_crud/add_page.png"),
      require("../assets/projectImages/firebase_crud/update_page.png"),
    ],
    video: require("../assets/projectVids/firebase_crud.mp4"),
  },
  {
    id: 3,
    title: "Property Management System",
    details:
      "Our capstone project which display different kinds of property, and allowing the user to set an appointment.",
    technologies: "ReactJS | Firebase | EmailJS | Tawk.to Live Chat",
    live_link: null,
    source_code: "https://github.com/russellbanares322/propertyfinder-app",
    thumbnail_image: require("../assets/projectImages/property_finder/property_finder.jpg"),
    images: [
      require("../assets/projectImages/property_finder/landing_page.png"),
      require("../assets/projectImages/property_finder/login_page.png"),
      require("../assets/projectImages/property_finder/registration_page.png"),
      require("../assets/projectImages/property_finder/forgot_password.png"),
      require("../assets/projectImages/property_finder/post_property_form.png"),
      require("../assets/projectImages/property_finder/property_page.png"),
      require("../assets/projectImages/property_finder/sidebar_filter.jpg"),
      require("../assets/projectImages/property_finder/about_page.png"),
      require("../assets/projectImages/property_finder/favorites_page.png"),
      require("../assets/projectImages/property_finder/admin_dashboard_page.png"),
      require("../assets/projectImages/property_finder/listed_property_page.png"),
      require("../assets/projectImages/property_finder/clients_list_page.png"),
      require("../assets/projectImages/property_finder/property_details_page.png"),
      require("../assets/projectImages/property_finder/property_details_page1.png"),
      require("../assets/projectImages/property_finder/property_details_page2.png"),
      require("../assets/projectImages/property_finder/adding_client_form.png"),
      require("../assets/projectImages/property_finder/appointment_form.jpg"),
      require("../assets/projectImages/property_finder/live_chat.jpg"),
    ],
    video: require("../assets/projectVids/property_management_system.mp4"),
  },
  {
    id: 4,
    title: "Crypto Currency Tracker",
    details:
      "A project that uses an api to fetch data about crypto currency prices, with the help of axios library.",
    technologies: "ReactJS | Axios",
    live_link: "https://cryptotrackerapp-orpin.vercel.app/",
    source_code: "https://github.com/russellbanares322/cryptotrackerapp",
    thumbnail_image: require("../assets/projectImages/crypto_app/crypto_currency_tracker_app.jpg"),
    images: [
      require("../assets/projectImages/crypto_app/landing_page.png"),
      require("../assets/projectImages/crypto_app/trending_coins.png"),
      require("../assets/projectImages/crypto_app/crypto_price_table.png"),
      require("../assets/projectImages/crypto_app/details_page.png"),
    ],
    video: require("../assets/projectVids/crypto_app.mp4"),
  },
  {
    id: 5,
    title: "Games List App",
    details:
      "Displaying different types of games with pagination, and axios library for api fetching.",
    technologies: "ReactJS | Axios",
    live_link: "https://games-list-viewer.vercel.app/",
    source_code: "https://github.com/russellbanares322/games-list-app",
    thumbnail_image: require("../assets/projectImages/game_app/game_app.jpg"),
    images: [
      require("../assets/projectImages/game_app/landing_page.png"),
      require("../assets/projectImages/game_app/light_mode.png"),
    ],
    video: require("../assets/projectVids/games_list_app.mkv"),
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
