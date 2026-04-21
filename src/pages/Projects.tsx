import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, CheckCircle } from 'lucide-react';

export default function Projects() {
  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
             <div className="max-w-2xl">
                <h1 className="text-base font-bold text-blue-600 tracking-wider uppercase mb-3">Our Track Record</h1>
                <h2 className="text-5xl font-bold text-slate-900 tracking-tight">Recent Projects & Cases</h2>
             </div>
             <p className="text-lg text-slate-500 max-w-sm">
                A glimpse into our successful technical assignments and client commitments worldwide.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all cursor-default"
              >
                <div className="flex justify-between items-start mb-10">
                   <div className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100">
                      {project.category}
                   </div>
                   <div className="text-slate-300 group-hover:text-blue-500 transition-colors">
                      <ExternalLink size={20} />
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-snug group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                   <CheckCircle size={16} className="text-emerald-500" />
                   Successfully Completed
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-slate-900 rounded-[2.5rem] relative overflow-hidden text-center">
             <div className="absolute top-0 left-0 h-full w-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
             <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Our Commitment</h3>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                  We deliver practical solutions with a focus on safety, efficiency, and minimizing downtime. Every project is handled with the highest technical standards and attention to global regulations.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
