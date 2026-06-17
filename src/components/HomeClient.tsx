import { FadeUp } from '@/components/FadeUp';
import Image from 'next/image';
import Link from 'next/link';
import {
ArrowRight, ExternalLink,
} from 'lucide-react';
import { Project } from '@/types';
import { TechIcon } from '@/components/TechIcons';

interface PersonalInfo {
name: string;
title: string;
description: string;
email: string;
github: string;
linkedin: string;
siteUrl: string;
avatar: string;
}

interface Props {
personalInfo: PersonalInfo;
featured: Project[];
}

const techStack = [
'Next.js', 'React', 'TypeScript', 'Node.js', 'NestJS',
'PostgreSQL', 'Docker', 'Firebase', 'Gemini AI', 'LangGraph',
];

export default function HomeClient({ personalInfo, featured }: Props) {
return (
<div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6">
<div className="grid gap-4 sm:grid-cols-12">
<FadeUp className="sm:col-span-12 sm:row-span-1 lg:col-span-3 lg:row-span-2">
<div className="group relative h-full rounded-2xl border border-white/[0.06] bg-[#15161A] p-6 transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-lg sm:p-8">
<div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00E5C3]/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

<div className="relative mx-auto mb-5 h-36 w-36 overflow-hidden rounded-xl border border-white/[0.08] sm:h-40 sm:w-40">
<div className="absolute -inset-2 rounded-xl bg-[#00E5C3]/20 blur-xl opacity-30" />
<div className="relative h-full w-full overflow-hidden rounded-xl">
<Image
src="/ANTONY.webp"
alt={personalInfo.name}
fill
quality={80}
className="object-cover transition-transform duration-500 group-hover:scale-105"
priority
sizes="160px"
/>
</div>
</div>

<div className="relative text-center">
                    <p className="text-xl font-bold tracking-tight">{personalInfo.name}</p>
<div className="mt-1 space-y-0.5">
<p className="text-xs font-medium" style={{ color: '#00E5C3' }}>Software Developer</p>
<p className="text-xs font-medium" style={{ color: '#FF7A00' }}>AI Developer</p>
<p className="text-xs font-medium" style={{ color: '#FF5A5F' }}>Full Stack Developer</p>
</div>

<div className="mt-5 flex justify-center gap-3">
<Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-zinc-400 transition-all hover:border-[#00E5C3]/30 hover:text-white hover:shadow-[#00E5C3]/10" aria-label="GitHub">
<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
</Link>
<Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-zinc-400 transition-all hover:border-[#FF7A00]/30 hover:text-white hover:shadow-[#FF7A00]/10" aria-label="LinkedIn">
<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
</Link>
<a href={`mailto:${personalInfo.email}`} className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-zinc-400 transition-all hover:border-[#FF5A5F]/30 hover:text-white hover:shadow-[#FF5A5F]/10" aria-label="Email">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
</a>
</div>

<div className="mt-6 space-y-2.5">
<Link
href="/projects"
className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-zinc-300 transition-all hover:border-[#00E5C3]/30 hover:bg-[#00E5C3]/5 hover:text-white"
>
Ver Proyectos
<ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" style={{ color: '#00E5C3' }} />
</Link>
<Link
href="/contact"
className="group flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium text-white transition-all hover:scale-[1.02]"
style={{ background: 'linear-gradient(135deg, #00E5C3 0%, #FF7A00 100%)' }}
>
Contactar
<ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
</Link>
</div>
</div>
</div>
</FadeUp>

<FadeUp delay={0.1} className="sm:col-span-12 lg:col-span-9">
<div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#15161A] p-6 transition-all duration-300 hover:border-white/[0.12] sm:p-8 lg:p-10">
<div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full blur-[80px]" style={{ background: 'rgba(0,229,195,0.08)' }} />
<div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-[80px]" style={{ background: 'rgba(255,122,0,0.06)' }} />

<div className="relative">
<p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
Hola, soy
</p>
<h1 className="text-5xl font-black leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl">
<span className="block">SOFTWARE</span>
<span className="block" style={{ color: '#00E5C3' }}>DEVELOPER</span>
<span className="block">&</span>
<span className="block" style={{ color: '#FF7A00' }}>AI BUILDER</span>
</h1>
<p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
Diseño y desarrollo aplicaciones web modernas, escalables y optimizadas para producción.
</p>

<div className="mt-7 flex flex-wrap gap-3">
<Link
href="/projects"
className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
style={{ background: 'linear-gradient(135deg, #00E5C3 0%, #00E5C3 100%)', boxShadow: '0 4px 12px rgba(0,229,195,0.15)' }}
>
Explorar Proyectos
<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>
<Link
href="/contact"
className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-400 transition-all hover:border-white/[0.15] hover:text-white"
>
Contactar
<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
</Link>
</div>
</div>
</div>
</FadeUp>

<FadeUp delay={0.2} className="sm:col-span-12 md:col-span-6 lg:col-span-4">
<div className="group relative h-full rounded-2xl border border-white/[0.06] bg-[#15161A] p-6 transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-lg sm:p-8">
<div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00E5C3]/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
<h2 className="relative text-base font-semibold tracking-tight">Sobre Mí</h2>
<p className="relative mt-3 text-sm leading-relaxed text-zinc-400">
{personalInfo.description}
</p>
<p className="relative mt-3 text-sm leading-relaxed text-zinc-400">
Me especializo en construir aplicaciones web full stack con React, Next.js y Node.js,
combinando diseño moderno con rendimiento optimizado. Apasionado por el código limpio,
la accesibilidad y experiencias de usuario excepcionales.
</p>
</div>
</FadeUp>

<FadeUp delay={0.25} className="sm:col-span-12 md:col-span-6 lg:col-span-5">
<div className="group relative h-full rounded-2xl border border-white/[0.06] bg-[#15161A] p-6 transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-lg sm:p-8">
<div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF7A00]/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
<h2 className="relative text-base font-semibold tracking-tight">Tech Stack</h2>
<div className="relative mt-4 grid grid-cols-2 gap-2">
{techStack.map((tech) => (
<div
key={tech}
className="flex items-center gap-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2.5 transition-all hover:bg-white/[0.05] hover:border-white/[0.1]"
>
<span className="flex h-6 w-6 items-center justify-center">
<TechIcon name={tech} className="h-5 w-5" />
</span>
<span className="text-xs font-medium text-zinc-300">{tech}</span>
</div>
))}
</div>
</div>
</FadeUp>

<FadeUp delay={0.3} className="sm:col-span-12 md:col-span-6 lg:col-span-3">
<div className="group relative h-full rounded-2xl border border-white/[0.06] bg-[#15161A] p-6 transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-lg sm:p-8">
<div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF5A5F]/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
<h2 className="relative text-base font-semibold tracking-tight">Estadísticas</h2>
<div className="relative mt-6 space-y-5">
<div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
<span className="text-xs text-zinc-400">Proyectos</span>
<span className="text-2xl font-bold" style={{ color: '#00E5C3' }}>5+</span>
</div>
<div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
<span className="text-xs text-zinc-400">Tecnologías</span>
<span className="text-2xl font-bold" style={{ color: '#FF7A00' }}>10+</span>
</div>
<div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
<span className="text-xs text-zinc-400">SEO Score</span>
<span className="text-2xl font-bold" style={{ color: '#00E5C3' }}>100%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">Lighthouse</span>
<span className="text-2xl font-bold" style={{ color: '#FF5A5F' }}>90+</span>
</div>
</div>
</div>
</FadeUp>
</div>

<section className="mt-8">
<FadeUp>
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold tracking-tight">Proyectos Destacados</h2>
<Link
href="/projects"
className="group flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-white"
style={{ color: '#00E5C3' }}
>
Ver todos
<ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
</Link>
</div>
</FadeUp>

<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
{featured.map((project, i) => (
<FadeUp key={project.slug} delay={i * 0.1}>
<ProjectCard project={project} index={i} />
</FadeUp>
))}
</div>
</section>

<section className="mt-8">
<FadeUp delay={0.1}>
<div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#15161A] p-8 transition-all duration-300 hover:border-white/[0.12] sm:p-10">
<div className="pointer-events-none absolute inset-0 rounded-2xl opacity-30"
style={{ background: 'linear-gradient(135deg, rgba(0,229,195,0.05) 0%, rgba(255,122,0,0.05) 50%, rgba(255,90,95,0.05) 100%)' }}
/>
<div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-60"
style={{ background: 'linear-gradient(135deg, rgba(0,229,195,0.08) 0%, rgba(255,122,0,0.08) 50%, rgba(255,90,95,0.08) 100%)' }}
/>

<div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left sm:justify-between">
<div>
<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
¿Tienes un proyecto en mente?
</h2>
<p className="mt-2 text-sm text-zinc-400">
Hablemos y construyamos algo increíble juntos.
</p>
</div>
<Link
href="/contact"
className="group inline-flex shrink-0 items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
style={{ background: 'linear-gradient(135deg, #00E5C3 0%, #FF7A00 50%, #FF5A5F 100%)', boxShadow: '0 4px 12px rgba(0,229,195,0.15)' }}
>
Iniciar Proyecto
<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>
</div>
</div>
</FadeUp>
</section>
</div>
);
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
const colors = ['#00E5C3', '#FF7A00', '#FF5A5F'];
const accent = colors[index % 3];

return (
<Link
href={`/projects/${project.slug}`}
className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#15161A] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
style={{ '--shadow-color': `${accent}15` } as React.CSSProperties}
>
<div className="relative aspect-[16/10] overflow-hidden">
<Image
src={project.image}
alt={project.title}
fill
quality={80}
sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
className="object-cover transition-all duration-700 group-hover:scale-105"
loading="lazy"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#15161A] via-transparent to-transparent opacity-70" />
<div
className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
style={{ background: `linear-gradient(135deg, ${accent}20, transparent)` }}
/>

<div className="absolute top-3 right-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ transform: 'translateY(-4px)' }}>
{project.githubUrl && (
<span className="rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-zinc-300 backdrop-blur-sm border border-white/[0.06]">
<svg className="mr-1 inline h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
Código
</span>
)}
{project.demoUrl && (
<span className="rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-zinc-300 backdrop-blur-sm border border-white/[0.06]">
<ExternalLink className="mr-1 inline h-3 w-3" />
Demo
</span>
)}
</div>
</div>

<div className="p-5">
<div className="mb-3 flex flex-wrap gap-1.5">
{project.technologies.slice(0, 3).map((tech) => (
<span
key={tech}
className="rounded-full px-2.5 py-0.5 text-[10px] font-medium"
style={{ background: `${accent}10`, color: accent }}
>
{tech}
</span>
))}
{project.technologies.length > 3 && (
<span className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium text-zinc-400">
+{project.technologies.length - 3}
</span>
)}
</div>

<h3
className="text-base font-semibold text-white transition-colors"
style={{ color: index === 0 ? undefined : undefined }}
>
{project.title}
</h3>
<p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-400">
{project.description}
</p>
</div>
</Link>
);
}
