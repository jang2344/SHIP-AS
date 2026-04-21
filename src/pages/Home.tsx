import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Zap, Navigation, Mail } from 'lucide-react';
import { CORE_SERVICES, WHY_US, NETWORK } from '../constants';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&q=80&w=2670" 
            alt="Marine Vessel" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Marine Electrical <br />
              <span className="text-blue-500">Solutions</span> You Can Trust
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              Specialized consulting, retrofit, inspection, and global service for ship power systems. Delivering reliable electrical solutions and spare parts supply for vessels worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                Request a Quote <ArrowRight size={20} />
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-bold backdrop-blur-md transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-base font-bold text-blue-600 tracking-wider uppercase mb-3">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Our Core Services
              </h3>
            </div>
            <Link to="/services" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {CORE_SERVICES.map((service) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.slice(0, 2).map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Ship-AS */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2670" 
                alt="Technical Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl hidden md:block">
                <span className="text-4xl font-bold block mb-1">15+</span>
                <span className="text-sm font-medium opacity-90 uppercase tracking-wider">Years Experience</span>
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold text-blue-600 tracking-wider uppercase mb-3 text-left">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">
                Professionalism in <br /> Every Detail
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Ship-AS stands out as a specialized partner for marine electrical systems. Our deep technical roots and commitment to quality ensure your vessel operates at peak efficiency.
              </p>
              <div className="flex flex-col gap-4">
                {WHY_US.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
                  >
                    <div className="h-10 w-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-blue-600 border border-slate-100">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="font-semibold text-slate-800">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Subtle Map Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <Globe size={800} strokeWidth={1} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-base font-bold text-blue-400 tracking-wider uppercase mb-3">Global Reach</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Global Service Network
            </h3>
            <p className="text-slate-400 text-lg">
              Supporting clients across Asia with fast and efficient service. Our strategic locations ensure minimal downtime for your fleet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NETWORK.map((location, idx) => (
              <motion.div 
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-lg hover:bg-white/10 transition-colors"
              >
                <div className={`h-2 w-12 ${location.color} rounded-full mb-8`}></div>
                <h4 className="text-3xl font-bold mb-4">{location.name}</h4>
                <p className="text-slate-400 mb-8">
                  Full technical support, retrofit squads, and spare parts warehouse.
                </p>
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  Local Expertise <Navigation size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600">
        <div className="container-custom">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl overflow-hidden relative group">
            <div className="absolute -top-24 -right-24 h-64 w-64 bg-blue-50 bg-opacity-50 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div className="max-w-xl relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Need technical support or spare parts?
              </h3>
              <p className="text-lg text-slate-600 mb-0">
                Contact our team today for fast and reliable service. We typically respond within 12 hours for all technical inquiries.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all inline-flex items-center gap-3"
              >
                Get Started Now <Mail size={22} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
