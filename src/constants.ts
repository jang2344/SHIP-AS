import { 
  Zap, 
  Settings, 
  ShieldCheck, 
  Wrench, 
  ShoppingBag, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  Navigation,
  FileText
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Global Network', path: '/network' },
  { label: 'Contact', path: '/contact' },
];

export const CORE_SERVICES = [
  {
    id: 'consulting',
    title: 'Electrical Consulting & Troubleshooting',
    description: 'Advanced analysis and fault diagnosis for marine power systems.',
    icon: Zap,
    details: [
      'Power system analysis',
      'Fault diagnosis and troubleshooting',
      'Load analysis',
      'Technical advisory'
    ]
  },
  {
    id: 'retrofit',
    title: 'Retrofit & Inspection',
    description: 'ACB retrofit, switchboard inspection, and generator diagnostics.',
    icon: Settings,
    details: [
      'Obsolete equipment replacement',
      'System upgrade and optimization',
      'Onboard installation and commissioning',
      'Thermal inspection'
    ]
  },
  {
    id: 'repair',
    title: 'Marine Repair Services',
    description: 'Bow thruster dock repair and on-site technical service.',
    icon: Wrench,
    details: [
      'Electrical and mechanical repair',
      'System integration support',
      'Emergency repair services',
      'Dock operation specialists'
    ]
  },
  {
    id: 'parts',
    title: 'Spare Parts Supply',
    description: 'Reliable sourcing and fast delivery for Korean-built vessel components.',
    icon: ShoppingBag,
    details: [
      'OEM and equivalent parts sourcing',
      'Fast and reliable delivery',
      'Global logistics support',
      'Korean-built vessel specialization'
    ]
  }
];

export const OTHER_SERVICES = [
  {
    title: 'Switchboard Inspection',
    description: 'Ensure the reliability of your vessel’s electrical distribution system.',
    icon: Database,
    items: ['Preventive maintenance', 'Fault risk analysis', 'Performance evaluation']
  },
  {
    title: 'Generator Inspection',
    description: 'Maintain optimal generator performance and prevent unexpected failures.',
    icon: Zap,
    items: ['Performance testing', 'Load testing', 'Condition assessment']
  }
];

export const WHY_US = [
  'Specialized in marine electrical systems',
  'Strong expertise in Korean-built vessels',
  'Fast response across Asia (Korea, Singapore, China)',
  'Proven experience in retrofit and troubleshooting',
  'Cost-effective and reliable solutions'
];

export const PROJECTS = [
  { title: 'ACB retrofit for container vessels', category: 'Retrofit' },
  { title: 'Emergency generator repair in Singapore', category: 'Repair' },
  { title: 'Switchboard inspection for tanker vessels', category: 'Inspection' },
  { title: 'Bow thruster repair during dry dock', category: 'Repair' },
  { title: 'Spare parts supply for Korean-built ships', category: 'Spare Parts' }
];

export const NETWORK = [
  { name: 'Korea', color: 'bg-blue-600' },
  { name: 'Singapore', color: 'bg-red-600' },
  { name: 'China', color: 'bg-yellow-600' }
];
