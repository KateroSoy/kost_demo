import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Building2, MessageSquare, Send } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

export default function Contact() {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    businessName: '',
    roomCount: '',
    city: '',
    service: 'KOSTOS siap pakai'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate WhatsApp redirect behavior in demo
    const text = `Halo TOKOFILE, saya sudah mencoba demo KOSTOS dan ingin mengetahui versi lengkapnya.\n\nNama: ${formData.name}\nBisnis: ${formData.businessName}\nJumlah Kamar: ${formData.roomCount}\nLayanan: ${formData.service}`;
    console.log("Simulating opening WhatsApp with message:", text);
    
    setSuccessModalOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="text-center pt-4 md:pt-8">
        <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-700">
          <MessageSquare className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
          Hubungi Tim TOKOFILE
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base">
          Konsultasikan kebutuhan manajemen kost Anda. Kami siap membantu Anda beralih ke sistem pengelolaan yang lebih baik.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-slate-900 text-white border-0 overflow-hidden relative">
            <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-primary-500 rounded-full blur-3xl opacity-30 pointer-events-none" />
            <CardContent className="p-6 sm:p-8 relative z-10">
              <Building2 className="w-8 h-8 text-primary-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Tim spesialis kami akan segera menghubungi Anda untuk menjadwalkan demo personal atau membahas implementasi sistem untuk bisnis Anda.
              </p>
              
              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Dukungan Teknis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-400" />
                  <span>Konsultasi Bisnis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Kustomisasi Fitur</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                    <Input 
                      required 
                      placeholder="Cth: Budi Santoso" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">No. WhatsApp</label>
                    <Input 
                      required 
                      type="tel" 
                      placeholder="Cth: 0812xxxxxx" 
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Nama Bisnis / Kost</label>
                  <Input 
                    required 
                    placeholder="Cth: Kost Mawar Indah" 
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Jumlah Kamar</label>
                    <Input 
                      required 
                      type="number" 
                      placeholder="Cth: 25" 
                      value={formData.roomCount}
                      onChange={(e) => setFormData({...formData, roomCount: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Kota</label>
                    <Input 
                      required 
                      placeholder="Cth: Jakarta Selatan" 
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Pilihan Layanan</label>
                  <select 
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>KOSTOS siap pakai</option>
                    <option>KOSTOS white-label (Brand Sendiri)</option>
                    <option>Custom aplikasi kost</option>
                    <option>Integrasi fitur tambahan</option>
                    <option>Konsultasi Umum</option>
                  </select>
                </div>

                <Button type="submit" className="w-full gap-2 mt-4" size="lg">
                  Kirim Permintaan
                  <Send className="w-4 h-4" />
                </Button>
                
                <p className="text-center text-xs text-slate-400 mt-4">
                  *Pesan ini akan dialihkan ke WhatsApp representatif TOKOFILE (simulasi dalam demo).
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Modal isOpen={successModalOpen} onClose={() => setSuccessModalOpen(false)} title="Simulasi WhatsApp Berhasil">
        <div className="text-center space-y-4 py-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
            <Send className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Permintaan Terkirim!</h3>
            <p className="text-sm text-slate-500">
              Pada versi nyata, Anda akan diarahkan ke aplikasi WhatsApp untuk mengirimkan detail secara langsung ke tim TOKOFILE.
            </p>
          </div>
          <Button className="w-full mt-4" onClick={() => setSuccessModalOpen(false)}>
            Tutup Simulasi
          </Button>
        </div>
      </Modal>
    </div>
  );
}
