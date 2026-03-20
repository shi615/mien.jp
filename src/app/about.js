import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: "24px 20px 28px" }}>
      <h2 className="section-title">◆ 当店のこだわり ◆</h2>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        maxWidth: "560px",
        margin: "20px auto 0",
      }}>
        <div className="info-card" style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <span style={{ fontSize: "28px", flexShrink: 0 }}>🌾</span>
          <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.7 }}>
            新米{" "}
            <Link
              href="https://kuriya.co.jp/blog/other/20201009-1975.html"
              style={{ color: "#c41e3a", borderBottom: "1px solid #c9950c", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              「あいちのかおり」
            </Link>{" "}
            を使用！
          </p>
        </div>

        <div className="info-card" style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <span style={{ fontSize: "28px", flexShrink: 0 }}>🥚</span>
          <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.7 }}>
            愛知県西尾市養鶏場{" "}
            <Link
              href="https://kira-farm.com/"
              style={{ color: "#c41e3a", borderBottom: "1px solid #c9950c", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              「吉良農場」
            </Link>{" "}
            の卵を使用しています！
          </p>
        </div>
      </div>
    </div>
  );
}
