import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Search, MoreVertical, Award, CheckCircle, XCircle } from 'lucide-react';

const CertificateRegistry: React.FC = () => {
    const certificates = [
        { id: 'FXA-8829-2201', recipient: 'Alex Morgan', course: 'Abacus Foundation', date: 'Oct 15, 2023', status: 'Valid' },
        { id: 'FXA-8829-2202', recipient: 'Sarah Johnson', course: 'Certified Trainer', date: 'Oct 14, 2023', status: 'Valid' },
        { id: 'FXA-8829-2203', recipient: 'Mike Ross', course: 'Vedic Math', date: 'Oct 12, 2023', status: 'Revoked' },
        { id: 'FXA-8829-2204', recipient: 'Rachel Zane', course: 'Abacus Advanced', date: 'Oct 10, 2023', status: 'Valid' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div>
                    <h1 className="font-display font-bold text-3xl text-charcoal">Certificate Registry</h1>
                    <p className="text-gray-500">View and manage all issued certificates on the blockchain.</p>
                </div>
                <Button leftIcon={<Award size={18} />}>Issue Certificate</Button>
            </div>

            <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <Input placeholder="Search by ID, recipient, or course..." className="pl-10" />
                    </div>
                    <div className="flex gap-2">
                        <select className="px-4 py-2 border border-gray-200 rounded-xl bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-mint/20">
                            <option>All Status</option>
                            <option>Valid</option>
                            <option>Revoked</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-sm text-gray-500 border-b border-gray-100">
                                <th className="py-3 px-4 font-medium">Certificate ID</th>
                                <th className="py-3 px-4 font-medium">Recipient</th>
                                <th className="py-3 px-4 font-medium">Course</th>
                                <th className="py-3 px-4 font-medium">Issue Date</th>
                                <th className="py-3 px-4 font-medium">Status</th>
                                <th className="py-3 px-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificates.map((cert, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-3 px-4 font-mono text-sm text-gray-600">{cert.id}</td>
                                    <td className="py-3 px-4 font-medium text-charcoal">{cert.recipient}</td>
                                    <td className="py-3 px-4 text-gray-600">{cert.course}</td>
                                    <td className="py-3 px-4 text-gray-500 text-sm">{cert.date}</td>
                                    <td className="py-3 px-4">
                                        <div className={`flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full w-fit ${cert.status === 'Valid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                            {cert.status === 'Valid' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                                            {cert.status}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <button className="p-1 text-gray-400 hover:text-charcoal transition-colors">
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default CertificateRegistry;
