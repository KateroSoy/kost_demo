import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { dummyTenants } from '@/utils/dummyData';
import { Search, Plus, Filter, User } from 'lucide-react';
import { LockedFeatureModal } from '@/components/LockedFeatureModal';

export default function Tenants() {
  const [lockedModalOpen, setLockedModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredTenants = dummyTenants.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.roomNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Penghuni</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola data penghuni kost Anda.</p>
        </div>
        <Button onClick={() => setLockedModalOpen(true)} className="gap-2 shrink-0">
          <Plus className="w-4 h-4" />
          Tambah Penghuni
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-surface p-4 rounded-xl border border-slate-200">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            placeholder="Cari nama atau kamar..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" className="gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      <Card className="hidden sm:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="p-4 font-semibold text-slate-600 text-sm">Penghuni</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Kamar</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Kontak</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Masuk</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Status</th>
                <th className="p-4 font-semibold text-slate-600 text-sm">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTenants.map((tenant) => (
                <tr key={tenant.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold shrink-0">
                        {tenant.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{tenant.name}</p>
                        <p className="text-xs text-slate-500">{tenant.ktp}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-medium text-slate-700">{tenant.roomNumber}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-600">{tenant.phone}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-600">
                      {new Date(tenant.entryDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1 items-start">
                      <Badge variant={tenant.paymentStatus === 'Lunas' ? 'success' : 'danger'}>
                        {tenant.paymentStatus}
                      </Badge>
                    </div>
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
         {filteredTenants.map((tenant) => (
           <Card key={tenant.id} onClick={() => setLockedModalOpen(true)}>
             <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold shrink-0 text-lg">
                    {tenant.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg leading-tight">{tenant.name}</h3>
                    <p className="text-sm text-slate-500">Kamar {tenant.roomNumber}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                   <div className="text-sm text-slate-600">{tenant.phone}</div>
                   <Badge variant={tenant.paymentStatus === 'Lunas' ? 'success' : 'danger'}>
                      {tenant.paymentStatus}
                    </Badge>
                </div>
             </CardContent>
           </Card>
         ))}
      </div>

      <LockedFeatureModal isOpen={lockedModalOpen} onClose={() => setLockedModalOpen(false)} />
    </div>
  );
}
