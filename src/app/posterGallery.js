"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PosterGallery({ posters, gridClassName = "" }) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const active = activeIndex !== null ? posters[activeIndex] : null;

  // 各カラム幅を縦横比に比例させ、1列に並んだポスターの高さを揃える
  const proportionalColumns = posters
    .map(({ width, height }) => `${(width / height).toFixed(4)}fr`)
    .join(" ");

  return (
    <>
      <div
        className={`poster-grid ${gridClassName}`.trim()}
        style={{ "--poster-cols": proportionalColumns }}
      >
        {posters.map(({ src, alt, width, height }, idx) => (
          <button
            key={src}
            type="button"
            className="frame-section poster-thumb"
            onClick={() => setActiveIndex(idx)}
            aria-label={`${alt}を拡大表示`}
          >
            <span className="frame-section-inner" style={{ display: "block" }}>
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ width: "100%", height: "auto", display: "block" }}
                sizes="(max-width: 600px) 50vw, 270px"
              />
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="poster-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="poster-lightbox-close"
            aria-label="閉じる"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>
          <div className="poster-lightbox-body" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              loading="eager"
              style={{
                width: `min(92vw - 16px, calc(86vh * ${(active.width / active.height).toFixed(4)}))`,
                height: "auto",
                display: "block",
              }}
              sizes="92vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
