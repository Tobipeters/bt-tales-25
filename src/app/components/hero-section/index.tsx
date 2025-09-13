
"use client";
import useCountdown from "@/app/hooks/useCountdown";

export const HeroSection = () => {
  const { timeLeft, isWeddingDay } = useCountdown("2025-11-13T06:00:00");

  return (
    <>
     

      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="groom-name">Boluwatife</span>
              <span className="ampersand">&</span>
              <span className="bride-name">Oluwatobi</span>
            </h1>
            <p className="hero-subtitle">We&apos;re getting married!</p>
            <div className="hero-date">
              <div className="date-card">
                <div className="date-icon">💍</div>
                <div className="date-info">
                  <span className="date-label">Engagement</span>
                  <span className="date-value">13.11.2025</span>
                </div>
              </div>
              <div className="date-card">
                <div className="date-icon">⛪</div>
                <div className="date-info">
                  <span className="date-label">Wedding</span>
                  <span className="date-value">13.11.2025</span>
                </div>
              </div>
            </div>
            {isWeddingDay ? (
              <p className="">🎉 Wedding Day is Here! 🎉</p>
            ) : (
              <div className="countdown-container">
                <div className="countdown" id="countdown">
                  <div className="countdown-item">
                    <span className="countdown-number" id="days">
                      {timeLeft.days}
                    </span>
                    <span className="countdown-label">Days</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number" id="hours">
                      {timeLeft.hours}
                    </span>
                    <span className="countdown-label">Hours</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number" id="minutes">
                      {timeLeft.minutes}
                    </span>
                    <span className="countdown-label">Minutes</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number" id="seconds">
                      {timeLeft.seconds}
                    </span>
                    <span className="countdown-label">Seconds</span>
                  </div>
                </div>
              </div>
            )}

            <p className="invitation-text">
              Strictly by invitation. Please RSVP.
            </p>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>
    </>
  );
};
