import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Download, Share2, ExternalLink } from 'lucide-react';

const MyCertificates: React.FC = () => {
    const certificates = [
        {
            title: 'Introduction to Abacus',
            issueDate: 'Oct 15, 2023',
            id: 'FXA-8829-2201',
            image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-display font-bold text-3xl text-charcoal">My Certificates</h1>
                <p className="text-gray-500">View and download your earned credentials.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                    <Card key={index} className="p-0 overflow-hidden group">
                        <div className="relative h-48 bg-gray-100 overflow-hidden">
                            <img
                                src={cert.image}
                                alt="Certificate Preview"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                                <span className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">Verified Credential</span>
                                <h3 className="text-white font-bold text-lg leading-tight">{cert.title}</h3>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between text-sm text-gray-500 mb-6">
                                <span>Issued: {cert.issueDate}</span>
                                <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">ID: {cert.id}</span>
                            </div>

                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1" leftIcon={<Download size={16} />}>
                                    Download
                                </Button>
                                <Button variant="ghost" size="sm" className="px-3">
                                    <Share2 size={18} />
                                </Button>
                                <Button variant="ghost" size="sm" className="px-3">
                                    <ExternalLink size={18} />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MyCertificates;
