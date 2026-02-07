import { useTranslation } from 'react-i18next';
import './Methodology.css';

function Methodology() {
    const { t } = useTranslation();

    return (
        <div className="methodology-modern">
            <section className="methodology-header-elite">
                <div className="container">
                    <span className="section-tag reveal">NOTRE APPROCHE</span>
                    <h1 className="reveal stagger-1">{t('methodology.title')}</h1>
                    <p className="lead-text reveal stagger-2" style={{ maxWidth: '800px', fontSize: '1.25rem' }}>
                        {t('methodology.intro')}
                    </p>
                </div>
            </section>

            <section className="steps-section section">
                <div className="container">
                    <div className="steps-grid-elite">
                        {Object.entries(t('methodology.steps', { returnObjects: true })).map(([key, step], i) => (
                            <div key={key} className="step-card-elite reveal">
                                <span className="step-num">0{i + 1}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="supervision-section section bg-dim">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '6rem', alignItems: 'center' }}>
                        <div className="reveal">
                            <span className="section-tag">{t('expertises.supervision.title')}</span>
                            <h2 className="mb-xl">Une Qualité <span className="gradient-text">Garantie</span></h2>
                            <p className="description-text">
                                {t('expertises.supervision.description')}
                            </p>
                        </div>
                        <div className="roles-stack reveal stagger-1">
                            {t('expertises.supervision.roles', { returnObjects: true }).map((role, i) => (
                                <div key={i} className="role-item-modern">
                                    <span className="role-icon">◈</span>
                                    <div className="role-content">
                                        <h4>{role.title}</h4>
                                        <p>{role.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="philosophy-section section">
                <div className="container text-center">
                    <div className="philosophy-box reveal">
                        <h2 className="mb-xl">L'Ultime Baromètre : Votre Performance</h2>
                        <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                            Soucieux de la valeur ajoutée attendue de notre travail par nos clients, nous allons toujours plus loin dans la quête de la perfection et la qualité dans nos services de conseils et d’accompagnements à leur profit.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Methodology;
