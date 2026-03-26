import type { TNavLink, TService, TTechnology, TExperience, TTestimonial, TProject, } from "../types";

import { mobile, vestra, backend, creator, btd, web, javascript, typescript, reactjs, cpp, java, nodejs, mongodb, git, figma, docker, ukgov, delights, barclays, r6s, vstra, tony, rbxm } from "../assets";

export const navLinks: TNavLink[] = [
    {
        id: "about",
        title: "About",
    }, {
        id: "work",
        title: "Work",
    }, {
        id: "websites",
        title: "Other Projects",
    },
];

const services: TService[] = [
    {
        title: "Software Developer",
        icon: web,
    }, {
        title: "3D Printing Nerd",
        icon: mobile,
    }, {
        title: "Cyber Security Enthusiast",
        icon: backend,
    }, {
        title: "Procrastinator",
        icon: creator,
    },
];

const technologies: TTechnology[] = [
    {
        name: "JavaScript",
        icon: javascript,
    }, {
        name: "TypeScript",
        icon: typescript,
    }, {
        name: "Node JS",
        icon: nodejs,
    }, {
        name: "MongoDB",
        icon: mongodb,
    }, {
        name: "git",
        icon: git,
    }, {
        name: "figma",
        icon: figma,
    }, {
        name: "docker",
        icon: docker,
    },  {
        name: "React JS",
        icon: reactjs,
    },  {
        name: "Java",
        icon: java,
    },  {
        name: "C++",
        icon: cpp,
    },
];

const experiences: TExperience[] = [
    {
        title: "CEO & Founder",
        companyName: "Vestra Hub | Silent Solutions",
        icon: vestra,
        iconBg: "rgb(0, 0, 0)",
        date: "Aug 2018 - Jan 2023",
        points: [
            "Conducted reverse engineering research on game clients and anti-cheat systems to understand security mechanisms and software protection.",
            "Developed custom software used by large online communities, scaling my platform to over 1 million users.",
            "Built and maintained backend infrastructure, update systems, and distribution pipelines to support high user demand.",
            "Analysed application behaviour at the kernel to identify weaknesses and improve bypass resistance techniques.",
            "Led product development, community management, and operational decisions as the founder, growing the project into one of the largest communities on the platform."
        ],
    }, {
        title: "Particator",
        companyName: "UK Cyber Team",
        icon: ukgov,
        iconBg: "#ffffffff",
        date: "Nov 2024 - Jan 2025",
        points: [
            "Conducted penetration testing on applications and live websites to identify security vulnerabilities.",
            "Performed vulnerability analysis and reported security flaws with mitigation recommendations.",
            "Applied cryptographic principles including encryption, hashing, and secure key management.",
            "Collaborated with team members to solve cybersecurity challenges in a competitive environment.",
            "The youngest participant there, placing in the top 20 out of 250 competitors during a live event."
        ],
    }, {
        title: "CEO & Founder",
        companyName: "3D Delights By Joe",
        icon: delights,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Ongoing",
        points: [
            "Design and manufacture custom 3D-printed props for Comic-Con and cosplay events.",
            "Produced bespoke automotive parts for local garages, focusing on practical and durable solutions.",
            "Created flexible and adaptive toys designed for individuals with special needs.",
            "Managed end-to-end operations including design, prototyping, production, and customer collaboration.",
        ],
    }, {
        title: "Technology Developer",
        companyName: "Barclays Bank",
        icon: barclays,
        iconBg: "#383E56",
        date: "Aug 2025 - On going",
        points: [
            "Developed and maintained secure APIs supporting financial crime and onboarding monitoring systems.",
            "Collaborated with Change Delivery Management teams to coordinate and implement system changes, ensuring smooth deployments and adherence to internal governance processes.",
            "Designed scalable backend services to process high-volume financial data while meeting strict regulatory requirements.",
            "Implemented secure authentication, logging, and auditing mechanisms to support regulatory compliance and traceability.",
        ],
    },
];

const testimonials: TTestimonial[] = [
    {
        testimonial: "As a business partner working with Mr Heyes It's very clear that he has an amazing well-rounded knowledge base, good communication skills, team management and alot to offer in whatever he turns his hand to! Having Joe on your team or running it means you can trust any task given to him to be completed to the highest quality with maximum effort put in.",
        name: "Tony",
        designation: "CEO",
        company: "BT Designs",
        image: tony,
    }, {
        testimonial: "Working under Joe has been an incredibly valuable opportunity for my growth and development. Before working with him, I struggled to find someone who was genuinely willing to share knowledge and provide meaningful guidance. Joe has been exactly that person.\n\nWhat stands out most is Joe’s mindset. He is always looking for new ways to expand, improve, and create opportunities not only for himself but also for the people around him. Working with him has been a truly positive and motivating experience, and I’m grateful for everything I’ve been able to learn under his guidance.",
        name: "Jayden",
        designation: "Employee",
        company: "BT Designs",
        image: btd,
    }, {
        testimonial: "Expresses ideas clearly and makes them easy to understand. Also helps with solving problems such as disagreements in the team.",
        name: "Nishil",
        designation: "Co-Worker",
        company: "Barclays",
        image: barclays,
    }, {
        testimonial: "Works very effectively within the team and always shares their knowledge and suggests any improvements we could make during the project. Is very motivated to work hard and it is shown by his consistent effort to the project.",
        name: "Mohammed",
        designation: "Co-Worker",
        company: "Barclays",
        image: barclays,
    },
];

const projects: TProject[] = [
    {
        name: "Rainbow Six Siege - Recoil Macro",
        description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [{
            name: "C++",
            color: "blue-text-gradient",
        }, {
            name: "ImGui",
            color: "green-text-gradient",
        }, {
            name: "Arduino",
            color: "orange-text-gradient",
        }],
        image: r6s,
        sourceCodeLink: "https://github.com/oogx/R6-Recoil-Macro",
    }, {
        name: "RBX Manager",
        description: "Powerful Discord Bot for Roblox Developers. It allows you to modify assets, remove watermarks, add custom branding and decompile/resolve assets all from our bot.",
        tags: [{
            name: "LuaU",
            color: "green-text-gradient",
        }, {
            name: "JavaScript",
            color: "blue-text-gradient",
        },],
        image: rbxm,
        sourceCodeLink: "https://github.com/Rbx-Management",
    }, {
        name: "LuaU Obfuscator",
        description:
            "Modified version of PSU source code to allow for it to obfuscate files without having to use a outdated .net discord bot. Changed how it functions to prevent common decompiling methods.",
        tags: [{
            name: "C#",
            color: "green-text-gradient",
        }, {
            name: "LuaU",
            color: "blue-text-gradient",
        }, {
            name: "HTML",
            color: "pink-text-gradient",
        },],
        image: vstra,
        sourceCodeLink: "https://github.com/oogx/lua-obfuscator",
    },
];

export { services, technologies, experiences, testimonials, projects };