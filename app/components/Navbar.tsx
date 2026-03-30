"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50"
        >
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                <a href="#" className="text-xl font-bold text-white tracking-wider cursor-pointer">
                    SZ<span className="text-bloodOrange">R</span>
                </a>

                <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
                    <a href="#rolam" className="hover:text-bloodOrange transition-colors cursor-pointer">Rólam</a>
                    <a href="#munkak" className="hover:text-bloodOrange transition-colors cursor-pointer">Munkáim</a>
                    <a href="#kapcsolat" className="hover:text-bloodOrange transition-colors cursor-pointer">Kapcsolat</a>
                </div>

                <div className="hidden md:block">
                    <a href="#kapcsolat" className="px-4 py-2 text-sm bg-zinc-900 border border-zinc-700 hover:border-bloodOrange hover:text-white rounded-md transition-all cursor-pointer">
                        Beszélgessünk
                    </a>
                </div>

                <div className="md:hidden text-zinc-300">
                    <button className="p-2">☰</button>
                </div>

            </div>
        </motion.nav>
    );
}