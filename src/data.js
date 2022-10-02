import { IoLogoReact, IoLogoNodejs, IoBarChartSharp } from "react-icons/io5";
import { SiExpress, SiRedux, SiMongodb, SiBootstrap, SiTailwindcss, SiFirebase, SiGithub, SiReactrouter, SiFigma } from "react-icons/si";
import { AiTwotoneMail } from "react-icons/ai";
import sh1 from "./images/SHOHOJ-PAY.png";
import sh2 from "./images/SHOHOJ-PAY-Dashboard.png"
import sh3 from "./images/SHOHOJ-PAY-services.png"
import ls1 from "./images/Laptop-Stock.png";
import ls2 from "./images/Laptop-Stock-manage.png";
import ls3 from "./images/Laptop-Stock-add.png";
import pu1 from "./images/PARTS-UNIVERSE.png";
import pu2 from "./images/PARTS-UNIVERSE-products.png";
import pu3 from "./images/PARTS-UNIVERSE-buy.png";
import tm1 from "./images/Tasks-Manager.png";
import tm2 from "./images/Tasks-Manager-comp.png";
import tm3 from "./images/Tasks-Manager-cal.png";


export const skills = [
    { name: "MongoDB", icon: SiMongodb, color: "#3FA037" },
    { name: "Express", icon: SiExpress, color: "#3FA037" },
    { name: "React", icon: IoLogoReact, color: "#3FA037" },
    { name: "Node", icon: IoLogoNodejs, color: "#3FA037" },
    { name: "Redux-toolkit", icon: SiRedux, color: "#3FA037" },
    { name: "Firebase", icon: SiFirebase, color: "#3FA037" },
    { name: "Rechart", icon: IoBarChartSharp, color: "#3FA037" },
    { name: "React-Router", icon: SiReactrouter, color: "#3FA037" },
    { name: "EmailJS", icon: AiTwotoneMail, color: "#3FA037" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#3FA037" },
    { name: "Tailwindcss", icon: SiTailwindcss, color: "#3FA037" },
    { name: "Figma", icon: SiFigma, color: "#3FA037" },
    { name: "GitHub", icon: SiGithub, color: "#3FA037" },
];

export const projects = [
    {
        "name": "Shohoj Pay",
        "thumbnails": [sh1, sh2, sh3],
        "id": "project1",
        "liveLink": "https://shohoj-pay-app.web.app/",
        "githubClient": "https://github.com/mahfuzswaron/shohoj-pay-client",
        "description": "SHOHOJ PAY is a f-commerce MERN Stack website like Bkash, Nagad, Payoneer. Manages two types of accounts merchant and personal.Got interactive admin dashboard.User is able to make transaction from one to another through their email address.User friendly UI, and mobile friendly consistent design.It is a team project.",
        "technologies": ["React", "React-Router", "Tailwind", "DaisyUI", "Firebase", "Heroku", "MongoDB"],
        "features": [
            "Add, Send, Receive, Request, Pay and Save Money",
            "Secured Routes for Personal user, Merchant and Admin",
            "Update user information in settings.",
        ]

    },
    {
        "name": "Laptop Stock",
        "thumbnails": [ls1, ls2, ls3],
        "id": "project2",
        "liveLink": "https://laptop-stock-new.web.app/",
        "githubClient": "https://github.com/mahfuzswaron/laptop-stock-react",
        "description": "A warehouse mangement full-stack application. Its purpose is managing inventories and their quantities. You can add and remove an inventory. ",
        "technologies": ["React", "React-Router", "Tailwind", "DaisyUI", "Firebase", "Heroku", "MongoDB"],
        "features": [
            "Google and Email/password-based authentication system",
            "Protected routes for logged in user only",
            "CRUD operations",
            "Calculate total price",
            "Analyse sales"

        ]

    },
    {
        "name": "Parts Universe",
        "thumbnails": [pu1, pu2, pu3],
        "id": "project3",
        "liveLink": "https://car-parts-6b723.web.app/",
        "githubClient": "https://github.com/mahfuzswaron/car-parts",
        "description": "This is a manufacturer's company website. its purpose is to display products and let the users place orders, manage their orders, and add reviews. users can also update their profiles. An admin can ship the orders, and manage products. They can also make a user admin",
        "technologies": [
            "React", "React-Router", "Firebase", "Tailwind", "DaisyUI", "Heroku"
        ],
        "features": [
            "Google and Email/password-based authentication system",
            "Protected routes for admin and user",
            "CRUD operations"
        ]

    },
    {
        "name": "Tasks Manager",
        "thumbnails": [tm1, tm2, tm3],
        "id": "project4",
        "liveLink": "https://tasks-manager-web-app.netlify.app/",
        "githubClient": "https://github.com/mahfuzswaron/tasks-manager",
        "description": "This is a task management application. You can list your tasks here and you may edit them also. Once the task is finished simply click on the radio button, it will replaced to completed tasks page. You can see the calendar in the Calendar page.",
        "technologies": ["React", "React-Router", "Tailwind", "DaisyUI", "MongoDB", "Express.js"],
        "features": [
            "Create, Read and Update Data",
            "Delete Data (Upcoming)",
            "See Calendar"
        ]
    }
]