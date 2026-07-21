import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatRupiah } from '@/utils/dummyData';
import { 
  BedDouble, 
  Users, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown, 
  Wallet,
  ArrowUpRight,
  Activity,
  ArrowRight
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { LockedFeatureModal } from '@/components/LockedFeatureModal';

const revenueData = [
  { name: 'Feb', income: 38500000, expense: 7200000 },
  { name: 'Mar', income: 40200000, expense: 6800000 },
  { name: 'Apr', income: 39500000, expense: 8100000 },
  { name: 'Mei', income: 41000000, expense: 7500000 },
  { name: 'Jun', income: 42100000, expense: 9200000 },
  { name: 'Jul', income: 42750000, expense: 8450000 },
];

const occupancyData = [
  { name: 'Feb', rate: 78 },
  { name: 'Mar', rate: 81 },
  { name: 'Apr', rate: 79 },
  { name: 'Mei', rate: 83 },
  { name: 'Jun', rate: 85 },
  { name: 'Jul', rate: 87 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [lockedModalOpen, setLockedModalOpen] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Overview</h2>
          <p className="text-slate-500 text-sm mt-1">Ringkasan performa bisnis kost Anda bulan ini.</p>
        </div>
        <Button onClick={() => setLockedModalOpen(true)} className="gap-2 shrink-0 bg-primary-900 hover:bg-primary-700 shadow-sm">
          <Activity className="w-4 h-4" />
          Lihat Laporan Lengkap
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="hover:shadow-lg hover:shadow-slate-200/50 transition-shadow">
          <CardContent className="p-5 sm:p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 text-sm font-semibold tracking-tight">Total Kamar</span>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                <BedDouble className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 tracking-tight">48</span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">87% Terisi</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg hover:shadow-slate-200/50 transition-shadow">
          <CardContent className="p-5 sm:p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 text-sm font-semibold tracking-tight">Penghuni Aktif</span>
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 tracking-tight">39</span>
              <span className="text-xs text-slate-500 font-semibold">+2 bln ini</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg hover:shadow-slate-200/50 transition-shadow">
          <CardContent className="p-5 sm:p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 text-sm font-semibold tracking-tight">Pendapatan (Jul)</span>
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 tracking-tight">42.7<span className="text-xl">jt</span></span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">+1.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg hover:shadow-slate-200/50 transition-shadow">
          <CardContent className="p-5 sm:p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 text-sm font-semibold tracking-tight">Tagihan Menunggak</span>
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 tracking-tight">8</span>
              <span className="text-xs text-red-600 font-semibold">Penghuni</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 hover:shadow-lg hover:shadow-slate-200/50 transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-100">
            <CardTitle>Keuangan 6 Bulan Terakhir</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barSize={32}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(value) => `${value / 1000000}jt`} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    formatter={(value: number) => formatRupiah(value)}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', padding: '12px' }}
                  />
                  <Bar dataKey="income" name="Pemasukan" fill="var(--color-primary-900)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expense" name="Pengeluaran" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg hover:shadow-slate-200/50 transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-100">
            <CardTitle>Tingkat Okupansi</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
             <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={occupancyData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                  />
                  <Line type="monotone" dataKey="rate" name="Okupansi %" stroke="var(--color-accent-teal)" strokeWidth={3} dot={{ r: 4, fill: 'var(--color-accent-teal)', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, strokeWidth: 0 }} />
                </LineChart>
              </ResponsiveContainer>
             </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg hover:shadow-slate-200/50 transition-shadow">
          <CardHeader className="pb-4 border-b border-slate-100">
            <div className="flex justify-between items-center">
              <CardTitle>Tagihan Mendekati Jatuh Tempo</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => navigate('/bills')} className="text-primary-700 hover:text-primary-900">
                Lihat Semua <ArrowUpRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {[
                { name: 'Andi Saputra', room: 'A-08', date: '23 Juli 2026', status: 'Segera', amount: 1550000 },
                { name: 'Nabila Putri', room: 'B-03', date: '24 Juli 2026', status: 'Segera', amount: 1500000 },
                { name: 'Fajar Hidayat', room: 'C-01', date: '25 Juli 2026', status: 'H-3', amount: 1550000 },
              ].map((item, i) => (
                <div key={i} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => setLockedModalOpen(true)}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500 font-medium">Kamar {item.room}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900 mb-1">{formatRupiah(item.amount)}</p>
                    <Badge variant="warning">{item.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg hover:shadow-slate-200/50 transition-shadow">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {[
                { icon: Wallet, title: 'Pembayaran diterima', desc: 'Pembayaran kamar A-02 sebesar Rp1.500.000', time: '2 jam yang lalu', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { icon: Users, title: 'Penghuni baru check-in', desc: 'Sinta Maharani menempati kamar A-02', time: '5 jam yang lalu', color: 'text-blue-600', bg: 'bg-blue-50' },
                { icon: BedDouble, title: 'Status kamar berubah', desc: 'Kamar C-04 masuk masa perbaikan', time: '1 hari yang lalu', color: 'text-amber-600', bg: 'bg-amber-50' },
                { icon: TrendingDown, title: 'Pengeluaran dicatat', desc: 'Pembayaran tagihan listrik Rp2.500.000', time: '2 hari yang lalu', color: 'text-slate-600', bg: 'bg-slate-100' },
              ].map((item, i) => (
                <div key={i} className="p-5 flex gap-4 hover:bg-slate-50 transition-colors">
                  <div className={`mt-0.5 w-10 h-10 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    <p className="text-[11px] text-slate-400 font-semibold mt-1.5 uppercase tracking-wider">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl shadow-primary-900/20 group">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-700 rounded-full blur-[80px] opacity-60 -mr-20 -mt-20 pointer-events-none group-hover:opacity-80 transition-opacity duration-700" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:w-2/3">
            <Badge className="bg-emerald-500 text-white border-0 mb-4 hover:bg-emerald-600">Demo Terbatas</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">Siap Menggunakan Versi Lengkap?</h3>
            <p className="text-primary-100 text-base mb-0 max-w-xl leading-relaxed">
              Dapatkan kontrol penuh dengan fitur otomatisasi tagihan, pengingat WhatsApp, multi-user, laporan Excel/PDF, dan branding khusus bisnis Anda.
            </p>
          </div>
          <div className="shrink-0">
            <Button size="lg" className="bg-white text-primary-900 hover:bg-slate-50 w-full sm:w-auto shadow-xl" onClick={() => navigate('/contact')}>
              Hubungi Tim Kami
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <LockedFeatureModal isOpen={lockedModalOpen} onClose={() => setLockedModalOpen(false)} />
    </div>
  );
}
