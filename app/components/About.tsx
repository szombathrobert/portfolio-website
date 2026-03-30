"use client";

import { motion } from "framer-motion";

export default function About() {
    const hobbies = [
        { name: "Szerverek & Hálózatok", desc: "Windows Server architektúrák stabil üzemeltetése." },
        { name: "Motorozás", desc: "A munkavégzés előtti és utáni tökéletes feltöltődés az aszfalton." },
        { name: "Horror & Metál", desc: "Ahol a feszültség és a zúzás inspirál." },
        { name: "Tetoválások", desc: "Vizuális művészet és önkifejezés a bőrön." },
        { name: "Főzés", desc: "Kreativitás a konyhában." },
        { name: "Gaming", desc: "Egy kis kikapcsolódás a virtuális terekben." },
        { name: "Edzés", desc: "Nem csak fejben de testben is fontos a készenlét." }
    ];

    return (
        <section id="rolam" className="max-w-6xl mx-auto px-6 py-32 relative z-10">

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center gap-4">
                    <span className="text-electricBlue">{'//'}</span> Rólam
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-bloodOrange to-transparent mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 text-zinc-400 text-lg leading-relaxed"
                >
                    <p>
                        Szombath Róbert vagyok. A webfejlesztés számomra nem csak a dizájnról szól, hanem arról is, hogy a háttérben futó gépezet is hibátlan legyen.
                    </p>
                    <p>
                        Mivel <strong className="text-zinc-200">Windows rendszergazdaként</strong> is dolgozom, pontosan értem, hogyan kell karbantartani egy olyan infrastruktúrát, ami stabilan kiszolgálja a felhasználókat. A programozói oldalon a <span className="text-electricBlue font-bold">ReactJS</span> és a <span className="text-electricBlue font-bold">Next.js</span> a fegyvereim: ezekkel építek gyors, reszponzív és modern weboldalakat.
                    </p>
                    <p className="border-l-2 border-bloodOrange pl-4 italic text-zinc-500">
                        "A jó weboldal olyan, mint egy jól összerakott motor: tiszta, gyors és nincsenek benne felesleges alkatrészek."
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={hobby.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group p-5 bg-midnight/80 backdrop-blur-sm border border-zinc-800/80 rounded-xl hover:border-electricBlue/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:-translate-y-1"
                        >
                            <h3 className="text-white font-bold mb-2 group-hover:text-electricBlue transition-colors">{hobby.name}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{hobby.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}