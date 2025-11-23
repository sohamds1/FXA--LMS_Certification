import React from 'react';
import { CourseCard } from '../components/ui/CourseCard';
import { Search, Filter } from 'lucide-react';
import { Input } from '../components/ui/Input';

const courses = [
    {
        title: 'Abacus Foundation Level 1',
        description: 'Master the basics of the Abacus tool. Perfect for beginners starting their mental math journey.',
        level: 'Beginner',
        duration: '8 Weeks',
        students: 1240,
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Abacus', 'Mental Math', 'Foundation']
    },
    {
        title: 'Advanced Mental Arithmetic',
        description: 'Complex calculations without the physical tool. Develop lightning-fast calculation speeds.',
        level: 'Advanced',
        duration: '12 Weeks',
        students: 850,
        image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Visualization', 'Speed Math', 'Cognitive']
    },
    {
        title: 'Certified Abacus Trainer',
        description: 'Become a certified instructor. Learn teaching methodologies and classroom management.',
        level: 'Professional',
        duration: '6 Months',
        students: 2100,
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Certification', 'Pedagogy', 'Career']
    },
    {
        title: 'Vedic Math Mastery',
        description: 'Ancient Indian mathematical techniques for rapid calculation and problem solving.',
        level: 'Intermediate',
        duration: '10 Weeks',
        students: 600,
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Vedic', 'Shortcuts', 'Math']
    },
    {
        title: 'Early Childhood Math',
        description: 'Specialized curriculum for introducing mathematical concepts to children aged 4-6.',
        level: 'Beginner',
        duration: '6 Weeks',
        students: 1500,
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Kids', 'Early Learning', 'Fun']
    },
    {
        title: 'Olympiad Prep Course',
        description: 'Intensive preparation for international math olympiads and competitions.',
        level: 'Expert',
        duration: '16 Weeks',
        students: 320,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Competition', 'Elite', 'Problem Solving']
    }
];

const Courses: React.FC = () => {
    return (
        <div className="pt-20 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-6">
                        Explore Our <span className="text-mint">Curriculum</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        From beginner foundations to professional certification, find the perfect path for your journey.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
                    <div className="flex-grow relative">
                        <Input
                            placeholder="Search for courses..."
                            className="pl-12"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors font-medium">
                        <Filter size={20} />
                        <span>Filters</span>
                    </button>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
