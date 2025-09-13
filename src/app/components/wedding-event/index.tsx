export const WeddingEvent = () => {
  return (
    <section className="events">
      <div className="container">
        <h2 className="section-title">Wedding Events</h2>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-icon">💍</div>
            <h3>Engagement</h3>
            <div className="event-details">
              {/* <p>
                <i className="fas fa-clock"></i> 1:00 PM
              </p> */}
              <p>
                <i className="fas fa-calendar"></i> November 13th, 2025
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <a
                  href="https://maps.google.com/?q=Yusuph+street+Off+Shibiri+road+Iyana-era+Ojo"
                  target="_blank"
                >
                  Lagos, Nigeria
                </a>
              </p>
            </div>
          </div>
          <div className="event-card">
            <div className="event-icon">⛪</div>
            <h3>Church Ceremony</h3>
            <div className="event-details">
              {/* <p>
                <i className="fas fa-clock"></i> 10:00 AM
              </p> */}
              <p>
                <i className="fas fa-calendar"></i> November 13th, 2025
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <a
                  href="https://maps.google.com/?q=Yusuph+street+Off+Shibiri+road+iyana-era+Ojo"
                  target="_blank"
                >
                  Lagos, Nigeria
                </a>
              </p>
            </div>
          </div>
          {/* <div className="event-card">
            <div className="event-icon">🎉</div>
            <h3>Reception</h3>
            <div className="event-details">
              <p>
                <i className="fas fa-clock"></i> 1:00 PM
              </p>
              <p>
                <i className="fas fa-calendar"></i> August 30, 2025
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <a
                  href="https://maps.google.com/?q=Majesty+Events+Centre+711+road+by+71+Rd+Festac+Town+Lagos+Nigeria"
                  target="_blank"
                >
                  Majesty Events Centre, 711 road, by 71 Rd, Festac Town, Lagos,
                  Nigeria
                </a>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
