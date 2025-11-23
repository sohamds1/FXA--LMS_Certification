import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { PlayCircle, Lock, CheckCircle } from 'lucide-react';

const TrainingModules: React.FC = () => {
    const modules = [
        {
            title: 'Module 1: Advanced Abacus Techniques',
            description: 'Mastering multi-digit multiplication and division.',
            status: 'completed',
            duration: '45 mins'
        },
        {
            title: 'Module 2: Classroom Management',
            description: 'Strategies for keeping students engaged and disciplined.',
            status: 'in-progress',
            duration: '60 mins',
            progress: 65
        },
        {
            title: 'Module 3: Gamification in Learning',
            description: 'Using games to reinforce mathematical concepts.',
            status: 'locked',
            duration: '50 mins'
        },
        {
            title: 'Module 4: Business & Marketing',
            description: 'How to attract and retain students for your academy.',
            status: 'locked',
            duration: '40 mins'
        }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-display font-bold text-3xl text-charcoal">Training Modules</h1>
                <p className="text-gray-500">Complete these modules to maintain your certification status.</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {modules.map((module, index) => (
                    <Card key={index} className={`p-6 flex flex-col md:flex-row items-center gap-6 ${module.status === 'locked' ? 'opacity-60 bg-gray-50' : ''}`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${module.status === 'completed' ? 'bg-green-100 text-green-600' :
                                module.status === 'in-progress' ? 'bg-sky/10 text-sky' :
                                    'bg-gray-200 text-gray-400'
                            }`}>
                            {module.status === 'completed' ? <CheckCircle size={24} /> :
                                module.status === 'locked' ? <Lock size={24} /> :
                                    <PlayCircle size={24} />}
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="font-bold text-lg text-charcoal">{module.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{module.description}</p>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-gray-400">
                                <span>{module.duration}</span>
                                <span className="capitalize">{module.status.replace('-', ' ')}</span>
                            </div>

                            {module.status === 'in-progress' && (
                                <div className="w-full max-w-xs mt-3 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-sky w-[65%]" />
                                </div>
                            )}
                        </div>

                        <div className="flex-shrink-0">
                            {module.status === 'locked' ? (
                                <Button variant="ghost" disabled>Locked</Button>
                            ) : (
                                <Button variant={module.status === 'completed' ? 'outline' : 'primary'}>
                                    {module.status === 'completed' ? 'Review' : 'Continue'}
                                </Button>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TrainingModules;
