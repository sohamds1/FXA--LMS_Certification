import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/Card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Certified Teacher',
    location: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    quote: 'The Future X certification completely transformed my teaching career. The curriculum is modern, and the digital badge gave me instant credibility with parents.'
  },
  {
    name: 'David Chen',
    role: 'Academy Owner',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    quote: 'I scaled my academy from 50 to 500 students in just one year using the Future X methodology. The support network is incredible.'
  },
  {
    name: 'Priya Patel',
    role: 'Math Educator',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    quote: 'Finally, a certification that respects the tradition of Abacus while embracing modern technology. The AI tools are a game-changer.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-4">
            Success <span className="text-mint">Stories</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from our global community of certified educators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative h-full pt-12">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-brand-gradient p-0.5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <h3 className="font-bold text-charcoal">{testimonial.name}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{testimonial.role} • {testimonial.location}</p>
              </div>

              <div className="relative">
                <Quote size={24} className="absolute -top-2 -left-2 text-mint/20 transform -scale-x-100" />
                <p className="text-gray-600 text-sm leading-relaxed italic relative z-10 px-4">
                  "{testimonial.quote}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;