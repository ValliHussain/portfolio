import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import home from "@/public/home.png";
import project from "@/public/project2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation",
    location: "Visakhapatnam, AP, India",
    description:
      "I've completed my graduation in Information Technology with overall CGPA of 8.3.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Intermediate",
    location: "Visakhapatnam, AP, India",
    description:
      "I've completed my intermediate Sri Gayatri Junior College with overall marks of 902",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
  {
    title: "I - X Schooling",
    location: "Visakhapatnam, AP, India",
    description:
      "At Sri Sarada Vidya Nilayam, I completed my schooling from I to Xstd, achieving a notable 9.7 CGPA in Xstd.",
    icon: React.createElement(FaReact),
    date: "2018",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduation",
//     location: "AP, India",
//     description:
//       "I've completed my graduation in Information Technology with overall CGPA of 8.3. ",
//     icon: React.createElement(LuGraduationCap),
//     date: "2020-2024",
//   },
//   {
//     title: "Intermediate",
//     location: "AP, India",
//     description:
//       "I've completed my intermediate Sri Gayatri Junior College with overall marks of 902 ",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Schooling",
//     location: "Visakhapatnam, AP, India",
//     description:
//       "I've completed my intermediate Sri Gayatri Junior College with CGPA of 9.7.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Querisphere",
    description:
      "Querisphere revolutionizes student engagement, offering intuitive modules that foster collaborative learning and vibrant community interaction.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Express", "Node.js"],
    imageUrl: home,
  },
  {
    title: "Watto Meter",
    description:
      "Our project aims to conserve electricity by providing users with Jio and Airtel-style data usage alerts, keeping them engaged in monitoring their consumption.",
    tags: ["React", "MongoDB", "Tailwind", "Redux", "Express", "Node.js"],
    imageUrl: project,
  },
] as const;

export const skillsData = [
  "C",
  "Cpp",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Django",
  "Machine Learning",
  "Deep Learning",
  "Pandas",
  "Numpy",
  "SQL",
] as const;
