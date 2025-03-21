export default function Header() {
  return (
    <header>
      <img
        fetchPriority="high"
        loading="eager"
        src="/logo.svg"
        alt="OVE Logo"
      />
      <button>Hire a Developer</button>
    </header>
  );
}
