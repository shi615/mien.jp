import Header from "@/app/header";
import Footer from "@/app/footer";
import Link from "next/link";
import ZoomableImage from "@/app/menu/zoomableImage";

export const metadata = {
  title: "ランチ・定食・セットメニュー",
  description:
    "中華美食 味縁のランチ・定食・セットメニュー。お得なランチから、ボリューム満点の定食・セットまでご用意しています。",
};

const sections = [
  { id: "lunch", label: "ランチ", color: "#EA332F", image: "/menu/lunch.jpeg", width: 692, height: 686 },
  { id: "teisyoku", label: "定食", color: "#DE742D", image: "/menu/teisyoku.jpeg", width: 847, height: 997 },
  { id: "set", label: "セット", color: "#D15F27", image: "/menu/set.jpeg", width: 746, height: 1050 },
];

export default function Teisyoku() {
  return (
    <div>
      <Header />
      <div
        id="teisyoku-header"
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#5e503f",
          padding: "10px",
          background: "#f9eed1",
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
          {sections.map(({ id, label }) => (
            <li key={id}>
              <Link href={`#${id}`}>
                <h3 style={{ borderBottom: "1px solid" }}>{label}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div id="teisyoku-body" style={{ textAlign: "center", margin: "32px 0" }}>
        {sections.map(({ id, label, color, image, width, height }) => (
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
                scrollMarginTop: "70px",
                textAlign: "center",
                fontSize: "30px",
                color,
              }}
            >
              {label}
            </h2>
            <ZoomableImage
              src={image}
              alt={`${label}のメニュー表`}
              width={width}
              height={height}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
