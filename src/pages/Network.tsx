import { motion } from 'motion/react';
import { Globe, Clock, Users, ShieldCheck, MapPin } from 'lucide-react';
import { NETWORK } from '../constants';

export default function Network() {
  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-base font-bold text-blue-400 tracking-wider uppercase mb-3">Service Coverage</h1>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Global Support <br />
              <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Across Asia</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Ship-AS operates a strong service network across Asia, providing fast mobilization and local expertise to reduce vessel downtime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NETWORK.map((loc) => (
                <div key={loc.name} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col items-center justify-center text-center">
                  <div className={`h-16 w-16 mb-4 rounded-full flex items-center justify-center text-white ${loc.color} shadow-lg ring-8 ring-white`}>
                    <MapPin size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{loc.name}</h4>
                  <span className="text-xs font-bold text-blue-600 mt-2 uppercase tracking-widest">Active Hub</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-10">
              <h3 className="text-3xl font-bold text-slate-900">Our Strategic Advantage</h3>
              <div className="space-y-8">
                {[
                  { icon: Clock, title: 'Fast Mobilization', desc: 'Our teams are ready for emergency deployment within 24 hours of inquiry.' },
                  { icon: Users, title: 'Local Service Partners', desc: 'We collaborate with trusted local specialists to ensure smooth operations in major ports.' },
                  { icon: ShieldCheck, title: 'Reduced Vessel Downtime', desc: 'Efficiency is our priority. We optimize technical processes to get you back on track faster.' },
                  { icon: Globe, title: 'Reliable Support', desc: 'A unified communication channel regardless of your current port or location.' }
                ].map((item, id) => (
                  <div key={id} className="flex gap-6">
                    <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Illustration Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom text-center">
          <div className="max-w-5xl mx-auto p-1 bg-white rounded-[3rem] shadow-xl border border-slate-200">
            <div className="h-[400px] md:h-[600px] rounded-[2.8rem] bg-slate-900 flex items-center justify-center relative overflow-hidden">
               {/* This is a symbolic map representation */}
               <div className="absolute inset-0 opacity-20">
                  <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="relative z-10 text-center">
                  <div className="inline-flex gap-8">
                     <span className="flex items-center gap-2 text-white font-bold"><div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></div> Korea</span>
                     <span className="flex items-center gap-2 text-white font-bold"><div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div> Singapore</span>
                     <span className="flex items-center gap-2 text-white font-bold"><div className="h-3 w-3 bg-yellow-500 rounded-full animate-pulse"></div> China</span>
                  </div>
                  <h4 className="text-2xl text-white/50 font-light mt-8">Asian Maritime Logistics & Support Map</h4>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
