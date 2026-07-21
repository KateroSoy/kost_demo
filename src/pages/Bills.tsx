import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { dummyBills, formatRupiah } from '@/utils/dummyData';
import { Plus, FileText } from 'lucide-react';
import { LockedFeatureModal } from '@/components/LockedFeatureModal';

export default function Bills() {
  const [lockedModalOpen, setLockedModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Tagihan</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola tagihan sewa dan fasilitas tambahan.</p>
        </div>
        <Button onClick={() => setLockedModalOpen(true)} className="gap-2 shrink-0">
          <Plus className="w-4 h-4" />
          Buat Tagihan
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
         <Card className="bg-primary-900 text-white">
           <CardContent className="p-5">
             <p className="text-primary-200 text-sm font-medium">Total Tagihan (Bulan ini)</p>
             <p className="text-2xl font-bold mt-1">Rp 12.500.000</p>
           </CardContent>
         </Card>
         <Card>
           <CardContent className="p-5">
             <p className="text-slate-500 text-sm font-medium">Sudah Dibayar</p>
             <p className="text-2xl font-bold mt-1 text-slate-900">Rp 8.000.000</p>
           </CardContent>
         </Card>
         <Card>
           <CardContent className="p-5">
             <p className="text-slate-500 text-sm font-medium">Belum Dibayar</p>
             <p className="text-2xl font-bold mt-1 text-slate-900">Rp 4.500.000</p>
           </CardContent>
         </Card>
         <Card>
           <CardContent className="p-5">
             <p className="text-slate-500 text-sm font-medium">Jatuh Tempo &lt; 7 Hari</p>
             <p className="text-2xl font-bold mt-1 text-red-600">3 Tagihan</p>
           </CardContent>
         </Card>
      </div>

      <Card className="hidden sm:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="p-4 font-semibold text-slate-600 text-sm">Invoice</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Penghuni</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Nominal</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Jatuh Tempo</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dummyBills.map((bill) => (
                <tr key={bill.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="font-medium text-slate-700 text-sm">{bill.invoiceNumber}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="font-medium text-slate-900">{bill.tenantName}</p>
                    <p className="text-xs text-slate-500">Kamar {bill.roomNumber}</p>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-slate-900">{formatRupiah(bill.amount)}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-600">
                      {new Date(bill.dueDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </td>
                  <td className="p-4">
                    <Badge variant={bill.status === 'Lunas' ? 'success' : 'danger'}>
                      {bill.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="sm" onClick={() => setLockedModalOpen(true)}>
                      Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Mobile view cards (hidden on sm and above) */}
      <div className="sm:hidden grid gap-4">
        {dummyBills.map((bill) => (
          <Card key={bill.id} onClick={() => setLockedModalOpen(true)} className="cursor-pointer active:scale-[0.98] transition-transform">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span className="font-medium text-slate-700 text-sm">{bill.invoiceNumber}</span>
                </div>
                <Badge variant={bill.status === 'Lunas' ? 'success' : 'danger'}>
                  {bill.status}
                </Badge>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-bold text-slate-900">{bill.tenantName}</p>
                  <p className="text-sm text-slate-500">Kamar {bill.roomNumber}</p>
                  <p className="text-xs text-slate-400 mt-1">Jatuh Tempo: {new Date(bill.dueDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-900">{formatRupiah(bill.amount)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <LockedFeatureModal isOpen={lockedModalOpen} onClose={() => setLockedModalOpen(false)} />
    </div>
  );
}
