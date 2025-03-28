import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer-container">
                <div className="footer-left">
                    <h2 className="logo">Mahima</h2>
                    <p className="mT1">We create digital experiences for brands and companies by using technology.</p>
                    <div className="social-icons">
                        <span>🔵</span>
                        <span>🐦</span>
                        <span>📷</span>
                        <span>🔗</span>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4 >Company</h4>
                        <ul className="mT2">
                            <li>About company</li>
                            <li>Company services</li>
                            <li>Job opportunities</li>
                            <li>Creative people</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Customer</h4>
                        <ul className="mT2">
                            <li>Client support</li>
                            <li>Latest news</li>
                            <li>Company story</li>
                            <li>Pricing packages</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Additional</h4>
                        <ul className="mT2">
                            <li>Our story</li>
                            <li>Who we are</li>
                            <li>Our process</li>
                            <li>Latest news</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-blog">
                    <h4>Latest Blog</h4>
                    <div className="blog-item mT2">
                        <div className="blog-thumbnail"></div>
                        <p>I think really important to design...</p>
                    </div>
                    <div className="blog-item mT2">
                        <div className="blog-thumbnail"></div>
                        <p>Recognizing the need is the primary...</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Privacy policy | Legal notice | Terms of service</p>
                <p>© 2025 TailGrids</p>
            </div>
        </footer>
    );
};

export default Footer;
