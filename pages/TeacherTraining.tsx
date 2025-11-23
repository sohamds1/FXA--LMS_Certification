import React from 'react';
import { CheckCircle, Award, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const benefits = [
    {
        icon: <Award className="w-8 h-8 text-mint" />,
        title: 'Global Certification',
        description: 'Earn a credential recognized in over 50 countries. Validated on the blockchain for instant verification.'
    },
    {
        icon: <Users className="w-8 h-8 text-mint" />,
        title: 'Student Network',
        description: 'Get instant access to our database of parents looking for certified tutors in your area.'
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-mint" />,
        title: 'High Earning Potential',
        description: 'Certified Future X trainers earn 40% more on average than non-certified tutors.'
    }
];

const curriculum = [
    'Advanced Abacus Techniques',
    'Child Psychology & Pedagogy',
    'Digital Classroom Management',
    'Marketing Your Academy',
    'Student Progress Tracking',
    'Gamified Learning Strategies'
];

const TeacherTraining: React.FC = () => {
    return (
        <div className="pt-20 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-charcoal text-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-2 bg-mint/10 text-mint rounded-full text-sm font-bold mb-6">
                                BECOME A CERTIFIED INSTRUCTOR
                            </div>
                            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
                                Turn Your Passion for Teaching into a <span className="text-mint">Global Career</span>
                            </h1>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                                Join the elite network of Future X certified educators. Master the art of mental math instruction and build a sustainable, high-growth education business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                                    Apply Now
                                </Button>
                                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                                    Download Syllabus
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Teacher Training"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-mint/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky/20 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-4">
                            Why Choose <span className="text-sky">Future X?</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We provide more than just a certificate. We provide a career path.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-mint/10 flex items-center justify-center mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-brand-gradient rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                                    Comprehensive Curriculum
                                </h2>
                                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                    Our 12-week intensive program covers everything you need to know to start teaching immediately. From technical mastery to business basics.
                                </p>
                                <Button className="bg-white text-deep-blue hover:bg-gray-50 border-none">
                                    View Full Schedule
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {curriculum.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                        <CheckCircle className="text-mint flex-shrink-0" size={20} />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full bg-white blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeacherTraining;
