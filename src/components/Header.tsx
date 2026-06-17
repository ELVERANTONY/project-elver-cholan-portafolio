'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
{ href: '/', label: 'Inicio' },
{ href: '/projects', label: 'Proyectos' },
{ href: '/about', label: 'Sobre Mí' },
{ href: '/contact', label: 'Contacto' },
];

export default function Header() {
const [mobileOpen, setMobileOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 20);
window.addEventListener('scroll', onScroll);
return () => window.removeEventListener('scroll', onScroll);
}, []);

return (
<header
className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
scrolled
? 'border-b border-white/[0.06] bg-[#0B0B0F]/80 backdrop-blur-2xl'
: 'bg-transparent'
}`}
>
<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
<Link
href="/"
className="group relative text-xl font-bold tracking-tighter"
>
<span style={{ color: '#00E5C3' }}>AC</span>
<span className="text-white/20">.</span>
</Link>

<nav className="hidden items-center gap-8 md:flex">
{navLinks.map((link) => (
<Link
key={link.href}
href={link.href}
className="relative text-sm font-medium text-zinc-400 transition-colors hover:text-white"
>
{link.label}
</Link>
))}
</nav>

<button
onClick={() => setMobileOpen(!mobileOpen)}
className="flex items-center justify-center md:hidden"
aria-label="Toggle menu"
>
{mobileOpen ? (
<X className="h-5 w-5 text-zinc-400" />
) : (
<Menu className="h-5 w-5 text-zinc-400" />
)}
</button>
</div>

{mobileOpen && (
<div className="border-t border-white/[0.06] bg-[#0B0B0F]/95 px-6 pb-6 pt-4 backdrop-blur-2xl md:hidden">
{navLinks.map((link) => (
<Link
key={link.href}
href={link.href}
onClick={() => setMobileOpen(false)}
className="block py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
>
{link.label}
</Link>
))}
</div>
)}
</header>
);
}
