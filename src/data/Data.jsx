import {
  faDesktop,
  faLaptop,
  faTablet,
  faMobile,
  faTv,
  faMarker,
  faGlobe,
  faEye,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/biglogo.svg";
import smallLogo from "../assets/smalllogo.svg";

export var logo = Logo;
export var smalllogo = smallLogo;
export var image =
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Navbar content
export const nav = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About us",
    path: "/home#about",
  },
  {
    title: "Our Services",
    path: "/services",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
];

// Caroucel Data

export const carouceldata = [
  {
    img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Web Development",
    des: "Unlock the Potential of Your Online Presence! Are you ready to elevate your business with a dynamic website? Our expert web development team crafts seamless, responsive, and user-friendly websites tailored to your unique needs. Let your digital footprint leave a lasting impression.",
    path: "/contact",
  },
  {
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "App Development",
    des: "Innovate, Captivate, Dominate!Launch your ideas into the digital realm with our top-notch app development services. We specialize in creating cutting-edge mobile applications that not only meet but exceed user expectations. Your vision, our code – the perfect app partnership.",
    path: "/contact",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "App Design",
    des: "Innovate, Captivate, Dominate!Launch your ideas into the digital realm with our top-notch app development services. We specialize in creating cutting-edge mobile applications that not only meet but exceed user expectations. Your vision, our code – the perfect app partnership.",
    path: "/contact",
  },
];
//About Data
export const missionData = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYS-wwofPqD1co5DveBAi-voCWBGrhBXXmcDd3lr1vUwUvnEMZg1WaINUe41uR83orbKBqzw6LvZLrTN8QkrMcXU0-Re_Q=w1366-h599",
    icon: faGlobe,
    title: "Our Mission",
    dec: "At Bit-Er, we see a digital future in which everyone can access innovation. Our mission is to enable companies with state-of-the-art solutions, utilizing technology as a driver of expansion and prosperity.",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSR2A6OAcy0D0b5IT0yXz5aVgNUiNuc_Oy0kKlcaCgmxCKpoK_UPjviFTIn5eur4o1tyax-4sUVS0fojPaPOmo0l7FwiQ=w1366-h599",
    icon: faEye,
    title: "Our Vision",
    dec: "At Bit-Er, we envision a digital landscape where innovation is accessible to all. We strive to empower businesses with cutting-edge solutions, making technology a catalyst for growth and success.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1646931335361-e3c46150b11a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: faBars,
    title: "Our Objective",
    dec: "Bit-Er aims to consistently deliver exceptional digital solutions, ensuring our clients stay ahead in the competitive landscape. We strive to be the catalyst for their sustained success.",
  },
];

// Services Data
export const services = [
  {
    icon: faLaptop,
    title: "Web Development",
    dec: "Empower your online presence with Bit-Er's expert web development solutions, where innovation meets functionality.",
  },
  {
    icon: faMobile,
    title: "App Development",
    dec: "Turn your ideas into reality with Bit-Er's top-notch app development solutions for a seamless and innovative digital experience.",
  },
  {
    icon: faTablet,
    title: "App Design",
    dec: "Unleash the potential of your app with Bit-Er's captivating and intuitive design expertise.",
  },
  // {
  //     icon: faDesktop,
  //     title:'Heading',
  //     dec:'Heading 2'
  // },
  // {
  //     icon: faDesktop,
  //     title:'Heading',
  //     dec:'Heading 2'
  // },
];

// Our Skills
export const skills = [
  {
    title: "React",
    progress: 100,
    color: "#02DAFD",
  },
  {
    title: "Node",
    progress: 80,
    color: "#00A83B",
  },
  {
    title: "Python",
    progress: 60,
    color: "#D9E3ED",
  },
  {
    title: "Flutter",
    progress: 40,
    color: "#0E47A1",
  },
  {
    title: "Figma",
    progress: 70,
    color: "#a259ff",
  },
];

export const total = [
  {
    title: "Our Clients",
    count: 20,
  },
  {
    title: "Completed Projects",
    count: 10,
  },
  {
    title: "Running Projects",
    count: 10,
  },
  {
    title: "Total Completed",
    count: 15,
  },
];

// Portfolio
export const category = [
  {
    id: 1,
    title: "ALL",
  },
  {
    id: 2,
    title: "Web Development",
  },
  {
    id: 3,
    title: "App Development",
  },
  {
    id: 4,
    title: "App Design",
  },
  // {
  //     id:2,
  // title:'Web Development',
  // },
];
export const portfolios = [
  {
    img: image,
    title: "HEllo",
    category: "web",
    gitlink:'gfd',
    viewlink:'gffd'
  },
  {
    img: image,
    title: "HEllo",
    category: "web",
    gitlink:'',
    viewlink:''
  },
  {
    img: image,
    title: "HEllo",
    category: "web",
    gitlink:'',
    viewlink:''
  },
  {
    img: image,
    title: "HEllo",
    category: "web",
    gitlink:'',
    viewlink:''
  },
  {
    img: image,
    title: "HEllo",
    category: "web",
    gitlink:'',
    viewlink:''
  },
  {
    img: image,
    title: "HEllo",
    category: "web",
    gitlink:'',
    viewlink:''
  },
];
// Our team
export var teams = [
  {
    name: "Nabin Ghimire ",
    img: image,
    designation: "Designer",
    social: [
      { name: "twitter", link: "#" },
      { name: "facebook", link: "#" },
      { name: "linkedin", link: "#" },
      { name: "instagram", link: "#" },
      { name: "github", link: "#" },
    ],
  },
  {
    name: "Pushkar Jha",
    img: image,
    designation: "Developer",
    social: [
      { name: "twitter", link: "#" },
      { name: "facebook", link: "#" },
      { name: "linkedin", link: "#" },
      { name: "instagram", link: "#" },
      { name: "github", link: "#" },
    ],
  },
  {
    name: "Sachin Subedi",
    img: image,
    designation: "Developer",
    social: [
      { name: "twitter", link: "#" },
      { name: "facebook", link: "#" },
      { name: "linkedin", link: "#" },
      { name: "instagram", link: "#" },
      { name: "github", link: "#" },
    ],
  },
  {
    name: "Niranjan Bhatta",
    img: image,
    designation: "Developer",
    social: [
      { name: "twitter", link: "#" },
      { name: "facebook", link: "#" },
      { name: "linkedin", link: "#" },
      { name: "instagram", link: "#" },
      { name: "github", link: "#" },
    ],
  },
];

// Tools
export var tools = [
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYS5eo0whxb_xhhHA5xDQHTvO82Gtx8u9Ynld2DwwfiAOQJKx6UjVsdvEvQX6f-SSJwb78wV0clTNtuTHlwfKYN143QAPg=w681-h597",
    alt: "Figma",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSrAWX2TYQ2aN_MsyEOs3pjs-jg0_xLNRtOhu2pyl_NxULuHqdCTTt5WXIEKX7UuZXzFJgTTowIdHC_pPlZDVqdaLtT=w1366-h599",
    alt: "Canva",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSIavlgLHSUYJsvmI8iE59r1bdoqyslz3o3TE3W-87P8YQXJQIkJGEH8_BjUWv3mD4XAhPoSX0T2sXU392suDKCWLCD=w1366-h599",
    alt: "React",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYRI_TeH4fd22jWE2fSZq-PiwWBumdPPoMaYxb8RPuqH7ay7RllytUSZ3RaTCVfJVpiGrR0p2z7UeLNC1OMzAWNccmijMg=w1366-h599",
    alt: "Node",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQOH5Cbj21TWQS6-A-zxmgWQ9bStqax-IS1gtF0msuxjRmzBNfWOXJKAZNZ7ejTKm-4zKg5VL2bDqHjmFadaVyDUHNnjw=w1366-h599",
    alt: "Javascript",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSn6q4rTD5AETNj-NPeCo0CfA9J3Z0G5FiE21cSNHbhqi8V76_ggAYVjV9veQsdPjwTx9OLQN3Ssgy2rYpKbSxHE9zYmQ=w1366-h599",
    alt: "Typescript",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTcGQ5dxbxcLb6NlCBqzZNFQ0o6WkxZljc9LBl4MGrEAV5ETHki2ACLTaQrXGZwXBFgCmPBYfQAGVQeNz3sJGsgvJGE4g=w1366-h599",
    alt: "HTML",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSKAnjdGuGoX92pUAu2SllUFhVFh6Tn4p37kvvLh6OFedoVbpjkz3vIw_-nuYTS8x7ybgP3KmTP2U3ARQy0347bfQSI=w1366-h599",
    alt: "CSS",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYRjFVPs5wrRhiRhlvH69RwfeXGcSNWa7ops9_xqs9vXfqV3AKXyGNU_QDBiD9Dexf-vxwO-GvcoILM7ajq9709_Y3b0bA=w1366-h599",
    alt: "Python",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQoatYL7LchRyQSTdWeDMEGdGMam7hF7cHW2UiDQqwfbz24DOAcMsUHlVMoHuw5j8-5d7iZTWuD_rktFoombFsGwcxj=w1366-h599",
    alt: "MongoDB",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQFufpRBocQZLHDV3fLu53ux0OnfANzL7RP1x17lSwBWJOa23olGjxiagYq5e5dxxWdcvT-aFmDPlI9Wd3BksoGYlQhcQ=w1366-h599",
    alt: "Flutter",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSFsaCW4syVu0ZTZZQJvzZWdonUfOUGhnbpbmfiY8grVZcRSpn5OlWeTtQMgr2wTcdEpZYIXcP0Lk9YZ76e9diTVZYr6g=w1366-h599",
    alt: "Bootstrap",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQX-jCwEGEBFRWWSvWyN5Gfd2iQdRlZZei92LszWp46AyT8DRcouk4LauK-S1meZHSlvhT_ngMjoXjo5DC2X-F6GrEE=w1366-h599",
    alt: "Android Studio",
  },
  {
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTMoWVLLUFJtlwJSqO7B5r5q81REgoiU598LI6kJlNgxygO7iR02WAZuTz0hgr_8w56Zm8PGk9yLfjg_b8bObpbovRKHQ=w1366-h599",
    alt: "GItHub",
  },
];
// Contact
export var contactdetails = [
  {
    name: "Address",
    icon: faMarker,
    data: "SJJSJS",
  },
  {
    name: "Address",
    icon: faMarker,
    data: "SJJSJS",
  },
  {
    name: "Address",
    icon: faMarker,
    data: "SJJSJS",
  },
];

// Footer
// General
export const social = [
  //   { name: "twitter", link: "#" },
  {
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=61550297994480",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/bit-er-devs/",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/_bit.er/",
  },
  {
    name: "github",
    link: "https://github.com/Bit-Er",
  },
];
