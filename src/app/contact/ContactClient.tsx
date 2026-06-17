import { FadeUp } from '@/components/FadeUp';
import { personalInfo } from '@/lib/data';
import { Mail, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactClient() {
return (
<div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
<div style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}>
<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contacto</h1>
<p className="mt-3 max-w-lg text-base text-zinc-400">
Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en escribirme.
</p>
</div>

<div className="mt-12 grid gap-8 lg:grid-cols-5">
<FadeUp delay={0.2}>
<div className="space-y-4 lg:col-span-2">
<div className="group rounded-xl border border-white/[0.06] bg-[#15161A] p-5 transition-all duration-300 hover:border-[#00E5C3]/30">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(0,229,195,0.1)' }}>
<Mail className="h-4 w-4" style={{ color: '#00E5C3' }} />
</div>
<div>
<p className="text-xs font-medium text-zinc-400">Correo</p>
<a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
{personalInfo.email}
</a>
</div>
</div>
</div>

<div className="group rounded-xl border border-white/[0.06] bg-[#15161A] p-5 transition-all duration-300 hover:border-[#FF7A00]/30">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(255,122,0,0.1)' }}>
<svg className="h-4 w-4" fill="#FF7A00" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
</div>
<div>
<p className="text-xs font-medium text-zinc-400">GitHub</p>
<Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
{personalInfo.github.replace('https://', '')}
</Link>
</div>
</div>
</div>

<div className="group rounded-xl border border-white/[0.06] bg-[#15161A] p-5 transition-all duration-300 hover:border-[#FF5A5F]/30">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(255,90,95,0.1)' }}>
<svg className="h-4 w-4" fill="#FF5A5F" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
</div>
<div>
<p className="text-xs font-medium text-zinc-400">LinkedIn</p>
<Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
{personalInfo.linkedin.replace('https://', '')}
</Link>
</div>
</div>
</div>
</div>
</FadeUp>

<FadeUp delay={0.3}>
<div className="lg:col-span-3">
<div className="rounded-xl border border-white/[0.06] bg-[#15161A] p-6 sm:p-8">
<h2 className="mb-6 text-lg font-semibold">Envíame un mensaje</h2>
<form className="space-y-5">
<div>
<label htmlFor="name" className="block text-sm font-medium text-zinc-400">
Nombre
</label>
<input
type="text"
id="name"
name="name"
required
className="mt-1.5 block w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#00E5C3]/50 focus:outline-none focus:ring-2 focus:ring-[#00E5C3]/20"
placeholder="Tu nombre"
/>
</div>

<div>
<label htmlFor="email" className="block text-sm font-medium text-zinc-400">
Correo
</label>
<input
type="email"
id="email"
name="email"
required
className="mt-1.5 block w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#00E5C3]/50 focus:outline-none focus:ring-2 focus:ring-[#00E5C3]/20"
placeholder="tu@correo.com"
/>
</div>

<div>
<label htmlFor="message" className="block text-sm font-medium text-zinc-400">
Mensaje
</label>
<textarea
id="message"
name="message"
rows={5}
required
className="mt-1.5 block w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#00E5C3]/50 focus:outline-none focus:ring-2 focus:ring-[#00E5C3]/20 resize-none"
placeholder="Escribe tu mensaje aquí..."
/>
</div>

<button
type="submit"
aria-label="Enviar mensaje"
className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.01]"
style={{ background: 'linear-gradient(135deg, #00E5C3 0%, #FF7A00 100%)', boxShadow: '0 4px 12px rgba(0,229,195,0.15)' }}
>
<Send className="h-4 w-4" />
Enviar mensaje
</button>
</form>
</div>
</div>
</FadeUp>
</div>
</div>
);
}
