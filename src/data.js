import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiRedux, SiMongodb, SiBootstrap, SiTailwindcss, SiFirebase, SiGithub, SiReactrouter, SiFigma, SiAdobeillustrator, SiNextdotjs } from "react-icons/si";

import shohojPay from "./images/project-thumbnail-shohoj-pay.jpg";
import cgpaVaiya from "./images/project-thumbnail-cgpa-vaiya.jpg"

// services images
import webDevelopment from "./images/services/web-dev.png";
import reactNextMigration from "./images/services/migration.png";
import debugging from "./images/services/debugging.png";
import emailSignature from "./images/services/Mail sent-amico.png";
import emailTemplate from "./images/services/email-3d.png";


export const skills = [
    { name: "MongoDB", icon: SiMongodb, color: "#3FA037" },
    { name: "Express", icon: SiExpress, color: "#3FA037" },
    { name: "React", icon: IoLogoReact, color: "#3FA037" },
    { name: "Next", icon: SiNextdotjs, color: "#3FA037" },
    { name: "Node", icon: IoLogoNodejs, color: "#3FA037" },
    { name: "Redux", icon: SiRedux, color: "#3FA037" },
    { name: "Router", icon: SiReactrouter, color: "#3FA037" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#3FA037" },
    { name: "Tailwindcss", icon: SiTailwindcss, color: "#3FA037" },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "#3FA037" },
    { name: "Figma", icon: SiFigma, color: "#3FA037" },
    { name: "GitHub", icon: SiGithub, color: "#3FA037" },
];

export const projects = [
    {
        "name": "Shohoj Pay",
        "thumbnails": [shohojPay],
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
        "thumbnails": [cgpaVaiya],
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

];

export const services = [
    {
        "id": "web-development-service",
        "name": "Web Development",
        "image": webDevelopment,
        "description": "I can build a web application for you using modern technologies like React, Express, MongoDB, Firebase, etc. I can also help you to build a website using WordPress.",
    },
    {
        "id": "react-next-migration-service",
        "name": "React to Next",
        "image": reactNextMigration,
        "description": "I can help you to migrate your React.js website to Next.js. Next.js is a powerful React framework that provides a better performance, SEO, and developer experience.",
    },
    {
        "id": "debugging-service",
        "name": "Debugging",
        "image": debugging,
        "description": "I can help you to debug your website or web application. I can also help you to fix the bugs in your code and improve the performance of your website.",
    },
    {
        "id": "email-signature-service",
        "name": "Email Signature",
        "image": emailSignature,
        "description": "I can design a professional email signature for you. I can also help you to add the email signature to your email client like Gmail, Outlook"
    },
    {
        "id": "email-template-service",
        "name": "Email Template",
        "image": emailTemplate,
        "description": "I can design a professional email template for you. I can also help you to add the email template to your email client like Gmail, Outlook"
    }
];


export const aboutQnAs = [
    {
        question: "Who am I",
        subQuestion: "you know",
        answer: "I'm Mahfuz Swaron, a passionate Web Developer. Coding isn't just a skill for me; it's my language. The keyboard is my pen, Linux is my home, and VSCode is my canvas where creativity meets functionality."
    },
    {
        question: "What are my languages",
        subQuestion: "you wonder",
        answer: "I articulate my ideas through JavaScript, TypeScript, HTML, and CSS. I bring concepts to life using React.js, Next.js, Express.js, and MongoDB, weaving together technology and innovation."
    },
    {
        question: "Why do I code",
        subQuestion: "you ask",
        answer: "I have an innate desire to program machines, to bring thoughts into the digital realm, and to solve problems through elegant solutions. Coding isn't just a profession; it's my passion."
    },
    {
        question: "How can I help you",
        subQuestion: "you ask",
        answer: "As a 1.5 years experienced web developer, I am committed to creating exceptional applications that exceed expectations. As an individual, I am dedicated to putting in my utmost effort to propel your company to unprecedented heights. Let's build the future, together."
    },
]