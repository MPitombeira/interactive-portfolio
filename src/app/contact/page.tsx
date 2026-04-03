"use client";

import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("mpitombeirasilva@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  const lang = "en";
  const t = translations[lang];

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-6">
      {/* TÍTULO */}
      <h2 className="text-3xl mb-4 tracking-wide text-gray-200">
        {t.summon}
      </h2>

      {/* SÍMBOLO */}
      <div className="mb-8 flex justify-center">
        <img
          src="/images/summonSign.png"
          alt="summon"
          className="w-80 md:w-96 h-auto object-contain drop-shadow-[0_0_20px_rgba(255,200,100,0.4)]"
        />
      </div>

      {/* TEXTO */}
      <p className="text-gray-400 text-center max-w-md mb-10">
        {t.contactText}
      </p>

      {/*  LINKS */}
      <div className="space-y-4 w-full max-w-xs">
        <div
          onClick={handleCopy}
          className="mt-4 flex items-center justify-center gap-2 text-lg text-gray-300 cursor-pointer transition hover:text-yellow-400 hover:scale-105"
        >
          <MdEmail className="text-xl" />
          <span>mpitombeirasilva@gmail.com</span>
        </div>
        {copied && (
          <span className="text-sm text-green-400 mt-2 block text-center animate-fade-in">
            {t.copied}
          </span>
        )}

        <div className="flex gap-6 mt-6 text-3xl items-center justify-center">
          <a
            href="https://github.com/MPitombeira"
            target="_blank"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/mpitombeira"
            target="_blank"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/pythonbeira/"
            target="_blank"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/+5519987811825"
            target="_blank"
            className="hover:text-green-400 transition transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}