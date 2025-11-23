import React from 'react';
import { UserPlus, BookOpen, Award, Briefcase } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-6 h-6 text-white" />,
    title: 'Register',
    description: 'Create your profile and select your certification path.'
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: 'Learn',
    description: 'Master the curriculum through interactive AI-driven modules.'
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: 'Certify',
    description: 'Pass the global assessment and earn your blockchain-verified badge.'
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    title: 'Teach',
    description: 'Start your own academy or join our global network of educators.'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-4">
            How It <span className="text-sky">Works</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Your journey from aspirant to certified expert in four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center mb-6 shadow-lg shadow-mint/30 group-hover:scale-110 transition-transform duration-300 relative">
                  {step.icon}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-charcoal shadow-sm border border-gray-100">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;