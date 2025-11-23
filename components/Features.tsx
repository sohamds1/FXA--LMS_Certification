import React from 'react';
import { Award, TrendingUp, Users, BrainCircuit, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-deep-purple blur-[120px] opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-bold uppercase leading-none text-white">
            The Digital <span className="text-outline">Pipeline</span>
          </h2>
          <div className="mt-6 h-1 w-full max-w-xs bg-gradient-to-r from-acid-green to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2">

          {/* Main Large Feature */}
          <div className="glass-panel group relative col-span-1 overflow-hidden rounded-3xl p-8 transition-all hover:border-acid-green/40 md:col-span-2 md:row-span-2">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-neon-blue/20 blur-[60px] transition-all group-hover:bg-neon-blue/30" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold uppercase text-white">Teacher-First Platform</h3>
                <p className="mt-2 text-gray-400">
                  We handle the content, tracking, and logistics. You focus on what you do best: transforming students' minds.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;