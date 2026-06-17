import { ReactNode } from 'react';

const colors: Record<string, string> = {
'Next.js': '#000000',
'React': '#61DAFB',
'TypeScript': '#3178C6',
'Node.js': '#339933',
'NestJS': '#E0234E',
'PostgreSQL': '#4169E1',
'Docker': '#2496ED',
'Firebase': '#FFCA28',
'Gemini AI': '#8B5CF6',
'LangGraph': '#00E5C3',
};

export function getTechColor(name: string): string {
return colors[name] || '#ffffff';
}

export function TechIcon({ name, className = 'h-5 w-5' }: { name: string; className?: string }): ReactNode {
switch (name) {
case 'Next.js':
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<rect x="2" y="2" width="20" height="20" rx="4" fill="#000" />
<path d="M13 5h3l-7 14H6l7-14z" fill="#fff" />
<path d="M16 17V5h3v12h-3z" fill="#fff" />
<path d="M6 11.5c0-1.5.8-2.5 2-2.5s2 1 2 2.5-.8 2.5-2 2.5-2-1-2-2.5z" fill="#fff" opacity="0.4" />
</svg>
);
case 'React':
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
<ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
<ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(30 12 12)" />
<ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(-30 12 12)" />
</svg>
);
case 'TypeScript':
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
<path d="M6 12h3v8h3v-8h3V9H6v3z" fill="#fff" />
</svg>
);
case 'Node.js':
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#339933" />
<path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#339933" opacity="0.8" />
<circle cx="12" cy="12" r="3" fill="#fff" />
</svg>
);
case 'NestJS':
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="10" fill="#E0234E" />
<path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
</svg>
);
case 'PostgreSQL':
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<path d="M12 3c-1.5 0-3 1-3 3v3c0 2 1.5 3 3 3s3-1 3-3V6c0-2-1.5-3-3-3z" fill="#4169E1" />
<path d="M9 12v4c0 1.5 1 2.5 3 2.5s3-1 3-2.5v-4" stroke="#4169E1" strokeWidth="1.5" fill="none" />
<circle cx="9" cy="5.5" r="1" fill="#fff" opacity="0.5" />
</svg>
);
case 'Docker':
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<rect x="3" y="10" width="3" height="4" rx="0.5" fill="#2496ED" />
<rect x="7" y="8" width="3" height="6" rx="0.5" fill="#2496ED" />
<rect x="11" y="6" width="3" height="8" rx="0.5" fill="#2496ED" />
<rect x="15" y="8" width="3" height="6" rx="0.5" fill="#2496ED" />
<rect x="15" y="12" width="6" height="3" rx="0.5" fill="#2496ED" />
<rect x="3" y="14" width="18" height="2" rx="1" fill="#2496ED" opacity="0.5" />
<circle cx="4" cy="15" r="1" fill="#fff" opacity="0.3" />
</svg>
);
case 'Firebase':
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<path d="M5 18L9 3l4 6-8 9z" fill="#FFCA28" />
<path d="M9 3l4 6 4 9H5l4-15z" fill="#FFA000" />
<path d="M13 9l4 9 2-3-6-6z" fill="#FF6F00" />
</svg>
);
case 'Gemini AI':
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#8B5CF6" />
<path d="M12 6l1.5 4.5L18 12l-4.5 1.5L12 18l-1.5-4.5L6 12l4.5-1.5L12 6z" fill="#fff" opacity="0.8" />
</svg>
);
case 'LangGraph':
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<circle cx="7" cy="7" r="3" fill="#00E5C3" />
<circle cx="17" cy="7" r="3" fill="#00E5C3" />
<circle cx="12" cy="17" r="3" fill="#00E5C3" />
<path d="M7 7l5 10M17 7l-5 10" stroke="#00E5C3" strokeWidth="1.5" />
</svg>
);
default:
return (
<svg className={className} viewBox="0 0 24 24" fill="none">
<rect x="4" y="4" width="16" height="16" rx="4" fill="#ffffff15" />
<text x="12" y="15" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">{name.slice(0, 2)}</text>
</svg>
);
}
}
