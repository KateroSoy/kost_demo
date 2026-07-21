import { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Bed, 
  Users, 
  CalendarDays, 
  Receipt, 
  Wallet, 
  TrendingDown, 
  BarChart3, 
  Sparkles, 
  MessageSquare,
  LogOut,
  Menu,
  X,
  Search,
  Bell,
  Building2,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/utils/cn';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Bed, label: 'Kamar', path: '/rooms' },
  { icon: Users, label: 'Penghuni', path: '/tenants' },
  { icon: CalendarDays, label: 'Booking', path: '/bookings' },
  { icon: Receipt, label: 'Tagihan', path: '/bills' },
  { icon: Wallet, label: 'Pembayaran', path: '/payments' },
  { icon: TrendingDown, label: 'Pengeluaran', path: '/expenses' },
  { icon: BarChart3, label: 'Laporan', path: '/reports' },
];

const secondaryNavItems = [
  { icon: Sparkles, label: 'Fitur Lengkap', path: '/full-features', highlight: true },
  { icon: MessageSquare, label: 'Hubungi TOKOFILE', path: '/contact' },
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Show CTA after 2 minutes
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 120000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row font-sans">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 bg-surface h-screen sticky top-0 z-40">
        <div className="h-16 px-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-900 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-none">KOSTOS</h1>
              <p className="text-[10px] text-slate-500 font-medium">DEMO BY TOKOFILE</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">Menu Utama</div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-slate-100 text-slate-900" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}

          <div className="pt-6 mt-6 border-t border-slate-100">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">Upgrade</div>
            {secondaryNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  item.highlight ? "text-emerald-700 bg-emerald-50 hover:bg-emerald-100" : "",
                  isActive && !item.highlight ? "bg-slate-100 text-slate-900" : "",
                  !isActive && !item.highlight ? "text-slate-500 hover:bg-slate-50 hover:text-slate-900" : ""
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-200">
          <button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-slate-50 transition-colors text-left">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm shrink-0">
              D
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Demo User</p>
              <p className="text-xs text-slate-500 truncate">demo@kostos.id</p>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden relative pb-16 md:pb-0">
        <div className="bg-primary-900 text-primary-50 text-xs text-center py-2 font-medium px-4 sticky top-0 z-50 flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3 text-amber-400" />
          Anda sedang menggunakan versi demo terbatas. Data tidak disimpan permanen.
        </div>
        
        {/* Desktop Header */}
        <header className="hidden md:flex h-16 border-b border-slate-200 bg-surface items-center justify-between px-8 sticky top-[32px] z-30">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Pencarian cepat..." 
              className="pl-9 bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 h-9 transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-50">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </button>
            <div className="h-5 w-px bg-slate-200" />
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Keluar
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-surface border-b border-slate-200 sticky top-[32px] z-40">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary-900 rounded-md flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 leading-none tracking-tight">KOSTOS</h1>
            </div>
          </div>
          <button className="p-2 text-slate-400 rounded-full hover:bg-slate-50">
            <Bell className="w-5 h-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
          <div className="max-w-6xl mx-auto w-full">
            <Outlet />
          </div>
          
          {/* Desktop Watermark */}
          <div className="hidden md:block fixed bottom-12 right-12 text-[4rem] font-black text-slate-900/[0.03] pointer-events-none rotate-[-15deg] z-0 select-none tracking-tighter">
            KOSTOS DEMO
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-slate-200 flex justify-around p-1 pb-safe z-50">
        {navItems.slice(0, 4).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors w-16",
              isActive ? "text-primary-900" : "text-slate-400 hover:text-slate-900"
            )}
          >
            {({ isActive }) => (
              <>
                <div className={cn(
                  "p-1 rounded-full transition-colors",
                  isActive ? "bg-primary-50" : ""
                )}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex flex-col items-center gap-1 p-2 rounded-lg text-slate-400 transition-colors w-16"
        >
          <div className="p-1">
            <Menu className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Menu</span>
        </button>
      </nav>

      {/* Mobile Menu Bottom Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] flex flex-col justify-end">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in" onClick={() => setMobileMenuOpen(false)} />
          <div className="bg-surface rounded-t-3xl p-5 relative animate-in slide-in-from-bottom-full duration-300 shadow-2xl">
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6" />
            
            <div className="flex items-center gap-3 mb-6 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold shrink-0">
                D
              </div>
              <div>
                <p className="font-semibold text-slate-900 leading-tight">Demo User</p>
                <p className="text-xs text-slate-500">demo@kostos.id</p>
              </div>
            </div>

            <div className="mb-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-1">Menu Utama</h4>
              <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                {[...navItems.slice(4)].map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center text-center gap-1.5 group"
                  >
                    <div className="p-3 rounded-full bg-slate-50 text-slate-600 group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors border border-slate-100">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-700 leading-tight">
                      {item.label}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="mt-6 mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-1">Upgrade & Info</h4>
              <div className="grid grid-cols-2 gap-3">
                {secondaryNavItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-xl transition-colors border",
                      item.highlight 
                        ? "bg-emerald-50 border-emerald-100 text-emerald-700" 
                        : "bg-surface border-slate-200 text-slate-700"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLogout();
              }}
              className="w-full py-3.5 flex items-center justify-center gap-2 text-slate-600 font-semibold bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Keluar dari Demo
            </button>
          </div>
        </div>
      )}

      {/* Global CTA Modal */}
      <Modal isOpen={showCTA} onClose={() => setShowCTA(false)} title="Siap Menggunakan KOSTOS?">
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto text-primary-600">
            <Sparkles className="w-8 h-8" />
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Dapatkan versi lengkap dengan data real, laporan otomatis, pengingat pembayaran WhatsApp, multi-user, dan branding bisnis Anda sendiri.
          </p>
          <div className="pt-4 flex flex-col gap-3">
            <Button className="w-full" onClick={() => {
              setShowCTA(false);
              navigate('/contact');
            }}>
              Hubungi TOKOFILE
            </Button>
            <Button variant="outline" className="w-full" onClick={() => setShowCTA(false)}>
              Lanjutkan Demo
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
