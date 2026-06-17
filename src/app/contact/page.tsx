import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
title: 'Contacto',
description: 'Ponte en contacto conmigo para colaboraciones, proyectos o consultas.',
openGraph: {
title: 'Contacto | Antony Cholan',
description: 'Ponte en contacto conmigo para colaboraciones, proyectos o consultas.',
},
};

export default function ContactPage() {
return <ContactClient />;
}
