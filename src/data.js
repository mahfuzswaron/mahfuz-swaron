import { IoLogoReact, IoLogoNodejs, IoBarChartSharp } from "react-icons/io5";
import { SiExpress, SiRedux, SiMongodb, SiBootstrap, SiTailwindcss, SiFirebase, SiGithub, SiReactrouter, SiFigma, SiAdobeillustrator } from "react-icons/si";
import { TbLetterD } from "react-icons/tb";

import { AiTwotoneMail } from "react-icons/ai";
import sh1 from "./images/SHOHOJ-PAY.png";
import sh2 from "./images/SHOHOJ-PAY-Dashboard.png"
import sh3 from "./images/SHOHOJ-PAY-services.png"
import cv1 from "./images/cgpa-vaiya-1.png";
import cv2 from "./images/cgpa-vaiya-2.png";


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
    { name: "D3.js", icon: TbLetterD, color: "#3FA037" },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "#3FA037" },
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
        "technologies": ["React", "React-Router", "Express", "Tailwind", "Firebase", "MongoDB"],
        "features": [
            "Add, Send, Receive, Request, Pay and Save Money",
            "Secured Routes for Personal user, Merchant and Admin",
            "Update user information in settings.",
        ]

    },
    {
        "name": "CGPA Vaiya",
        "thumbnails": [cv1, cv2],
        "id": "cgpa-vaiya",
        "liveLink": "https://cgpa-vaiya.netlify.app/",
        "githubClient": "https://github.com/mahfuzswaron/cgpa-vaiya",
        "description": "CGPA Vaiya is a CGPA predictor application built using web technologies. It estimates the required GPA that need to be earned in the remaining semesters to achieve a particular CGPA required by the student.It is designed as a chatbot application that provides it functionalities to the user in a chatting manner.",
        "technologies": ["React", "Express", "Tailwind"],
        "features": [
            "Predicts CGPA List to gain a certain CGPA",
            "Chatbot interface",
            "User friendly UI, and mobile friendly consistent design.",
        ]

    },

]