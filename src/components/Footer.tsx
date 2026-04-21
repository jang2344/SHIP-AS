import { Link } from 'react-router-dom';
import { Ship, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <Ship className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold tracking-tighter text-white">
                SHIP-AS
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Specialized marine electrical service company providing consulting, retrofit, inspection, repair, and spare parts supply for vessels worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">Electrical Consulting</Link></li>
              <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">ACB Retrofit</Link></li>
              <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">Switchboard Inspection</Link></li>
              <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">Generator Inspection</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-sm">info@ship-as.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-sm">+82-XX-XXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-sm text-balance">Busan, South Korea | Global Service Center</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SHIP-AS Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
