import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header className="header-nav">
      <div className="container">
        <div className="header-inner-parent">

          {/* Main Logo (Desktop View) */}
          <div className="logo-parent">
            <Link to="/">
              <img
                fetchPriority="low"
                loading="lazy"
                src="/logo.svg"
                alt="OVE Logo"
              />
            </Link>
          </div>

          {/* Toggle Button for Mobile Menu */}
          {isMobile && (
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✖" : "☰"}
            </button>
          )}

          {/* Navigation Menu */}
          <nav
            className={`nav-right-parent ${isMobile ? "mobile-nav" : ""} ${isOpen ? "open" : ""}`}
          >
            <div className="nav-btn-parent">
              <ul>
                <li>
                  <Link to="/hiring-process">Hiring Process</Link>
                </li>
                <li>
                  <Link to="/client-success">Client Success</Link>
                </li>
              </ul>
            </div>

            <div className="nav-btn-parent">
              <button>Schedule a Call</button>
              <button>Contact Us</button>
            </div>

            {/* Mobile Logo inside nav */}
            {isMobile && (
              <div className="logo-parent nav-responsive-logo">
                <Link to="/">
                  <img
                    fetchPriority="low"
                    loading="lazy"
                    src="/logo.svg"
                    alt="OVE Logo"
                  />
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
