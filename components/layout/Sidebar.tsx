import React from 'react';
import {
    LayoutDashboard,
    BookOpen,
    Award,
    User,
    Settings,
    LogOut,
    Users,
    FileText,
    DollarSign
} from 'lucide-react';

interface SidebarProps {
    role?: 'student' | 'teacher' | 'admin';
    isOpen?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ role = 'student', isOpen = true }) => {
    const menuItems = {
        student: [
            { icon: <LayoutDashboard size={20} />, label: 'Overview', href: '/student' },
            { icon: <BookOpen size={20} />, label: 'My Courses', href: '/student/courses' },
            { icon: <Award size={20} />, label: 'My Certificates', href: '/student/certificates' },
            { icon: <User size={20} />, label: 'Profile', href: '/student/profile' },
        ],
        teacher: [
            { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/teacher' },
            { icon: <BookOpen size={20} />, label: 'Training Modules', href: '/teacher/training' },
            { icon: <Users size={20} />, label: 'Class Management', href: '/teacher/classes' },
            { icon: <DollarSign size={20} />, label: 'Earnings', href: '/teacher/earnings' },
            { icon: <Award size={20} />, label: 'My Certificates', href: '/teacher/certificates' },
        ],
        admin: [
            { icon: <LayoutDashboard size={20} />, label: 'Overview', href: '/admin' },
            { icon: <Users size={20} />, label: 'User Management', href: '/admin/users' },
            { icon: <Award size={20} />, label: 'Certificate Registry', href: '/admin/certificates' },
            { icon: <FileText size={20} />, label: 'Content Manager', href: '/admin/content' },
            { icon: <Settings size={20} />, label: 'Settings', href: '/admin/settings' },
        ]
    };

    const currentMenu = menuItems[role];

    return (
        <aside className={`
      fixed left-0 top-0 bottom-0 bg-white border-r border-gray-100 
      transition-all duration-300 z-40 flex flex-col
      ${isOpen ? 'w-64' : 'w-20'}
    `}>
            {/* Logo Area */}
            <div className="h-20 flex items-center justify-center border-b border-gray-50">
                <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    X
                </div>
                {isOpen && (
                    <span className="ml-3 font-display font-bold text-charcoal text-lg">Future X</span>
                )}
            </div>

            {/* Menu Items */}
            <div className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
                {currentMenu.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-mint/10 hover:text-mint rounded-xl transition-colors group"
                    >
                        <span className="group-hover:scale-110 transition-transform duration-200">
                            {item.icon}
                        </span>
                        {isOpen && <span className="font-medium">{item.label}</span>}
                    </a>
                ))}
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-gray-50">
                <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                    <LogOut size={20} />
                    {isOpen && <span className="font-medium">Logout</span>}
                </button>
            </div>
        </aside>
    );
};
