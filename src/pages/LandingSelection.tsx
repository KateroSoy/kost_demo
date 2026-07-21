import React from 'react';
import { Monitor, Smartphone, Building2 } from 'lucide-react';

export default function LandingSelection({ onSelect }: { onSelect: (mode: 'web' | 'mobile') => void }) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-emerald-100/40 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full text-center">
        <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary-900/20 mx-auto mb-6">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          Pilih Tampilan Demo KOSTOS
        </h1>
        <p className="text-slate-500 mb-12 max-w-xl mx-auto">
          KOSTOS dirancang dengan antarmuka yang responsif. Pilih bagaimana Anda ingin merasakan pengalaman menggunakan aplikasi kami.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button 
            onClick={() => onSelect('web')}
            className="group bg-surface border border-slate-200 rounded-3xl p-8 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-900/5 transition-all text-left flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-50 transition-colors mb-6">
              <Monitor className="w-10 h-10 text-slate-400 group-hover:text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Web Dashboard</h3>
            <p className="text-sm text-slate-500">
              Tampilan penuh untuk pengelola kost di desktop atau laptop.
            </p>
          </button>

          <button 
            onClick={() => onSelect('mobile')}
            className="group bg-surface border border-slate-200 rounded-3xl p-8 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-900/5 transition-all text-left flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-50 transition-colors mb-6">
              <Smartphone className="w-10 h-10 text-slate-400 group-hover:text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile App</h3>
            <p className="text-sm text-slate-500">
              Simulasi tampilan aplikasi mobile untuk pengelolaan saat bepergian.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
