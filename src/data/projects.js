import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoNodejs, BiLogoTailwindCss, BiLogoTypescript, BiLogoGoLang } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Fullsoon",
    image: "./fullsoon.png",
    icons: [BiLogoReact, BiLogoCss3, BiLogoNodejs, BiLogoRedux],
    description: "An AI-powered solution that stops your food waste and maximize your income by managing the inventory.",
    github: "https://github.com/FullsoonTeam",
    demo: "https://fullsoon.co",
  },
  {
    id: "2",
    name: "XDaysWeb",
    image: "./xdaysweb.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "XDaysWeb is an empowering e-commerce mastermind organization for Arabic-speaking enthusiasts.",
    demo: "https://xdaysweb.com",
  },
  {
    id: "3",
    name: "Broke & Abroad",
    image: "./broke&abroad.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi, BiLogoGoLang],
    description: "Broke and Abroad is the go-to travel deals platform for young people. Cheap weekends, all-inclusive stays, plane tickets, and more.",
    github: "https://gitlab.com/broke-and-abroad/frontend",
    demo: "https://brokeandabroad.com",
  },
  {
    id: "4",
    name: "Amoxt",
    image: "./amoxt.png",
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "We are a software development company who designs, develops, and deploys custom software solutions for organizations that want to make an impact through...",
    demo: "https://amoxt.com",
  },
  {
    id: "5",
    name: "Bauer",
    image: "./bauer.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "Bauer · SKATES THAT WILL CHANGE YOUR GAME. · A STICK IS EVERYTHING · THE PROTECTION YOU NEED TO PERFORM YOUR BEST. · SHUT THE DOOR ON EVERY OPPONENT. ",
    github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
    demo: "https://www.bauer.com",
  },
  {
    id: "8",
    name: "Blainy",
    image: "./blainy.png",
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
    description: "The world’s #1 essay & research paper writer.",
    demo: "https://blainy.com",
  },
];

export default ProjectsData;
