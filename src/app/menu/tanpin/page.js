import React from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";
import Link from "next/link";

const menuData = [
  {
    id: "zensai",
    title: "前菜",
    color: "#EA332F",
    items: [
      { name: "棒棒鶏", price: "680円" },
      { name: "野菜サラダ", price: "680円" },
      { name: "台湾風キュウリ", price: "580円" },
      { name: "幻肝のタレ", price: "580円" },
      { name: "生春巻", price: "580円" },
      { name: "枝豆", price: "480円" },
      { name: "バリバリサラダ", price: "780円" },
      { name: "塩キャベツ", price: "480円" },
      { name: "キムチ", price: "580円" },
      { name: "トマトサラダ", price: "580円" },
      { name: "冷奴", price: "780円" },
      { name: "子袋", price: "780円" },
      { name: "キュウリの黒胡椒和え", price: "680円" },
      { name: "砂肝（3串）", price: "580円" },
      { name: "台湾風の煮込み", price: "680円" },
      { name: "卵クレープ", price: "580円" },
    ],
  },
  {
    id: "agemono",
    title: "揚げ物",
    color: "#DE742D",
    items: [
      { name: "春巻", price: "680円" },
      { name: "若鶏の唐揚げ（7個）", price: "680円" },
      { name: "若鶏の唐揚げ（3個）", price: "400円" },
      { name: "ポテトフライ", price: "580円" },
      { name: "イカのミックス揚げ", price: "680円" },
      { name: "手羽先の唐揚げ", price: "580円" },
      { name: "チーズ春巻（5本）", price: "580円" },
      { name: "鯛魚骨唐揚げ", price: "580円" },
      { name: "シメジ揚げ", price: "580円" },
      { name: "ゴボウ揚げ", price: "580円" },
      { name: "レバニラ揚", price: "780円" },
      { name: "ジャガイモ揚バター", price: "680円" },
      { name: "海エビ揚げ", price: "580円" },
      { name: "鶏皮揚げ", price: "580円" },
    ],
  },
  {
    id: "niku",
    title: "肉料理",
    color: "#D15F27",
    items: [
      { name: "牛肉の四川風煮込み", price: "1280円" },
      { name: "豚肉のニンニク茎炒め", price: "980円" },
      { name: "黒酢豚", price: "980円" },
      { name: "酢豚", price: "880円" },
      { name: "回鍋肉", price: "880円" },
      { name: "ゴマ豚", price: "980円" },
      { name: "台湾風腸詰", price: "1080円" },
      { name: "ニラレバー", price: "880円" },
      { name: "ホルモンとニンニク茎炒め", price: "980円" },
      { name: "黄ニラ豚", price: "880円" },
      { name: "油淋鶏", price: "880円" },
      { name: "砂肝の黒胡椒炒め", price: "880円" },
      { name: "ホルモンとキノコしめじ", price: "880円" },
      { name: "キクラゲと豚肉炒め", price: "880円" },
      { name: "豚肉の生姜焼", price: "980円" },
      { name: "牛肉の黒胡椒炒め", price: "1080円" },
      { name: "トンマヨ", price: "880円" },
      { name: "鶏肉の甘酢和え", price: "980円" },
      { name: "鶏肉カツ", price: "880円" },
      { name: "豚カツ", price: "880円" },
    ],
  },
  {
    id: "yasai",
    title: "野菜料理",
    color: "#4E8326",
    items: [
      { name: "地獄麻婆豆腐", price: "1280円" },
      { name: "焼きビーフン", price: "780円" },
      { name: "カニ玉子", price: "880円" },
      { name: "ニラもやし", price: "780円" },
      { name: "四川麻婆豆腐", price: "880円" },
      { name: "トマトと玉子炒め", price: "880円" },
      { name: "味噌なす", price: "880円" },
      { name: "野菜炒め", price: "780円" },
      { name: "青菜炒め", price: "880円" },
      { name: "麻婆春雨", price: "780円" },
      { name: "麻婆ナス", price: "880円" },
      { name: "八宝菜", price: "880円" },
      { name: "麻婆豆腐", price: "780円" },
    ],
  },
  {
    id: "kaisen",
    title: "海鮮料理",
    color: "#53B7E3",
    items: [
      { name: "エビチリ", price: "1080円" },
      { name: "エビマヨ", price: "1080円" },
      { name: "アサリ炒め", price: "980円" },
      { name: "カキの黒胡椒炒め", price: "980円" },
      { name: "エビ青梗菜炒め", price: "980円" },
    ],
  },
  {
    id: "teppan",
    title: "鉄板",
    color: "#E33231",
    items: [
      { name: "牛すじの鉄板焼き", price: "1080円" },
      { name: "鉄板豚肉とキムチ炒め", price: "980円" },
      { name: "牛ホルモンの鉄板焼き", price: "1080円" },
      { name: "鉄板香辣エビ", price: "1180円" },
      { name: "鉄板野菜豆腐", price: "880円" },
      { name: "鉄板骨なし鶏肉", price: "980円" },
    ],
  },
  {
    id: "tenshin",
    title: "点心",
    color: "#E1AA3A",
    items: [
      { name: "焼き餃子", price: "280円" },
      { name: "鉄板棒餃子", price: "730円" },
      { name: "水餃子", price: "780円" },
      { name: "小籠包", price: "480円" },
      { name: "シューマイ", price: "680円" },
      { name: "揚げ餃子", price: "580円" },
      { name: "エビ餃子", price: "480円" },
      { name: "ココナッツ団子", price: "550円" },
      { name: "もも饅頭", price: "520円" },
      { name: "ゴマ団子", price: "580円" },
      { name: "バニラアイスクリーム", price: "380円" },
      { name: "杏仁豆腐", price: "380円" },
    ],
  },
  {
    id: "okayu",
    title: "お粥・スープ",
    color: "#DCAA3B",
    items: [
      { name: "たまごスープ", price: "380円" },
      { name: "野菜お粥", price: "680円" },
      { name: "海鮮お粥", price: "780円" },
      { name: "コーンスープ", price: "680円" },
      { name: "ワンタンスープ", price: "680円" },
    ],
  },
  {
    id: "menrui",
    title: "麺類",
    color: "#D65F28",
    items: [
      { name: "麻辣麺", price: "980円" },
      { name: "五目パリそば", price: "980円" },
      { name: "味噌ラーメン", price: "830円" },
      { name: "中華冷やそば", price: "880円" },
      { name: "豚骨ラーメン", price: "830円" },
      { name: "台湾ラーメン", price: "830円" },
      { name: "担々麺", price: "880円" },
      { name: "醤油ラーメン", price: "830円" },
      { name: "特製台湾ラーメン", price: "880円" },
      { name: "台湾豚骨ラーメン", price: "730円" },
      { name: "塩ラーメン", price: "830円" },
      { name: "海鮮ラーメン", price: "780円" },
      { name: "天津麺", price: "780円" },
      { name: "四川ラーメン", price: "830円" },
      { name: "ネギラーメン", price: "830円" },
      { name: "五目ラーメン", price: "830円" },
      { name: "天津ラーメン", price: "830円" },
      { name: "韓国冷麺", price: "880円" },
      { name: "焼肉冷やそば", price: "880円" },
      { name: "台湾まぜそば", price: "880円" },
      { name: "五目あんかけそば", price: "880円" },
    ],
  },
  {
    id: "hanrui",
    title: "飯類",
    color: "#CF2D24",
    note: "ライス：（大）400円 ／（中）300円 ／（小）200円",
    items: [
      { name: "味噌飯", price: "830円" },
      { name: "豚バラ炒飯", price: "960円" },
      { name: "炒飯", price: "880円" },
      { name: "レタス炒飯", price: "880円" },
      { name: "ニンニク炒飯", price: "880円" },
      { name: "キムチ炒飯", price: "880円" },
      { name: "エビ炒飯", price: "880円" },
      { name: "五目炒飯", price: "880円" },
      { name: "麻婆飯", price: "880円" },
      { name: "天津飯", price: "880円" },
      { name: "南蛮天津飯", price: "980円" },
      { name: "カツ丼", price: "980円" },
      { name: "唐揚げ丼", price: "980円" },
      { name: "中華丼", price: "880円" },
      { name: "牛丼", price: "880円" },
    ],
  },
  {
    id: "alcohol",
    title: "アルコール",
    color: "#F2A93B",
    subcategories: [
      {
        name: "ビール",
        items: [
          { name: "生ビール（中）", price: "480円" },
          { name: "瓶ビール（大）", price: "580円" },
          { name: "男気ジョッキ", price: "750円" },
          { name: "アサヒスーパードライ", price: "750円" },
          { name: "ノンアルコールビール", price: "350円" },
        ],
      },
      {
        name: "焼酎（ロック・水割り・お湯割り）",
        items: [
          { name: "芋", price: "各390円" },
          { name: "麦", price: "各390円" },
        ],
      },
      {
        name: "日本酒",
        items: [
          { name: "伏見鶴（一合）", price: "450円" },
          { name: "冷酒", price: "800円" },
        ],
      },
      {
        name: "果実酒（ロック）",
        items: [
          { name: "杏露酒", price: "各350円" },
          { name: "ライチ酒", price: "各350円" },
          { name: "酸梅酒（梅酒）", price: "各350円" },
        ],
      },
      {
        name: "中国酒",
        items: [
          { name: "紹興酒", price: "各350円" },
          { name: "花彫酒", price: "各350円" },
        ],
      },
      {
        name: "チューハイ",
        items: [
          { name: "ウーロンハイ", price: "各480円" },
          { name: "緑茶ハイ", price: "各480円" },
          { name: "パイナップルチューハイ", price: "各480円" },
          { name: "レモン", price: "各480円" },
          { name: "巨峰", price: "各480円" },
          { name: "青リンゴ", price: "各480円" },
          { name: "ゆず", price: "各480円" },
          { name: "ライム", price: "各480円" },
          { name: "梅", price: "各480円" },
          { name: "桃", price: "各480円" },
          { name: "カシス", price: "各480円" },
          { name: "カルピス", price: "各480円" },
          { name: "グレープフルーツ", price: "各480円" },
        ],
      },
      {
        name: "サワー",
        items: [
          { name: "生レモンサワー", price: "530円" },
          { name: "その他サワー", price: "各450円" },
        ],
      },
      {
        name: "ウイスキー",
        items: [
          { name: "ロック", price: "530円" },
          { name: "ハイボール", price: "350円" },
          { name: "コーラハイボール", price: "350円" },
          { name: "ジンジャーハイボール", price: "350円" },
        ],
      },
    ],
  },
  {
    id: "drink",
    title: "ソフトドリンク",
    color: "#F0AC3F",
    note: "基本 各250円",
    items: [
      { name: "コーラ", price: "250円" },
      { name: "オレンジジュース", price: "250円" },
      { name: "メロン", price: "250円" },
      { name: "コーヒー", price: "250円" },
      { name: "カルピス", price: "250円" },
      { name: "緑茶", price: "250円" },
      { name: "烏龍茶", price: "250円" },
      { name: "ジンジャーエール", price: "250円" },
      { name: "マンゴージュース", price: "350円" },
      { name: "マンゴーオレンジ", price: "350円" },
      { name: "マンゴーカルピス", price: "350円" },
    ],
  },
];

function MenuCategory({ category }) {
  return (
    <div
      className="menu-category"
      style={{ borderTop: `3px solid ${category.color}` }}
    >
      <h2
        id={category.id}
        className="menu-category-title"
        style={{ color: category.color }}
      >
        {category.title}
      </h2>
      {category.note && <p className="menu-note">{category.note}</p>}
      {category.subcategories ? (
        <ul className="menu-items">
          {category.subcategories.map((sub, si) => (
            <React.Fragment key={si}>
              <li className="menu-subcategory">{sub.name}</li>
              {sub.items.map((item, idx) => (
                <li key={idx} className="menu-item">
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <ul className="menu-items">
          {category.items.map((item, idx) => (
            <li key={idx} className="menu-item">
              <span className="menu-item-name">{item.name}</span>
              <span className="menu-item-price">{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Menu() {
  const categories = [
    "前菜", "揚げ物", "肉料理", "野菜料理", "海鮮料理", "鉄板",
    "点心", "お粥・スープ", "麺類", "飯類", "アルコール", "ドリンク",
  ];

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
        単品メニュー
      </h2>
      <nav
        style={{
          background: "#f9eed1",
          color: "#5e503f",
          padding: "5px",
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
          {menuData.map((cat) => (
            <li key={cat.id}>
              <Link href={`#${cat.id}`}>
                <h3 style={{ borderBottom: "1px solid", fontWeight: "bold" }}>
                  {cat.id === "drink" ? "ドリンク" : cat.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ paddingBottom: "32px" }}>
        {menuData.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
