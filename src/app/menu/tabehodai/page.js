import Header from "@/app/header";
import Footer from "@/app/footer";

const foodItems = [
  "棒棒鶏", "枝豆", "バリバリサラダ", "塩キャベツ",
  "キムチ", "トマトサラダ", "冷奴", "子袋",
  "焼き餃子", "唐揚げ", "春巻", "エビフライ",
  "手羽先煮込み", "ニラレバー", "ポテトフライ", "イカのミックス揚げ",
  "ゴボウ揚げ", "シメジ揚げ", "鶏皮揚げ", "回鍋肉",
  "麻婆豆腐", "台湾風キュウリ", "ニラもやし", "エビマヨ",
  "トマト玉子", "ゴマ豚", "黒酢豚", "酢豚",
  "ホルモンとニンニク茎炒め", "鶏肉カツ", "鶏カン（中）", "アサリ炒め",
  "豚肉とキムチ炒め", "野菜炒め",
  "海鮮お粥", "台湾ラーメン", "豚骨ラーメン", "海鮮ラーメン", "五目ラーメン",
  "炒飯", "キムチ炒飯", "エビ炒飯", "天津飯",
];

const drinkCategories = [
  {
    name: "ビール",
    items: ["生中", "瓶ビール"],
  },
  {
    name: "焼酎",
    items: ["芋（ロック・水割り・お湯割り）", "麦（ロック・水割り・お湯割り）"],
  },
  {
    name: "チューハイ・サワー",
    items: [
      "ウーロンハイ", "緑茶ハイ", "パイナップルチューハイ",
      "レモン", "巨峰", "青リンゴ", "ゆず", "ライム",
      "梅", "桃", "カシス", "カルピス", "グレープフルーツ",
    ],
  },
  {
    name: "ウイスキー",
    items: ["ロック", "ハイボール", "コーラハイボール", "ジンジャーハイボール"],
  },
  {
    name: "果実酒",
    items: ["杏露酒", "ライチ酒", "梅酒"],
  },
  {
    name: "ソフトドリンク",
    items: [
      "コーラ", "メロンソーダ", "カルピス", "緑茶",
      "烏龍茶", "ジンジャーエール", "オレンジジュース",
    ],
  },
];

export default function Tabehodai() {
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
        食べ放題・飲み放題
      </h2>

      <div style={{ paddingBottom: "32px" }}>
        {/* 料金プラン */}
        <div className="menu-highlight" style={{ paddingTop: "24px" }}>
          <div
            className="menu-highlight-card"
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#5e503f",
                margin: "0 0 4px",
              }}
            >
              食べ放題 ＋ 飲み放題
            </p>
            <p style={{ fontSize: "13px", color: "#8b7355", margin: "0 0 8px" }}>
              2時間制 ／ 5名様より ／ 会計制
            </p>
            <div style={{ margin: "8px 0" }}>
              <span className="menu-price-label">大人・高校生</span>
              <span className="menu-price-big">3,980円</span>
            </div>
            <p style={{ fontSize: "13px", color: "#8b7355", margin: "0 0 4px" }}>
              中学生以下 2,280円
            </p>
          </div>
        </div>

        <div className="menu-category" style={{ borderTop: "none", paddingTop: "0" }}>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "8px 0 20px",
            }}
          >
            <div
              style={{
                background: "var(--warm-white)",
                border: "1.5px solid #e8d0a0",
                borderRadius: "12px",
                padding: "14px 20px",
                textAlign: "center",
                flex: "1",
                minWidth: "180px",
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "15px", color: "#5e503f", margin: "0 0 4px" }}>
                食べ放題のみ
              </p>
              <p style={{ fontSize: "13px", color: "#8b7355", margin: "0 0 4px" }}>2時間・5名様より</p>
              <p style={{ fontWeight: "bold", fontSize: "20px", color: "var(--primary)", margin: 0 }}>
                3,280円
              </p>
            </div>
            <div
              style={{
                background: "var(--warm-white)",
                border: "1.5px solid #e8d0a0",
                borderRadius: "12px",
                padding: "14px 20px",
                textAlign: "center",
                flex: "1",
                minWidth: "180px",
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "15px", color: "#5e503f", margin: "0 0 4px" }}>
                飲み放題のみ
              </p>
              <p style={{ fontSize: "13px", color: "#8b7355", margin: "0 0 4px" }}>2時間・5名様より</p>
              <p style={{ fontWeight: "bold", fontSize: "20px", color: "var(--primary)", margin: 0 }}>
                2,980円
              </p>
            </div>
          </div>
        </div>

        {/* 食べ放題メニュー */}
        <div className="menu-category" style={{ borderTop: "3px solid #EA332F", paddingTop: "8px" }}>
          <h2
            className="menu-category-title"
            style={{ color: "#EA332F" }}
          >
            食べ放題メニュー
          </h2>
          <ul className="drink-grid">
            {foodItems.map((item, idx) => (
              <li key={idx} className="menu-item">
                <span className="menu-item-name">{item}</span>
              </li>
            ))}
          </ul>
          <p className="menu-note" style={{ paddingTop: "8px" }}>
            ※ その他多数のメニューがございます。詳しくは店内でご確認ください。
          </p>
        </div>

        {/* 飲み放題メニュー */}
        <div className="menu-category" style={{ borderTop: "3px solid #F2A93B", paddingTop: "8px" }}>
          <h2
            className="menu-category-title"
            style={{ color: "#F2A93B" }}
          >
            飲み放題メニュー
          </h2>
          {drinkCategories.map((cat, ci) => (
            <div key={ci} style={{ marginBottom: "12px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#5e503f",
                  textAlign: "center",
                  margin: "12px 0 4px",
                }}
              >
                {cat.name}
              </p>
              <ul className="drink-grid">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="menu-item">
                    <span className="menu-item-name">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
