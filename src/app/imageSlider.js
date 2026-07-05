"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/beer_2.jpg", alt: "キンキンに冷えた生ビール" },
  { src: "/enkai_1.jpg", alt: "宴会コースの中華料理の数々" },
  { src: "/counter.jpg", alt: "店内カウンター席の様子" },
  { src: "/outLook.jpg", alt: "中華美食 味縁の店舗外観" },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const minSwipeDistance = 50;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

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
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
  };

  const navBtnStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "linear-gradient(135deg, rgba(196,30,58,0.85), rgba(139,26,26,0.85))",
    border: "2px solid rgba(201,149,12,0.7)",
    borderRadius: "50%",
    width: "44px",
    height: "44px",
    cursor: "pointer",
    fontSize: "20px",
    color: "white",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
    transition: "filter 0.15s ease",
  };

  return (
    <div style={{ textAlign: "center", padding: "16px 0 8px" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 640,
          margin: "auto",
          height: 320,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: 16,
            boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
            border: "3px solid #c9950c",
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
            {images.map(({ src, alt }, idx) => (
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
                  alt={alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 600px) 100vw, 640px"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>

          {/* Catch copy overlay */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              padding: "36px 20px 14px",
              background: "linear-gradient(transparent, rgba(0, 0, 0, 0.6))",
              pointerEvents: "none",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#fff",
                fontSize: "clamp(18px, 4.5vw, 26px)",
                fontWeight: "bold",
                letterSpacing: "0.14em",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
              }}
            >
              味で縁を結ぶ、本格中華。
            </p>
          </div>
        </div>

        <button onClick={prevSlide} style={{ ...navBtnStyle, left: 8 }} aria-label="前へ">
          ‹
        </button>
        <button onClick={nextSlide} style={{ ...navBtnStyle, right: 8 }} aria-label="次へ">
          ›
        </button>
      </div>

      {/* Indicator dots */}
      <div style={{ marginTop: 12 }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              display: "inline-block",
              width: idx === current ? 24 : 10,
              height: 10,
              margin: "0 4px",
              borderRadius: idx === current ? "5px" : "50%",
              background: idx === current ? "#c41e3a" : "#d4a050",
              cursor: "pointer",
              transition: "width 0.25s ease, background 0.25s ease",
              opacity: idx === current ? 1 : 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
