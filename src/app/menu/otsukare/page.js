import Header from "@/app/header";
import Footer from "@/app/footer";

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
          background: "#e6d3a3",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          marginBottom: "20px",
        }}
      >
        お疲れ様酒セット
      </h2>
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          margin: "10px",
          border: "2px solid #e6d3a3",
          borderRadius: "8px",
        }}
      >
        飲み物は下記から１杯選べます
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
          <img
            id="otsukare_2pin"
            src="/menu/otsukare_2pin.jpeg"
            alt="お疲れ様酒セット_２品"
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
          <img
            id="otsukare_400"
            src="/menu/otsukare_400.jpeg"
            alt="お疲れ様酒セット_400円"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
