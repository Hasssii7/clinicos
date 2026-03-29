'use client'

import { useState } from 'react'
import { Stethoscope, Play, CheckCircle, AlertCircle } from 'lucide-react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    setMessageType(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        setMessageType('success')
        setEmail('')
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.')
        setMessageType('error')
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.')
      setMessageType('error')
    }

    setIsLoading(false)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='37' cy='7' r='1'/%3E%3Ccircle cx='7' cy='37' r='1'/%3E%3Ccircle cx='37' cy='37' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center items-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <Stethoscope className="h-12 w-12 text-white" />
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Digitize Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Healthcare Clinic
            </span>
            in Pakistan
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Replace paper records with a modern, mobile-first platform. 
            Complete patient management, WhatsApp integration, FBR-compliant billing, 
            and AI-powered insights designed specifically for Pakistani clinics.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
              🇵🇰 Made for Pakistan
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
              📱 Mobile-First Design
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
              💬 WhatsApp Integration
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
              🧾 FBR Compliant
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your clinic email address"
                  className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 border-0 focus:ring-4 focus:ring-white/20 outline-none text-lg"
                  required
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !email.trim()}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-orange-600 hover:to-red-600 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Joining...
                  </div>
                ) : (
                  'Start Free Trial'
                )}
              </button>
            </form>
            
            {/* Success/Error Message */}
            {message && (
              <div className={`flex items-center justify-center gap-2 p-4 rounded-xl mb-6 ${
                messageType === 'success' 
                  ? 'bg-green-500/20 border border-green-400/30 text-green-100' 
                  : 'bg-red-500/20 border border-red-400/30 text-red-100'
              }`}>
                {messageType === 'success' ? (
                  <CheckCircle className="h-5 w-5 text-green-400" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-400" />
                )}
                <span className="font-medium">{message}</span>
              </div>
            )}
            
            <p className="text-blue-200 text-sm mb-8">
              ✨ 30-day free trial • No credit card required • Setup in 5 minutes
            </p>
            
            {/* Demo Button */}
            <div className="flex justify-center">
              <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 flex items-center gap-3">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch 2-Min Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="relative mt-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200">Clinics Trust Us</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-blue-200">Patients Managed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-blue-200">Uptime Guarantee</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-300/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-300/10 rounded-full blur-xl"></div>
    </section>
  )
}