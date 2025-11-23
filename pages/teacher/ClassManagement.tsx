import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Search, MoreVertical, Plus } from 'lucide-react';

const ClassManagement: React.FC = () => {
    const students = [
        { name: 'Alice Cooper', course: 'Abacus L1', progress: 85, status: 'Active' },
        { name: 'Bob Smith', course: 'Abacus L1', progress: 42, status: 'Active' },
        { name: 'Charlie Brown', course: 'Vedic Math', progress: 10, status: 'Inactive' },
        { name: 'Diana Prince', course: 'Abacus L2', progress: 95, status: 'Active' },
        { name: 'Evan Wright', course: 'Mental Math', progress: 60, status: 'Active' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div>
                    <h1 className="font-display font-bold text-3xl text-charcoal">Class Management</h1>
                    <p className="text-gray-500">Manage your students and their progress.</p>
                </div>
                <Button leftIcon={<Plus size={18} />}>Add Student</Button>
            </div>

            <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <Input placeholder="Search students..." className="pl-10" />
                    </div>
                    <div className="flex gap-2">
                        <select className="px-4 py-2 border border-gray-200 rounded-xl bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-mint/20">
                            <option>All Courses</option>
                            <option>Abacus L1</option>
                            <option>Abacus L2</option>
                        </select>
                        <select className="px-4 py-2 border border-gray-200 rounded-xl bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-mint/20">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-sm text-gray-500 border-b border-gray-100">
                                <th className="py-3 px-4 font-medium">Student Name</th>
                                <th className="py-3 px-4 font-medium">Course</th>
                                <th className="py-3 px-4 font-medium">Progress</th>
                                <th className="py-3 px-4 font-medium">Status</th>
                                <th className="py-3 px-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-3 px-4 font-medium text-charcoal">{student.name}</td>
                                    <td className="py-3 px-4 text-gray-600">{student.course}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${student.progress > 80 ? 'bg-green-500' : student.progress > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                    style={{ width: `${student.progress}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-gray-500">{student.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {student.status}
                                        </span>
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

export default ClassManagement;
