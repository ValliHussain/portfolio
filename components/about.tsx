"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate web developer with a strong proficiency in the MERN
        (MongoDB, Express.js, React.js, Node.js) stack. My enthusiasm lies in
        designing and implementing responsive and dynamic web applications,
        coupled with a knack for problem-solving.
      </p>

      <p>
        While not coding, I enjoy playing video games and creating paintings,
        along with sketching. I also enjoy learning new things and am currently
        focused on improving my sketching skills.
      </p>
    </motion.section>
  );
}
