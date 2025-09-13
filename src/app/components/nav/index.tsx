"use client";
import useTheme from "@/app/hooks/useTheme";
import useNavigation from "@/app/hooks/useNavigation";

export const Nav = () => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu, scrollToSection } =
    useNavigation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>#BT_Tales&apos;25 💕 </h2>
        </div>
        <div
          className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}
          id="nav-menu"
        >
          <a
            href="#home"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
          <a
            href="#gallery"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("gallery");
            }}
          >
            Gallery
          </a>
          <a
            href="#story"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("story");
            }}
          >
            Our Story
          </a>
          <a
            href="#rsvp"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("rsvp");
            }}
          >
            RSVP
          </a>
          <a
            href="#registry"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("registry");
            }}
          >
            Registry
          </a>
          <a
            href="#wishes"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("wishes");
            }}
          >
            Wishes
          </a>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            id="theme-toggle"
          >
            <i className="fas fa-sun"></i>
          </button>
        </div>
        <div
          className={`nav-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
