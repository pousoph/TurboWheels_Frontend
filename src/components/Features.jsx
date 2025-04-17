import '../styles/Features.css';
import { useEffect } from 'react';
import AOS from 'aos';
import { Users, Wallet, CalendarCheck, BarChart } from 'lucide-react';

export const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true
        });
    }, []);

    return (
        <section className="features-section" id="features">
            <h2 data-aos="fade-up">¿Qué puedes hacer en la <span>Nomina</span>?</h2>
            <div className="features-grid">
                <div className="feature-card" data-aos="fade-right">
                    <Users className="feature-icon" />
                    <h3>Gestión de empleados</h3>
                    <p>Agrega, edita y organiza la información laboral de tu equipo con precisión.</p>
                </div>
                <div className="feature-card" data-aos="fade-left">
                    <Wallet className="feature-icon" />
                    <h3>Liquidación legal de nómina</h3>
                    <p>Cálculos automáticos de salario, prestaciones, aportes y deducciones según la ley colombiana.</p>
                </div>
                <div className="feature-card" data-aos="fade-right">
                    <CalendarCheck className="feature-icon" />
                    <h3>Vacaciones y licencias</h3>
                    <p>Controla solicitudes, acumulación y tiempo libre del personal.</p>
                </div>
                <div className="feature-card" data-aos="fade-left">
                    <BarChart className="feature-icon" />
                    <h3>Reportes avanzados</h3>
                    <p>Exporta informes visuales y documentos en PDF o Excel de forma rápida.</p>
                </div>
            </div>
        </section>
    );
};
