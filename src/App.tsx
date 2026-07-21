/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import Tenants from './pages/Tenants';
import Bookings from './pages/Bookings';
import Bills from './pages/Bills';
import Payments from './pages/Payments';
import Expenses from './pages/Expenses';
import Reports from './pages/Reports';
import FullFeatures from './pages/FullFeatures';
import Contact from './pages/Contact';
import LandingSelection from './pages/LandingSelection';

function RouterContent() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/full-features" element={<FullFeatures />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function AppWrapper() {
  const [deviceMode, setDeviceMode] = useState<'web' | 'mobile' | null>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!deviceMode) {
    return <LandingSelection onSelect={setDeviceMode} />;
  }

  if (deviceMode === 'mobile' && isDesktop) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8 font-sans">
        <div className="w-[390px] h-[844px] bg-background rounded-[48px] shadow-2xl overflow-hidden border-[14px] border-slate-900 ring-4 ring-slate-800 relative flex flex-col">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-2 inset-x-0 h-7 bg-slate-900 rounded-full w-32 mx-auto z-[100]" />
          
          <div className="flex-1 overflow-hidden relative z-0 bg-background rounded-[34px]">
            <iframe src={location.pathname} className="w-full h-full border-none rounded-[34px]" />
          </div>
        </div>
      </div>
    );
  }

  return <RouterContent />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

