import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { dummyBookings, formatRupiah } from '@/utils/dummyData';
import { Plus } from 'lucide-react';
import { LockedFeatureModal } from '@/components/LockedFeatureModal';

export default function Bookings() {
  const [lockedModalOpen, setLockedModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Booking</h2>
          <p className="text-slate-500 text-sm mt-1">Daftar calon penghuni yang memesan kamar.</p>
        </div>
        <Button onClick={() => setLockedModalOpen(true)} className="gap-2 shrink-0">
          <Plus className="w-4 h-4" />
          Tambah Booking
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyBookings.map((booking) => (
          <Card key={booking.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setLockedModalOpen(true)}>
            <CardContent className="p-5 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-slate-900">{booking.tenantName}</h3>
                  <p className="text-sm text-slate-500">Kamar {booking.roomNumber}</p>
                </div>
                <Badge variant={
                  booking.status === 'Disetujui' ? 'success' :
                  booking.status === 'Menunggu' ? 'warning' : 'default'
                }>{booking.status}</Badge>
              </div>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Rencana Masuk</p>
                  <p className="text-sm font-medium text-slate-700">
                    {new Date(booking.checkInDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Uang Booking</p>
                  <p className="text-sm font-medium text-slate-700">{formatRupiah(booking.bookingFee)}</p>
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
