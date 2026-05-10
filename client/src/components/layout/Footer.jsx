import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <ul className="main-footer">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <ul className="social-media">
                <li>
                    <a href="https://www.linkedin.com/in/katrina-yates/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
            </ul>
            <p className="copyright">&copy; 2026 Katrina Yates</p>
        </footer>
    );
}
