import React, { useState } from 'react';
import { packages } from '../data/packages';

interface Props {
  lang: 'en' | 'es';
}

export default function TripInquiryForm({ lang }: Props) {
  const [formData, setFormData] = useState({
    program: '',
    startDate: '',
    endDate: '',
    name: '',
    adults: '1',
    children: '0'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "51972438838";
    
    const textEn = `Hello Inkaland Explorers, I would like to request a quote:
Program: ${formData.program}
Name: ${formData.name}
Dates: ${formData.startDate} to ${formData.endDate}
Travelers: ${formData.adults} Adults, ${formData.children} Children`;

    const textEs = `Hola Inkaland Explorers, me gustaría solicitar una cotización:
Programa: ${formData.program}
Nombre: ${formData.name}
Fechas: del ${formData.startDate} al ${formData.endDate}
Viajeros: ${formData.adults} Adultos, ${formData.children} Niños`;

    const message = lang === 'en' ? textEn : textEs;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative py-16 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cta-background.avif" 
          alt="Luxury Peru Experience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b403a]/90 via-[#0b403a]/70 to-[#0b403a]/90"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left Column: Content */}
          <div className="text-white w-full max-w-md">
            <h2 className="font-['Outfit'] text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {lang === 'en' 
                ? 'Ready to Begin Your Extraordinary Journey?' 
                : '¿Listo para Comenzar tu Viaje Extraordinario?'}
            </h2>
            <p className="text-white/80 text-sm font-light mb-8 leading-relaxed max-w-md">
              {lang === 'en'
                ? 'Fill out the form to receive a personalized quote for your next luxury adventure in Peru.'
                : 'Completa el formulario para recibir una cotización personalizada para tu próxima aventura de lujo en Perú.'}
            </p>
            
            <div className="hidden lg:flex flex-col gap-3">
              <div className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-full bg-[#dfa126]/20 flex items-center justify-center border border-[#dfa126]/30 group-hover:bg-[#dfa126] transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#dfa126] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-light">{lang === 'en' ? 'Expert Travel Designers' : 'Diseñadores de Viajes Expertos'}</span>
              </div>
              <div className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-full bg-[#dfa126]/20 flex items-center justify-center border border-[#dfa126]/30 group-hover:bg-[#dfa126] transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#dfa126] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-light">{lang === 'en' ? '100% Tailor-made Experiences' : 'Experiencias 100% a Medida'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full max-w-md flex justify-center">
            <form 
              onSubmit={handleSubmit}
              className="relative bg-[#F9F6EE] p-6 rounded-3xl shadow-2xl space-y-4 w-full max-w-md border border-[#0b403a]/5"
            >
              <h3 className="text-lg font-bold text-[#0b403a] mb-3 text-center font-['Outfit']">
                {lang === 'en' ? 'Get a Free Quote' : 'Solicita una Cotización'}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Program Selection */}
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfa126] mb-1">
                    {lang === 'en' ? 'Select Program' : 'Seleccionar Programa'}
                  </label>
                  <select 
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-3 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors appearance-none cursor-pointer text-xs"
                  >
                    <option value="" disabled>{lang === 'en' ? 'Choose a tour...' : 'Elige un tour...'}</option>
                    {packages.map(pkg => (
                      <option key={pkg.id} value={`${pkg[lang].title} ($${pkg.price} USD)`}>
                        {pkg[lang].title} - ${pkg.price} USD
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfa126] mb-1">
                    {lang === 'en' ? 'Full Name' : 'Nombre Completo'}
                  </label>
                  <input 
                    type="text"
                    name="name"
                    placeholder={lang === 'en' ? 'John Doe' : 'Juan Pérez'}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-3 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors placeholder:text-[#0b403a]/30 text-xs"
                  />
                </div>

                {/* Dates */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfa126] mb-1">
                    {lang === 'en' ? 'Start Date' : 'Fecha de Inicio'}
                  </label>
                  <input 
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-3 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfa126] mb-1">
                    {lang === 'en' ? 'End Date' : 'Fecha de Fin'}
                  </label>
                  <input 
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-3 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors text-xs"
                  />
                </div>

                {/* Travelers */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfa126] mb-1">
                    {lang === 'en' ? 'Adults' : 'Adultos'}
                  </label>
                  <input 
                    type="number"
                    name="adults"
                    min="1"
                    value={formData.adults}
                    onChange={handleChange}
                    onWheel={(e) => e.currentTarget.blur()}
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-3 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfa126] mb-1">
                    {lang === 'en' ? 'Children' : 'Menores'}
                  </label>
                  <input 
                    type="number"
                    name="children"
                    min="0"
                    value={formData.children}
                    onChange={handleChange}
                    onWheel={(e) => e.currentTarget.blur()}
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-3 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors text-xs"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#0b403a] text-white font-bold py-3 rounded-xl hover:bg-[#dfa126] hover:text-[#0b403a] transition-all duration-300 transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-[#0b403a]/20 mt-2 uppercase tracking-widest text-xs"
              >
                {lang === 'en' ? 'Submit Inquiry' : 'Enviar Solicitud'}
              </button>
              

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
