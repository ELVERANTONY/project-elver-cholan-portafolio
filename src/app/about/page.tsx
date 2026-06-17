import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
title: 'Sobre Mí',
description: `Conoce más sobre Antony Cholan, Full Stack Developer.`,
openGraph: {
title: `Sobre Mí | Antony Cholan`,
description: `Conoce más sobre Antony Cholan, Full Stack Developer.`,
},
};

export default function AboutPage() {
return <AboutClient />;
}
