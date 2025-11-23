import React from 'react';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const TeacherLayout: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar role="teacher" />
            <div className="flex-1 ml-64 p-8">
                <Outlet />
            </div>
        </div>
    );
};
