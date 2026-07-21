import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { dummyPayments, formatRupiah, formatDate } from '@/utils/dummyData';
import { Plus, CheckCircle2 } from 'lucide-react';
import { LockedFeatureModal } from '@/components/LockedFeatureModal';

export default function Payments() {
  const [lockedModalOpen, setLockedModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Pembayaran</h2>
          <p className="text-slate-500 text-sm mt-1">Riwayat pembayaran dari penghuni.</p>
        </div>
        <Button onClick={() => setLockedModalOpen(true)} className="gap-2 shrink-0">
          <Plus className="w-4 h-4" />
          Catat Pembayaran
        </Button>
      </div>

      <Card className="hidden sm:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="p-4 font-semibold text-slate-600 text-sm">Tanggal</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Penghuni</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Metode</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Nominal</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dummyPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <span className="text-sm font-medium text-slate-900">{formatDate(payment.date)}</span>
                    <p className="text-xs text-slate-500 mt-0.5">Ref: {payment.reference}</p>
                  </td>
                  <td className="p-4">
                    <p className="font-medium text-slate-900">{payment.tenantName}</p>
                    <p className="text-xs text-slate-500">Kamar {payment.roomNumber}</p>
                  </td>
                  <td className="p-4">
                    <Badge variant="default" className="bg-slate-100 text-slate-700">
                      {payment.method}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-slate-900">{formatRupiah(payment.amount)}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5 text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm font-medium">{payment.status}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <Button variant="outline" size="sm" onClick={() => setLockedModalOpen(true)}>
                      Cetak Struk
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
        {dummyPayments.map((payment) => (
          <Card key={payment.id} onClick={() => setLockedModalOpen(true)} className="cursor-pointer active:scale-[0.98] transition-transform">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-sm font-bold text-slate-900 block">{formatDate(payment.date)}</span>
                  <span className="text-xs text-slate-500">Ref: {payment.reference}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-bold">{payment.status}</span>
                </div>
              </div>
              <div className="flex justify-between items-end mt-2 pt-3 border-t border-slate-100">
                <div>
                  <p className="font-bold text-slate-900">{payment.tenantName}</p>
                  <p className="text-sm text-slate-500 mb-1">Kamar {payment.roomNumber}</p>
                  <Badge variant="default" className="bg-slate-100 text-slate-700 text-[10px]">
                    {payment.method}
                  </Badge>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-900 text-lg">{formatRupiah(payment.amount)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <LockedFeatureModal 
        isOpen={lockedModalOpen} 
        onClose={() => setLockedModalOpen(false)}
        title="Fitur Cetak Struk Terkunci"
        message="Pencetakan struk pembayaran dan pembuatan nota PDF hanya tersedia pada versi lengkap KOSTOS." 
      />
    </div>
  );
}
