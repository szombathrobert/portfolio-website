"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    const socials = [
        { name: "Email", link: "mailto:szombathrobert4@gmail.com", label: "Írj e-mailt bátran", icon: faEnvelope },
        { name: "GitHub", link: "https://github.com/szombathrobert", label: "Github profilom", icon: faGithub },
        { name: "Instagram", link: "https://instagram.com/cut.up.my.fxcking.neck", label: "Instagram profilom", icon: faInstagram },
        { name: "Facebook", link: "https://www.facebook.com/people/R%C3%B3bert-Szombath/pfbid0MsF6uAxCEmBgM8Xxdm65C8iyGWv7NX3deRTmwxMvBmSPQwH6kKiLNJ4a1FYsMynfl/", label: "Facebook profilom", icon: faFacebook },
    ];

    return (
        <section id="kapcsolat" className="max-w-6xl mx-auto px-6 py-32 relative z-10 text-center">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center gap-4">
                    <span className="text-bloodOrange">{'//'}</span> Kapcsolat
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-electricBlue to-transparent mt-4" />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed"
            >
                Van egy jó ötleted, egy projekted és nem tudod hogy kell kivitelezni? Írj nekem e-mailt, vagy keress meg a közösségi platformokon!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.link}
                        target={social.name === "Email" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="group p-8 bg-midnight/80 backdrop-blur-sm border border-zinc-800/80 rounded-2xl hover:border-electricBlue/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col items-center shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                    >
                        <div className="text-5xl text-zinc-600 group-hover:text-electricBlue transition-all duration-300 mb-6 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]">
                            <FontAwesomeIcon icon={social.icon} />
                        </div>

                        <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">
                            {social.name}
                        </span>

                        <span className="text-zinc-200 font-medium break-all text-sm md:text-base">
                            {social.label}
                        </span>
                    </a>
                ))}
            </motion.div>

        </section>
    );
}