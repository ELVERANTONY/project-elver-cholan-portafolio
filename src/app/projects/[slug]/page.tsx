import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectDetailClient from './ProjectDetailClient';

interface Props {
params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
const { slug } = await params;
const project = projects.find((p) => p.slug === slug);

if (!project) return {};

return {
title: project.title,
description: project.description,
openGraph: {
title: project.title,
description: project.description,
images: [{ url: project.image, width: 1200, height: 630 }],
type: 'website',
},
twitter: {
card: 'summary_large_image',
title: project.title,
description: project.description,
images: [project.image],
},
};
}

export default async function ProjectDetailPage({ params }: Props) {
const { slug } = await params;
const project = projects.find((p) => p.slug === slug);

if (!project) notFound();

return <ProjectDetailClient project={project} />;
}
