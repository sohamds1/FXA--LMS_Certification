import React from 'react';
import { Card } from '../components/ui/Card';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="pt-20 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-6">
                            Empowering the <span className="text-mint">Next Generation</span> of Educators
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Future X Academy is on a mission to standardize and elevate Abacus and Mental Math education globally through technology, transparency, and trust.
                        </p>
                    </div>
                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Our Mission"
                                className="rounded-3xl shadow-xl"
                            />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">Our Mission</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    To create a universally recognized certification standard for mental math education that empowers teachers with sustainable careers and students with cognitive excellence.
                                </p>
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">Our Vision</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    A world where every child has access to quality mental math education, delivered by certified, passionate, and technologically empowered educators.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-charcoal text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Core Values</h2>
                        <p className="text-gray-400">The principles that guide every decision we make.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Innovation', desc: 'Constantly pushing the boundaries of educational technology.' },
                            { title: 'Integrity', desc: 'Building trust through transparent and verifiable certification.' },
                            { title: 'Excellence', desc: 'Setting the highest standards for curriculum and instruction.' }
                        ].map((value, index) => (
                            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-display font-bold text-xl text-mint mb-3">{value.title}</h3>
                                <p className="text-gray-300">{value.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
