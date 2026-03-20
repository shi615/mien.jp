import ImageSlider from "@/app/imageSlider";
import Link from "next/link";

export default function Main() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <ImageSlider />

      {/* ── Menu Buttons ── */}
      <div style={{ padding: "8px 0 4px" }}>
        <h2 className="section-title">◆ メニュー ◆</h2>

        <div
          id="menu-buttons"
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            marginTop: "16px",
            marginBottom: "28px",
            padding: "0 16px",
          }}
        >
          <a href="/menu/tanpin" className="menu-btn menu-btn-tanpin">
            🍜<br />単品
          </a>
          <a href="/menu/teisyoku" className="menu-btn menu-btn-teisyoku">
            🍱<br />ランチ・定食・セット
          </a>
          <a href="/menu/otsukare" className="menu-btn menu-btn-otsukare">
            🍺<br />お疲れ様酒セット
          </a>
          <a href="/menu/tabehodai" className="menu-btn menu-btn-tabehodai">
            🎉<br />食べ放題・飲み放題
          </a>
        </div>
      </div>

      <hr className="section-divider" />

      {/* ── Hours & Phone ── */}
      <div style={{ textAlign: 'center', padding: '24px 16px 32px', position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">◆ 営業情報 ◆</h2>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "20px" }}>

          {/* Hours */}
          <div className="hours-card">
            <p style={{ fontSize: "20px", fontWeight: "bold", color: "#8b1a1a", marginBottom: "4px" }}>
              年中無休で営業中！
            </p>
            <p style={{ fontSize: "22px", color: "#2d1a0e", letterSpacing: "0.05em" }}>
              11:00 〜 14:00
            </p>
            <p style={{ fontSize: "16px", color: "#888", margin: "2px 0" }}>—</p>
            <p style={{ fontSize: "22px", color: "#2d1a0e", letterSpacing: "0.05em" }}>
              17:00 〜 23:30
            </p>
          </div>

          {/* Takeout phone */}
          <div className="hours-card">
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#8b1a1a", marginBottom: "8px" }}>
              📦 お持ち帰りはお電話で！
            </p>
            <Link
              href="tel:0566-77-4665"
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#c41e3a",
                textDecoration: "none",
                letterSpacing: "0.08em",
                borderBottom: "2px solid #c9950c",
                paddingBottom: "2px",
              }}
            >
              0566-77-4665
            </Link>
            <p style={{ fontSize: "15px", color: "#888", marginTop: "6px" }}>
              受付時間 11:00 〜 23:30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
