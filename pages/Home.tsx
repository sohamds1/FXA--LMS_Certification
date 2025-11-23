import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Marquee from '../components/Marquee';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Marquee />
            <Features />
            <Process />
            <Marquee />
            <Testimonials />
            <CTA />
        </div>
    );
};

export default Home;
