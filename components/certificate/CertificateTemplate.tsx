import React from 'react';
import { Award } from 'lucide-react';

interface CertificateTemplateProps {
    recipientName: string;
    courseName: string;
    issueDate: string;
    certificateId: string;
    instructorName: string;
}

export const CertificateTemplate: React.FC<CertificateTemplateProps> = ({
    recipientName,
    courseName,
    issueDate,
    certificateId,
    instructorName
}) => {
    return (
        <div className="w-full max-w-4xl mx-auto bg-white p-2 shadow-2xl rounded-xl overflow-hidden relative">
            {/* Border Design */}
            <div className="border-8 border-double border-mint p-10 h-full relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                    <Award size={400} />
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                            X
                        </div>
                    </div>
                    <h1 className="font-display font-bold text-5xl text-charcoal uppercase tracking-widest mb-2">Certificate</h1>
                    <p className="font-display text-xl text-mint uppercase tracking-widest">of Completion</p>
                </div>

                {/* Content */}
                <div className="text-center space-y-8 relative z-10">
                    <p className="text-gray-500 text-lg italic">This is to certify that</p>

                    <h2 className="font-display font-bold text-4xl text-deep-blue border-b-2 border-gray-100 pb-4 inline-block px-12">
                        {recipientName}
                    </h2>

                    <p className="text-gray-500 text-lg italic">has successfully completed the course</p>

                    <h3 className="font-display font-bold text-3xl text-charcoal">
                        {courseName}
                    </h3>

                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Demonstrating exceptional dedication and mastery of the curriculum prescribed by Future X Academy.
                    </p>
                </div>

                {/* Footer / Signatures */}
                <div className="mt-16 flex justify-between items-end px-12">
                    <div className="text-center">
                        <div className="w-48 border-b border-gray-300 mb-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 mx-auto opacity-70" />
                        </div>
                        <p className="font-bold text-charcoal">{instructorName}</p>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Instructor</p>
                    </div>

                    <div className="text-center">
                        {/* QR Code Placeholder */}
                        <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-lg p-2 mb-2 mx-auto">
                            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${certificateId}`} alt="QR Code" className="w-full h-full" />
                        </div>
                        <p className="font-mono text-xs text-gray-400">ID: {certificateId}</p>
                    </div>

                    <div className="text-center">
                        <p className="font-bold text-charcoal mb-2">{issueDate}</p>
                        <div className="w-48 border-t border-gray-300 pt-2">
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Date Issued</p>
                        </div>
                    </div>
                </div>

                {/* Verification Link */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-[10px] text-gray-400">Verify this certificate at https://futurex.academy/verify</p>
                </div>
            </div>
        </div>
    );
};
