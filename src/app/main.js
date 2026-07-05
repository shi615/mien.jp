import ImageSlider from "@/app/imageSlider";
import Link from "next/link";
import PosterGallery from "@/app/posterGallery";

export default function Main() {
  const seasonalPosters = [
    { src: "/poster/beer.png", alt: "月〜木 全日限定！お一人様、2杯目以降 生ビール半額キャンペーンのポスター", width: 1054, height: 1492 },
    { src: "/poster/reimen.png", alt: "夏限定・韓国冷麺のポスター", width: 1054, height: 1492 },
    { src: "/poster/tyuka.png", alt: "夏限定・冷やし中華のポスター", width: 1055, height: 1491 },
    { src: "/poster/tantanmen.png", alt: "夏限定・冷担担麺のポスター", width: 1086, height: 1448 },
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ── Hero ── */}
      <div style={{ padding: "20px 16px 16px" }}>
        <div className="frame-section" style={{ maxWidth: "880px", margin: "0 auto", textAlign: "left" }}>
          <div
            className="frame-section-inner"
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "30px 28px 24px",
            }}
          >
            <div style={{ flex: "1.2 1 300px", minWidth: "260px" }}>
              <p style={{ margin: "0 0 8px", color: "var(--gold)", fontSize: "13px", letterSpacing: "0.3em" }}>
                中華美食 味縁 ｜ 愛知県安城市
              </p>
              <p
                className="brush-text"
                style={{
                  fontSize: "clamp(30px, 5vw, 40px)",
                  lineHeight: 1.35,
                  color: "var(--primary)",
                  margin: "0 0 12px",
                  letterSpacing: "0.06em",
                }}
              >
                味で縁を結ぶ、<br />本格中華。
              </p>
              <p style={{ margin: "0 0 18px", fontSize: "14px", color: "var(--text-soft)" }}>
                11:00〜14:00 / 17:00〜23:30　火曜定休
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a href="#menu-buttons" className="hero-btn hero-btn-primary">お品書きを見る</a>
                <Link href="tel:0566-77-4665" className="hero-btn hero-btn-outline">☎ 0566-77-4665</Link>
              </div>
            </div>

            <div style={{ flex: "1 1 280px", minWidth: "240px", position: "relative" }}>
              <div className="stamp-badge" style={{ position: "absolute", top: "-16px", right: "-6px", zIndex: 2 }}>
                本場<br />の味
              </div>
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>

      {/* ── Promo Band ── */}
      <a href="#seasonal" className="promo-band">
        <span className="promo-band-tag">期間限定</span>
        <span className="promo-band-text">生ビール2杯目以降 半額！／ 夏限定の冷たい麺 販売中</span>
        <span className="promo-band-more">詳しく見る ▾</span>
      </a>

      {/* ── Menu Buttons ── */}
      <div style={{ padding: "8px 0 4px" }}>
        <h2 className="section-title">お品書き</h2>

        <div id="menu-buttons">
          <a href="/menu/tanpin" className="menu-btn menu-btn-tanpin">
            <span className="menu-btn-label">単品</span>
          </a>
          <a href="/menu/teisyoku" className="menu-btn menu-btn-teisyoku">
            <span className="menu-btn-label">ランチ・<wbr />定食・セット</span>
          </a>
          <a href="/menu/otsukare" className="menu-btn menu-btn-otsukare">
            <span className="menu-btn-label">お疲れ様<wbr />酒セット</span>
          </a>
          <a href="/menu/tabehodai" className="menu-btn menu-btn-tabehodai">
            <span className="menu-btn-label">食べ放題<wbr />飲み放題</span>
          </a>
        </div>
      </div>

      <hr className="section-divider" />

      {/* ── Seasonal ── */}
      <div id="seasonal" style={{ padding: "8px 16px 8px" }}>
        <h2 className="section-title">期間限定</h2>
        <PosterGallery posters={seasonalPosters} />
      </div>

      {/* ── Hours & Phone ── */}
      <div style={{ textAlign: 'center', padding: '24px 16px 32px', position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">営業情報</h2>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", marginTop: "20px" }}>

          {/* Hours */}
          <div className="frame-section" style={{ width: "100%", maxWidth: "440px" }}>
            <div className="frame-section-inner" style={{ padding: "24px 20px 20px" }}>
              <span className="ribbon-label">営業時間</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "18px 0 4px" }}>
                <p className="hours-row">
                  <span className="daynight-badge">昼</span>
                  <span className="hours-time">11:00 〜 14:00</span>
                </p>
                <p className="hours-row">
                  <span className="daynight-badge daynight-badge--night">夜</span>
                  <span className="hours-time">17:00 〜 23:30</span>
                </p>
              </div>
              <span className="closed-note">定休日　毎週火曜日</span>
            </div>
          </div>

          {/* Phone CTA band */}
          <Link href="tel:0566-77-4665" className="phone-cta" style={{ width: "100%", maxWidth: "440px" }}>
            <span className="phone-cta-label">お持ち帰り・ご予約はお電話で！</span>
            <span className="phone-cta-number">☎ 0566-77-4665</span>
            <span className="phone-cta-note">受付時間 11:00 〜 23:30（火曜定休）</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
