import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative">
      {/* Main Content - constrained by parent container */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between pt-16 pb-20 px-8 lg:px-12">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start text-center lg:text-left animate-slide-in">
          <p className="uppercase text-gray-600 tracking-widest mb-6 font-semibold text-lg animate-fade-in">
            NEW ARRIVALS ONLY
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-gray-900 mb-8 leading-tight animate-scale-in">
            new{" "}
            <span role="img" aria-label="wave" className="inline-block align-middle text-6xl lg:text-8xl animate-bounce">
              👋
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              collections
            </span>
            <br />
            for everyone
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            Discover the latest trends in fashion. Quality meets style in our curated collection of premium clothing.
          </p>
          <Link
            to="/latest"
            className="inline-flex items-center mt-4 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
          >
            Latest Collection &nbsp; &rarr;
          </Link>
        </div>
        
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="/hero_image.png"
              alt="New Collection"
              className="w-[420px] h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Company Policies Section */}
      <section className="max-w-6xl mx-auto mt-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card hover-lift text-center animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Easy Returns</h3>
            <p className="text-gray-600 leading-relaxed">
              Hassle-free 30-day returns on all products. No questions asked, full refund guaranteed.
            </p>
          </div>
          
          <div className="card hover-lift text-center animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Free Shipping</h3>
            <p className="text-gray-600 leading-relaxed">
              Free shipping on orders over ₹999. Fast & reliable delivery across India.
            </p>
          </div>
          
          <div className="card hover-lift text-center animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Secure Shopping</h3>
            <p className="text-gray-600 leading-relaxed">
              Your data is protected with industry-standard security. Shop with confidence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Spacer between services and footer */}
      <div className="py-16"></div>
      </div>

      {/* Footer - Full width, breaks out of parent container */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-16">
        <footer className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500 to-violet-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Newsletter Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold text-white mb-4">
              Stay in the loop
            </h3>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Get the latest updates on new arrivals, exclusive offers, and fashion trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="text-center lg:text-left animate-slide-in">
              <h3 className="font-bold text-3xl mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SHOPPER
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted destination for premium fashion and lifestyle products. Quality meets style in every piece.
              </p>
              {/* Social Media Icons */}
              <div className="flex justify-center lg:justify-start space-x-4">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/md-adnan-aziz-60920424b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                {/* GitHub */}
                <a 
                  href="https://github.com/developeradnanaziz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Twitter */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-center lg:text-left animate-slide-in" style={{animationDelay: '0.1s'}}>
              <h4 className="font-semibold text-xl mb-6 text-white">Quick Links</h4>
              <div className="space-y-3">
                <Link to="/shop" className="text-gray-300 hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">🛍️</span> Shop All
                </Link>
                <Link to="/men" className="text-gray-300 hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">👔</span> Men's Collection
                </Link>
                <Link to="/women" className="text-gray-300 hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">👗</span> Women's Collection
                </Link>
                <Link to="/kids" className="text-gray-300 hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">🧸</span> Kids Collection
                </Link>
              </div>
            </div>
            
            {/* Support */}
            <div className="text-center lg:text-left animate-slide-in" style={{animationDelay: '0.2s'}}>
              <h4 className="font-semibold text-xl mb-6 text-white">Customer Care</h4>
              <div className="space-y-3">
                <a href="/privacy" className="text-gray-300 hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">🔒</span> Privacy Policy
                </a>
                <a href="/help" className="text-gray-300 hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">❓</span> Help Center
                </a>
                <Link to="/track-shipment" className="text-gray-300 hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">📦</span> Track Your Order
                </Link>
                <a href="/returns" className="text-gray-300 hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">↩️</span> Returns & Exchanges
                </a>
              </div>
            </div>
            
            {/* Contact */}
            <div className="text-center lg:text-left animate-slide-in" style={{animationDelay: '0.3s'}}>
              <h4 className="font-semibold text-xl mb-6 text-white">Get in Touch</h4>
              <div className="space-y-4">
                <a href="mailto:support@shopper.com" className="text-gray-300 hover:text-indigo-400 transition-all duration-300 flex items-center justify-center lg:justify-start group">
                  <span className="mr-3 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                    ✉️
                  </span>
                  support@shopper.com
                </a>
                <a href="tel:+911234567890" className="text-gray-300 hover:text-indigo-400 transition-all duration-300 flex items-center justify-center lg:justify-start group">
                  <span className="mr-3 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                    📞
                  </span>
                  +91 12345 67890
                </a>
                <div className="text-gray-300 flex items-center justify-center lg:justify-start">
                  <span className="mr-3 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                    📍
                  </span>
                  Mohali, India
                </div>
                <div className="text-gray-300 flex items-center justify-center lg:justify-start">
                  <span className="mr-3 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                    🕒
                  </span>
                  24/7 Support
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-300 text-center md:text-left">
                &copy; {new Date().getFullYear()} SHOPPER. All rights reserved. Made with ❤️ in India
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <a href="/terms" className="text-gray-300 hover:text-indigo-400 transition-colors">Terms of Service</a>
                <a href="/cookies" className="text-gray-300 hover:text-indigo-400 transition-colors">Cookie Policy</a>
                <a href="/sitemap" className="text-gray-300 hover:text-indigo-400 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
          </div>
        </footer>
      </div>
    </div>
  );
}