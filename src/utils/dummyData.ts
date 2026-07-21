export type RoomStatus = 'Terisi' | 'Tersedia' | 'Dipesan' | 'Perbaikan';

export interface Room {
  id: string;
  number: string;
  type: string;
  floor: number;
  price: number;
  status: RoomStatus;
  tenantName?: string;
  dueDate?: string;
  facilities: string[];
}

export type PaymentStatus = 'Lunas' | 'Belum lunas' | 'Sebagian' | 'Terlambat';
export type TenantStatus = 'Aktif' | 'Tidak Aktif';

export interface Tenant {
  id: string;
  name: string;
  roomId: string;
  roomNumber: string;
  phone: string;
  entryDate: string;
  dueDate: string;
  paymentStatus: PaymentStatus;
  status: TenantStatus;
  ktp: string;
}

export interface Bill {
  id: string;
  invoiceNumber: string;
  tenantName: string;
  roomNumber: string;
  period: string;
  amount: number;
  dueDate: string;
  status: PaymentStatus;
}

export interface Payment {
  id: string;
  date: string;
  tenantName: string;
  roomNumber: string;
  method: string;
  amount: number;
  status: string;
  reference: string;
}

export interface Booking {
  id: string;
  tenantName: string;
  roomNumber: string;
  bookingDate: string;
  checkInDate: string;
  phone: string;
  status: 'Menunggu' | 'Disetujui' | 'Check-in' | 'Dibatalkan';
  bookingFee: number;
}

export interface Expense {
  id: string;
  date: string;
  category: string;
  amount: number;
  description: string;
}

export const dummyRooms: Room[] = [
  { id: '1', number: 'A-01', type: 'Standard', floor: 1, price: 1200000, status: 'Terisi', tenantName: 'Bagas Setiawan', dueDate: '2026-07-25', facilities: ['Kasur', 'Lemari', 'Kamar Mandi Dalam'] },
  { id: '2', number: 'A-02', type: 'Standard AC', floor: 1, price: 1500000, status: 'Terisi', tenantName: 'Sinta Maharani', dueDate: '2026-08-01', facilities: ['Kasur', 'Lemari', 'Kamar Mandi Dalam', 'AC'] },
  { id: '3', number: 'A-03', type: 'Standard', floor: 1, price: 1200000, status: 'Tersedia', facilities: ['Kasur', 'Lemari', 'Kamar Mandi Dalam'] },
  { id: '4', number: 'A-08', type: 'Standard AC', floor: 1, price: 1500000, status: 'Terisi', tenantName: 'Andi Saputra', dueDate: '2026-07-23', facilities: ['Kasur', 'Lemari', 'Kamar Mandi Dalam', 'AC'] },
  { id: '5', number: 'B-01', type: 'Premium', floor: 2, price: 1850000, status: 'Dipesan', facilities: ['Kasur Springbed', 'Lemari', 'Kamar Mandi Dalam', 'AC', 'TV', 'Water Heater'] },
  { id: '6', number: 'B-03', type: 'Standard AC', floor: 2, price: 1500000, status: 'Terisi', tenantName: 'Nabila Putri', dueDate: '2026-07-24', facilities: ['Kasur', 'Lemari', 'Kamar Mandi Dalam', 'AC'] },
  { id: '7', number: 'C-01', type: 'Standard AC', floor: 3, price: 1500000, status: 'Terisi', tenantName: 'Fajar Hidayat', dueDate: '2026-07-25', facilities: ['Kasur', 'Lemari', 'Kamar Mandi Dalam', 'AC'] },
  { id: '8', number: 'C-04', type: 'Standard', floor: 3, price: 1300000, status: 'Perbaikan', facilities: ['Kasur', 'Lemari', 'Kamar Mandi Luar'] },
];

export const dummyTenants: Tenant[] = [
  { id: '1', name: 'Andi Saputra', roomId: '4', roomNumber: 'A-08', phone: '081234567890', entryDate: '2025-07-23', dueDate: '2026-07-23', paymentStatus: 'Belum lunas', status: 'Aktif', ktp: '3174********0012' },
  { id: '2', name: 'Nabila Putri', roomId: '6', roomNumber: 'B-03', phone: '081298765432', entryDate: '2025-10-24', dueDate: '2026-07-24', paymentStatus: 'Lunas', status: 'Aktif', ktp: '3201********0045' },
  { id: '3', name: 'Fajar Hidayat', roomId: '7', roomNumber: 'C-01', phone: '085612349876', entryDate: '2026-01-25', dueDate: '2026-07-25', paymentStatus: 'Belum lunas', status: 'Aktif', ktp: '3504********0078' },
  { id: '4', name: 'Sinta Maharani', roomId: '2', roomNumber: 'A-02', phone: '087812345678', entryDate: '2026-04-01', dueDate: '2026-08-01', paymentStatus: 'Lunas', status: 'Aktif', ktp: '3321********0099' },
  { id: '5', name: 'Bagas Setiawan', roomId: '1', roomNumber: 'A-01', phone: '089612340000', entryDate: '2026-05-25', dueDate: '2026-07-25', paymentStatus: 'Belum lunas', status: 'Aktif', ktp: '3402********0033' },
];

export const dummyBills: Bill[] = [
  { id: '1', invoiceNumber: 'INV-202607-001', tenantName: 'Andi Saputra', roomNumber: 'A-08', period: 'Juli 2026', amount: 1550000, dueDate: '2026-07-23', status: 'Belum lunas' },
  { id: '2', invoiceNumber: 'INV-202607-002', tenantName: 'Nabila Putri', roomNumber: 'B-03', period: 'Juli 2026', amount: 1500000, dueDate: '2026-07-24', status: 'Lunas' },
  { id: '3', invoiceNumber: 'INV-202607-003', tenantName: 'Fajar Hidayat', roomNumber: 'C-01', period: 'Juli 2026', amount: 1550000, dueDate: '2026-07-25', status: 'Belum lunas' },
  { id: '4', invoiceNumber: 'INV-202607-004', tenantName: 'Sinta Maharani', roomNumber: 'A-02', period: 'Agustus 2026', amount: 1500000, dueDate: '2026-08-01', status: 'Lunas' },
];

export const dummyPayments: Payment[] = [
  { id: '1', date: '2026-07-15', tenantName: 'Nabila Putri', roomNumber: 'B-03', method: 'Transfer Bank', amount: 1500000, status: 'Berhasil', reference: 'TRX-99887766' },
  { id: '2', date: '2026-07-18', tenantName: 'Sinta Maharani', roomNumber: 'A-02', method: 'QRIS', amount: 1500000, status: 'Berhasil', reference: 'TRX-99887767' },
];

export const dummyBookings: Booking[] = [
  { id: '1', tenantName: 'Rizky Pratama', roomNumber: 'B-01', bookingDate: '2026-07-10', checkInDate: '2026-08-01', phone: '081112223334', status: 'Menunggu', bookingFee: 500000 },
  { id: '2', tenantName: 'Dinda Ayuningtyas', roomNumber: 'A-03', bookingDate: '2026-07-12', checkInDate: '2026-08-05', phone: '082233344455', status: 'Disetujui', bookingFee: 300000 },
];

export const dummyExpenses: Expense[] = [
  { id: '1', date: '2026-07-02', category: 'Listrik', amount: 2500000, description: 'Pembayaran listrik bulan Juni' },
  { id: '2', date: '2026-07-05', category: 'Air', amount: 850000, description: 'Tagihan PDAM' },
  { id: '3', date: '2026-07-10', category: 'Perbaikan', amount: 1200000, description: 'Perbaikan AC kamar C-04' },
];

export const formatRupiah = (number: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(dateString));
};
