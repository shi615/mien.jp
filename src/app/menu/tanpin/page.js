import React from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";
import Link from "next/link";
import ZoomableImage from "@/app/menu/zoomableImage";

export const metadata = {
  title: "単品メニュー",
  description:
    "中華美食 味縁の単品メニュー。前菜・揚げ物・肉料理・海鮮料理・点心・麺類・飯類など豊富な本格中華をご用意しています。",
};

const categories = [
  { id: "zensai", label: "前菜", color: "#EA332F", image: "/menu/zensai.jpeg", width: 564, height: 648 },
  { id: "agemono", label: "揚げ物", color: "#DE742D", image: "/menu/agemono.jpeg", width: 561, height: 534 },
  { id: "niku", label: "肉料理", color: "#D15F27", image: "/menu/niku.jpeg", width: 570, height: 699 },
  { id: "yasai", label: "野菜料理", color: "#4E8326", image: "/menu/yasai.jpeg", width: 565, height: 476 },
  { id: "kaisen", label: "海鮮料理", color: "#53B7E3", image: "/menu/kaisen.jpeg", width: 573, height: 281 },
  { id: "teppan", label: "鉄板", color: "#E33231", image: "/menu/teppan.jpeg", width: 561, height: 322 },
  { id: "tenshin", label: "点心", color: "#E1AA3A", image: "/menu/tenshin.jpeg", width: 567, height: 418 },
  { id: "okayu", label: "お粥・スープ", color: "#DCAA3B", image: "/menu/okayu.jpeg", width: 567, height: 175 },
  { id: "menrui", label: "麺類", color: "#D65F28", image: "/menu/menrui.jpeg", width: 575, height: 635 },
  { id: "hanrui", label: "飯類", color: "#CF2D24", image: "/menu/hanrui.jpeg", width: 575, height: 539 },
  { id: "alcohol", label: "アルコール", color: "#F2A93B", image: "/menu/alcohol.jpeg", width: 1688, height: 1200 },
  { id: "drink", label: "ドリンク", color: "#F0AC3F", image: "/menu/drink.jpeg", width: 485, height: 369 },
];

export default function Menu() {
  return (
    <div>
      <Header />
      <h2
        id="tanpin"
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#5e503f",
          padding: "10px",
          background: "#f9eed1",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        単品
      </h2>
      <div
        id="menu-header"
        style={{
          background: "#f9eed1",
          color: "#5e503f",
          padding: "5px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "13px",
            padding: "10px",
            listStyle: "none",
          }}
        >
          {categories.map(({ id, label }) => (
            <li key={id}>
              <Link href={`#${id}`}>
                <h3 style={{ borderBottom: "1px solid" }}>{label}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div id="menu" style={{ textAlign: "center", margin: "32px 0" }}>
        {categories.map(({ id, label, color, image, width, height }) => (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderTop: `2px solid ${color}`,
            }}
          >
            <h2
              id={id}
              style={{
                scrollMarginTop: "170px",
                textAlign: "center",
                fontSize: "30px",
                color,
              }}
            >
              {label}
            </h2>
            <ZoomableImage src={image} alt={`${label}のメニュー表`} width={width} height={height} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
