"use client";
import React, { useState } from "react";
import Image from "next/image";

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
      <div style={{ position: "relative", width: "100%", maxWidth: 600, margin: "auto", height: 300 }}>
        <Image
          id="main-image"
          src={images[current]}
          alt={`slide-${current}`}
          fill
          style={{
            objectFit: "cover",
            boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
            borderRadius: 8,
          }}
          sizes="(max-width: 600px) 100vw, 600px"
          priority
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
            zIndex: 2,
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
            zIndex: 2,
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