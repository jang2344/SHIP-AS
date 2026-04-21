import { motion } from 'motion/react';
import { CORE_SERVICES, OTHER_SERVICES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">
              Technical <br />
              <span className="text-blue-600">Marine Services</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              From complex electrical consulting to essential spare parts supply, Ship-AS provides a full spectrum of services to keep your vessel's electrical systems at peak performance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24 bg-white">
        <div className="container-custom flex flex-col gap-32">
          {CORE_SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="flex-1">
                <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  {service.description} We focus on precision and safety, using state-of-the-art diagnostic tools and industry best practices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                      <span className="font-medium text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                  Inquire about this service <ArrowRight size={20} />
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                  <img 
                    src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1581094288338-2314dddb7bc3' : '1531297484001-80022131f5a1'}?auto=format&fit=crop&q=80&w=2670`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Inspection & Maintenance</h2>
            <p className="text-slate-600">Preventive measures to ensure long-term reliability and safety of vessel distribution systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OTHER_SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-8">
                  <div className="h-14 w-14 bg-slate-900 text-white rounded-xl flex items-center justify-center">
                    <service.icon size={24} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-1 gap-3">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
            <div className="inline-block p-4 rounded-full bg-blue-50 text-blue-600 mb-8">
                <CheckCircle2 size={32} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to upgrade your fleet?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                Contact us today for a detailed consultation regarding your vessel's electrical requirements.
            </p>
            <Link 
                to="/contact" 
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
            >
                Get a Custom Quote
            </Link>
        </div>
      </section>
    </div>
  );
}
