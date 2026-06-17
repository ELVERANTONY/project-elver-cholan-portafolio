import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FadeUp } from '@/components/FadeUp';
import { Project } from '@/types';

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const colors = ['#00E5C3', '#FF7A00', '#FF5A5F'];

  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
      <div>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a proyectos
        </Link>
      </div>

      <FadeUp delay={0.1}>
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-white/[0.06]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent" />
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={tech}
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{
                animation: `fadeInUp 0.2s ease-out forwards`,
                animationDelay: `${0.3 + i * 0.05}s`,
                background: `${colors[i % 3]}15`,
                color: colors[i % 3],
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #00E5C3 0%, #FF7A00 100%)', boxShadow: '0 4px 12px rgba(0,229,195,0.15)' }}
            >
              <ExternalLink className="h-4 w-4" />
              Demo en vivo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-400 transition-all hover:border-white/[0.15] hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              Código fuente
            </a>
          )}
        </div>
      </FadeUp>
    </div>
  );
}
