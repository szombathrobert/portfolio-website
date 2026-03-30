"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-electricBlue/20 shadow-[0_4px_30px_rgba(6,182,212,0.1)]"
        >
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                <a href="#" className="text-2xl font-black text-white tracking-wider cursor-pointer font-mono">
                    SZ<span className="text-electricBlue drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">_</span>R
                </a>

                <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-zinc-400">
                    <a href="#rolam" className="hover:text-electricBlue hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all cursor-pointer">Rólam</a>
                    <a href="#munkak" className="hover:text-electricBlue hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all cursor-pointer">Munkáim</a>
                    <a href="#kapcsolat" className="hover:text-electricBlue hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all cursor-pointer">Kapcsolat</a>
                </div>

                <div className="hidden md:block">
                    <a href="#kapcsolat" className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase bg-transparent border border-electricBlue/50 text-electricBlue hover:bg-electricBlue hover:text-midnight hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] rounded transition-all cursor-pointer">
                        Lépj velem kapcsolatba
                    </a>
                </div>

            </div>
        </motion.nav>
    );
}