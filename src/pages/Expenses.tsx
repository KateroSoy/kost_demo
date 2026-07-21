import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { dummyExpenses, formatRupiah, formatDate } from '@/utils/dummyData';
import { Plus } from 'lucide-react';
import { LockedFeatureModal } from '@/components/LockedFeatureModal';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const expenseChartData = [
  { name: 'Listrik', amount: 2500000 },
  { name: 'Air', amount: 850000 },
  { name: 'Perbaikan', amount: 1200000 },
  { name: 'Gaji', amount: 3000000 },
  { name: 'Lainnya', amount: 900000 },
];

export default function Expenses() {
  const [lockedModalOpen, setLockedModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Pengeluaran</h2>
          <p className="text-slate-500 text-sm mt-1">Catat dan pantau pengeluaran operasional kost.</p>
        </div>
        <Button onClick={() => setLockedModalOpen(true)} className="gap-2 shrink-0">
          <Plus className="w-4 h-4" />
          Tambah Pengeluaran
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
           <CardContent className="p-6">
             <h3 className="font-semibold text-slate-900 mb-6">Pengeluaran Berdasarkan Kategori (Juli)</h3>
             <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expenseChartData} margin={{ top: 0, right: 0, left: 10, bottom: 0 }} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(value) => `${value / 1000000}jt`} />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    formatter={(value: number) => formatRupiah(value)}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="amount" fill="var(--color-red-400)" radius={[0, 4, 4, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
             </div>
           </CardContent>
        </Card>
        
        <div className="space-y-4">
           <Card>
             <CardContent className="p-5">
               <p className="text-slate-500 text-sm font-medium mb-1">Total Pengeluaran Bulan Ini</p>
               <p className="text-3xl font-bold text-slate-900">{formatRupiah(8450000)}</p>
               <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
                 <span className="text-slate-500">Bulan lalu</span>
                 <span className="font-medium text-slate-900">{formatRupiah(9200000)}</span>
               </div>
             </CardContent>
           </Card>
           <Card>
             <CardContent className="p-5">
               <p className="text-slate-500 text-sm font-medium mb-1">Pengeluaran Terbesar</p>
               <p className="text-lg font-bold text-slate-900">Gaji Karyawan</p>
               <p className="text-sm text-slate-500 mt-1">{formatRupiah(3000000)} (35%)</p>
             </CardContent>
           </Card>
        </div>
      </div>

      <Card className="hidden sm:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="p-4 font-semibold text-slate-600 text-sm w-[15%]">Tanggal</th>
                <th className="p-4 font-semibold text-slate-600 text-sm w-[20%]">Kategori</th>
                <th className="p-4 font-semibold text-slate-600 text-sm w-[45%]">Keterangan</th>
                <th className="p-4 font-semibold text-slate-600 text-sm w-[20%] text-right">Nominal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dummyExpenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 text-sm text-slate-600">
                    {formatDate(expense.date)}
                  </td>
                  <td className="p-4">
                    <Badge variant="default" className="bg-slate-100 text-slate-700">
                      {expense.category}
                    </Badge>
                  </td>
                  <td className="p-4 text-sm text-slate-900">
                    {expense.description}
                  </td>
                  <td className="p-4 text-right font-semibold text-slate-900">
                    {formatRupiah(expense.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Mobile view cards (hidden on sm and above) */}
      <div className="sm:hidden grid gap-4">
        {dummyExpenses.map((expense) => (
          <Card key={expense.id} onClick={() => setLockedModalOpen(true)} className="cursor-pointer active:scale-[0.98] transition-transform">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="default" className="bg-slate-100 text-slate-700">
                  {expense.category}
                </Badge>
                <span className="text-sm font-bold text-slate-900">{formatRupiah(expense.amount)}</span>
              </div>
              <p className="text-sm text-slate-900 mt-2">{expense.description}</p>
              <p className="text-xs text-slate-400 mt-2">{formatDate(expense.date)}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <LockedFeatureModal isOpen={lockedModalOpen} onClose={() => setLockedModalOpen(false)} />
    </div>
  );
}
