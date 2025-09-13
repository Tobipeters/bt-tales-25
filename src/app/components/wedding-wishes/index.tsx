"use client";
import { useState, useCallback } from "react";

export const WeddingWishes = () => {
  const initialValues = {};
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleChange = useCallback((e) => {
  //   const { name, value } = e.target;
  //   setValues((prev) => ({ ...prev, [name]: value }));
  // }, []);

  // const handleSubmit = useCallback(
  //   async (submitFn: () => void) => {
  //     setIsSubmitting(true);
  //     try {
  //       await submitFn(values);
  //       setValues(initialValues);
  //     } catch (error) {
  //       console.error("Form submission error:", error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   },
  //   [values, initialValues]
  // );

  const reset = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return (
    <section id="wishes" className="wishes">
      <div className="container">
        <h2 className="section-title">Wedding Wishes</h2>
        <div className="wishes-content">
          <div className="wishes-display">
            <div className="wish-carousel" id="wishCarousel"></div>
          </div>
          <form className="wish-form" id="wishForm">
            <h3>Leave Your Wishes</h3>
            <div className="form-group">
              <input
                type="text"
                id="wishName"
                name="wishName"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="wishMessage"
                name="wishMessage"
                placeholder="Your wedding wishes for Boluwatife & Oluwatobi..."
                rows={4}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Wishes
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
