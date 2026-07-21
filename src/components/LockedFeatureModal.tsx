import { Lock } from "lucide-react";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

interface LockedFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export function LockedFeatureModal({ 
  isOpen, 
  onClose,
  title = "Fitur Tersedia pada Versi Lengkap",
  message = "Fitur ini dinonaktifkan pada versi demo. Tingkatkan ke paket berlangganan untuk menggunakan seluruh fitur KOSTOS."
}: LockedFeatureModalProps) {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Fitur Terkunci">
      <div className="flex flex-col items-center text-center space-y-4 py-4">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
          <Lock className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{message}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full pt-4">
          <Button variant="outline" className="w-full" onClick={onClose}>
            Tutup
          </Button>
          <Button 
            className="w-full" 
            onClick={() => {
              onClose();
              navigate('/contact');
            }}
          >
            Hubungi TOKOFILE
          </Button>
        </div>
      </div>
    </Modal>
  );
}
