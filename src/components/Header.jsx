import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Popup from "../components/home/PopupForm";
import { UpdateContext, ReadContext } from "../context";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const update = UpdateContext();
  const popupState = ReadContext();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {popupState.showPopup && <Popup />}

      <header className="header-nav">
        <div className="container">
          <div className="header-inner-parent">
            
            {/* Logo (Desktop) */}
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

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
              </button>
            )}

            {/* Navigation */}
            <nav
              className={`nav-right-parent ${isMobile ? "mobile-nav" : ""} ${
                isOpen ? "open" : ""
              }`}
            >
              <div className="nav-btn-parent">
                <ul>
                  <li>
                    <Link smooth to="#hiring-process">Hiring Process</Link>
                  </li>
                  <li>
                    <Link smooth to="#client-success">Client Success</Link>
                  </li>
                </ul>
              </div>

              <div className="nav-btn-parent">
                <button onClick={() => update.togglePopup()}>
                  Schedule a Call
                </button>
                <button onClick={() => update.togglePopup()}>
                  Contact Us
                </button>
              </div>

              {/* Logo (Mobile Nav) */}
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
    </>
  );
}


