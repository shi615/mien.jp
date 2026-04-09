import Header from "@/app/header";
import Footer from "@/app/footer";
import Link from "next/link";

const lunchItems = [
  "エビチリ",
  "エビマヨ",
  "ニラレバー",
  "回鍋肉",
  "八宝菜",
  "台湾風酢豚",
  "油淋鶏",
  "カニ玉子",
  "麻婆春雨",
  "キクラゲ玉子エビかけ",
  "麻婆豆腐",
  "ニラもやし",
  "野菜炒め",
  "青椒肉絲",
  "麻婆ナス",
  "味噌ナス",
  "ナスと鶏肉炒め",
];

const teisyokuItems = [
  { name: "台湾ラーメン定食", price: "1360円" },
  { name: "醤油ラーメン定食", price: "1360円" },
  { name: "黄ニラ豚定食", price: "1100円" },
  { name: "麻婆定食", price: "1360円" },
  { name: "水餃子定食", price: "1100円" },
  { name: "鶏肉カツ定食", price: "1380円" },
  { name: "豚カツ定食", price: "1380円" },
  { name: "エビマヨ定食", price: "1180円" },
  { name: "エビチリ定食", price: "1180円" },
];

const setMenuItems = [
  {
    name: "ラーメンセット",
    note: "各種ラーメン＋ミニ炒飯 or ライス",
    items: [
      { name: "醤油ラーメン", price: "830円" },
      { name: "味噌ラーメン", price: "830円" },
      { name: "塩ラーメン", price: "830円" },
      { name: "豚骨ラーメン", price: "830円" },
      { name: "台湾ラーメン", price: "830円" },
      { name: "特製台湾ラーメン", price: "880円" },
    ],
  },
  {
    name: "サイドセット",
    items: [
      { name: "餃子セット（6個）", price: "280円" },
      { name: "ご飯セット", price: "280円" },
      { name: "唐揚げセット（3個）", price: "380円" },
      { name: "唐揚げセット（5個）", price: "480円" },
    ],
  },
];

export default function Teisyoku() {
  return (
    <div>
      <Header />
      <nav
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
          <li>
            <Link href="#lunch">
              <h3 style={{ borderBottom: "1px solid", fontWeight: "bold" }}>ランチ</h3>
            </Link>
          </li>
          <li>
            <Link href="#teisyoku">
              <h3 style={{ borderBottom: "1px solid", fontWeight: "bold" }}>定食</h3>
            </Link>
          </li>
          <li>
            <Link href="#set">
              <h3 style={{ borderBottom: "1px solid", fontWeight: "bold" }}>セット</h3>
            </Link>
          </li>
        </ul>
      </nav>

      <div style={{ paddingBottom: "32px" }}>
        {/* ランチ */}
        <div className="menu-category" style={{ borderTop: "3px solid #EA332F" }}>
          <h2
            id="lunch"
            className="menu-category-title"
            style={{ color: "#EA332F", scrollMarginTop: "100px" }}
          >
            ランチメニュー
          </h2>
          <div className="menu-highlight" style={{ padding: "0 0 12px" }}>
            <div className="menu-highlight-card">
              <div>
                <span className="menu-price-label">昼</span>
                <span className="menu-price-big">900円</span>
                <span style={{ margin: "0 12px", color: "#8b7355" }}>／</span>
                <span className="menu-price-label">夜</span>
                <span className="menu-price-big">1,100円</span>
              </div>
              <p style={{ fontSize: "13px", color: "#8b7355", margin: "8px 0 0" }}>
                ライス（小・中・大）自由 ／ コーヒー1杯サービス
              </p>
            </div>
          </div>
          <p className="menu-note">
            一品料理・揚げ物・漬物・杏仁豆腐・ライス・スープ付き
          </p>
          <p className="menu-note" style={{ paddingBottom: "4px" }}>
            下記から1品お選びください
          </p>
          <ul className="menu-items">
            {lunchItems.map((item, idx) => (
              <li key={idx} className="menu-item">
                <span className="menu-item-name">
                  {idx + 1}. {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 定食 */}
        <div className="menu-category" style={{ borderTop: "3px solid #DE742D" }}>
          <h2
            id="teisyoku"
            className="menu-category-title"
            style={{ color: "#DE742D", scrollMarginTop: "100px" }}
          >
            定食
          </h2>
          <ul className="menu-items">
            {teisyokuItems.map((item, idx) => (
              <li key={idx} className="menu-item">
                <span className="menu-item-name">{item.name}</span>
                <span className="menu-item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* セット */}
        <div className="menu-category" style={{ borderTop: "3px solid #D15F27" }}>
          <h2
            id="set"
            className="menu-category-title"
            style={{ color: "#D15F27", scrollMarginTop: "100px" }}
          >
            セット
          </h2>
          {setMenuItems.map((section, si) => (
            <div key={si} style={{ marginBottom: "16px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#5e503f",
                  textAlign: "center",
                  margin: "12px 0 4px",
                }}
              >
                {section.name}
              </p>
              {section.note && (
                <p className="menu-note">{section.note}</p>
              )}
              <ul className="menu-items">
                {section.items.map((item, idx) => (
                  <li key={idx} className="menu-item">
                    <span className="menu-item-name">{item.name}</span>
                    <span className="menu-item-price">{item.price}</span>
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
