import React from 'react';
import { Card } from '../../components/ui/Card';
import { BookOpen, Award, Clock, TrendingUp } from 'lucide-react';

const StudentDashboard: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="font-display font-bold text-3xl text-charcoal">Welcome back, Alex! 👋</h1>
                <p className="text-gray-500">Continue your learning journey.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { icon: <BookOpen className="text-mint" />, label: 'Enrolled Courses', value: '3' },
                    { icon: <Clock className="text-sky" />, label: 'Hours Learned', value: '24.5' },
                    { icon: <Award className="text-purple-500" />, label: 'Certificates', value: '1' },
                    { icon: <TrendingUp className="text-orange-500" />, label: 'Avg. Score', value: '92%' },
                ].map((stat, index) => (
                    <Card key={index} className="flex items-center gap-4 p-6">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                            <p className="font-display font-bold text-2xl text-charcoal">{stat.value}</p>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Current Course */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="font-display font-bold text-xl text-charcoal">Continue Learning</h2>
                    <Card className="flex flex-col md:flex-row gap-6 p-6">
                        <img
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                            alt="Course"
                            className="w-full md:w-48 h-32 object-cover rounded-xl"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-charcoal">Abacus Foundation Level 1</h3>
                                    <span className="text-xs font-bold text-mint bg-mint/10 px-2 py-1 rounded-full">In Progress</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">Module 3: Visualization Techniques</p>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs text-gray-500 mb-2">
                                    <span>Progress</span>
                                    <span>45%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-gradient w-[45%]" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Upcoming Events / Notifications */}
                <div className="space-y-6">
                    <h2 className="font-display font-bold text-xl text-charcoal">Upcoming</h2>
                    <Card className="p-0 overflow-hidden">
                        <div className="p-4 border-b border-gray-100 bg-gray-50">
                            <p className="font-bold text-charcoal text-sm">Next Live Session</p>
                        </div>
                        <div className="p-4">
                            <div className="flex gap-4 items-center mb-4">
                                <div className="text-center px-3 py-1 bg-sky/10 rounded-lg">
                                    <p className="text-xs font-bold text-sky uppercase">Oct</p>
                                    <p className="font-bold text-charcoal">24</p>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-charcoal">Q&A with Master Lee</p>
                                    <p className="text-xs text-gray-500">10:00 AM - 11:00 AM</p>
                                </div>
                            </div>
                            <button className="w-full py-2 text-sm font-medium text-mint hover:bg-mint/5 rounded-lg transition-colors">
                                Join Meeting
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
