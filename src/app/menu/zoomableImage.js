"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ZoomableImage({ src, alt, width, height, id, style, sizes }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Image
        id={id}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes ?? "(max-width: 600px) 95vw, 50vw"}
        onClick={() => setOpen(true)}
        style={{ cursor: "zoom-in", ...style }}
      />
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt}(拡大表示)`}
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(0, 0, 0, 0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            padding: "16px",
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="96vw"
            quality={90}
            style={{
              width: `min(96vw, calc(92vh * ${(width / height).toFixed(4)}))`,
              height: "auto",
              borderRadius: "8px",
            }}
          />
          <button
            aria-label="閉じる"
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "none",
              background: "rgba(255, 255, 255, 0.15)",
              color: "white",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
