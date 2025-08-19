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
          I'm an <span className="font-semibold">AI/ML Developer</span> passionate about building intelligent systems that
          combine <span className="font-semibold">data, machine learning, and deep learning</span> to solve real-world problems. 
          I love transforming complex datasets into actionable insights and scalable applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My journey in AI started with a strong foundation in <span className="font-semibold">Python, TensorFlow, PyTorch, and NLP</span>.
          Over time, I’ve built projects ranging from <span className="font-semibold">medical chatbots</span> and 
          <span className="font-semibold">waste classification systems</span> to <span className="font-semibold">AI-powered SaaS platforms</span>.
          I enjoy applying research-driven techniques to create practical, impactful solutions.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond coding, I actively explore the latest in <span className="font-semibold">Generative AI, LLMs, and computer vision</span>.
          I also share my learnings with the community and keep up with the evolving AI landscape.
          Feel free to connect with me on <span className="font-semibold">LinkedIn</span> or check out my open-source projects on <span className="font-semibold">GitHub</span>.
        </p>
      </motion.div>
    </div>
  );
}
