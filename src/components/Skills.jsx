import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaJs, FaReact, FaDocker } from "react-icons/fa";
import { SiFastapi, SiKubernetes, SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Python", icon: <FaPython size={50} className="text-inherit" /> },
    { id: 2, name: "JavaScript", icon: <FaJs size={50} className="text-inherit" /> },
    { id: 3, name: "React", icon: <FaReact size={50} className="text-inherit" /> },
    { id: 4, name: "FastAPI", icon: <SiFastapi size={50} className="text-inherit" /> },
    { id: 5, name: "Machine Learning", icon: <SiTensorflow size={50} className="text-inherit" /> },
    { id: 6, name: "Deep Learning", icon: <SiPytorch size={50} className="text-inherit" /> },
    { id: 7, name: "Gen AI", icon: <SiOpenai size={50} className="text-inherit" /> },
    { id: 8, name: "Agentic AI", icon: <GiArtificialIntelligence size={50} className="text-inherit" /> },
    { id: 9, name: "Docker", icon: <FaDocker size={50} className="text-inherit" /> },
    { id: 10, name: "Kubernetes", icon: <SiKubernetes size={50} className="text-inherit" /> },
  ]);

  return (
    <div className="mt-3 lg:mt-16 mb-20" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
