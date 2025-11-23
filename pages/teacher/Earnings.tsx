import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { DollarSign, TrendingUp, Download, CreditCard } from 'lucide-react';

const Earnings: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-display font-bold text-3xl text-charcoal">Earnings & Payouts</h1>
                    <p className="text-gray-500">Track your revenue and manage payout settings.</p>
                </div>
                <Button variant="outline" leftIcon={<Download size={18} />}>Export Report</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-deep-blue text-white border-none">
                    <p className="text-white/70 text-sm mb-1">Total Earnings</p>
                    <h2 className="font-display font-bold text-3xl mb-4">$4,250.00</h2>
                    <div className="flex items-center gap-2 text-sm text-mint">
                        <TrendingUp size={16} />
                        <span>+12% from last month</span>
                    </div>
                </Card>
                <Card className="p-6">
                    <p className="text-gray-500 text-sm mb-1">Pending Payout</p>
                    <h2 className="font-display font-bold text-3xl text-charcoal mb-4">$850.00</h2>
                    <p className="text-xs text-gray-400">Scheduled for Oct 31, 2023</p>
                </Card>
                <Card className="p-6 flex flex-col justify-between">
                    <div>
                        <p className="text-gray-500 text-sm mb-1">Payout Method</p>
                        <div className="flex items-center gap-2 font-medium text-charcoal">
                            <CreditCard size={18} />
                            <span>Visa ending in 4242</span>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm" className="self-start p-0 h-auto mt-4 text-mint hover:bg-transparent hover:underline">
                        Manage Methods
                    </Button>
                </Card>
            </div>

            <Card className="p-6">
                <h3 className="font-display font-bold text-lg text-charcoal mb-6">Transaction History</h3>
                <div className="space-y-4">
                    {[
                        { id: '#TRX-9921', date: 'Oct 15, 2023', desc: 'Monthly Payout', amount: '+$1,200.00', status: 'Completed' },
                        { id: '#TRX-9920', date: 'Sep 15, 2023', desc: 'Monthly Payout', amount: '+$1,150.00', status: 'Completed' },
                        { id: '#TRX-9919', date: 'Aug 15, 2023', desc: 'Monthly Payout', amount: '+$980.00', status: 'Completed' },
                    ].map((trx, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <DollarSign size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-charcoal">{trx.desc}</p>
                                    <p className="text-xs text-gray-500">{trx.date} • {trx.id}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-green-600">{trx.amount}</p>
                                <p className="text-xs text-gray-400">{trx.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Earnings;
