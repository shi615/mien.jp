import Header from "@/app/header";
import Footer from "@/app/footer";

const drinks = [
  "生ビール（中）1杯",
  "焼酎1杯",
  "紹興酒1杯",
  "日本酒1合",
  "チューハイ1杯",
  "ハイボール1杯",
  "ソフトドリンク2杯",
];

const twoPinItems = [
  "焼き餃子", "枝豆", "手羽先煮込み", "ニラレバー", "エビフライ",
  "冷奴", "唐揚げ", "プチ餃子", "ニラホルモン炒め",
  "トマトサラダ", "台湾風キュウリ", "棒棒鶏", "叉焼", "回鍋肉",
  "砂肝", "イカのミックス揚", "ポテトフライ", "麻婆豆腐", "子袋",
  "ゴボウ揚げ", "シメジ揚げ",
];

const premiumItems = [
  "醤油ラーメン", "塩ラーメン",
  "台湾ラーメン", "豚骨ラーメン",
  "麻婆飯", "天津飯",
  "炒飯", "キムチ炒飯",
];

export default function Otsukare() {
  return (
    <div>
      <Header />
      <h2
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
        お疲れ様酒セット
      </h2>

      <div style={{ paddingBottom: "32px" }}>
        {/* メイン価格 */}
        <div className="menu-highlight">
          <div className="menu-highlight-card">
            <span className="menu-price-big">1,380円</span>
            <p style={{ fontSize: "13px", color: "#8b7355", margin: "4px 0 0" }}>
              お酒1杯 ＋ 料理2品 のお得なセット
            </p>
          </div>
        </div>

        {/* STEP 1: ドリンク選択 */}
        <div className="menu-category" style={{ borderTop: "3px solid #9b2d8b" }}>
          <h2 className="menu-category-title" style={{ color: "#9b2d8b", fontSize: "20px" }}>
            ① 飲み物を1種選べます
          </h2>
          <ul className="menu-items">
            {drinks.map((drink, idx) => (
              <li key={idx} className="menu-item">
                <span className="menu-item-name">{drink}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ textAlign: "center", fontSize: "36px", padding: "4px 0" }}>➕</div>

        {/* STEP 2: 料理2品 */}
        <div className="menu-category" style={{ borderTop: "3px solid #EA332F" }}>
          <h2 className="menu-category-title" style={{ color: "#EA332F", fontSize: "20px" }}>
            ② 料理を2品選べます
          </h2>
          <ul className="drink-grid">
            {twoPinItems.map((item, idx) => (
              <li key={idx} className="menu-item">
                <span className="menu-item-name">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ textAlign: "center", fontSize: "36px", padding: "4px 0" }}>➕</div>

        {/* STEP 3: プレミアム追加 */}
        <div className="menu-category" style={{ borderTop: "3px solid #F2A93B" }}>
          <h2 className="menu-category-title" style={{ color: "#F2A93B", fontSize: "20px" }}>
            ③ さらに＋400円で1品追加
          </h2>
          <p className="menu-note">麺類・飯類から1品お選びいただけます</p>
          <ul className="drink-grid">
            {premiumItems.map((item, idx) => (
              <li key={idx} className="menu-item">
                <span className="menu-item-name">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
