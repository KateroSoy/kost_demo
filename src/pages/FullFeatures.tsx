import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  { name: 'Manajemen Kamar & Penghuni', demo: true, full: true },
  { name: 'Pencatatan Tagihan & Pembayaran', demo: true, full: true },
  { name: 'Pencatatan Pengeluaran', demo: true, full: true },
  { name: 'Dashboard Statistik Dasar', demo: true, full: true },
  { name: 'Jumlah Kamar Tanpa Batas', demo: false, full: true },
  { name: 'Data Tersimpan Permanen (Cloud)', demo: false, full: true },
  { name: 'Export Laporan Excel & PDF', demo: false, full: true },
  { name: 'Tagihan Berulang Otomatis', demo: false, full: true },
  { name: 'Pengingat WhatsApp ke Penghuni', demo: false, full: true },
  { name: 'Multi-user (Hak Akses Admin/Staff)', demo: false, full: true },
  { name: 'Branding Khusus (Logo Anda)', demo: false, full: true },
  { name: 'Integrasi Payment Gateway (Otomatis Lunas)', demo: false, full: true },
];

export default function FullFeatures() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto pt-8">
        <Badge variant="info" className="mb-4">Versi Lengkap Tersedia</Badge>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
          Tingkatkan Pengelolaan Kost Anda ke Level Profesional
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed">
          Versi demo ini hanya menampilkan sebagian kecil dari kemampuan KOSTOS. 
          Gunakan versi lengkap untuk mengotomatisasi bisnis kost Anda sepenuhnya.
        </p>
      </div>

      <Card className="overflow-hidden border-primary-100 shadow-xl shadow-primary-900/5">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1 bg-slate-50 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Versi Demo</h3>
            <p className="text-slate-500 text-sm mb-6">Gratis untuk mencoba fitur dasar</p>
            <div className="text-4xl font-bold text-slate-900 mb-6">Rp 0</div>
            <Button variant="outline" className="w-full" disabled>Saat ini Aktif</Button>
          </div>
          
          <div className="md:col-span-2 bg-primary-900 text-white p-6 md:p-8 flex flex-col justify-center text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 mb-4">Paling Populer</Badge>
                <h3 className="text-2xl font-bold mb-2">KOSTOS Premium</h3>
                <p className="text-primary-100 text-sm mb-2 max-w-sm">Mulai dari Rp 99.000 / bulan</p>
                <p className="text-primary-200 text-xs">Harga menyesuaikan jumlah kamar</p>
              </div>
              <Button size="lg" className="bg-white text-primary-900 hover:bg-slate-100 shrink-0 w-full md:w-auto" onClick={() => navigate('/contact')}>
                Pesan Versi Lengkap
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-12">
        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Perbandingan Fitur</h3>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="p-4 font-semibold text-slate-900 w-[50%] bg-slate-50">Fitur</th>
                  <th className="p-4 font-semibold text-slate-600 text-center w-[25%] bg-slate-50 border-l border-slate-200">Demo</th>
                  <th className="p-4 font-semibold text-primary-900 text-center w-[25%] bg-primary-50 border-l border-slate-200">Versi Lengkap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {features.map((feature, idx) => (
                  <tr key={idx}>
                    <td className="p-4 text-sm font-medium text-slate-700 border-r border-slate-100">
                      {feature.name}
                    </td>
                    <td className="p-4 text-center border-r border-slate-100">
                      {feature.demo ? (
                         <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                         <X className="w-5 h-5 text-slate-300 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center bg-primary-50/30">
                      {feature.full ? (
                         <CheckCircle2 className="w-5 h-5 text-primary-600 mx-auto" />
                      ) : (
                         <X className="w-5 h-5 text-slate-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
