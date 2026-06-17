import { Project } from '@/types';

export const projects: Project[] = [
{
slug: 'ecommerce-platform',
title: 'E-commerce Platform',
description: 'Plataforma de comercio electrónico con Next.js, Stripe y PostgreSQL',
image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
demoUrl: 'https://demo.example.com',
githubUrl: 'https://github.com/usuario/ecommerce',
featured: false,
},
{
slug: 'task-manager',
title: 'Task Manager App',
description: 'Aplicación de gestión de tareas con autenticación y tiempo real',
image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
demoUrl: 'https://tasks.example.com',
githubUrl: 'https://github.com/usuario/task-manager',
featured: false,
},
{
slug: 'weather-dashboard',
title: 'Weather Dashboard',
description: 'Dashboard interactivo del clima con gráficos y pronósticos',
image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
technologies: ['Next.js', 'Chart.js', 'OpenWeather API'],
githubUrl: 'https://github.com/usuario/weather-app',
featured: false,
},
{
slug: 'mercado-central-express',
title: 'Mercado Central Express',
description: 'Plataforma de comercio electrónico local con integración de pagos y geolocalización.',
image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind', 'Google Maps'],
demoUrl: 'https://demo.example.com',
githubUrl: 'https://github.com/usuario/mercado-central',
featured: true,
},
{
slug: 'talkent-ai',
title: 'TalKent AI',
description: 'Conversa con tus documentos impulsado por IA con fuentes exactas.',
image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
technologies: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL', 'Docker', 'Redis'],
demoUrl: 'https://demo.example.com',
githubUrl: 'https://github.com/usuario/talkent-ai',
featured: true,
},
{
slug: 'emotiva-ai',
title: 'Emotiva',
description: 'Plataforma para una clínica de psicología digitalizando todos sus procesos, como agendas, pacientes, citas, consultorios, pagos etc.',
image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
technologies: ['React', 'Python', 'TensorFlow', 'FastAPI', 'Docker', 'AWS'],
demoUrl: 'https://demo.example.com',
githubUrl: 'https://github.com/usuario/emotiva-ai',
featured: true,
},
];

export const personalInfo = {
name: 'Antony Cholan',
title: 'Full Stack Developer',
description: 'Desarrollador apasionado por crear experiencias web modernas, optimizadas y escalables.',
email: 'elver.cholan@tecsup.edu.pe',
github: 'https://github.com/ELVERANTONY',
linkedin: 'https://linkedin.com',
siteUrl: 'https://portfolio-antony.vercel.app',
avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export const skills = [
'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
];

export const techStack = [
{ name: 'Next.js', color: '#00E5C3' },
{ name: 'React', color: '#FF7A00' },
{ name: 'TypeScript', color: '#00E5C3' },
{ name: 'Node.js', color: '#FF5A5F' },
{ name: 'NestJS', color: '#FF7A00' },
{ name: 'PostgreSQL', color: '#00E5C3' },
{ name: 'Docker', color: '#FF5A5F' },
{ name: 'Firebase', color: '#FF7A00' },
{ name: 'Gemini AI', color: '#00E5C3' },
{ name: 'LangGraph', color: '#FF5A5F' },
];
