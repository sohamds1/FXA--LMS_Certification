import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';

const Profile: React.FC = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-display font-bold text-3xl text-charcoal">My Profile</h1>
                <p className="text-gray-500">Manage your personal information and account settings.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <Card className="p-8 flex flex-col items-center text-center h-fit">
                    <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full bg-gray-100 border-4 border-white shadow-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="absolute bottom-0 right-0 p-2 bg-mint text-white rounded-full shadow-md hover:bg-mint/90 transition-colors">
                            <Camera size={18} />
                        </button>
                    </div>

                    <h2 className="font-display font-bold text-xl text-charcoal mb-1">Alex Morgan</h2>
                    <p className="text-gray-500 text-sm mb-6">Student ID: FXA-8829</p>

                    <div className="w-full space-y-2">
                        <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                            <span className="text-gray-500">Joined</span>
                            <span className="font-medium">Sept 2023</span>
                        </div>
                        <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                            <span className="text-gray-500">Level</span>
                            <span className="font-medium text-mint">Intermediate</span>
                        </div>
                        <div className="flex justify-between text-sm py-2">
                            <span className="text-gray-500">Time Zone</span>
                            <span className="font-medium">GMT -5</span>
                        </div>
                    </div>
                </Card>

                {/* Edit Form */}
                <Card className="lg:col-span-2 p-8">
                    <h3 className="font-display font-bold text-lg text-charcoal mb-6">Personal Information</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="First Name" defaultValue="Alex" icon={<User size={18} />} />
                            <Input label="Last Name" defaultValue="Morgan" icon={<User size={18} />} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="Email Address" defaultValue="alex.m@example.com" type="email" icon={<Mail size={18} />} />
                            <Input label="Phone Number" defaultValue="+1 (555) 987-6543" type="tel" icon={<Phone size={18} />} />
                        </div>

                        <Input label="Address" defaultValue="123 Learning Lane, Knowledge City" icon={<MapPin size={18} />} />

                        <div className="pt-4 flex justify-end gap-4">
                            <Button variant="ghost">Cancel</Button>
                            <Button>Save Changes</Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Profile;
