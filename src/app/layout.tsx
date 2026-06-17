import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { personalInfo } from "@/lib/data";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
title: {
template: `%s | ${personalInfo.name}`,
default: `${personalInfo.name} | ${personalInfo.title}`,
},
description: personalInfo.description,
keywords: [
"portfolio", "full stack developer", "next.js", "react",
"typescript", "desarrollador web", personalInfo.name,
],
authors: [{ name: personalInfo.name }],
openGraph: {
title: `${personalInfo.name} | ${personalInfo.title}`,
description: personalInfo.description,
images: [{ url: personalInfo.avatar, width: 1200, height: 630 }],
type: "website",
siteName: `${personalInfo.name} Portfolio`,
},
twitter: {
card: "summary_large_image",
title: `${personalInfo.name} | ${personalInfo.title}`,
description: personalInfo.description,
images: [personalInfo.avatar],
},
robots: {
index: true,
follow: true,
},
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html
lang="es"
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
<body className="flex min-h-full flex-col bg-[#0B0B0F] font-sans text-white selection:bg-[#00E5C3]/30">
<Header />
<main className="flex-1">{children}</main>
<Footer />
</body>
</html>
);
}
