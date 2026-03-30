"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center px-6">

      <div className="max-w-3xl w-full text-center space-y-8">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Szombath <span className="text-bloodOrange">Róbert</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Letisztult webes megoldásokat építek modern technológiákkal. React és Next.js fókuszú fejlesztő vagyok, aki szereti a precíz kódot és a gyors teljesítményt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button className="px-8 py-3 bg-bloodOrange text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300 w-full sm:w-auto cursor-pointer">
            Munkáim
          </button>
          <button className="px-8 py-3 bg-transparent border border-zinc-700 text-zinc-300 font-semibold rounded-md hover:border-zinc-500 hover:text-white transition-colors duration-300 w-full sm:w-auto cursor-pointer">
            Kapcsolat
          </button>
        </motion.div>

      </div>
    </main>
  );
}