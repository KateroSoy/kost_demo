import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatRupiah } from '@/utils/dummyData';
import { Download, FileDown, Lock } from 'lucide-react';
import { LockedFeatureModal } from '@/components/LockedFeatureModal';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const profitData = [
  { name: 'Jan', profit: 28500000 },
  { name: 'Feb', profit: 31300000 },
  { name: 'Mar', profit: 33400000 },
  { name: 'Apr', profit: 31400000 },
  { name: 'Mei', profit: 33500000 },
  { name: 'Jun', profit: 32900000 },
  { name: 'Jul', profit: 34300000 },
];

export default function Reports() {
  const [lockedModalOpen, setLockedModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Laporan Keuangan</h2>
          <p className="text-slate-500 text-sm mt-1">Analisis performa bisnis kost Anda.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setLockedModalOpen(true)} className="gap-2">
            <FileDown className="w-4 h-4" />
            <span className="hidden sm:inline">Export Excel</span>
          </Button>
          <Button onClick={() => setLockedModalOpen(true)} className="gap-2">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download PDF</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-primary-900 text-white">
          <CardContent className="p-6">
            <p className="text-primary-200 text-sm font-medium mb-2">Total Pendapatan (YTD)</p>
            <p className="text-3xl font-bold">{formatRupiah(283750000)}</p>
          </CardContent>
        </Card>
        <Card className="bg-emerald-600 text-white">
          <CardContent className="p-6">
            <p className="text-emerald-100 text-sm font-medium mb-2">Total Laba Bersih (YTD)</p>
            <p className="text-3xl font-bold">{formatRupiah(225300000)}</p>
          </CardContent>
        </Card>
        <Card className="bg-red-500 text-white">
          <CardContent className="p-6">
            <p className="text-red-100 text-sm font-medium mb-2">Total Pengeluaran (YTD)</p>
            <p className="text-3xl font-bold">{formatRupiah(58450000)}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-semibold text-slate-900">Trend Laba Bersih</h3>
        </div>
        <CardContent className="p-6">
           <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={profitData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary-500)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-primary-500)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(value) => `${value / 1000000}jt`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  formatter={(value: number) => formatRupiah(value)}
                />
                <Area type="monotone" dataKey="profit" name="Laba Bersih" stroke="var(--color-primary-500)" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
              </AreaChart>
            </ResponsiveContainer>
           </div>
        </CardContent>
      </Card>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
          <Lock className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Laporan Detil Terkunci</h3>
        <p className="text-slate-500 max-w-md mx-auto text-sm">
          Analisis okupansi, laporan performa tipe kamar, dan rincian penghuni masuk/keluar tersedia di KOSTOS versi Premium.
        </p>
        <Button onClick={() => setLockedModalOpen(true)}>Buka Fitur Laporan Lengkap</Button>
      </div>

      <LockedFeatureModal 
        isOpen={lockedModalOpen} 
        onClose={() => setLockedModalOpen(false)} 
        title="Fitur Laporan & Export Terkunci"
        message="Kemampuan untuk melakukan export ke PDF/Excel dan melihat analisis lanjutan tersedia pada paket Business dan Professional."
      />
    </div>
  );
}
