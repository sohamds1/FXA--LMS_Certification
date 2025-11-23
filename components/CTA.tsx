import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden bg-brand-gradient p-12 md:p-24 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Join thousands of certified educators making a real impact in students' lives.
              Start your certification journey today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-deep-blue hover:bg-gray-50 hover:shadow-xl hover:shadow-black/10 border-none"
                rightIcon={<ArrowRight size={20} />}
              >
                Get Certified Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;