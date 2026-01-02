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
        <span className="font-semibold">Masz lokalną firmę?</span>{" "}
        Pozrozmawiajmy o najlepszym rozwiązaniu dla Ciebie i Twojego biznesu!
      </p>
    </footer>
  );
}
