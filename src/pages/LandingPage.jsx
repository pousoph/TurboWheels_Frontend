import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import {Features} from '../components/Features.jsx';

export const LandingPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Features />
        </>
    );
};
