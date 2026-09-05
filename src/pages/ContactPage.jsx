import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} onNavigate={onNavigate} />

      <div className="py-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Get In Touch</span>
          <h1 className="brand-font-serif text-4xl font-bold text-brand-charcoal">We'd Love to Hear From You</h1>
          <p className="text-xs sm:text-sm text-brand-gray">
            Whether you have questions about our bamboo & cane products, bulk artisan orders, or NECBDC partnership initiatives, our team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Info cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-brand-border-light shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-light-green text-brand-green rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-charcoal">Headquarters & Experience Center</h3>
                  <p className="text-xs text-brand-gray mt-1 leading-relaxed">
                    NECBDC Complex, Byrnihat, District Ri-Bhoi, Assam-Meghalaya Border, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-brand-border-light pt-4">
                <div className="p-3 bg-brand-light-green text-brand-green rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-charcoal">Email Support</h3>
                  <p className="text-xs text-brand-gray mt-1">support@greentribe.in</p>
                  <p className="text-xs text-brand-gray">partnerships@necbdc.org.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-brand-border-light pt-4">
                <div className="p-3 bg-brand-light-green text-brand-green rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-charcoal">Customer Helpline</h3>
                  <p className="text-xs text-brand-gray mt-1">+91 1800-200-9988 (Toll Free)</p>
                  <p className="text-[10px] text-brand-gray">Mon - Sat: 9:30 AM - 6:30 PM IST</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-green text-white p-6 rounded-2xl space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" /> Bulk & Corporate Gifting
              </div>
              <h3 className="brand-font-serif text-lg font-bold">Custom Eco-Friendly Gifting Solutions</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Looking for sustainable corporate gifting hampers crafted from North Eastern cane & bamboo? Contact our corporate team for customized branding and wholesale pricing.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-brand-border-light shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8" />
                </div>
                <h2 className="brand-font-serif text-2xl font-bold text-brand-charcoal">Message Received!</h2>
                <p className="text-xs text-brand-gray max-w-md mx-auto">
                  Thank you for reaching out to GreenTribe. Our support executive will respond to your email within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-green text-white text-xs font-bold px-6 py-2.5 rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="brand-font-serif text-xl font-bold text-brand-charcoal">Send Us a Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-beige border border-brand-border-light rounded-xl px-3.5 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-beige border border-brand-border-light rounded-xl px-3.5 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Product Inquiry / Order Status"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-brand-beige border border-brand-border-light rounded-xl px-3.5 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1">Message *</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-beige border border-brand-border-light rounded-xl px-3.5 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> SUBMIT MESSAGE
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
