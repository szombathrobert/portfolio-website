export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-800/50 bg-zinc-950 py-8 text-center text-zinc-500 text-sm">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© {currentYear} Szombath Róbert. Minden jog fenntartva.</p>
                <p>Next.js & Tailwind CSS használatával építve.</p>
            </div>
        </footer>
    );
}