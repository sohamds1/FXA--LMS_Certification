import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-mint/20 blur-3xl animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-sky/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/10 text-mint font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
              </span>
              Future-Ready Certification
            </div>

            <h1 className="font-display font-bold text-5xl lg:text-7xl leading-tight text-charcoal mb-6">
              Shape the <span className="brand-gradient-text">Future</span> of <br />
              Global Education
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join the world's most progressive Abacus & Mental Math certification platform.
              Empowering teachers and students with next-gen skills for a brighter tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg">
                Verify Certificate
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-mint" />
                <span>Globally Recognized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-mint" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl animate-float">
            <div className="relative z-10 bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-sky/20 border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="w-full h-auto rounded-3xl object-cover aspect-[4/3]"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white font-bold text-xl">
                  98%
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Success Rate</p>
                  <p className="font-bold text-charcoal">Certified Teachers</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-mint/10 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sky/10 rounded-full blur-xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;