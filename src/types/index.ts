export interface BarberService {
  id: string;
  name: string;
  category: 'cabelo' | 'barba' | 'combo' | 'terapia';
  duration: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface BarberMaster {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  service: string;
}

export interface BookingState {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  notes?: string;
  drinkPreference?: string;
}
