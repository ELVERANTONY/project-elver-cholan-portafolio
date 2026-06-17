import { FadeUp } from '@/components/FadeUp';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { personalInfo, skills, projects } from '@/lib/data';
import { TechIcon } from '@/components/TechIcons';

const timeline = [
{
year: '2026',
title: 'Full Stack Developer',
description: 'Desarrollo de aplicaciones web modernas con Next.js, React y Node.js.',
},
{
year: '2025',
title: 'Proyectos Freelance',
description: 'Creación de portafolios, dashboards y plataformas e-commerce.',
},
{
year: '2024',
title: 'Inicio en Desarrollo Web',
description: 'Primeros pasos con HTML, CSS, JavaScript y React.',
},
];

const stats = [
{ value: '5+', label: 'Proyectos', color: '#00E5C3' },
{ value: '10+', label: 'Tecnologías', color: '#FF7A00' },
{ value: '100%', label: 'SEO Score', color: '#00E5C3' },
{ value: '90+', label: 'Lighthouse', color: '#FF5A5F' },
];

const skillColors: Record<string, string> = {
'JavaScript': '#F7DF1E',
'TypeScript': '#3178C6',
'React': '#61DAFB',
'Next.js': '#000000',
'Node.js': '#339933',
'PostgreSQL': '#4169E1',
'MongoDB': '#47A248',
'Docker': '#2496ED',
'AWS': '#FF9900',
};

export default function AboutClient() {
return (
<div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
<div style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}>
<div className="flex flex-col items-start gap-10 lg:flex-row">
<div className="relative shrink-0">
<div className="absolute -inset-4 rounded-2xl bg-[#00E5C3]/20 blur-2xl opacity-30" />
<div className="relative h-[340px] w-[260px] overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#15161A] to-[#0B0B0F] shadow-2xl sm:h-[400px] sm:w-[300px]">
<Image
            src="/ANTONY.webp"
            alt={personalInfo.name}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
            sizes="300px"
            quality={80}
          />
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent" />
</div>
</div>

<div className="flex-1">
<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
Sobre Mí
</h1>
<p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
{personalInfo.description}
</p>
<p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
Soy un desarrollador full stack con experiencia en la creación de aplicaciones web
modernas utilizando tecnologías como React, Next.js, Node.js y bases de datos
relacionales y no relacionales. Me apasiona escribir código limpio y escalable.
</p>

<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
{stats.map((stat) => (
<div key={stat.label} className="rounded-xl border border-white/[0.06] bg-[#15161A] p-4 text-center transition-all hover:border-white/[0.12] hover:-translate-y-0.5">
<p className="text-2xl font-bold" style={{ color: stat.color }}>
{stat.value}
</p>
<p className="mt-1 text-xs text-zinc-400">{stat.label}</p>
</div>
))}
</div>

<div className="mt-8 flex gap-4">
<Link
href="/projects"
className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.02]"
style={{ background: 'linear-gradient(135deg, #00E5C3 0%, #FF7A00 100%)', boxShadow: '0 4px 20px rgba(0,229,195,0.2)' }}
>
Ver Proyectos
<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>
<Link
href="/contact"
className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-400 transition-all hover:border-white/[0.15] hover:text-white"
>
Contactar
</Link>
</div>
</div>
</div>
</div>

<FadeUp delay={0.1}>
<h2 className="text-2xl font-semibold tracking-tight">Trayectoria</h2>
<div className="relative mt-8">
<div className="absolute left-4 top-0 h-full w-px" style={{ background: 'linear-gradient(to bottom, #00E5C3, #FF7A00, #FF5A5F, transparent)' }} />
<div className="space-y-10">
{timeline.map((item) => (
<div key={item.year} className="relative pl-12">
<div className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-[#00E5C3] shadow-md" />
<p className="text-xs font-medium" style={{ color: '#00E5C3' }}>{item.year}</p>
<p className="mt-1 text-base font-semibold text-white">{item.title}</p>
<p className="mt-1 text-sm text-zinc-400">{item.description}</p>
</div>
))}
</div>
</div>
</FadeUp>

<FadeUp delay={0.2}>
<h2 className="text-2xl font-semibold tracking-tight">Tecnologías & Habilidades</h2>
<div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
{skills.map((skill, i) => (
<div
key={skill}
className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#15161A] p-4 transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-0.5"
style={{ animation: 'fadeInUp 0.3s ease-out forwards', animationDelay: `${i * 0.05}s` }}
>
<div
className="flex h-9 w-9 items-center justify-center rounded-lg"
style={{ background: `${skillColors[skill] || '#ffffff'}15` }}
>
{skillColors[skill] ? (
<span style={{ color: skillColors[skill] }}>
<TechIcon name={skill} className="h-5 w-5" />
</span>
) : (
<TechIcon name={skill} className="h-5 w-5" />
)}
</div>
<span className="text-sm font-medium text-zinc-300">{skill}</span>
</div>
))}
</div>
</FadeUp>

<FadeUp delay={0.3}>
<h2 className="text-2xl font-semibold tracking-tight">Proyectos Recientes</h2>
<div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
{projects.slice(0, 3).map((project, i) => (
<div
key={project.slug}
style={{ animation: 'fadeInUp 0.3s ease-out forwards', animationDelay: `${i * 0.1}s` }}
>
<Link
href={`/projects/${project.slug}`}
className="group block overflow-hidden rounded-xl border border-white/[0.06] bg-[#15161A] transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-0.5"
>
<div className="relative aspect-[16/9]">
<Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={80}
          />
<div className="absolute inset-0 bg-gradient-to-t from-[#15161A] to-transparent" />
</div>
<div className="p-4">
<p className="text-sm font-medium text-white transition-colors group-hover:text-[#00E5C3]">
{project.title}
</p>
<p className="mt-1 text-xs text-zinc-400">{project.description.slice(0, 60)}...</p>
</div>
</Link>
</div>
))}
</div>
</FadeUp>
</div>
);
}
