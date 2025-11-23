import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center text-white font-bold">X</div>
                            <span className="font-display font-bold text-xl text-charcoal">Future X</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Empowering the next generation of learners and educators through progressive, future-driven certification.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:border-mint hover:text-mint hover:shadow-md transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-charcoal mb-6">Platform</h4>
                        <ul className="space-y-4">
                            <li><a href="/about" className="text-gray-500 hover:text-mint text-sm transition-colors">About Us</a></li>
                            <li><a href="/courses" className="text-gray-500 hover:text-mint text-sm transition-colors">Our Courses</a></li>
                            <li><a href="/teacher-training" className="text-gray-500 hover:text-mint text-sm transition-colors">Teacher Training</a></li>
                            <li><a href="/verify" className="text-gray-500 hover:text-mint text-sm transition-colors">Verify Certificate</a></li>
                            <li><a href="/contact" className="text-gray-500 hover:text-mint text-sm transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-display font-bold text-charcoal mb-6">Support</h4>
                        <ul className="space-y-4">
                            {['Help Center', 'Student FAQs', 'Teacher Resources', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 hover:text-mint text-sm transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-charcoal mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-500 text-sm">
                                <MapPin size={18} className="text-mint shrink-0" />
                                <span>123 Innovation Drive,<br />Tech Valley, CA 94043</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <Phone size={18} className="text-mint shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <Mail size={18} className="text-mint shrink-0" />
                                <span>hello@futurex.edu</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">© 2025 Future X Academy. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-400 hover:text-charcoal text-sm">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-charcoal text-sm">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-charcoal text-sm">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
