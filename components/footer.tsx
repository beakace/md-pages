import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; {currentYear} Michał Dziuba
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel Hosting
      </p>
    </footer>
  );
}
