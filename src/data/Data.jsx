import { faDesktop,faLaptop,faTablet,faMobile,faTv,faMarker,faGlobe,faEye, faBars } from "@fortawesome/free-solid-svg-icons";
import smallLogo from'../assets/smalllogo.svg';
import Logo from'../assets/biglogo.svg';
export var image= 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
export var logo=Logo;
export var smalllogo=smallLogo;
export const nav=[
    {
        title:"Home",
        path:'/'
    },
    {
        title:"About us",
        path:'/about'
    },
    {
        title:"Our Services",
        path:'/services'
    },
    {
        title:"Portfolio",
        path:'/portfolio'
    },
    {
        title:"Contact us",
        path:'/contact'
    },
]

// Caroucel Data

export const carouceldata = [
  {
    img: image,
    title: "Web Development",
    des: "Unlock the Potential of Your Online Presence! Are you ready to elevate your business with a dynamic website? Our expert web development team crafts seamless, responsive, and user-friendly websites tailored to your unique needs. Let your digital footprint leave a lasting impression.",
    path: "/contact",
  },
  {
    img: image,
    title: "App Development",
    des: "Innovate, Captivate, Dominate!Launch your ideas into the digital realm with our top-notch app development services. We specialize in creating cutting-edge mobile applications that not only meet but exceed user expectations. Your vision, our code – the perfect app partnership.",
    path: "/contact",
  },
  {
    img: image,
    title: "App Design",
    des: "Innovate, Captivate, Dominate!Launch your ideas into the digital realm with our top-notch app development services. We specialize in creating cutting-edge mobile applications that not only meet but exceed user expectations. Your vision, our code – the perfect app partnership.",
    path: "/contact",
  },
];
//About Data
export const missionData = [
    { imageUrl: image, icon: faGlobe,title:'dddd',dec:'ddddddddd' },
    { imageUrl: image, icon: faEye,title:'dddd',dec:'ddddddddd' },
    { imageUrl: image, icon: faBars,title:'dddd',dec:'ddddddddd' },
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
    title: "Total Completed",
    count: 1539,
  },
  {
    title: "Total Completed",
    count: 1539,
  },
  {
    title: "Total Completed",
    count: 1539,
  },
  {
    title: "Total Completed",
    count: 1539,
  },
  {
    title: "Total Completed",
    count: 1539,
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
  },
  {
    img: image,
    title: "HEllo",
    category: "web",
  },
  {
    img: image,
    title: "HEllo",
    category: "web",
  },
  {
    img: image,
    title: "HEllo",
    category: "web",
  },
  {
    img: image,
    title: "HEllo",
    category: "web",
  },
  {
    img: image,
    title: "HEllo",
    category: "web",
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
