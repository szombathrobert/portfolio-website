import { projectsData } from "../../Data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {

    const resolvedParams = await params;
    const project = projectsData.find((p) => p.id === resolvedParams.id);

    if (!project) {
        return notFound();
    }

    return (
        <main className="relative min-h-screen bg-midnight text-zinc-50 font-sans selection:bg-electricBlue selection:text-white flex flex-col overflow-hidden">

            <div className="fixed inset-0 bg-cyber-grid pointer-events-none z-0" />
            <div className="fixed inset-0 scanline pointer-events-none z-0" />

            <div className="fixed top-0 left-1/4 w-96 h-96 bg-electricBlue/10 blur-[150px] rounded-full pointer-events-none z-0" />

            <Navbar />

            <div className="relative z-10 grow max-w-4xl mx-auto w-full px-6 pt-32 pb-24">

                <Link href="/#munkak" className="inline-flex items-center text-electricBlue hover:text-white hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all mb-8 cursor-pointer font-mono text-sm uppercase tracking-widest">
                    <span className="mr-2">&lt;</span> cd .. / Munkáim
                </Link>

                {/* Címsor */}
                <h1 className="text-5xl md:text-6xl font-black mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {project.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-midnight/80 text-zinc-300 text-xs font-mono rounded border border-zinc-700/50 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="relative w-full aspect-video bg-midnight rounded-xl overflow-hidden mb-16 border border-zinc-800/80 shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-midnight/50 to-transparent pointer-events-none" />
                </div>

                <div className="flex flex-col gap-12 mb-16">

                    <div>
                        <h2 className="text-3xl font-black mb-6 text-white font-mono">
                            <span className="text-electricBlue drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">{'//'}</span> A projektről
                        </h2>
                        <p className="text-zinc-300 leading-relaxed text-lg border-l-2 border-zinc-800 pl-4">
                            {project.fullDescription}
                        </p>
                    </div>

                    <div className="bg-[#0a0f1c]/60 backdrop-blur-md p-8 rounded-xl border border-zinc-700/50 shadow-[0_0_30px_rgba(6,182,212,0.05)]">
                        <h3 className="text-2xl font-black mb-6 text-white border-b border-zinc-800/80 pb-4 font-mono">
                            &gt; A megrendelő kérései
                        </h3>
                        <ul className="space-y-4 pt-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-4 group">
                                    <span className="text-bloodOrange text-xl mt-0.5 shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(255,69,0,0.8)] transition-all">✔</span>
                                    <span className="text-zinc-300 text-lg leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row gap-6 border-t border-zinc-800/80 pt-10">

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-bloodOrange text-white font-bold tracking-widest uppercase text-sm rounded cursor-pointer w-full sm:w-auto text-center shadow-[0_0_20px_rgba(255,69,0,0.4)] hover:shadow-[0_0_40px_rgba(255,69,0,0.6)] hover:-translate-y-1 transition-all duration-300"
                    >
                        Élő weboldal megtekintése
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-transparent text-electricBlue font-bold tracking-widest uppercase text-sm rounded cursor-pointer w-full sm:w-auto text-center border-2 border-electricBlue/50 hover:border-electricBlue hover:bg-electricBlue/10 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-300"
                    >
                        GitHub Repó megtekintése
                    </a>
                </div>

            </div>

            <Footer />
        </main>
    );
}