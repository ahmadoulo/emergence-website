import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/expertises', label: t('nav.expertises') },
        { path: '/methodology', label: t('nav.methodology') },
        { path: '/contact', label: t('nav.contact') }
    ];

    return (
        <header className={`header-elite ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="nav-elite">
                    <Link to="/" className="brand-elite" onClick={() => setIsMenuOpen(false)}>
                        <span className="brand-main">EMERGENCE</span>
                        <span className="brand-sub">CONSULTING GROUP</span>
                    </Link>

                    <div className={`nav-menu-elite ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="nav-links-elite">
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`nav-item-elite ${location.pathname === link.path ? 'active' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="nav-actions-elite">
                            <button onClick={toggleLanguage} className="lang-toggle-elite">
                                {i18n.language === 'fr' ? 'EN' : 'FR'}
                            </button>
                            <Link to="/contact" className="btn-cta-elite" onClick={() => setIsMenuOpen(false)}>
                                Consultation
                            </Link>
                        </div>
                    </div>

                    <button
                        className={`burger-elite ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
