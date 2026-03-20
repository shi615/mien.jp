import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
        <h2 style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "#f5d06a",
          letterSpacing: "0.06em",
          marginBottom: "4px",
        }}>
          中華美食 味縁
        </h2>

        <div style={{ fontSize: "15px", lineHeight: 2, color: "rgba(255,255,255,0.88)" }}>
          <p style={{ margin: 0 }}>
            〒446-0018 愛知県安城市東新町8-8
          </p>
          <p style={{ margin: 0 }}>
            <Link href="https://maps.app.goo.gl/4tSLj812MDLeYESU7" target="_blank" rel="noopener noreferrer">
              📍 地図を見る
            </Link>
          </p>
          <p style={{ margin: "4px 0 0" }}>
            <Link href="tel:0566-77-4665">
              ☎ 0566-77-4665
            </Link>
            {"　"}（毎日 11:00 〜 23:30）
          </p>
        </div>

        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginTop: "12px" }}>
          © 中華美食 味縁. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
