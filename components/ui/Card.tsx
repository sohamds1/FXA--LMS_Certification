import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hoverEffect = true,
    ...props
}) => {
    return (
        <div
            className={`
        bg-white rounded-3xl p-6 
        border border-gray-100
        shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
        ${hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-4px_rgba(107,185,248,0.15)]' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export const GlassCard: React.FC<CardProps> = ({
    children,
    className = '',
    hoverEffect = true
}) => {
    return (
        <div
            className={`
        backdrop-blur-md bg-white/80
        rounded-3xl p-6
        border border-white/50
        shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
        ${hoverEffect ? 'transition-all duration-300 hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};
