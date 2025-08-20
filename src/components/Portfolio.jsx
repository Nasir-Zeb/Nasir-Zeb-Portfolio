import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sun, Moon } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const projects = [
    { title: 'Hafiz Foods Ad', category: 'Commercial', videoUrl: 'https://www.youtube.com/embed/TODO', thumb: 'https://via.placeholder.com/300x200?text=Hafiz+Foods' },
    { title: 'Makhan Malai Reel', category: 'Social Media', videoUrl: 'https://www.youtube.com/embed/TODO', thumb: 'https://via.placeholder.com/300x200?text=Makhan+Malai' },
    { title: 'Tourism Department News', category: 'News', videoUrl: 'https://www.youtube.com/embed/TODO', thumb: 'https://via.placeholder.com/300x200?text=Tourism+News' },
    { title: 'Prime Minister Laptop Scheme Documentary', category: 'Documentary', videoUrl: 'https://www.youtube.com/embed/TODO', thumb: 'https://via.placeholder.com/300x200?text=PM+Laptop+Scheme' },
    { title: 'Toolistan YouTube Video', category: 'YouTube', videoUrl: 'https://www.youtube.com/embed/TODO', thumb: 'https://via.placeholder.com/300x200?text=Toolistan' },
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">

        {/* Hero */}
        <section className="flex flex-col items-center text-center py-20 bg-gradient-to-b from-red-500 to-red-700 text-white">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
            Video Editor & Storyteller
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl mb-6">
            Creating impactful visuals for commercials, documentaries, news stories, and YouTube content.
          </motion.p>
          <motion.button whileHover={{ scale: 1.05 }} onClick={() => setLightbox('https://www.youtube.com/embed/TODO')} className="bg-white text-red-600 px-6 py-3 rounded-full font-bold flex items-center gap-2">
            <Play size={18} /> Watch Showreel
          </motion.button>
        </section>

        {/* Projects */}
        <section id="projects" className="px-6 py-16">
          <h3 className="text-3xl font-bold mb-6 text-center">Projects</h3>
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full border ${filter === cat ? 'bg-red-600 text-white' : 'bg-transparent'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.filter(p => filter === 'All' || p.category === filter).map((p, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <img src={p.thumb} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold">{p.title}</h4>
                  <p className="text-sm text-gray-500">{p.category}</p>
                  <button onClick={() => setLightbox(p.videoUrl)} className="mt-2 text-red-600 hover:underline">Watch</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightbox && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl">
              <button onClick={() => setLightbox(null)} className="absolute -top-10 right-0 text-white text-2xl">&times;</button>
              <iframe width="100%" height="500" src={lightbox} title="Video player" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}