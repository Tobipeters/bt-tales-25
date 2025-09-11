export const GiftRegistery = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      id="registry"
      className="py-20 px-4 transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-light mb-6"
          style={{ color: "var(--foreground)" }}
        >
          Gift Registry
        </h2>
        <p
          className="text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
        >
          Help us build our future together with these thoughtful gifts.
        </p>
        <div
          className="h-64 rounded-lg flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, 
                     ${darkMode ? "var(--primary)" : "var(--primary)"}20, 
                     ${darkMode ? "var(--secondary)" : "var(--secondary)"}20)`,
          }}
        >
          <p className="text-lg" style={{ color: "var(--foreground)" }}>
            3-Section Registry (Home, Honeymoon, Future) - Coming Next
          </p>
        </div>
      </div>
    </section>
  );
};
