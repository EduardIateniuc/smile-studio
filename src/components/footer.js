import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="border mt-20 mb-4 border-gray-400 py-12 px-4 sm:px-6 w-full
                 lg:ml-5 lg:mr-[20vw] lg:max-w-[calc(100vw-30vw)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
              RAGGIUNGICI
            </h3>
            <hr className="border-l-gray-950 w-10/12 my-5 border-gray-200"/>
            <p className="text-sm text-gray-600 leading-relaxed">
              Per chi ci vuole raggiungere in auto: no ZTL e comodo parcheggio
              gratuito a soli 150 metri. (parcheggio EX PALAPLIP). Se ci
              raggiungete con i mezzi,cfermata Valgardena del tram T2.
              Parcheggio bici interno cortile.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
              INDIRIZZO
            </h3>
            <hr className="border-l-gray-950 w-10/12 my-5 border-gray-200"/>
            <div className="text-sm text-gray-600 space-y-2">
              <h1 className="text-gray-900 font-semibold">Smile Studio</h1>
              <p>
                dott.ssa Alice Cabianca si trova in Via San Donà 106, 30174
                Mestre (VE).
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
              ORARI
            </h3>
            <hr className="border-l-gray-950 w-10/12 my-5 border-gray-200"/>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-black">
                  Dal lunedì al giovedi
                </p>
                <p className="text-sm text-gray-600">9:00 - 12:30</p>
              </div>
              <div>
                <p className="text-sm font-bold text-black">Venerdì:</p>
                <p className="text-sm text-gray-600">15:00 - 19:30</p>
              </div>
              <div>
                <p className="text-sm font-bold text-black">
                  Sabato e domenica:
                </p>
                <p className="text-sm text-gray-600">Chiuso</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
              ACCESSIBILITÀ
            </h3>
            <hr className="border-l-gray-950 w-10/12 my-5 border-gray-200"/>
            <p className="text-sm text-gray-600">
              Per pazienti con difficoltà motorie, disponiamo di montascale
              automatico. Accesso allo stabile senza barriere architettoniche.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
