import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Search, MoreVertical, Shield, UserCheck, UserX } from 'lucide-react';

const UserManagement: React.FC = () => {
    const users = [
        { name: 'John Doe', email: 'john@example.com', role: 'Student', status: 'Active', joined: 'Oct 24, 2023' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'Teacher', status: 'Pending', joined: 'Oct 24, 2023' },
        { name: 'Robert Johnson', email: 'robert@example.com', role: 'Student', status: 'Active', joined: 'Oct 23, 2023' },
        { name: 'Emily Davis', email: 'emily@example.com', role: 'Student', status: 'Inactive', joined: 'Oct 23, 2023' },
        { name: 'Michael Brown', email: 'michael@example.com', role: 'Teacher', status: 'Active', joined: 'Oct 22, 2023' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div>
                    <h1 className="font-display font-bold text-3xl text-charcoal">User Management</h1>
                    <p className="text-gray-500">Manage user roles, permissions, and account status.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" leftIcon={<UserX size={18} />}>Blocked Users</Button>
                    <Button leftIcon={<UserCheck size={18} />}>Approve Teachers</Button>
                </div>
            </div>

            <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <Input placeholder="Search users by name or email..." className="pl-10" />
                    </div>
                    <div className="flex gap-2">
                        <select className="px-4 py-2 border border-gray-200 rounded-xl bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-mint/20">
                            <option>All Roles</option>
                            <option>Student</option>
                            <option>Teacher</option>
                            <option>Admin</option>
                        </select>
                        <select className="px-4 py-2 border border-gray-200 rounded-xl bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-mint/20">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Pending</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-sm text-gray-500 border-b border-gray-100">
                                <th className="py-3 px-4 font-medium">User</th>
                                <th className="py-3 px-4 font-medium">Role</th>
                                <th className="py-3 px-4 font-medium">Status</th>
                                <th className="py-3 px-4 font-medium">Joined</th>
                                <th className="py-3 px-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-3 px-4">
                                        <div>
                                            <p className="font-medium text-charcoal">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                            {user.role === 'Teacher' && <Shield size={14} className="text-purple-500" />}
                                            <span className="text-gray-600">{user.role}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-gray-100 text-gray-600'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-500 text-sm">{user.joined}</td>
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

export default UserManagement;
