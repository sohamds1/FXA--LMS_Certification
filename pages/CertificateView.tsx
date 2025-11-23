import React from 'react';
import { useParams } from 'react-router-dom';
import { CertificateTemplate } from '../components/certificate/CertificateTemplate';
import { Button } from '../components/ui/Button';
import { Download, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificateView: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Mock data - in a real app, fetch based on ID
    const certificateData = {
        recipientName: 'Alex Morgan',
        courseName: 'Abacus Foundation Level 1',
        issueDate: 'October 24, 2023',
        certificateId: id || 'FXA-SAMPLE-001',
        instructorName: 'Sarah Jenkins'
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Actions */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link to="/student/certificates">
                        <Button variant="ghost" leftIcon={<ArrowLeft size={18} />}>Back to My Certificates</Button>
                    </Link>
                    <div className="flex gap-3">
                        <Button variant="outline" leftIcon={<Share2 size={18} />}>Share</Button>
                        <Button leftIcon={<Download size={18} />}>Download PDF</Button>
                    </div>
                </div>

                {/* Certificate Display */}
                <CertificateTemplate {...certificateData} />
            </div>
        </div>
    );
};

export default CertificateView;
