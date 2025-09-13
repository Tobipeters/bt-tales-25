import { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

interface IInitialValue {
  name: string;
  email: string;
  phone: string;
  attendance: string;
  message: string;
  guests: string;
}

export const RSVP = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValues] = useState<IInitialValue>({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    message: "",
    guests: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formatWhatsAppMessage = (data: IInitialValue) => {
    let message = `==== *NEW RSVP SUBMISSION* ====\n\n`;
    message += `- *Name:* ${data.name}\n`;
    message += `- *Email:* ${data.email}\n`;
    message += `- *Phone:* ${data.phone}\n`;
    message += `- *Attendance:* ${data.attendance}\n`;

    if (data.guests && data.guests !== "0") {
      message += `- *Number of Guests:* ${data.guests}\n`;
    }

    if (data.message && data.message.trim()) {
      message += `- *Message:* ${data.message}\n`;
    }

    message += `\n- *Submitted:* ${new Date().toLocaleString()}`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setIsLoading(true);
      const whatsappNumber = "2348167764664";
      const message = formatWhatsAppMessage(values);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

      window.open(whatsappURL, "_blank");

      setTimeout(() => {
        toast.success("You have RSVP successfully 👍🏾");
        formRef.current?.reset();
        setIsLoading(false);
      }, 3000);
    }, 2000);
  };

  return (
    <section id="rsvp" className="rsvp">
      <div className="container">
        <h2 className="section-title">RSVP</h2>
        <div className="rsvp-content">
          <p>
            We&apos;re excited to celebrate with you! Please let us know if
            you&apos;ll be joining us.
            {/* We are working on the RSVP, Please check back later */}
          </p>
          <form
            ref={formRef}
            className="rsvp-form"
            id="rsvpForm"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select
                id="attendance"
                name="attendance"
                required
                onChange={handleChange}
              >
                <option value="">Will you attend?</option>
                <option value="yes">Yes, I&apos;ll be there!</option>
                <option value="no">Sorry, can&apos;t make it</option>
              </select>
            </div>
            <div className="form-group">
              <select id="guests" name="guests" onChange={handleChange}>
                <option value="1">Just me</option>
                <option value="2">Plus one (+1)</option>
                {/* <option value="3">Plus two (+2)</option>
                <option value="4">Plus three (+3)</option> */}
              </select>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Anything you like us to know about"
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
