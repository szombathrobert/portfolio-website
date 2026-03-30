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
        <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-bloodOrange selection:text-white flex flex-col">
            <Navbar />

            <div className="grow max-w-4xl mx-auto w-full px-6 pt-32 pb-24">

                <Link href="/#munkak" className="inline-flex items-center text-zinc-400 hover:text-bloodOrange transition-colors mb-8 cursor-pointer">
                    <span className="mr-2">←</span> Vissza a projektekhez
                </Link>

                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{project.title}</h1>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-zinc-900 text-bloodOrange text-sm font-medium rounded-full border border-zinc-800">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl shadow-bloodOrange/5">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>

                <div className="flex flex-col gap-10 mb-12">

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">A projektről</h2>
                        <p className="text-zinc-300 leading-relaxed text-lg">
                            {project.fullDescription}
                        </p>
                    </div>

                    <div className="bg-zinc-900/30 p-8 rounded-xl border border-zinc-800/50">
                        <h3 className="text-2xl font-bold mb-6 text-white border-b border-zinc-800 pb-4">A megrendelő kérései</h3>
                        <ul className="space-y-4">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="text-bloodOrange text-xl mt-0.5 shrink-0">✔</span>
                                    <span className="text-zinc-300 text-lg leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-t border-zinc-800 pt-8">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 text-center font-bold bg-bloodOrange text-white rounded-md hover:bg-orange-600 transition-colors cursor-pointer"
                    >
                        Élő weboldal megtekintése
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 text-center font-bold bg-zinc-900 border border-zinc-700 text-zinc-300 rounded-md hover:border-zinc-500 hover:text-white transition-colors cursor-pointer"
                    >
                        GitHub Repó megtekintése
                    </a>
                </div>

            </div>

            <Footer />
        </main>
    );
}