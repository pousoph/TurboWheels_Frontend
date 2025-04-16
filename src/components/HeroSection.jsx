import '../styles/HeroSection.css';
import video from '../assets/background.mp4';

export const HeroSection = () => {
    return (
        <section className="hero">
            <video className="hero-video" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <div className="hero-overlay">
                <h1>Bienvenido a <span>TurboWheels</span></h1>
                <p>Gestión inteligente de nómina para concesionarios colombianos</p>
            </div>
        </section>
    );
};
