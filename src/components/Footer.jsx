import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-elite">
            <div className="container">
                <div className="footer-top-elite">
                    <div className="footer-brand-elite">
                        <Link to="/" className="brand-elite">
                            <span className="brand-main">EMERGENCE</span>
                            <span className="brand-sub">CONSULTING GROUP</span>
                        </Link>
                        <p className="footer-mission-elite">
                            Architectes de l'émergence économique et sociale.
                            Partenaire privilégié des décideurs visionnaires depuis 2001.
                        </p>
                    </div>

                    <div className="footer-nav-elite">
                        <span className="footer-label-elite">Expertises</span>
                        <ul className="footer-links-elite">
                            <li><Link to="/expertises">Stratégie de Développement</Link></li>
                            <li><Link to="/expertises">Études Socio-économiques</Link></li>
                            <li><Link to="/expertises">Transformation Digitale</Link></li>
                        </ul>
                    </div>

                    <div className="footer-nav-elite">
                        <span className="footer-label-elite">Cabinet</span>
                        <ul className="footer-links-elite">
                            <li><Link to="/about">Notre Histoire</Link></li>
                            <li><Link to="/methodology">Méthodologie</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-nav-elite">
                        <span className="footer-label-elite">Contact</span>
                        <div className="footer-contact-elite">
                            <p>contact@emergence-consulting.com</p>
                            <p>+221 33 800 00 00</p>
                            <p>Dakar, Sénégal</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-elite">
                    <p>© {currentYear} Emergence Consulting Group. Excellence at all costs.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
