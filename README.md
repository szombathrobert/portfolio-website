<div align="center">

# 🖥️ Szombath Róbert | Digital Portfolio

**Windows Sysadmin & Webfejlesztő**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animációk-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Biztonság-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

*„A jó kód olyan, mint egy jól megépített szerverpark: tiszta, gyors és nincsenek benne felesleges elemek.”*

[Élő weboldal megtekintése](https://szombath-robert-portfolio.vercel.app/) </div>

---

## 🌌 A Projektről

Ez a weblap a digitális névjegykártyám. A cél egy olyan portfólió létrehozása volt, amely tökéletesen tükrözi a szakmai profilomat (Windows szerverek üzemeltetése és modern webfejlesztés), valamint a személyiségemet. 

A dizájn egy egyedi **"Neon Terminal & Cyber-Grid"** koncepcióra épül: mély, sötétkék/fekete tónusok, neon kék (cyan) és vérnarancs (blood orange) kiemelésekkel, tejüveg (glassmorphism) effektekkel és CRT monitorokat idéző finom animációkkal.

### ⚡ Főbb Funkciók és Kiemelt Megoldások

- **Cyber-Grid & Scanline UI:** Tiszta CSS-ből generált dinamikus háttér és monitor-csíkozás, ami nem terheli a böngészőt.
- **Dinamikus Routing (Next.js App Router):** A projektek aloldalai (`/projects/[id]`) egyetlen sablonból, adatvezérelten generálódnak.
- **GPU-Gyorsított Animációk:** A `framer-motion` segítségével megírt beúszó és "glitch" effektek, amelyek 60 FPS-sel futnak anélkül, hogy a CPU-t izzasztanák.
- **Maximális Teljesítmény:** `.webp` formátumú képek használata és szerveroldali (RSC) renderelés a villámgyors betöltésért (Lighthouse 100/100 célzás).
- **Glassmorphism:** Modern, áttetsző "tejüveg" terminál ablakok a letisztult tartalmi elrendezésért.

---

## 🛠️ Tech Stack

A motorháztető alatt a legmodernebb webes technológiák dolgoznak:

- **Keretrendszer:** [Next.js (App Router)](https://nextjs.org/)
- **Stílus:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animációk:** [Framer Motion](https://www.framer.com/motion/)
- **Nyelv:** [TypeScript](https://www.typescriptlang.org/)
- **Ikonok:** [FontAwesome (React)](https://fontawesome.com/)
- **Deploy:** [Vercel](https://vercel.com/)

---

## ⚙️ Futtatás Lokálisan (Getting Started)

Ha szeretnéd a saját gépeden is kipróbálni vagy továbbfejleszteni a kódot, kövesd ezeket a lépéseket:

1. **Tároló klónozása:**
   ```bash
   git clone [https://github.com/szombathrobert/portfolio-website](https://github.com/szombathrobert/portfolio-website.git)