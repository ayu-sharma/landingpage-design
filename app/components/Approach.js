'use client';

import { Check } from 'lucide-react';

export default function Approach() {
  return (
    <div id="approach" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Boutique Approach</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We combine traditional expertise with modern technology to deliver exceptional financial solutions.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <ApproachFeature
            title="Direct Partner Access"
            description="Work directly with senior partners who understand your unique financial situation and goals."
          />
          <ApproachFeature
            title="Proactive Strategy"
            description="Stay ahead with forward-thinking tax planning and financial strategies that anticipate market changes."
          />
          <ApproachFeature
            title="Holistic Financial View"
            description="Get comprehensive financial guidance that considers all aspects of your personal and business needs."
          />
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center">The Modern CPA Difference</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <DifferenceFeature
              title="Personalized Attention"
              description="Limited client roster ensures you receive focused, dedicated service from our expert team."
            />
            <DifferenceFeature
              title="Industry Specialization"
              description="Deep expertise in startups, tech, and creative industries means we understand your unique challenges."
            />
            <DifferenceFeature
              title="Technology Forward"
              description="Leverage cutting-edge financial technology while maintaining the personal touch of a boutique firm."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ApproachFeature({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

function DifferenceFeature({ title, description }) {
  return (
    <div className="text-center">
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
} 