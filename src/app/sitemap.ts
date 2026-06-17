import type { MetadataRoute } from 'next';
import { projects } from '@/lib/data';
import { personalInfo } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
const staticPages = [
{
url: personalInfo.siteUrl,
lastModified: new Date(),
changeFrequency: 'monthly' as const,
priority: 1,
},
{
url: `${personalInfo.siteUrl}/about`,
lastModified: new Date(),
changeFrequency: 'monthly' as const,
priority: 0.8,
},
{
url: `${personalInfo.siteUrl}/contact`,
lastModified: new Date(),
changeFrequency: 'monthly' as const,
priority: 0.7,
},
{
url: `${personalInfo.siteUrl}/projects`,
lastModified: new Date(),
changeFrequency: 'weekly' as const,
priority: 0.9,
},
];

const projectPages = projects.map((project) => ({
url: `${personalInfo.siteUrl}/projects/${project.slug}`,
lastModified: new Date(),
changeFrequency: 'monthly' as const,
priority: 0.7,
}));

return [...staticPages, ...projectPages];
}
