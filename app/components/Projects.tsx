"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: "baba-piercing",
        title: "Baba Piercing",
        description: "Gyors és reszponzív weboldal, ami modern ReactJS alapokra épült.",
        link: "https://babapiercing.hu",
        image: "/projects/babapiercing.webp",
        tech: ["ReactJS", "Frontend"],
    },
    {
        id: "nyitott-ter",
        title: "Nyitott Tér Zsuzsával",
        description: "Komplexebb, full-stack megoldás. Next.js felel a gyors frontendért, Node.js pedig a megbízható backendért.",
        link: "https://nyitottter-zsuzskaval.hu",
        image: "/projects/nyitottter-zsuzskaval.webp",
        tech: ["Next.js", "Node.js"],
    },
    {
        id: "oxigenkamra",
        title: "Oxigénkamra",
        description: "Letisztult, teljesítményre optimalizált Next.js projekt a tökéletes felhasználói élményért.",
        link: "https://oxigenkamra.hu",
        image: "/projects/oxigenkamra.webp",
        tech: ["Next.js", "UI/UX"],
    },
];

export default function Projects() {
    return (
        <section id="munkak" className="max-w-6xl mx-auto px-6 py-24 relative z-10">

            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-bloodOrange pl-4"
            >
                Kiemelt Projektjeim
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group flex flex-col bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-bloodOrange/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-bloodOrange/10"
                    >
                        <div className="relative h-48 w-full bg-zinc-800 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </div>

                        <div className="flex flex-col flex-grow p-6">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bloodOrange transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-zinc-400 mb-6 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-zinc-950 text-zinc-300 text-xs font-medium rounded-full border border-zinc-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="flex-1 py-2 text-center text-sm font-semibold bg-bloodOrange text-white rounded hover:bg-orange-600 transition-colors"
                                >
                                    Bővebben
                                </Link>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 text-center text-sm font-semibold bg-transparent border border-zinc-700 text-zinc-300 rounded hover:border-zinc-500 hover:text-white transition-colors"
                                >
                                    Megtekintés
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}