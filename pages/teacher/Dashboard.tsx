import React from 'react';
import { Card } from '../../components/ui/Card';
import { Users, DollarSign, Star, TrendingUp, Calendar } from 'lucide-react';

const TeacherDashboard: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="font-display font-bold text-3xl text-charcoal">Hello, Professor Sarah! 🍎</h1>
                    <p className="text-gray-500">Here's what's happening in your classes today.</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-500">Next Class</p>
                    <p className="font-bold text-charcoal">Advanced Abacus • 2:00 PM</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { icon: <Users className="text-sky" />, label: 'Active Students', value: '124' },
                    { icon: <DollarSign className="text-green-500" />, label: 'Total Earnings', value: '$4,250' },
                    { icon: <Star className="text-yellow-500" />, label: 'Rating', value: '4.9/5' },
                    { icon: <TrendingUp className="text-mint" />, label: 'Completion Rate', value: '94%' },
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Upcoming Classes */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="font-display font-bold text-xl text-charcoal">Upcoming Classes</h2>
                    <div className="space-y-4">
                        {[
                            { title: 'Advanced Abacus Techniques', time: '2:00 PM - 3:30 PM', students: 12, type: 'Live Session' },
                            { title: 'Mental Math Foundation', time: '4:00 PM - 5:00 PM', students: 8, type: 'Review' },
                            { title: 'Vedic Math Intro', time: 'Tomorrow, 10:00 AM', students: 15, type: 'Workshop' },
                        ].map((cls, index) => (
                            <Card key={index} className="flex items-center justify-between p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center text-sky font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-charcoal">{cls.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {cls.time}</span>
                                            <span className="flex items-center gap-1"><Users size={14} /> {cls.students} Students</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                    {cls.type}
                                </span>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-6">
                    <h2 className="font-display font-bold text-xl text-charcoal">Recent Activity</h2>
                    <Card className="p-6">
                        <div className="space-y-6">
                            {[
                                { user: 'Alex M.', action: 'submitted assignment', time: '10 mins ago' },
                                { user: 'System', action: 'payout processed', time: '2 hours ago' },
                                { user: 'Sarah J.', action: 'joined your class', time: '4 hours ago' },
                                { user: 'Mike T.', action: 'left a 5-star review', time: 'Yesterday' },
                            ].map((activity, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-mint flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-charcoal">
                                            <span className="font-bold">{activity.user}</span> {activity.action}
                                        </p>
                                        <p className="text-xs text-gray-400">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;
