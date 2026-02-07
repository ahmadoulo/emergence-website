import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
    const { t } = useTranslation();

    return (
        <div className="contact-modern">
            <section className="contact-header-elite">
                <div className="container">
                    <span className="section-tag reveal">{t('contact.title')}</span>
                    <h1 className="reveal stagger-1">{t('contact.subtitle')}</h1>
                </div>
            </section>

            <section className="contact-body section">
                <div className="container">
                    <div className="contact-grid-elite">
                        <div className="contact-info-panel reveal">
                            <div className="info-block">
                                <h2 className="gradient-text">{t('contact.info.title')}</h2>
                                <p className="lead-text">{t('contact.info.address')}</p>
                            </div>

                            <div className="meta-info-grid">
                                <div className="meta-item">
                                    <span className="label">Contact Direct</span>
                                    <p>{t('contact.info.phone')}</p>
                                    <p>{t('contact.info.email')}</p>
                                </div>
                                <div className="meta-item">
                                    <span className="label">Heures de Consultation</span>
                                    <p>{t('contact.info.hours')}</p>
                                    <p>{t('contact.info.hoursSat')}</p>
                                </div>
                            </div>

                            <div className="trust-seal-modern reveal stagger-2">
                                <div className="seal-badge">
                                    <span className="seal-icon">✓</span>
                                    <div className="seal-text">
                                        <strong>{t('contact.info.seal')}</strong>
                                        <p>{t('contact.info.sealText')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-panel reveal stagger-1">
                            <form className="elite-form-modern">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>{t('contact.form.name')}</label>
                                        <input type="text" placeholder={t('contact.form.namePlaceholder')} />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.form.organization')}</label>
                                        <input type="text" placeholder={t('contact.form.orgPlaceholder')} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>{t('contact.form.email')}</label>
                                    <input type="email" placeholder={t('contact.form.emailPlaceholder')} />
                                </div>

                                <div className="form-group">
                                    <label>{t('contact.form.subject')}</label>
                                    <select>
                                        <option>Stratégie de Développement</option>
                                        <option>Études Statistiques</option>
                                        <option>Transformation Digitale</option>
                                        <option>Autre</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>{t('contact.form.message')}</label>
                                    <textarea rows="5" placeholder={t('contact.form.msgPlaceholder')}></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-full">
                                    {t('contact.form.submit')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
