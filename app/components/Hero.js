"use client"
import Button from './ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Trusted Advisors for Your Financial Clarity
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-lg">
              Modern CPA delivers comprehensive financial solutions with a boutique approach. From tax strategy to business advisory, we're your partners in financial success.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button 
                variant="primary" 
                size="lg" 
                href="#contact"
                className="group"
              >
                Schedule a Consultation
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="#services" 
                className="text-gray-900 bg-white hover:opacity-95 shadow-sm"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
          <div className="hidden lg:block md:w-2/5">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-xl shadow-xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  <div className="h-10 bg-indigo-50 rounded w-full mt-4"></div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-indigo-100 rounded w-3/12"></div>
                    <div className="h-4 bg-green-100 rounded w-2/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="text-white"
        >
          <motion.path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,181.3C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            animate={{ 
              d: [
                "M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,181.3C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
                "M0,192L60,197.3C120,203,240,213,360,208C480,203,600,181,720,165.3C840,149,960,139,1080,144C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
                "M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,181.3C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </div>
  );
} 