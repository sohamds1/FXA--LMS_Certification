import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { PlayCircle, Clock, Award } from 'lucide-react';

const MyCourses: React.FC = () => {
    const enrolledCourses = [
        {
            title: 'Abacus Foundation Level 1',
            progress: 45,
            totalModules: 8,
            completedModules: 3,
            lastAccessed: '2 days ago',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            title: 'Mental Math Speed Training',
            progress: 12,
            totalModules: 12,
            completedModules: 1,
            lastAccessed: '5 days ago',
            image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-display font-bold text-3xl text-charcoal">My Courses</h1>
                <p className="text-gray-500">Manage your learning and track your progress.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {enrolledCourses.map((course, index) => (
                    <Card key={index} className="flex flex-col md:flex-row gap-6 p-6 overflow-hidden">
                        <div className="w-full md:w-64 h-40 flex-shrink-0 rounded-xl overflow-hidden relative group">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <PlayCircle className="text-white w-12 h-12" />
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-display font-bold text-xl text-charcoal">{course.title}</h3>
                                    <span className="text-sm text-gray-400">{course.lastAccessed}</span>
                                </div>

                                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>{course.completedModules}/{course.totalModules} Modules</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award size={16} />
                                        <span>Certificate upon completion</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span className="text-gray-600">{course.progress}% Complete</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-brand-gradient rounded-full transition-all duration-1000"
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                                <div className="flex justify-end mt-4">
                                    <Button size="sm">Continue Learning</Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MyCourses;
