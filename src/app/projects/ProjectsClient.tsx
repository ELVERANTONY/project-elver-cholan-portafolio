import { FadeUp } from '@/components/FadeUp';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types';

interface Props {
  projects: Project[];
}

export default function ProjectsClient({ projects }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
      <div style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Proyectos</h1>
        <p className="mt-3 max-w-lg text-base text-zinc-400">
          Colección de proyectos desarrollados.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const colors = ['#00E5C3', '#FF7A00', '#FF5A5F'];
          const accent = colors[i % 3];

          return (
            <FadeUp key={project.slug} delay={i * 0.1}>
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#15161A] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                style={{ '--shadow-color': `${accent}15` } as React.CSSProperties}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15161A] via-transparent to-transparent opacity-70" />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                    style={{ background: `linear-gradient(135deg, ${accent}20, transparent)` }}
                  />

                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {project.githubUrl && (
                      <span className="rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-zinc-300 backdrop-blur-sm border border-white/[0.06]">
                        <svg className="mr-1 inline h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
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

                  <h3 className="text-base font-semibold text-white transition-colors group-hover:text-[#00E5C3]">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </Link>
            </FadeUp>
          );
        })}
      </div>
    </div>
  );
}
