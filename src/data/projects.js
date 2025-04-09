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
    name: "Expense Tracker",
    image: "./expense-tracker.png",
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "This application provides an interface for users to track their expenses .",
    github: "https://github.com/VijayKumarReddyTalakola/Expense-Tracker",
    demo: "https://vtrack-expense.vercel.app",
  },
  {
    id: "5",
    name: "Chat Application",
    image: "./chatapp.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "This chat application provides an interface to the users to interact with their friends.",
    github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
    demo: "https://vchat4whisperchat.vercel.app",
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
