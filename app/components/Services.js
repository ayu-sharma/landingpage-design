"use client"
import { useState } from 'react';
import { Calculator, FileText, TrendingUp, ClipboardCheck, CreditCard, Star } from 'lucide-react';
import Button from './ui/Button';

export default function Services() {
  const [activeTab, setActiveTab] = useState('individual');

  return (
    <div id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Financial Solutions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From tax strategy to business advisory, we provide end-to-end financial services tailored to your unique needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Calculator className="h-8 w-8 text-indigo-600" />}
            title="Tax Services"
            description="Personal and business tax preparation, strategic tax planning, and IRS representation during audits or disputes."
          />
          <ServiceCard
            icon={<FileText className="h-8 w-8 text-indigo-600" />}
            title="Accounting & Bookkeeping"
            description="Monthly/quarterly bookkeeping, financial statements preparation, and comprehensive ledger management."
          />
          <ServiceCard
            icon={<TrendingUp className="h-8 w-8 text-indigo-600" />}
            title="Business Advisory"
            description="Financial forecasting, startup consulting, cash flow management, and entity structure guidance."
          />
          <ServiceCard
            icon={<ClipboardCheck className="h-8 w-8 text-indigo-600" />}
            title="Auditing & Assurance"
            description="Independent audits for regulatory compliance, internal controls review, and financial reviews for stakeholders."
          />
          <ServiceCard
            icon={<CreditCard className="h-8 w-8 text-indigo-600" />}
            title="Payroll Services"
            description="Employee payroll processing, tax filings, direct deposit setup, and pay stub generation."
          />
          <ServiceCard
            icon={<Star className="h-8 w-8 text-indigo-600" />}
            title="Specialty Services"
            description="High-net-worth individual tax planning, succession and estate planning, virtual CFO services, and cryptocurrency tax compliance."
          />
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" href="#contact">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
} 