import React from "react";
import { motion } from "framer-motion";
import { IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            {/* === Animated Name === */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hello,{" "}
              <TypeAnimation
                sequence={[
                  "I am PRANAV KADAM",
                  1000,
                ]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>

            {/* === Fixed Cybersecurity Section === */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col leading-tight"
            >
              {/* First Line */}
              <span>
                <span className="font-extrabold">Cybersecurity</span>{" "}
                <span
                  className="text-white font-extrabold"
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  Enthusiast ,
                </span>
              </span>

              {/* Second Line */}
              <span>
                <span className="font-extrabold">Bypass </span>
                <span
                  className="text-white font-extrabold"
                  style={{ WebkitTextStroke: "1px black" }}
                >
                   Developer
                </span>
              </span>
            </motion.h2>

            {/* === Location Line === */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Based In <span className="font-extrabold">India.</span>
            </motion.h2>
          </motion.div>

          {/* === Description Paragraph === */}
          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about cybersecurity and system exploration, I specialize in ethical hacking, game modding, and building secure digital environments. I love experimenting with technology, finding creative solutions, and continuously expanding my technical expertise.
          </motion.p>

          {/* === Social Icons (updated) === */}
          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {/* Gmail (email) */}
            <motion.a
              href="mailto:iampranavkadam@gmail.com"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>

            {/* Instagram (replaced LinkedIn) */}
            <motion.a
              href="https://www.instagram.com/mr.pranav_0x?igsh=aG95MHFocTduaG50"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>

            {/* Telegram (replaced Twitter) */}
            <motion.a
              href="https://t.me/PRANAVxOP"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/pranavop45"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* === Right Side Image === */}
        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            className="h-full w-full"
            src="/assets/hero-vector.svg"
            alt="Hero Vector"
          />
        </motion.div>
      </div>
    </div>
  );
}
