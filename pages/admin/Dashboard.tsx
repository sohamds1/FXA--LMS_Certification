import React from 'react';
import { Card } from '../../components/ui/Card';
import { Users, Award, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

const AdminDashboard: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="font-display font-bold text-3xl text-charcoal">Admin Overview</h1>
                <p className="text-gray-500">Platform statistics and system health.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { icon: <Users className="text-sky" />, label: 'Total Users', value: '12,450' },
                    { icon: <Award className="text-mint" />, label: 'Certificates Issued', value: '8,200' },
                    { icon: <DollarSign className="text-green-500" />, label: 'Revenue (YTD)', value: '$1.2M' },
                    { icon: <TrendingUp className="text-purple-500" />, label: 'Growth', value: '+18%' },
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Registrations */}
                <div className="space-y-6">
                    <h2 className="font-display font-bold text-xl text-charcoal">Recent Registrations</h2>
                    <Card className="p-0 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="py-3 px-6 text-sm font-medium text-gray-500">User</th>
                                    <th className="py-3 px-6 text-sm font-medium text-gray-500">Role</th>
                                    <th className="py-3 px-6 text-sm font-medium text-gray-500">Date</th>
                                    <th className="py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { name: 'John Doe', role: 'Student', date: 'Oct 24, 2023', status: 'Active' },
                                    { name: 'Jane Smith', role: 'Teacher', date: 'Oct 24, 2023', status: 'Pending' },
                                    { name: 'Robert Johnson', role: 'Student', date: 'Oct 23, 2023', status: 'Active' },
                                    { name: 'Emily Davis', role: 'Student', date: 'Oct 23, 2023', status: 'Active' },
                                    { name: 'Michael Brown', role: 'Teacher', date: 'Oct 22, 2023', status: 'Active' },
                                ].map((user, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-3 px-6 font-medium text-charcoal">{user.name}</td>
                                        <td className="py-3 px-6 text-gray-500">{user.role}</td>
                                        <td className="py-3 px-6 text-gray-500 text-sm">{user.date}</td>
                                        <td className="py-3 px-6">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>

                {/* System Alerts */}
                <div className="space-y-6">
                    <h2 className="font-display font-bold text-xl text-charcoal">System Alerts</h2>
                    <div className="space-y-4">
                        {[
                            { title: 'High Server Load', desc: 'Server CPU usage is at 85%.', type: 'warning' },
                            { title: 'New Teacher Applications', desc: '5 new teacher applications pending review.', type: 'info' },
                            { title: 'Payment Gateway Issue', desc: 'Failed transactions detected in the last hour.', type: 'error' },
                        ].map((alert, index) => (
                            <Card key={index} className="p-4 flex gap-4 border-l-4 border-l-transparent hover:shadow-md transition-shadow" style={{ borderLeftColor: alert.type === 'error' ? '#ef4444' : alert.type === 'warning' ? '#f59e0b' : '#3b82f6' }}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${alert.type === 'error' ? 'bg-red-100 text-red-500' :
                                        alert.type === 'warning' ? 'bg-yellow-100 text-yellow-500' :
                                            'bg-blue-100 text-blue-500'
                                    }`}>
                                    <AlertCircle size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal">{alert.title}</h3>
                                    <p className="text-sm text-gray-500">{alert.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
