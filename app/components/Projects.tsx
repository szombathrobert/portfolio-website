"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../Data";

export default function Projects() {
    return (
        <section id="munkak" className="max-w-6xl mx-auto px-6 py-32 relative z-10">

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center gap-4">
                    <span className="text-electricBlue">{'//'}</span> Kiemelt Projektjeim
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-bloodOrange to-transparent mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group flex flex-col bg-midnight/80 backdrop-blur-sm rounded-xl border border-zinc-800/80 hover:border-electricBlue/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-2"
                    >
                        <div className="relative h-48 w-full bg-midnight overflow-hidden border-b border-zinc-800/80">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-midnight/90 to-transparent" />
                        </div>

                        <div className="flex flex-col grow p-6">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electricBlue transition-colors drop-shadow-md">
                                {project.title}
                            </h3>
                            <p className="text-zinc-400 mb-6 text-sm leading-relaxed grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-midnight text-zinc-300 text-xs font-mono rounded-full border border-zinc-800/80 group-hover:border-electricBlue/30 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="flex-1 py-2 text-center text-sm font-bold tracking-wider uppercase bg-bloodOrange text-white rounded hover:bg-orange-600 transition-colors shadow-[0_0_10px_rgba(255,69,0,0.2)]"
                                >
                                    Bővebben
                                </Link>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 text-center text-sm font-bold tracking-wider uppercase bg-transparent border border-electricBlue/50 text-electricBlue rounded hover:bg-electricBlue hover:text-midnight transition-all"
                                >
                                    Élő Link
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}