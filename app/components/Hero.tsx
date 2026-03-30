"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bloodOrange/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl w-full text-center space-y-8 pb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight"
                >
                    Szombath <span className="text-bloodOrange drop-shadow-lg">Róbert</span>
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
                    <a href="#munkak" className="px-8 py-3 bg-bloodOrange text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300 w-full sm:w-auto text-center cursor-pointer shadow-lg shadow-bloodOrange/20">
                        Munkáim
                    </a>
                    <a href="https://github.com/szombathrobert4" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold rounded-md hover:border-zinc-500 hover:text-white transition-colors duration-300 w-full sm:w-auto text-center cursor-pointer">
                        GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}