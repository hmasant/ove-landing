export default function Header() {
  return (
    <header className="header-nav">
      <div className="container">
        <div className="header-inner-parent">
          <div className="logo-parent">
            <img 
              fetchPriority="low" 
              loading="lazy" 
              src="/logo.svg" 
              alt="OVE Logo" 
            />
          </div>
          
          <div className="nav-right-parent">
            <div className="nav-btn-parent">
              <ul>
                <li><a href="#">Hiring Process</a></li>
                <li><a href="#">Client Success</a></li> 
              </ul>
            </div>
            
            <div className="nav-btn-parent">
              <button>Book a Free Consultation</button>
              <button>Contact US</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}