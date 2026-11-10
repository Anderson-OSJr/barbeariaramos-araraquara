import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperiencePillars } from './components/ExperiencePillars';
import { ServicesMenu } from './components/ServicesMenu';
import { SpaceGallery } from './components/SpaceGallery';
import { Testimonials } from './components/Testimonials';
import { LocationAndContact } from './components/LocationAndContact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { BarberService } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<BarberService | null>(null);

  const handleOpenBooking = (service?: BarberService) => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(null);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-[#0b1325] text-slate-100 selection:bg-blue-600 selection:text-white font-sans-main antialiased">
      {/* Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 4 Pillars of the Ramos Experience */}
        <ExperiencePillars />

        {/* Services & Transparent Pricing */}
        <ServicesMenu onSelectService={(service) => handleOpenBooking(service)} />

        {/* Gallery / Lounge & Space */}
        <SpaceGallery />

        {/* Client Testimonials & Social Proof */}
        <Testimonials />

        {/* Location with Google Maps & Direct WhatsApp */}
        <LocationAndContact onOpenBooking={() => handleOpenBooking()} />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Discrete Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* High-Conversion Booking Wizard Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
}
