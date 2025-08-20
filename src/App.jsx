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
        
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800">
          <h1 className="text-xl font-bold">Nasir Zeb</h1>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-4">
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#services" className="hover:underline">Services</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

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

        {/* Services */}
        <section id="services" className="px-6 py-16 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-3xl font-bold mb-6 text-center">Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h4 className="font-bold mb-2">Commercial Editing</h4>
              <p>High-impact ads for brands with story-driven visuals.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h4 className="font-bold mb-2">Social Media Content</h4>
              <p>Short-form reels, promos, and branded videos.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h4 className="font-bold mb-2">Documentary & News</h4>
              <p>Informative and engaging storytelling for reports and features.</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-6 py-16">
          <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
          <div className="max-w-3xl mx-auto text-center">
            <p>
              I’m Nasir Zeb, a passionate video editor and storyteller with experience in commercials, documentaries, news, and online content.
              Skilled in Adobe Premiere Pro, After Effects, and DaVinci Resolve, I bring ideas to life with compelling visuals.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-16 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-3xl font-bold mb-6 text-center">Contact</h3>
          <form action="mailto:YOUR_EMAIL@example.com" method="POST" encType="text/plain" className="max-w-lg mx-auto grid gap-4">
            <input type="text" name="name" placeholder="Your Name" className="p-3 rounded border dark:bg-gray-700" required />
            <input type="email" name="email" placeholder="Your Email" className="p-3 rounded border dark:bg-gray-700" required />
            <textarea name="message" placeholder="Your Message" rows="5" className="p-3 rounded border dark:bg-gray-700" required></textarea>
            <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded">Send</button>
          </form>
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
