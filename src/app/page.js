"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/footer";

const btnsLeft = [
  { id: 1, label: "odontoiatria", href: "/menu1" },
  { id: 2, label: "ortodonzia", href: "/menu2" },
  { id: 3, label: "pedodonzia", href: "/menu2" },
  { id: 4, label: "medicina del sonno per pazienti osas", href: "/menu2" },
  { id: 5, label: "gnatologia", href: "/menu2" },
  { id: 6, label: "allineatorni notturni", href: "/menu2" },
  { id: 7, label: "apparechi antirussamento", href: "/menu2" },
  { id: 8, label: "Froggy Mounth", href: "/menu2" },
];

const btnsRight = [
  { id: 1, label: "staff", href: "/contacts" },
  { id: 2, label: "contatti", href: "/contacts" },
  { id: 3, label: "recensioni", href: "/contacts" },
  { id: 4, label: "prenota", href: "/contacts" },
];


const imagesByBtn = {
  1: [
    "/images/instruments.png",
    "/images/elainers.png",
    "/images/derjateli.jpg",
  ],
  2: [
    "/images/brackets.jpg",
    "/images/brackets-2.jpg",
    "/images/brackets-3.jpg",
  ],
};

// ...existing code...
export default function Home() {
  const [selectedBtn, setSelectedBtn] = useState(1);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="fixed text-right text-xl items-end top-24 h-1/3 -space-y-12 w-1/4 bg-white flex flex-col z-10 font-karla">
          {btnsLeft.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSelectedBtn(btn.id)}
              className={`mt-9 px-4 py-2 font-karla font-bold text-gray-400 hover:text-gray-700 active:text-gray-700 rounded text-right break-words pl-24 w-full max-w-xs ${
                selectedBtn === btn.id ? " text-gray-700" : ""
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="flex-1 mx-[20%] p-8 flex flex-col items-center justify-center">
          {!selectedBtn && (
            <p className="text-2xl font-bold text-center">
              Welcome to the Next.js App with Tailwind CSS!
            </p>
          )}
          {selectedBtn && (
            <div className="grid mt-10 w-2/3  justify-center space-y-14 items-center grid-rows gap-4">
              {(imagesByBtn[selectedBtn] || []).map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt=""
                  className="object-cover w-full"
                />
              ))}
            </div>
          )}
        </div>

        <div className="fixed right-32 top-40 h-full w-1/5 bg-white flex flex-col items-start z-10 pl-6">
          <h1 className="font-normal text-3xl">Smile Studio</h1>
          <p className="font-normal">DOTT.SSA ALICE CABIANCA</p>
          <hr className="w-full mt-7 border-gray-300 my-4" />
          <div className="flex flex-col space-y-0.5 py-5 w-full">
            {btnsRight.map((btn) => (
              <Link
                key={btn.id}
                href={btn.href}
                className="px-4 py-2 font-karla font-medium text-black hover:text-gray-700 active:text-gray-700 rounded text-left break-words w-full"
              >
                {btn.label.toUpperCase()}
              </Link>
            ))}
          </div>
          <hr className="w-full border-gray-300 my-4" />

          <p className="font-karla text-sm text-gray-600">
            MASTER DI II LIVELLO IN DOLORI
            OROFACCIALI E DISORDINI
            TEMPOROMANDIBILARI
            ESPERTA IN MEDICINA DEL SONNO,
            ORTODONZIA TRADIZIONALE E
            ORTODONZIA PEDIATRICA
            SI RICEVE SOLO SU APPUNTAMENTO.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
// ...existing code...