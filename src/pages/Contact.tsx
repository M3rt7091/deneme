import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
  link?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const contactInfo: ContactInfo[] = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Adres',
      details: ['SAAT SOKAK SPINE TOWER NO:5 KAT:11', 'MASLAK / SARIYER / İSTANBUL'],
      link: 'https://goo.gl/maps/pKZ8YKd3YQZnJ1cc8'
    },
    {
      icon: 'fa-phone-alt',
      title: 'Telefon',
      details: ['(0850) 460 62 62'],
      link: 'tel:08504606262'
    },
    {
      icon: 'fa-fax',
      title: 'Faks',
      details: ['(0212) 970 62 62']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.match(/^\d{11}$/)) {
      setError('Telefon numarası 11 haneli olmalıdır.');
      return;
    }
    setShowSuccess(true);
  };

  return (
    <div className="contact">
      <h1>İletişim</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Bize Ulaşın</h2>
          <p>
            <strong>Adres:</strong> Rüzgarlıbahçe Mah. Kavak Sok. No:31/1 34805 Kavacık, Beykoz / İstanbul
          </p>
          <p>
            <strong>Telefon:</strong> 0850 XXX XX XX
          </p>
          <p>
            <strong>E-posta:</strong> info@anasigorta.com.tr
          </p>
        </div>
        <div className="contact-form">
          <h2>İletişim Formu</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                className="input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                className="input"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                maxLength={11}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                className="input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-semibold">
                Konu
              </label>
              <select
                id="subject"
                className="input"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              >
                <option value="">Konu Seçiniz</option>
                <option value="bilgi">Bilgi Talebi</option>
                <option value="sikayet">Şikayet</option>
                <option value="hasar">Hasar İşlemleri</option>
                <option value="teklif">Teklif Talebi</option>
                <option value="diger">Diğer</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                Mesaj
              </label>
              <textarea
                id="message"
                className="input min-h-[120px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            {error && <p className="text-red-500 font-semibold">{error}</p>}
            <button type="submit" className="btn">
              Gönder <i className="fas fa-paper-plane ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 