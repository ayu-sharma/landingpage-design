"use client"
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from './ui/Button';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [currentTime, setCurrentTime] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Personal Tax Planning');
  
  const services = [
    'Personal Tax Planning',
    'Business Tax Strategy',
    'Wealth Management',
    'CFO Advisory Services',
    'Estate Planning',
    'Other'
  ];
  
  const toggleServiceDropdown = () => setIsServiceDropdownOpen(!isServiceDropdownOpen);
  
  const selectService = (service) => {
    setSelectedService(service);
    setIsServiceDropdownOpen(false);
  };

  useEffect(() => {
    setIsClient(true);
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (isServiceDropdownOpen && !event.target.closest("#service-selector")) {
        setIsServiceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let's Start a Conversation</h2>
            <p className="mt-4 text-lg text-gray-600">
              Schedule a confidential consultation to discuss how we can help you achieve your financial goals.
            </p>
            <div className="mt-8 space-y-6">
              <ContactInfo
                icon={<Phone className="h-6 w-6 text-white" />}
                title="Phone"
                content="(555) 123-4567"
              />
              <ContactInfo
                icon={<Mail className="h-6 w-6 text-white" />}
                title="Email"
                content="info@moderncpa.com"
              />
              <ContactInfo
                icon={<MapPin className="h-6 w-6 text-white" />}
                title="Office"
                content={
                  <>
                    123 Financial District, Suite 500<br/>
                    New York, NY 10001
                  </>
                }
              />
              <ContactInfo
                icon={<Clock className="h-6 w-6 text-white" />}
                title="Current Time"
                content={
                  <span className="flex items-center space-x-2">
                    <span className="text-indigo-600 font-medium">
                      {isClient ? currentTime : '--:--:-- --'}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-500">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </span>
                  </span>
                }
              />
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule a Consultation</h3>
              <form className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" 
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" 
                  />
                </div>
                
                {/* Custom Service Selector */}
                <div id="service-selector" className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interested In</label>
                  
                  {/* Custom select header */}
                  <div 
                    className="appearance-none flex items-center justify-between w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 bg-white cursor-pointer"
                    onClick={toggleServiceDropdown}
                  >
                    <span>{selectedService}</span>
                    <svg className={`h-4 w-4 text-gray-700 transition-transform duration-200 ${isServiceDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {/* Dropdown list */}
                  {isServiceDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full rounded-md shadow-lg bg-white border border-gray-200 overflow-hidden">
                      <div className="max-h-48 overflow-auto">
                        {services.map((service, index) => (
                          <div key={service}>
                            <div 
                              className="py-2 px-3 cursor-pointer hover:bg-indigo-50 transition-colors duration-150 bg-white"
                              onClick={() => selectService(service)}
                            >
                              {service}
                            </div>
                            {/* Add divider except after the last item */}
                            {index < services.length - 1 && (
                              <div className="h-px bg-gray-200"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Hidden actual select for form submission */}
                  <select 
                    id="service" 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="sr-only"
                  >
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={3} 
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  ></textarea>
                </div>
                <div>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full cursor-pointer hover:shadow-lg transition-all duration-200" 
                    type="submit"
                  >
                    Request Consultation
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, content }) {
  return (
    <div className="flex group hover:transform hover:scale-105 transition-all duration-200">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 rounded-md bg-indigo-600 flex items-center justify-center group-hover:bg-indigo-700 transition-colors duration-200">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">{title}</h3>
        <div className="mt-1 text-gray-600">{content}</div>
      </div>
    </div>
  );
}