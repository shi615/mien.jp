"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const images = [
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
    background: "rgba(116, 18, 22, 0.85)",
    border: "1px solid rgba(217, 168, 60, 0.8)",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    cursor: "pointer",
    fontSize: "18px",
    color: "var(--cream)",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "filter 0.15s ease",
  };

  return (
    <div>
      <div
        style={{ border: "2px solid var(--primary-dark)", padding: "3px", background: "var(--warm-white)" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div style={{ border: "1px solid var(--gold)", position: "relative" }}>
          <div style={{ overflow: "hidden", aspectRatio: "4 / 3" }}>
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
                    sizes="(max-width: 600px) 100vw, 400px"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          <button onClick={prevSlide} style={{ ...navBtnStyle, left: 6 }} aria-label="前へ">
            ‹
          </button>
          <button onClick={nextSlide} style={{ ...navBtnStyle, right: 6 }} aria-label="次へ">
            ›
          </button>
        </div>
      </div>

      {/* Indicator dots */}
      <div style={{ marginTop: 10, textAlign: "center" }}>
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
              background: idx === current ? "var(--primary)" : "var(--gold-light)",
              cursor: "pointer",
              transition: "width 0.25s ease, background 0.25s ease",
              opacity: idx === current ? 1 : 0.6,
            }}
          />
        ))}
      </div>
    </div>
  );
}
