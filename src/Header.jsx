
import { useEffect, useState } from "react";

function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={isSticky ? "sticky" : ""}>
            <div className="container flex header-container">
                <a href="#" className="logo">Mahima Chaudhary</a>
                <ul className="flex">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Expertise</a></li>
                    <li><a href="#">Insights & Updates</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
