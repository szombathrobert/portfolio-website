"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
    const roles = ["Webfejlesztő.", "Windows Sysadmin.", "Adatbázis Kezelő."];
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            setText((prev) =>
                isDeleting
                    ? currentRole.substring(0, prev.length - 1)
                    : currentRole.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            }
            else if (isDeleting && text === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-midnight">

            <div className="absolute inset-0 bg-cyber-grid" />
            <div className="scanline" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electricBlue/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bloodOrange/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-4xl w-full p-8 md:p-12 mt-16 bg-[#0a0f1c]/60 backdrop-blur-xl border border-zinc-700/50 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.1)]"
            >
                <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-bloodOrange/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-electricBlue/80"></div>
                </div>

                <div className="text-center mt-6 space-y-6">
                    <div className="inline-block px-4 py-1 bg-black/50 border border-zinc-800 text-electricBlue font-mono text-xs md:text-sm rounded mb-2">
                        C:\Users\Administrator&gt; whoami
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Szombath <span className="text-electricBlue glitch-text cursor-crosshair transition-colors hover:text-white">Róbert</span>
                    </h1>

                    <div className="h-8 md:h-10">
                        <p className="text-xl md:text-3xl font-mono text-white font-bold tracking-wide">
                            {text}<motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-4 h-8 bg-bloodOrange ml-2 align-middle shadow-[0_0_10px_rgba(255,69,0,0.8)]"
                            />
                        </p>
                    </div>

                    <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed pt-4 border-t border-zinc-800/50">
                        Letisztult webes megoldásokat és betonbiztos Windows szerver-infrastruktúrát építek.
                        Szeretem a <strong className="text-white">tiszta kódot</strong>, a <strong className="text-electricBlue">modern témákat</strong> és a maximális rendszerteljesítményt.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <a href="#munkak" className="group relative px-10 py-4 bg-bloodOrange text-white font-bold tracking-widest uppercase text-sm rounded cursor-pointer w-full sm:w-auto text-center shadow-[0_0_20px_rgba(255,69,0,0.4)] hover:shadow-[0_0_40px_rgba(255,69,0,0.6)] hover:-translate-y-1 transition-all duration-300">
                            Munkáim
                        </a>
                        <a href="#kapcsolat" className="group relative px-10 py-4 bg-transparent text-electricBlue font-bold tracking-widest uppercase text-sm rounded cursor-pointer w-full sm:w-auto text-center border-2 border-electricBlue/50 hover:border-electricBlue hover:bg-electricBlue/10 transition-all duration-300">
                            Kapcsolat
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}