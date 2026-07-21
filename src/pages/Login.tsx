import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@kostos.id');
  const [password, setPassword] = useState('demo123');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setShowWelcome(true);
  };

  const proceedToDemo = () => {
    setShowWelcome(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-emerald-100/40 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary-900/20 mb-6">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          KOSTOS
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500 font-medium">
          Kelola Kost, Penghuni, Tagihan, dan Keuangan.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[420px] relative z-10 px-4 sm:px-0">
        <div className="bg-surface py-10 px-6 sm:px-12 shadow-2xl shadow-slate-200/50 border border-slate-100 rounded-3xl">
          <div className="mb-8 bg-amber-50 border border-amber-100 p-4 rounded-xl text-xs text-amber-800 leading-relaxed text-center">
            <strong>Versi Demo Terbatas.</strong> Anda tidak dapat menyimpan perubahan secara permanen.
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly
                className="bg-slate-50 font-medium text-slate-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                readOnly
                className="bg-slate-50 font-medium text-slate-600"
              />
            </div>

            <Button type="submit" className="w-full h-12 text-base group mt-2" size="lg">
              Masuk ke Demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center relative z-10 text-sm text-slate-500 font-medium">
        Demo by <span className="font-bold text-slate-900">TOKOFILE</span>
      </div>

      <Modal 
        isOpen={showWelcome} 
        onClose={() => setShowWelcome(false)}
        title="Selamat Datang di KOSTOS Demo"
      >
        <div className="text-center space-y-4 py-4">
          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto text-primary-600 mb-2">
            <Building2 className="w-8 h-8" />
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Versi ini dibuat untuk memperlihatkan alur dan tampilan utama KOSTOS. Beberapa fitur seperti ekspor data, pengaturan sistem, integrasi, dan perubahan permanen <strong>dinonaktifkan</strong>.
          </p>
          <div className="pt-4">
            <Button size="lg" className="w-full" onClick={proceedToDemo}>
              Mulai Jelajahi Demo
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
