import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { dummyRooms, formatRupiah } from '@/utils/dummyData';
import { Search, Plus, Filter, LayoutGrid, List } from 'lucide-react';
import { LockedFeatureModal } from '@/components/LockedFeatureModal';

export default function Rooms() {
  const [lockedModalOpen, setLockedModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [search, setSearch] = useState('');

  const filteredRooms = dummyRooms.filter(room => 
    room.number.toLowerCase().includes(search.toLowerCase()) ||
    room.tenantName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Kamar</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola data dan status kamar kost Anda.</p>
        </div>
        <Button onClick={() => setLockedModalOpen(true)} className="gap-2 shrink-0">
          <Plus className="w-4 h-4" />
          Tambah Kamar
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-surface p-4 rounded-xl border border-slate-200">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            placeholder="Cari nomor kamar atau penghuni..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <div className="hidden sm:flex border border-slate-200 rounded-md p-1 bg-slate-50">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className={viewMode === 'grid' ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" : "flex flex-col gap-4"}>
        {filteredRooms.map(room => (
          <Card key={room.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setLockedModalOpen(true)}>
            <CardContent className={viewMode === 'grid' ? "p-5" : "p-4 sm:p-5 flex items-center justify-between"}>
              <div className={viewMode === 'grid' ? "mb-4" : "flex items-center gap-4 w-1/3"}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{room.number}</h3>
                  <Badge variant={
                    room.status === 'Terisi' ? 'success' :
                    room.status === 'Tersedia' ? 'info' :
                    room.status === 'Dipesan' ? 'warning' : 'danger'
                  }>{room.status}</Badge>
                </div>
                <p className="text-sm text-slate-500 font-medium">{room.type}</p>
              </div>
              
              <div className={viewMode === 'grid' ? "space-y-3" : "flex items-center justify-between flex-1 gap-4"}>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Harga Sewa</p>
                  <p className="font-semibold text-slate-900">{formatRupiah(room.price)}<span className="text-slate-500 text-sm font-normal">/bln</span></p>
                </div>
                
                {room.tenantName && (
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Penghuni</p>
                    <p className="text-sm font-medium text-slate-900 truncate">{room.tenantName}</p>
                  </div>
                )}

                {viewMode === 'list' && (
                  <div className="hidden md:block">
                     <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Fasilitas</p>
                     <p className="text-sm text-slate-600 truncate max-w-[200px]">{room.facilities.join(', ')}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <LockedFeatureModal isOpen={lockedModalOpen} onClose={() => setLockedModalOpen(false)} />
    </div>
  );
}
