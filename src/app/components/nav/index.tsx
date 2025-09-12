import { useState } from "react";

interface IProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Nav = ({ toggleDarkMode, darkMode }: IProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#66141D] to-[#D187AA] bg-clip-text text-transparent">
            BT_Tales&apos;25
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 dark:text-gray-200 hover:text-[#66141D] dark:hover:text-[#D187AA] transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 dark:text-gray-200 hover:text-[#66141D] dark:hover:text-[#D187AA] transition-colors duration-200 font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("story")}
              className="text-gray-700 dark:text-gray-200 hover:text-[#66141D] dark:hover:text-[#D187AA] transition-colors duration-200 font-medium"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection("rsvp")}
              className="text-gray-700 dark:text-gray-200 hover:text-[#66141D] dark:hover:text-[#D187AA] transition-colors duration-200 font-medium"
            >
              RSVP
            </button>
            <button
              onClick={() => scrollToSection("registry")}
              className="text-gray-700 dark:text-gray-200 hover:text-[#66141D] dark:hover:text-[#D187AA] transition-colors duration-200 font-medium"
            >
              Registry
            </button>
            <button
              onClick={() => scrollToSection("wishes")}
              className="text-gray-700 dark:text-gray-200 hover:text-[#66141D] dark:hover:text-[#D187AA] transition-colors duration-200 font-medium"
            >
              Wishes
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gradient-to-r from-[#66141D] to-[#D187AA] text-white hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              {darkMode ? (
                <span className="text-2xl">☀️</span>
              ) : (
                <span className="text-2xl">🌙</span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gradient-to-r from-[#66141D] to-[#D187AA] text-white"
            >
              {darkMode ? (
                <span className="text-2xl">☀️</span>
              ) : (
                <span className="text-2xl">🌙</span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-200"
            >
              {mobileMenuOpen ? (
                <span className="">X</span>
              ) : (
                <span className="">Menu</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "Gallery", "Our Story", "RSVP", "Registry", "Wishes"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", ""))
                  }
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#66141D] dark:hover:text-[#D187AA] transition-colors duration-200 w-full text-left"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
