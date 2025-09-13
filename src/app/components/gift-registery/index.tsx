import { useState } from "react";
import { BankAccounttModal } from "../bank-modal";

export const GiftRegistery = () => {
  const [showBank, setShowBank] = useState<boolean>(false);

  const handleMessageOnWhatapp = () => {
    const whatsappNumber = "2348141223960"; // Remove the + sign for the URL
    const message =
      "BT_Tales'25 - We have a specific gift idea to discuss with you...";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}\n`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="registry" className="registry">
      <div className="container">
        <h2 className="section-title">Gift Registry</h2>
        <div className="registry-content">
          <p>
            Your presence is the greatest gift, but if you&apos;d like to bless
            us with something special, here are some ideas:

            
          </p>
          <div className="registry-grid">
            <div className="registry-item">
              <div className="registry-icon">🏠</div>
              <h3>Home Essentials</h3>
              <p>
                Kitchen appliances, bedding, and home decor to help us build our
                nest together.
              </p>
              <p>
                <a href="#">GIFT US</a>
              </p>
            </div>
            <div className="registry-item">
              <div className="registry-icon">🧳</div>
              <h3>Honeymoon Fund</h3>
              <p>
                Contribute to our dream honeymoon and help us create
                unforgettable memories.
              </p>
              <p>
                <a href="#">GIFT US</a>
              </p>
            </div>
            <div className="registry-item">
              <div className="registry-icon">💰</div>
              <h3>Future Fund</h3>
              <p>
                Help us start our married life with contributions toward our
                future goals and dreams.
              </p>
              <p>
                <a href="#">GIFT US</a>
              </p>
            </div>
          </div>
          <div className="registry-contact">
            <p>
              For specific gift ideas or contributions, please click this number
              to send a message{" "}
              <a onClick={handleMessageOnWhatapp} href="#">
                +234 814 1223 960
              </a>
            </p>
          </div>
        </div>
      </div>

      {showBank && <BankAccounttModal />}
    </section>
  );
};
