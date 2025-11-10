import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

       <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
  I'm a passionate <b>Cybersecurity Enthusiast</b> and <b>Mod + Bypass Developer</b> who loves exploring the deeper side of technology. 
  I specialize in creating secure systems, customizing digital environments, and experimenting with innovative tools and techniques.
</p>

<p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
  My journey started with a curiosity for how systems work — from software to networks — 
  which evolved into a passion for <b>ethical hacking</b>, <b>game modding</b>, and <b>security-based development</b>. 
  I focus on learning continuously, improving my craft, and exploring new challenges in the cyber world.
</p>

<p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
  Apart from coding, I enjoy connecting with like-minded creators, experimenting with new tools, 
  and staying up-to-date with the latest in cybersecurity and innovation. 
  My goal is to turn creativity and logic into meaningful, secure, and high-impact digital experiences.
</p>

      </motion.div>
    </div>
  );
}
