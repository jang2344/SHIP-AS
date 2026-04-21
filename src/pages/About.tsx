import { motion } from 'motion/react';
import { Target, Eye, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1590674000103-689e6eb7da3e?auto=format&fit=crop&q=80&w=2670" 
            alt="Vessel engine room" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6"
          >
            About Ship-AS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            A specialized marine electrical service company providing world-class solutions for the global maritime industry.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Specialized in Marine Electrical Systems
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Ship-AS is a specialized marine electrical service company providing consulting, retrofit, inspection, repair, and spare parts supply for vessels worldwide.
                </p>
                <p>
                  We focus on delivering reliable and practical solutions for ship power systems, helping clients maintain safe and efficient operations. Our team comprises senior engineers with decades of experience in the marine sector.
                </p>
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 italic text-blue-900 font-medium relative">
                "Our mission is to ensure the heart of every vessel—its electrical power system—remains robust, safe, and efficient, no matter where it is located."
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1551650992-ee4fd47df41f?auto=format&fit=crop&q=80&w=1400" 
                alt="Engineering" 
                className="rounded-2xl w-full h-full object-cover aspect-square shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5f6667b8?auto=format&fit=crop&q=80&w=1400" 
                alt="Tools" 
                className="rounded-2xl w-full h-full object-cover aspect-square shadow-lg mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Strength */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-bold text-blue-600 tracking-wider uppercase mb-3">Our Assets</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Our Core Strengths</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="h-14 w-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                <Shield size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4">Korean Vessel Expertise</h4>
              <p className="text-slate-600 leading-relaxed">
                Strong expertise specifically in Korean-built vessels, which allows us to provide more targeted and efficient solutions for a large portion of the global fleet.
              </p>
            </div>

            <div className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="h-14 w-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                <Users size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4">Responsive Network</h4>
              <p className="text-slate-600 leading-relaxed">
                Our responsive service network across Asia ensures that high-quality technical support is never far away from your vessel's route.
              </p>
            </div>

            <div className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="h-14 w-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                <Target size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4">Practical Solutions</h4>
              <p className="text-slate-600 leading-relaxed">
                We don't just identify problems; we deliver practical, cost-effective solutions that minimize vessel downtime and maximize safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="bg-slate-900 rounded-[3rem] px-8 py-20 md:p-24 relative overflow-hidden">
             {/* Background glow */}
             <div className="absolute top-0 right-0 h-64 w-64 bg-blue-600/20 blur-[120px] rounded-full"></div>
             
             <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 text-blue-400">
                  <Eye size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Our Vision</h3>
                <p className="text-2xl text-slate-300 font-light leading-relaxed">
                  To be a trusted global partner in marine electrical solutions and vessel support services, recognized for our technical excellence and commitment to the safety of the global maritime community.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
