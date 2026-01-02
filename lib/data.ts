import React from "react";
import { FaReact } from "react-icons/fa";
import alma from "@/public/alma-placeholder.png";
import kalkulacjaLeasingu from "@/public/kalkulacjaleasingu.pl.png";
import searchGithub from "@/public/search-github-card.png";
import { BsWordpress } from "react-icons/bs";
import blogSS24 from "@/public/blog-ss24.png";
import nieziemsko from "@/public/nieziemsko.png";
import chordon from "@/public/chordon-app.png";
// Local data source only – no Sanity client
import wzrokOk from "@/public/wzrokok.png";
import saraStudio from "@/public/sarastudiowokalne.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Work",
    hash: "#work",
  },
  {
    name: "Process",
    hash: "#process",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const processSteps = [
  {
    title: "Discovery & scope",
    location: "15–30 min call",
    description:
      "We clarify goals, audience, pages/features, content needs, and success metrics. You’ll leave with a clear plan and next steps.",
    icon: React.createElement(FaReact),
    date: "Step 1",
  },
  {
    title: "Design & content",
    location: "Fast iterations",
    description:
      "I create a clean, conversion-focused layout and help structure your copy. We iterate quickly until it feels right.",
    icon: React.createElement(FaReact),
    date: "Step 2",
  },
  {
    title: "Build & integrate",
    location: "Next.js / WordPress",
    description:
      "Implementation with responsive UI, performance best practices, and any integrations you need (forms, analytics, CMS).",
    icon: React.createElement(FaReact),
    date: "Step 3",
  },
  {
    title: "Launch & support",
    location: "Smooth handoff",
    description:
      "Production deploy, basic SEO setup, and a short support window for fixes and tweaks after launch.",
    icon: React.createElement(BsWordpress),
    date: "Step 4",
  },
] as const;

export const servicesData = [
  {
    title: "Landing pages that convert",
    description:
      "Fast, modern landing pages with clear messaging, strong CTAs, and great mobile UX.",
    bullets: ["Next.js + Tailwind", "Performance optimized", "Analytics-ready"],
  },
  {
    title: "Business websites",
    description:
      "Multi-page sites for small businesses and professionals—clean, trustworthy, and easy to maintain.",
    bullets: ["Responsive UI", "Basic SEO setup", "Content structure help"],
  },
  {
    title: "Web app UI & front-end",
    description:
      "Polished React UIs, reusable components, and smooth interactions for product teams.",
    bullets: ["TypeScript", "Component systems", "UX-focused iterations"],
  },
  {
    title: "WordPress builds & fixes",
    description:
      "If you need WordPress (including WooCommerce), I can build, improve, or rescue an existing site.",
    bullets: ["Theme setup", "Performance fixes", "Content edits"],
  },
] as const;

export const projectsData = [
  {
    title: "Sara Studio Wokalne",
    description:
      "Landing page for a vocal coach. Designed and developed by me.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: saraStudio,
    href: "https://www.sarastudiowokalne.pl/",
  },
  {
    title: "Wzrok Ok! Sklep",
    description:
      "Ecommerce shop built on WordPress with a focus on eye care products.",
    tags: ["Wordpress", "WooCommerce"],
    imageUrl: wzrokOk,
    href: "https://wzrokok.pl/",
  },
  {
    title: "Nieziemsko",
    description:
      "I developed a landing page from scratch for an organization using Next.js. The project demanded swift and efficient work, and I am pleased that I was able to deliver the final product in a short timeframe.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: nieziemsko,
    href: "https://nieziemsko.com",
  },
  {
    title: "Kalkulacja Leasingu",
    description:
      "I coded the entire front-end of a website for a company specializing in lease comparisons. It included numerous subpages, requiring significant effort and a strong command of CSS and Next.js.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: kalkulacjaLeasingu,
    href: "https://kalkulacjaleasingu.pl",
  },
  {
    title: "Chordon",
    description:
      "A chord progression generator that helps musicians create unique progressions. Integrated with the Hooktheory API for music theory analysis and suggestions.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion", "Hooktheory API"],
    imageUrl: chordon,
    href: "https://chordon.vercel.app",
  },
  {
    title: "Admin App",
    description:
      "Admin app for organizers of non-profit conference. I developed most of it and the app is currently in use in real life.",
    tags: ["React", "TypeScript", "Remix", "Material UI", "Prisma"],
    imageUrl: alma,
    href: "https://github.com/beakace/alma-admin-app",
  },
  {
    title: "Search Github",
    description:
      "App for searching github repositories. My first real react app not built with tutorials. This was my internship entry assignment.",
    tags: ["React", "Material UI", "TypeScript"],
    imageUrl: searchGithub,
    href: "https://search-github-black.vercel.app/",
  },
  {
    title: "Blog Sun Seasons 24",
    description:
      "I build this blog page on Wordpress from scratch as a side job for my company. This sparked my interest in Frontend Development",
    tags: ["Wordpress"],
    imageUrl: blogSS24,
    href: "https://blog.sunseasons24.pl/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Remix",
  "ERB",
  "Wordpress",
  "Git",
  "Tailwind",
  "MaterialUI",
  "Prisma",
  "Framer Motion",
] as const;

export async function getProjects() {
  // Map local data to the Project type shape expected by the UI
  return projectsData.map((project, index) => ({
    _id: String(index + 1),
    ...project,
    // Ensure tags is a mutable array to satisfy Project type
    tags: [...project.tags],
    imageWidth: 1920,
    imageHeight: 1080,
  }));
}
