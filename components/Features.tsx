'use client'

import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeaturesProps {
  features: Feature[]
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Everything Your Clinic Needs
          <span className="block gradient-text">in One Platform</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From patient management to FBR-compliant billing, our comprehensive suite 
          of tools is designed specifically for the unique needs of Pakistani healthcare providers.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn more</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Additional Benefits Section */}
      <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 sm:p-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Built for Pakistani Healthcare
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges faced by healthcare providers in Pakistan. 
            Our platform is designed with local needs in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Urdu + English</h4>
            <p className="text-gray-600 text-sm">Full bilingual support for all features</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Low Bandwidth</h4>
            <p className="text-gray-600 text-sm">Optimized for slower internet connections</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏦</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">FBR Ready</h4>
            <p className="text-gray-600 text-sm">Complete tax compliance and reporting</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Affordable</h4>
            <p className="text-gray-600 text-sm">Pricing designed for local markets</p>
          </div>
        </div>
      </div>
      
      {/* Testimonial */}
      <div className="mt-20 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-4xl mx-auto border border-gray-100">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <blockquote className="text-2xl font-medium text-gray-900 mb-6">
            "ClinicOS transformed our clinic operations completely. The WhatsApp integration 
            alone saved us hours every day, and our patients love the automated reminders."
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              DR
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Dr. Rashid Ahmed</div>
              <div className="text-gray-600">Family Clinic, Lahore</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}