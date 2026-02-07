import { useTranslation } from 'react-i18next';
import './Expertises.css';

function Expertises() {
    const { t } = useTranslation();

    const poles = [
        { id: 'strategy', key: 'strategy' },
        { id: 'stats', key: 'stats' },
        { id: 'it', key: 'it' }
    ];

    return (
        <div className="expertises-modern">
            <section className="expertises-header-elite">
                <div className="container text-center">
                    <h1 className="reveal">{t('expertises.title')}</h1>
                    <p className="hero-lead reveal stagger-1" style={{ margin: '0 auto' }}>
                        {t('expertises.subtitle')}
                    </p>
                </div>
            </section>

            <section className="poles-section section">
                <div className="container">
                    {poles.map((pole, i) => (
                        <div key={pole.id} className="pole-row-elite reveal">
                            <div className="pole-sidebar">
                                <span className="pole-number">0{i + 1}</span>
                                <div className="kpis-modern">
                                    <div className="kpi-mini">
                                        <strong>{t(`expertises.poles.${pole.key}.kpis.kpi1.value`)}</strong>
                                        <span>{t(`expertises.poles.${pole.key}.kpis.kpi1.label`)}</span>
                                    </div>
                                    <div className="kpi-mini">
                                        <strong>{t(`expertises.poles.${pole.key}.kpis.kpi2.value`)}</strong>
                                        <span>{t(`expertises.poles.${pole.key}.kpis.kpi2.label`)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pole-main">
                                <h2 className="gradient-text">{t(`expertises.poles.${pole.key}.title`)}</h2>
                                <p className="description-text">{t(`expertises.poles.${pole.key}.description`)}</p>

                                <div className="problem-solution-grid">
                                    <div className="content-block-elite">
                                        <h3>Le Problème</h3>
                                        <p>{t(`expertises.poles.${pole.key}.problem`)}</p>
                                    </div>
                                    <div className="content-block-elite">
                                        <h3>Notre Solution</h3>
                                        <p>{t(`expertises.poles.${pole.key}.solution`)}</p>
                                    </div>
                                </div>

                                <div className="benefits-box">
                                    <h3>Bénéfices Stratégiques</h3>
                                    <ul className="benefit-list-elite">
                                        {t(`expertises.poles.${pole.key}.benefits`, { returnObjects: true }).map((benefit, j) => (
                                            <li key={j}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="sectors-section section bg-dim">
                <div className="container">
                    <h2 className="text-center mb-3xl">Expertise <span className="gradient-text">Sectorielle</span></h2>
                    <div className="grid grid-3">
                        {t('expertises.sectors.items', { returnObjects: true }).map((sector, i) => (
                            <div key={i} className="sector-card-elite reveal">
                                <h3>{sector}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Expertises;
