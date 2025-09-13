"use client";
import useGallery from "@/app/hooks/useGallery";

const slides = [
  {
    src: "https://res.cloudinary.com/diwkdbpq0/image/upload/v1757732700/BT_Tales%2725/Copy_of_BoluTobi_169_of_180_Large_avldaj.jpg",
    alt: "Wedding Photo 1"
  },
  {
    src: "https://res.cloudinary.com/diwkdbpq0/image/upload/v1757733807/BT_Tales%2725/IMG_2848_gjkmpy.heic",
    alt: "Wedding Photo 2"
  },
  {
    src: "https://res.cloudinary.com/diwkdbpq0/image/upload/v1757733075/BT_Tales%2725/1X4A1258_oeobkt.jpg",
    alt: "Wedding Photo 3"
  },
  {
    src: "https://res.cloudinary.com/diwkdbpq0/image/upload/v1757732701/BT_Tales%2725/Copy_of_BoluTobi_176_of_180_Large_mol8qp.jpg",
    alt: "Wedding Photo 4"
  },
  {
    src: "https://res.cloudinary.com/diwkdbpq0/image/upload/v1757733523/BT_Tales%2725/IMG_0496_m11hbe.jpg",
    alt: "Wedding Photo 5"
  }
];


export const Gallery = () => {
  const { nextSlide, prevSlide,currentSlide, goToSlide  } = useGallery(slides);

  return (
   <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <div className="gallery-container">
          {/* Slideshow */}
          <div className="gallery-slideshow">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>

          {/* Prev/Next buttons */}
          <div className="gallery-nav">
            <button onClick={prevSlide} className="gallery-btn prev">
              ❮
            </button>
            <button onClick={nextSlide} className="gallery-btn next">
              ❯
            </button>
          </div>

          {/* Dots */}
          <div className="gallery-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${index === currentSlide ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
