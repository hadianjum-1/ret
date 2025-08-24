import React, { useState } from "react";
import TeC from "./TeC";

const Testim = () => {
  // State to keep track of the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Daniel R.",
      text: "The atmosphere was cozy, and every dish felt like it was made with love. Easily one of the best dining experiences I've had in the city!",
      img: "https://example.com/image1.jpg", // Replace with actual image URL
    },
    {
      name: "Sarah M.",
      text: "Amazing food! The service was great, and the ambiance was perfect. Highly recommend!",
      img: "https://example.com/image2.jpg", // Replace with actual image URL
    },
    {
      name: "John D.",
      text: "A delightful experience! The food was top-notch, and the staff was so friendly. I'll definitely be back.",
      img: "https://example.com/image3.jpg", // Replace with actual image URL
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials">
      <div className="T_T">Testimonials</div>

      <div className="Tc">
        <div className="wsef">
          <button className="prev-btn by" onClick={goToPrev}>
            <img src="src/assets/arroe.png" alt="" width={"50px"} />
          </button>
        </div>
        <TeC
          Name={testimonials[currentIndex].name}
          teP={testimonials[currentIndex].text}
          img={testimonials[currentIndex].img}
        />
        <div className="wsef">
          <button className="next-btn by" onClick={goToNext}>
            <img src="src/assets/arroe.png" alt="" width={"50px"} />
          </button>
        </div>
      </div>

      {/* Forward and backward buttons */}
    </section>
  );
};

export default Testim;
