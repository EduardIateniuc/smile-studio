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
  const [loadingImages, setLoadingImages] = useState({});
    const [sidebarOpen, setSidebarOpen] = useState(false);


  const handleImageLoad = (idx) => {
    setLoadingImages((prev) => ({ ...prev, [idx]: false }));
  };

  const handleBtnClick = (btnId) => {
    setSelectedBtn(btnId);
    const imgs = imagesByBtn[btnId] || [];
    const loadingState = {};
    imgs.forEach((_, idx) => (loadingState[idx] = true));
    setLoadingImages(loadingState);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">

      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white  px-4 py-4 flex justify-between items-center">
        <h1 className="font-semibold font-karla text-xl">Smile Studio</h1>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
      <div className="flex flex-1 w-full">
        <div className="hidden lg:flex fixed text-right text-xl items-end top-24 h-1/3 -space-y-12 w-1/4 bg-white flex-col z-10 font-karla">
          {btnsLeft.map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleBtnClick(btn.id)}
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
            <div className="grid mt-10 w-full max-w-2xl justify-center space-y-8 lg:space-y-14 items-center">
              {(imagesByBtn[selectedBtn] || []).map((src, idx) => (
                <div
                  key={idx}
                  className="relative max-w-11/12 flex items-center justify-center"
                >
                  {loadingImages[idx] && (
                    <span className="absolute inset-0 flex items-center justify-center z-10 bg-white bg-opacity-60 transition-opacity duration-500">
                      <span className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
                    </span>
                  )}
                  <img
                    src={src}
                    alt=""
                    style={{ transition: "opacity 0.7s" }}
                    className={`w-full object-cover ${
                      loadingImages[idx] ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => handleImageLoad(idx)}
                    onError={() => handleImageLoad(idx)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="hidden lg:flex fixed right-32 top-40 h-full w-1/5 bg-white flex-col items-start z-10 pl-6">
          <h1 className="font-semibold font-karla text-3xl">Smile Studio</h1>
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
            MASTER DI II LIVELLO IN DOLORI OROFACCIALI E DISORDINI
            TEMPOROMANDIBILARI ESPERTA IN MEDICINA DEL SONNO, ORTODONZIA
            TRADIZIONALE E ORTODONZIA PEDIATRICA SI RICEVE SOLO SU APPUNTAMENTO.
          </p>
        </div>
      </div>

      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold font-karla text-xl">Menu</h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Servizi</h3>
              {btnsLeft.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => {
                    setSelectedBtn(btn.id);
                    setSidebarOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-karla hover:bg-gray-100 ${
                    selectedBtn === btn.id ? 'bg-gray-100 text-gray-900' : 'text-gray-600'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
            
            <hr className="border-gray-200 my-4" />
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Informazioni</h3>
              {btnsRight.map((btn) => (
                <Link
                  key={btn.id}
                  href={btn.href}
                  className="block px-3 py-2 rounded-md text-sm font-karla text-gray-600 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  {btn.label.toUpperCase()}
                </Link>
              ))}
            </div>
            
            <hr className="border-gray-200 my-4" />
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">DOTT.SSA ALICE CABIANCA</h3>
              <p className="font-karla text-xs text-gray-600">
                MASTER DI II LIVELLO IN DOLORI OROFACCIALI E DISORDINI
                TEMPOROMANDIBILARI ESPERTA IN MEDICINA DEL SONNO, ORTODONZIA
                TRADIZIONALE E ORTODONZIA PEDIATRICA SI RICEVE SOLO SU APPUNTAMENTO.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
