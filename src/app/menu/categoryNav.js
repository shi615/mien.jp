"use client";

import { useEffect, useRef, useState } from "react";

export default function CategoryNav({ categories, ariaLabel = "カテゴリー" }) {
  const [active, setActive] = useState(categories[0]?.id);
  const navRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const navBottom = navRef.current?.getBoundingClientRect().bottom ?? 0;
      const offset = navBottom + 60;
      let current = categories[0]?.id;
      // 2カラム配置では同じ行のセクションが同じ top を持つため、
      // 同点では先のカテゴリを保持する(厳密な > で更新)
      let bestTop = -Infinity;
      for (const { id } of categories) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= offset && top > bestTop) {
          bestTop = top;
          current = id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [categories]);

  useEffect(() => {
    const list = navRef.current?.querySelector("ul");
    const chip = navRef.current?.querySelector("[aria-current]");
    if (!list || !chip || list.scrollWidth <= list.clientWidth) return;
    const chipRect = chip.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    const target =
      chipRect.left - listRect.left + list.scrollLeft - (list.clientWidth - chipRect.width) / 2;
    list.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  return (
    <nav ref={navRef} className="menu-cat-nav" aria-label={ariaLabel}>
      <ul>
        {categories.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="menu-cat-chip"
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
