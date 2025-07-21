import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="copyrights-container">@ Copyright Rutul Amin</div>
            <div className="footer-nav-container">
                <ul className="nav">
                    <li className="nav-item">Team</li>
                    <li className="nav-item">Contact Us</li>
                    <li className="nav-item">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="nav-item">Careers</li>
                    <li className="nav-item">Complaince</li>
                </ul>
            </div>
        </div>
    );
};
