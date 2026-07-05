import Header from "@/app/header";
import Footer from "@/app/footer";
import ZoomableImage from "@/app/menu/zoomableImage";

export const metadata = {
  title: "お疲れ様酒セット",
  description:
    "中華美食 味縁のお疲れ様酒セット(1380円)。お好きなドリンク1杯と料理2品が選べるお得な晩酌セットです。",
};

export default function Otsukare() {
  const drinks = [
    "生ビール(中)１杯",
    "焼酎１杯",
    "紹興酒１杯",
    "日本酒１合",
    "チューハイ１杯",
    "ハイボール１杯",
    "ソフトドリンク２杯",
  ];

  return (
    <div>
      <Header />
      <h2
        id="otsukare"
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
        お疲れ様酒セット（1380円）
      </h2>
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          margin: "10px",
          background: "#f9eed1",
          borderRadius: "8px",
        }}
      >
        飲み物は下記から１種選べます
        <ul style={{ listStyle: "none", padding: 0, margin: "10px 0" }}>
          {drinks.map((drink, idx) => (
            <li key={idx}>{drink}</li>
          ))}
        </ul>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        ➕
      </div>
      <div
        style={{
          margin: "10px",
          border: "2px solid #e6d3a3",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          料理は下から自由に２品選べます
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "10px" }}
        >
          <ZoomableImage
            id="otsukare_2pin"
            src="/menu/otsukare_2pin.jpeg"
            alt="お疲れ様酒セットで選べる料理2品のメニュー表"
            width={1048}
            height={815}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        ➕
      </div>
      <div
        style={{
          margin: "10px",
          marginBottom: "20px",
          border: "2px solid #e6d3a3",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          さらに＋400円で下記から１品選べます
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "10px" }}
        >
          <ZoomableImage
            id="otsukare_400"
            src="/menu/otsukare_400.jpeg"
            alt="お疲れ様酒セット+400円で選べる一品のメニュー表"
            width={426}
            height={876}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
