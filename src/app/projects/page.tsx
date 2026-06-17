import type { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
title: 'Proyectos',
description: 'Colección de proyectos desarrollados.',
openGraph: {
title: 'Proyectos | Antony Cholan',
description: 'Colección de proyectos desarrollados.',
},
};

export default function ProjectsPage() {
return <ProjectsClient projects={projects} />;
}
