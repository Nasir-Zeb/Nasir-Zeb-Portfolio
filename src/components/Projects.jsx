import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Reel",
    description: "Intro video showcasing my work.",
    video: "/intro.mp4",
  },
  {
    title: "E-Commerce Demo",
    description: "Full-stack store demo.",
    video: "/ecommerce.mp4",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
