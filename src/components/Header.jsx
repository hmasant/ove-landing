export default function Header() {
  return (
    <header className="header-nav">
      <img fetchPriority="low" loading="lazy" src="/logo.svg" alt="OVE Logo" />
      <button>Book a Free Consultation</button>
    </header>
  );
}
