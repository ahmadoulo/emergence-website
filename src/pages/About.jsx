import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
    const { t } = useTranslation();

    return (
        <div className="about-modern">
            {/* Header Section */}
            <section className="about-header-elite">
                <div className="container">
                    <span className="section-tag reveal">NOTRE CABINET</span>
                    <h1 className="reveal stagger-1">{t('about.title')}</h1>
                    <p className="lead reveal stagger-2" style={{ maxWidth: '800px', fontSize: '1.25rem' }}>
                        {t('about.intro')}
                    </p>
                </div>
            </section>

            {/* Presentation Section */}
            <section className="presentation-section section">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '6rem' }}>
                        <div className="reveal">
                            <h2 className="gradient-text mb-xl">L'Excellence comme Standard</h2>
                            <p className="description-text">{t('about.presentation')}</p>
                        </div>
                        <div className="mission-box-elite reveal stagger-1">
                            <h3 className="mission-header">{t('about.vision.title')}</h3>
                            <p>{t('about.vision.content')}</p>
                            <div className="mission-footer">Impact | Rigueur | Vision</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="founder-elite section bg-dim">
                <div className="container">
                    <div className="founder-grid">
                        <div className="founder-img-wrapper reveal">
                            <img
                                src="/images/MoubarackLO.jpg"
                                alt="Moubarack LO"
                                className="founder-portrait"
                            />
                            <div className="portrait-shade"></div>
                        </div>
                        <div className="founder-info reveal stagger-1">
                            <span className="section-tag">FONDATION & VISION</span>
                            <h2 className="founder-name">Moubarack LO</h2>
                            <p className="founder-bio">
                                {t('about.director.bio')}
                            </p>
                            <div className="founder-details-box">
                                <ul className="expertise-list">
                                    {t('about.director.expertise_list', { returnObjects: true }).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles Section */}
            <section className="principles-elite section">
                <div className="container">
                    <h2 className="text-center reveal mb-3xl">Nos Principes d'Excellence</h2>
                    <div className="grid grid-2 reveal stagger-1" style={{ gap: '3rem' }}>
                        {Object.entries(t('about.principles.items', { returnObjects: true })).map(([key, item]) => (
                            <div key={key} className="principle-card-modern">
                                <div className="card-header">
                                    <span className="p-icon">◈</span>
                                    <h3>{item.title}</h3>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section bg-dim">
                <div className="container">
                    <h2 className="text-center mb-3xl">Direction Exécutive</h2>
                    <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {t('about.team.members', { returnObjects: true }).map((member, i) => (
                            <div key={i} className="team-member-card reveal">
                                <h3>{member.name}</h3>
                                <span className="position">{member.position}</span>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
