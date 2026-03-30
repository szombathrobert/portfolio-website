"use client";

import { motion } from "framer-motion";

export default function About() {
    const hobbies = [
        { name: "Motorozás", desc: "A kódolás utáni tökéletes hobbi." },
        { name: "Horror Filmek", desc: "Ahol a feszültség szórakoztat." },
        { name: "Metál Zene", desc: "A legjobb háttérzaj a fókuszhoz." },
        { name: "Gaming", desc: "Kikapcsolódás és inspiráció egyben." },
        { name: "Edzés", desc: "Nem csak fejben, de testben is fontos az erőnlét." },
        { name: "Főzés", desc: "A konyhában is kísérletezek nem csak a kódolásban." },
    ];

    return (
        <section id="rolam" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-bloodOrange pl-4"
            >
                Rólam
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 text-zinc-400 leading-relaxed"
                >
                    <p className="text-lg">
                        Szia! Szombath Róbert vagyok, egy haladó front-end és full-stack fejlesztő. A célom mindig az, hogy olyan weblapokat építsek, amik nem csak jól néznek ki, de technológiailag is a topon vannak, ügyelve a gyorsaságra és a stabilitásra.
                    </p>
                    <p>
                        Tapasztalatom van a modern <strong>ReactJS</strong> ökoszisztémában, a <strong>Next.js</strong> keretrendszerben, és igyekszek kiismerni magam a <strong>Node.js</strong> backend világában is. Szeretem a tiszta, karbantartható kódot és a letisztult, modern dizájnokat.
                    </p>
                    <p>
                        Hiszek abban, hogy egy jó weboldal olyan, mint egy jól összerakott gép: minden alkatrésznek megvan a pontos helye és funkciója, hogy a végeredmény hibátlanul működjön.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={hobby.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-bloodOrange/50 transition-colors"
                        >
                            <h3 className="text-white font-bold mb-1">{hobby.name}</h3>
                            <p className="text-xs text-zinc-500">{hobby.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}