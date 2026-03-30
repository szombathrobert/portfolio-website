export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-800/50 bg-midnight py-8 text-center text-zinc-500 text-sm font-mono">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© {currentYear} Szombath Róbert. Minden jog fenntartva.</p>
                <p>Built with <span className="text-electricBlue">Next.js</span> & <span className="text-electricBlue">Tailwind</span>.</p>
            </div>
        </footer>
    );
}