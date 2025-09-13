export const RSVP = () => {
  return (
    <section id="rsvp" className="rsvp">
      <div className="container">
        <h2 className="section-title">RSVP</h2>
        <div className="rsvp-content">
          <p>
            We&apos;re excited to celebrate with you! Please let us know if you&apos;ll be
            joining us.
          </p>
          <form className="rsvp-form" id="rsvpForm">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-group">
              <select id="attendance" name="attendance" required>
                <option value="">Will you attend?</option>
                <option value="yes">Yes, I&apos;ll be there!</option>
                <option value="no">Sorry, can&apos;t make it</option>
              </select>
            </div>
            <div className="form-group">
              <select id="guests" name="guests">
                <option value="1">Just me</option>
                <option value="2">Plus one (+1)</option>
                <option value="3">Plus two (+2)</option>
                <option value="4">Plus three (+3)</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Special dietary requirements or message"
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send RSVP
            </button>
          </form>
          <div className="contact-info">
            <p>
              Questions? Call Funmi at{" "}
              <a href="tel:+2348141223960">+234 814 1223 960</a> or Femi{" "}
              <a href="tel:2349131162316">+234 913 1162 316</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
