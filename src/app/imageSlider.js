"use client";
import React, { useState } from "react";

const images = [
  "/enkai_1.jpg",
  "/counter.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ position: "relative", width: "100%", margin: "auto" }}>
        <img
          id="main-image"
          src={images[current]}
          alt={`slide-${current}`}
          style={{
            width: "100%",
            height: "300px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
          }}
        />
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          {">"}
        </button>
      </div>
      <div style={{ marginTop: 8 }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              margin: 4,
              borderRadius: "50%",
              background: idx === current ? "#333" : "#ccc",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}