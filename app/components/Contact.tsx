"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    const socials = [
        {
            name: "Email",
            link: "mailto:szombathrobert4@gmail.com",
            label: "Írj e-mailt bátran",
            icon: faEnvelope
        },
        {
            name: "GitHub",
            link: "https://github.com/szombathrobert",
            label: "Projektjeim kódrészeit itt éred el",
            icon: faGithub
        },
        {
            name: "Instagram",
            link: "https://instagram.com/a-te-neved",
            label: "Instagramon itt érsz el",
            icon: faInstagram
        },
        {
            name: "Facebook",
            link: "https://facebook.com/a-te-neved",
            label: "Facebookon itt érsz el",
            icon: faFacebook
        },
    ];

    return (
        <section id="kapcsolat" className="max-w-6xl mx-auto px-6 py-32 relative z-10 text-center">

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold mb-6"
            >
                Lépjünk <span className="text-bloodOrange">Kapcsolatba</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed"
            >
                Van egy jó ötleted, egy projekted, de nem tudod, hogy kell kivitelezni, vagy esetleg nincs rá időd? Lépj kapcsolatba velem valamilyen formában és megbeszéljük!
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
                        className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-bloodOrange/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col items-center shadow-xl hover:shadow-bloodOrange/5"
                    >
                        <div className="text-5xl text-zinc-600 group-hover:text-bloodOrange transition-colors duration-300 mb-6">
                            <FontAwesomeIcon icon={social.icon} />
                        </div>

                        <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-2">
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