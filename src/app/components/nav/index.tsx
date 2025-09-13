"use client";
import useTheme from "@/app/hooks/useTheme";
import useNavigation from "@/app/hooks/useNavigation";

export const Nav = () => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu, scrollToSection } = useNavigation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>#BT_Tales&apos;25 💕 </h2>
        </div>
        <div className="nav-menu" id="nav-menu">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#gallery" className="nav-link">
            Gallery
          </a>
          <a href="#story" className="nav-link">
            Our Story
          </a>
          <a href="#rsvp" className="nav-link">
            RSVP
          </a>
          <a href="#registry" className="nav-link">
            Registry
          </a>
          <a href="#wishes" className="nav-link">
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
        <div className="nav-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
