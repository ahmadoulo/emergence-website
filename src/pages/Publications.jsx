import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import './Publications.css';

const Publications = () => {
    const { t } = useTranslation();
    const publications = t('publications.items', { returnObjects: true });

    return (
        <div className="publications-page">
            <section className="pub-hero">
                <div className="container reveal">
                    <div className="hero-badge">Recherche & Intelligence</div>
                    <h1>{t('publications.title')}</h1>
                    <p className="hero-subtitle">{t('publications.subtitle')}</p>
                </div>
            </section>

            <section className="section bg-dim">
                <div className="container">
                    <div className="grid grid-2">
                        {publications.map((pub, i) => (
                            <div key={i} className={`pub-card-v2 stagger-${(i % 2) + 1}`}>
                                <div className="pub-tag">{pub.type}</div>
                                <h3>{pub.title}</h3>
                                <p>{pub.description}</p>
                                <div className="pub-footer">
                                    <span className="pub-year">{pub.year}</span>
                                    <button className="pub-btn">{pub.cta}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Publications;
