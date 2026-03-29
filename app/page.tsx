import Hero from '@/components/Hero'
import Features from '@/components/Features'
import { Stethoscope, Calendar, MessageSquare, FileText, CreditCard, Package, BarChart3, Building2, Users, Brain } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Stethoscope,
      title: 'Patient Management',
      description: 'Complete patient profiles with history, visits, and prescriptions. Full Urdu and English support.'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Doctor-wise appointments, walk-ins, and automated SMS/WhatsApp reminders.'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Integration',
      description: 'Connect your clinic\'s WhatsApp Business API for seamless patient communication.'
    },
    {
      icon: FileText,
      title: 'Digital EMR',
      description: 'Simple doctor notes, prescription generator, and AI-powered patient summaries.'
    },
    {
      icon: CreditCard,
      title: 'FBR-Compliant Billing',
      description: 'Generate GST/NTN invoices, track payments, and export tax reports automatically.'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Track medicine stock, get low-stock alerts, and link prescriptions to inventory.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Revenue tracking, patient insights, and comprehensive financial summaries.'
    },
    {
      icon: Building2,
      title: 'Multi-Clinic Support',
      description: 'Manage multiple branches with centralized dashboards and role-based access.'
    },
    {
      icon: Users,
      title: 'Role Management',
      description: 'Admin, Doctor, Receptionist, and Branch Manager roles with custom permissions.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Patient data summaries, diagnosis suggestions, and automated prescription generation.'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Hero />
      <Features features={features} />
      
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your clinic. Start with a free trial and scale as you grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">₨2,999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Single clinic
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Up to 500 patients
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  WhatsApp integration
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Basic AI features
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
          
          {/* Professional Plan */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 relative text-white transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">₨6,999</span>
                <span className="text-blue-100">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Up to 3 clinics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Unlimited patients
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Full AI suite
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl hover:bg-gray-50 transition-colors font-semibold">
                Start Free Trial
              </button>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">₨12,999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Unlimited clinics
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Priority support
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Dedicated manager
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Stethoscope className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-2xl font-bold">ClinicOS</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering Pakistani healthcare clinics with modern, affordable digital solutions. 
                Transform your practice today.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm">📧</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm">📱</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © 2024 ClinicOS. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}