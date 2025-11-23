import React, { useState } from 'react';
import { Shield, CheckCircle, AlertCircle, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const Verify: React.FC = () => {
    const [certificateId, setCertificateId] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [result, setResult] = useState<any>(null);

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            if (certificateId.toUpperCase() === 'FXA-12345') {
                setResult({
                    name: 'Sarah Johnson',
                    course: 'Certified Abacus Trainer',
                    date: 'October 15, 2023',
                    id: 'FXA-12345',
                    status: 'Active'
                });
                setStatus('success');
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    return (
        <div className="pt-20 pb-20 min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <div className="container mx-auto px-6 max-w-2xl">
                <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-mint/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Shield className="w-10 h-10 text-mint" />
                    </div>
                    <h1 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-4">
                        Verify Certificate
                    </h1>
                    <p className="text-gray-600">
                        Enter the unique certificate ID to verify the authenticity of a Future X Academy credential.
                    </p>
                </div>

                <Card className="p-8 md:p-12 shadow-xl">
                    <form onSubmit={handleVerify} className="space-y-6">
                        <div>
                            <Input
                                label="Certificate ID"
                                placeholder="e.g. FXA-12345"
                                value={certificateId}
                                onChange={(e) => setCertificateId(e.target.value)}
                                icon={<Search size={20} />}
                                className="text-lg py-4"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            isLoading={status === 'loading'}
                        >
                            Verify Credential
                        </Button>
                    </form>

                    {status === 'success' && result && (
                        <div className="mt-8 p-6 bg-green-50 border border-green-100 rounded-xl animate-slide-up">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="text-green-500" size={24} />
                                <h3 className="font-bold text-green-800 text-lg">Valid Certificate Found</h3>
                            </div>
                            <div className="space-y-3 text-sm text-green-900">
                                <div className="flex justify-between border-b border-green-100 pb-2">
                                    <span className="text-green-700">Recipient Name</span>
                                    <span className="font-bold">{result.name}</span>
                                </div>
                                <div className="flex justify-between border-b border-green-100 pb-2">
                                    <span className="text-green-700">Certification</span>
                                    <span className="font-bold">{result.course}</span>
                                </div>
                                <div className="flex justify-between border-b border-green-100 pb-2">
                                    <span className="text-green-700">Issue Date</span>
                                    <span className="font-bold">{result.date}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-green-700">Status</span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        {result.status}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-green-100">
                                <Link to={`/certificate/${result.id}`} className="block w-full text-center py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors">
                                    View Official Certificate
                                </Link>
                            </div>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="mt-8 p-6 bg-red-50 border border-red-100 rounded-xl animate-slide-up">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="text-red-500" size={24} />
                                <div>
                                    <h3 className="font-bold text-red-800">Certificate Not Found</h3>
                                    <p className="text-sm text-red-700 mt-1">
                                        The ID provided does not match any active records in our database. Please check the ID and try again.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </Card>

                <p className="text-center text-gray-400 text-sm mt-8">
                    Protected by blockchain technology for immutable verification.
                </p>
            </div>
        </div>
    );
};

export default Verify;
