import React, { useState } from 'react';
import { packages } from '../data/packages';

interface Props {
  lang: 'en' | 'es';
}

const TripInquiryForm = ({ lang }: Props) => {
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
    console.log('Form submitted:', formData);
    alert(lang === 'en' ? 'Thank you! We will contact you soon.' : '¡Gracias! Nos pondremos en contacto pronto.');
  };

  return (
    <section className="relative py-16 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cta-background.png" 
          alt="Luxury Peru Experience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b403a]/90 via-[#0b403a]/70 to-[#0b403a]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="text-white">
            <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {lang === 'en' 
                ? 'Ready to Begin Your Extraordinary Journey?' 
                : '¿Listo para Comenzar tu Viaje Extraordinario?'}
            </h2>
            <p className="text-white/80 text-lg font-light mb-8 leading-relaxed max-w-md">
              {lang === 'en'
                ? 'Fill out the form to receive a personalized quote for your next luxury adventure in Peru.'
                : 'Completa el formulario para recibir una cotización personalizada para tu próxima aventura de lujo en Perú.'}
            </p>
            
            <div className="hidden lg:flex flex-col gap-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#dfa126]/20 flex items-center justify-center border border-[#dfa126]/30 group-hover:bg-[#dfa126] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#dfa126] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-base font-light">{lang === 'en' ? 'Expert Travel Designers' : 'Diseñadores de Viajes Expertos'}</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#dfa126]/20 flex items-center justify-center border border-[#dfa126]/30 group-hover:bg-[#dfa126] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#dfa126] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-base font-light">{lang === 'en' ? '100% Tailor-made Experiences' : 'Experiencias 100% a Medida'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex justify-center lg:justify-end">
            <form 
              onSubmit={handleSubmit}
              className="relative bg-[#F9F6EE] p-6 md:p-8 rounded-3xl shadow-2xl space-y-4 w-full max-w-md border border-[#0b403a]/5"
            >
              <h3 className="text-xl font-bold text-[#0b403a] mb-4 text-center font-['Outfit']">
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
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-4 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors appearance-none cursor-pointer text-sm"
                  >
                    <option value="">{lang === 'en' ? 'Choose a tour...' : 'Elige un tour...'}</option>
                    {packages.map(pkg => (
                      <option key={pkg.id} value={pkg[lang].title}>
                        {pkg[lang].title}
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
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-4 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors placeholder:text-[#0b403a]/30 text-sm"
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
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-4 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors text-sm"
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
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-4 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors text-sm"
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
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-4 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors text-sm"
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
                    className="w-full bg-white border border-[#0b403a]/20 rounded-xl px-4 py-2 text-[#0b403a] focus:outline-none focus:border-[#dfa126] transition-colors text-sm"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#dfa126] text-[#0b403a] font-bold py-3 rounded-xl hover:bg-[#0b403a] hover:text-white transition-all duration-300 transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-[#dfa126]/20 mt-2 uppercase tracking-widest text-xs"
              >
                {lang === 'en' ? 'Submit Inquiry' : 'Enviar Solicitud'}
              </button>
              
              <p className="text-[#0b403a]/40 text-[9px] text-center uppercase tracking-[0.2em]">
                {lang === 'en' ? 'No commitment required' : 'Sin compromiso de compra'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripInquiryForm;
