"use client";

import { useState } from "react";

type Props = {
  text: string;
  image: string;
  className?: string;
};

export default function SoapstoneMessage({
  text,
  image,
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`absolute z-20 hidden md:block ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* imagem */}
      <img
        src={image}
        alt="soapstone message"
        className="w-20 opacity-70 hover:opacity-100 transition duration-300"
      />

      {/* texto */}
      {open && (
        <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded border border-orange-300/30 bg-black/90 px-4 py-2 font-[Optimus] text-sm tracking-widest text-orange-200 shadow-[0_0_20px_rgba(255,180,80,0.15)]">
          {text}
        </div>
      )}
    </div>
  );
}