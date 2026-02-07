import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home-modern">
            {/* Hero Section */}
            <section className="hero-elite">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-main">
                            <h1 className="reveal">{t('hero.title')}</h1>
                            <p className="hero-lead reveal stagger-1">{t('hero.subtitle')}</p>
                            <div className="hero-actions reveal stagger-2">
                                <Link to="/contact" className="btn btn-primary">
                                    {t('hero.cta')}
                                </Link>
                                <Link to="/expertises" className="btn btn-secondary">
                                    {t('hero.ctaSecondary')}
                                </Link>
                            </div>
                        </div>
                        <div className="hero-sidebar reveal stagger-3">
                            <div className="heritage-metrics">
                                <div className="metric-row">
                                    <span className="m-val">2001</span>
                                    <span className="m-lab">Fondation du Cabinet</span>
                                </div>
                                <div className="metric-row">
                                    <span className="m-val">200+</span>
                                    <span className="m-lab">Missions Réussies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="trust-elite">
                <div className="container">
                    <div className="trust-flex reveal">
                        <div className="logo-strip">
                            <span>Nations Unies</span>
                            <span>Banque Mondiale</span>
                            <span>Union Africaine</span>
                            <span>CEDEAO</span>
                            <span>BAD</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="value-elite section">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <span className="section-tag">{t('home.slogan')}</span>
                        <h2 className="reveal stagger-1">{t('home.aboutSection.title')}</h2>
                        <p className="lead-text reveal stagger-2" style={{ maxWidth: '800px', margin: '2rem auto' }}>
                            {t('home.aboutSection.description')}
                        </p>
                    </div>
                    <div className="grid grid-4 reveal stagger-3" style={{ marginTop: '5rem' }}>
                        {t('home.valueProps.items', { returnObjects: true }).map((item, i) => (
                            <div key={i} className="value-card-elite">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="cases-elite section bg-dim">
                <div className="container">
                    <h2 className="reveal mb-3xl">Résultats & <span className="gradient-text">Impact</span></h2>
                    <div className="case-stack">
                        {t('home.caseStudies.featured', { returnObjects: true }).map((study, i) => (
                            <div key={i} className="case-item-elite reveal">
                                <div className="case-meta">
                                    <span className="client-id">{study.client}</span>
                                    <h3>{study.title}</h3>
                                </div>
                                <div className="case-content">
                                    <div className="content-block">
                                        <h4 className="text-uppercase mb-md">Le Défi</h4>
                                        <p>{study.challenge}</p>
                                    </div>
                                    <div className="content-block">
                                        <h4 className="text-uppercase mb-md">L'Impact</h4>
                                        <ul className="impact-list">
                                            {study.results.map((res, j) => <li key={j}>{res}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-elite-sec section">
                <div className="container">
                    <div className="grid grid-2">
                        {t('home.testimonials.items', { returnObjects: true }).map((test, i) => (
                            <div key={i} className="testimonial-card-elite reveal">
                                <p className="quote">{test.quote}</p>
                                <div className="attribution">
                                    <strong>{test.author}</strong>
                                    <span className="text-muted">{test.position} | {test.country}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta-elite section">
                <div className="container text-center">
                    <h2 className="reveal">{t('home.ctaSection.title')}</h2>
                    <div className="reveal stagger-1" style={{ marginTop: '3rem' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--accent-secondary)', border: 'none' }}>
                            {t('home.ctaSection.button')}
                        </Link>
                    </div>
                    <div className="cta-meta-links reveal stagger-2">
                        <span>{t('home.ctaSection.urgency')}</span>
                        <span>{t('home.ctaSection.guarantee')}</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
