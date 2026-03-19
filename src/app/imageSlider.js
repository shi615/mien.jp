"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/beer_2.png",
  "/enkai_1.jpg",
  "/counter.jpg",
  "/outLook.jpg"
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{ position: "relative", width: "100%", maxWidth: 600, margin: "auto", height: 300 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: 8,
            boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
          }}
        >
          <div
            id="main-image"
            style={{
              display: "flex",
              width: `${images.length * 100}%`,
              height: "100%",
              transform: `translateX(-${current * (100 / images.length)}%)`,
              transition: "transform 0.4s ease-in-out",
              touchAction: "pan-y",
            }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  width: `${100 / images.length}%`,
                  height: "100%",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={src}
                  alt={`slide-${idx}`}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  sizes="(max-width: 600px) 100vw, 600px"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
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