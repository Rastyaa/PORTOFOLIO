# Porto 2 — Sattyatma

Ultra-premium portfolio: Next.js 15 (static export) · Tailwind CSS v4 · Framer Motion · GSAP ScrollTrigger · React Three Fiber · Lenis smooth scroll.

## Menjalankan

```bash
npm install
npm run dev      # development di http://localhost:3000
npm run build    # static export ke folder out/
```

## Struktur

- `src/lib/data.js` — semua konten (profil, project, skill, testimoni). Edit di sini.
- `src/sections/` — section halaman (Hero, About, Skills, Projects, FeaturedMacbook, TechOrbit, Testimonials, Contact, Footer).
- `src/components/three/` — model 3D MacBook/iPhone + canvas.
- `public/projects/` — screenshot project untuk layar device 3D.

## Catatan

- Testimoni di `data.js` masih placeholder — ganti dengan testimoni asli.
- `profile.resumeUrl` masih `#` — isi link CV.
- Font (Clash Display, Satoshi, General Sans) dimuat dari Fontshare CDN.
- Deploy: hasil `npm run build` di `out/` bisa langsung ke GitHub Pages/Vercel/Netlify.
