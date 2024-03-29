import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase, SiGit, SiTailwindcss } from "react-icons/si";

export const projectsData = [
  {
    id: 1,
    title: "Password Generator",
    details:
      "A front-end mentor challenge, which enables user to generate a password depending on selected checkbox option and range slider for the password's length.",
    technologies: ["ReactJS", "React Hot Toast"],
    live_link: "https://pwgeneratorx.netlify.app/",
    source_code:
      "https://github.com/russellbanares322/password-generator-fem-challenge",
    thumbnail_image:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1679665956/ProjectImages/PasswordGenerator/landing_dahk3i.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1679665956/ProjectImages/PasswordGenerator/landing_dahk3i.jpg",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1679664737/ProjectImages/PasswordGenerator/validation_oqotg2.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1679664737/ProjectImages/PasswordGenerator/clipboard_copy_rkcw84.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1679664737/ProjectImages/PasswordGenerator/generated_password_f1hwvp.png",
      },
    ],
    video: require("../assets/projectVids/password_generator.mp4"),
  },
  {
    id: 2,
    title: "Netflix Clone",
    details:
      "Web application that mimics the UI of Netflix, displays different types of movies using TMDB Api. And allows the user to save movie to favorites.",
    technologies: ["ReactJS", "Axios", "Firebase", "ReactSplide"],
    live_link: "https://netflix-clone-d2z2.onrender.com/",
    source_code: "https://github.com/russellbanares322/netflix-clone",
    thumbnail_image:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1678018753/ProjectImages/NetflixClone/netflix-cover_sibtvr.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1678017842/ProjectImages/NetflixClone/netflix-landing_gh52fp.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687254/ProjectImages/NetflixClone/signup_page_rp2f05.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687246/ProjectImages/NetflixClone/signin_page_upbhyo.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1678017827/ProjectImages/NetflixClone/netflix-details-page1_myluyi.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1678017825/ProjectImages/NetflixClone/netflix-details-page_kushl4.png",
      },
    ],
    video: require("../assets/projectVids/netflix_clone.mp4"),
  },
  {
    id: 3,
    title: "ReactJS Firebase Crud",
    details:
      "A project that you can create, read, update and delete record. It also has an image upload functionality.",
    technologies: ["ReactJS", "Firebase"],
    live_link: "https://russcrud.netlify.app/",
    source_code: "https://github.com/russellbanares322/react-firebase-crud",
    thumbnail_image:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687217/ProjectImages/FirebaseCrud/firebase_crud_uaps5d.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687217/ProjectImages/FirebaseCrud/firebase_crud_uaps5d.jpg",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687217/ProjectImages/FirebaseCrud/add_page_adrcgi.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687217/ProjectImages/FirebaseCrud/update_page_hmwbjq.png",
      },
    ],
    video: require("../assets/projectVids/firebase_crud.mp4"),
  },
  {
    id: 4,
    title: "Property Management System",
    details:
      "Our capstone project which display different kinds of property, and allowing the user to set an appointment.",
    technologies: ["ReactJS", "Firebase", "EmailJS", "Tawk.to Live Chat"],
    live_link: "https://onehomeph.onrender.com/",
    source_code: "https://github.com/russellbanares322/propertyfinder-app",
    thumbnail_image:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687262/ProjectImages/PropertyFinder/property_finder_k578cd.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687281/ProjectImages/PropertyFinder/landing_page_lpeziy.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687266/ProjectImages/PropertyFinder/login_page_p7lo5q.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687263/ProjectImages/PropertyFinder/registration_page_r3jult.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687264/ProjectImages/PropertyFinder/forgot_password_kxkriw.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687279/ProjectImages/PropertyFinder/property_page_fdrwdf.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687266/ProjectImages/PropertyFinder/favorites_page_qmpx22.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687267/ProjectImages/PropertyFinder/listed_property_page_fw4lpy.png",
      },
    ],
    video: require("../assets/projectVids/property_management_system.mp4"),
  },
  {
    id: 5,
    title: "Trackeroo",
    details:
      "A project that uses an api to fetch data about crypto currency prices, with the help of axios library.",
    technologies: ["ReactJS", "Axios"],
    live_link: "https://trackeroo.vercel.app/",
    source_code: "https://github.com/russellbanares322/cryptotrackerapp",
    thumbnail_image:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687198/ProjectImages/CryptoApp/crypto_currency_tracker_app_voejlu.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687200/ProjectImages/CryptoApp/landing_page_z1kxdq.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687198/ProjectImages/CryptoApp/crypto_price_table_qj78uj.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687197/ProjectImages/CryptoApp/trending_coins_lai6p2.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687198/ProjectImages/CryptoApp/details_page_ium8gw.png",
      },
    ],
    video: require("../assets/projectVids/crypto_app.mp4"),
  },
  {
    id: 6,
    title: "Games List App",
    details:
      "Displaying different types of games with pagination, and axios library for api fetching.",
    technologies: ["ReactJS", "Axios"],
    live_link: "https://games-list-viewer.vercel.app/",
    source_code: "https://github.com/russellbanares322/games-list-app",
    thumbnail_image:
      "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687297/ProjectImages/GamesList/game_app_g5fam1.jpg",
    images: [
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687303/ProjectImages/GamesList/landing_page_ruuvho.png",
      },
      {
        src: "https://res.cloudinary.com/dlcvmxjzv/image/upload/v1675687299/ProjectImages/GamesList/light_mode_nnmw2b.png",
      },
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
    name: "TailwindCSS",
    icon: <SiTailwindcss size={30} />,
  },
  {
    id: 5,
    name: "Firebase",
    icon: <SiFirebase size={30} />,
    // color: "#F2C12B",
  },
  {
    id: 6,
    name: "Javascript",
    icon: <IoLogoJavascript size={30} />,
    // color: "#EAD41C",
  },
  {
    id: 7,
    name: "Git",
    icon: <SiGit size={30} />,
    // color: "#E84D31",
  },
];
