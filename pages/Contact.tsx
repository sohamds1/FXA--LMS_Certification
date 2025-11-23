import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

const Contact: React.FC = () => {
    return (
        <div className="pt-20 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-6">
                        Get in <span className="text-mint">Touch</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Have questions about our certification program or need support? We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <Card className="p-8 bg-deep-blue text-white border-none">
                            <h2 className="font-display font-bold text-2xl mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-mint" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm mb-1">Email Us</p>
                                        <p className="font-medium">support@futurexacademy.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-mint" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm mb-1">Call Us</p>
                                        <p className="font-medium">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-mint" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm mb-1">Visit Us</p>
                                        <p className="font-medium">123 Innovation Drive, Tech City, TC 90210</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="font-display font-bold text-xl text-charcoal mb-4">FAQ</h3>
                            <div className="space-y-4">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-700">
                                        <span>How long does certification take?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                                        Most students complete the certification within 8-12 weeks, depending on their pace.
                                    </p>
                                </details>
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-700">
                                        <span>Is the certificate valid internationally?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                                        Yes, Future X Academy certificates are recognized in over 50 countries and verified on the blockchain.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8 md:p-10">
                        <h2 className="font-display font-bold text-2xl text-charcoal mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="First Name" placeholder="John" />
                                <Input label="Last Name" placeholder="Doe" />
                            </div>
                            <Input label="Email Address" type="email" placeholder="john@example.com" />
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all min-h-[150px] resize-y"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <Button className="w-full" size="lg" rightIcon={<Send size={18} />}>
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
