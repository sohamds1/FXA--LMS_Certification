import React from 'react';
import { Clock, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

interface CourseCardProps {
    title: string;
    description: string;
    level: string;
    duration: string;
    students: number;
    image: string;
    tags: string[];
}

export const CourseCard: React.FC<CourseCardProps> = ({
    title,
    description,
    level,
    duration,
    students,
    image,
    tags
}) => {
    return (
        <Card className="flex flex-col h-full overflow-hidden group p-0">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-deep-blue uppercase tracking-wider">
                        {level}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-[10px] font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="font-display font-bold text-xl text-charcoal mb-2 group-hover:text-deep-blue transition-colors">
                    {title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">
                    {description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-6 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{students.toLocaleString()} Students</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        <span>Online</span>
                    </div>
                </div>

                <Button variant="outline" size="sm" className="w-full justify-between group/btn">
                    View Details
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </Button>
            </div>
        </Card>
    );
};
