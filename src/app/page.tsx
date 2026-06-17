import { projects } from '@/lib/data';
import { personalInfo } from '@/lib/data';
import HomeClient from '@/components/HomeClient';

export default function Home() {
const featured = projects.filter((p) => p.featured);
return <HomeClient personalInfo={personalInfo} featured={featured} />;
}
