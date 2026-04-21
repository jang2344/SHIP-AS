import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will contact you shortly.');
  };

  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">
                Get in <br />
                <span className="text-blue-600">Touch</span>
              </h1>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                For technical support, retrofit inquiries, or spare parts requests, please contact our global service team.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</h4>
                    <a href="mailto:info@ship-as.com" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      info@ship-as.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</h4>
                    <p className="text-xl font-bold text-slate-900">+82-XX-XXXX-XXXX</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-xl font-bold text-slate-900 leading-tight">Busan, South Korea</p>
                    <p className="text-slate-500 font-medium">Headquarters & Tech Center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-10 text-blue-600">
                  <MessageSquare size={24} />
                  <h2 className="text-2xl font-bold">Inquiry Form</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        placeholder="Your full name"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-slate-700 ml-1">Company</label>
                      <input 
                        type="text" 
                        id="company"
                        required
                        placeholder="Your company name"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="work@email.com"
                      className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Message</label>
                    <textarea 
                      id="message"
                      required
                      rows={6}
                      placeholder="Please describe your technical requirement or spare parts request."
                      className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none" 
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Submit Inquiry <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
