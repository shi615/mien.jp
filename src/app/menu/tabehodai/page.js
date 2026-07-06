import MenuPageShell, { MenuSection } from "@/app/menu/menuPageShell";
import CategoryNav from "@/app/menu/categoryNav";
import ZoomableImage from "@/app/menu/zoomableImage";

export const metadata = {
  title: "食べ放題・飲み放題",
  description:
    "中華美食 味縁の食べ放題・飲み放題コース。本格中華を心ゆくまでお楽しみいただけます。宴会・パーティーにもおすすめです。",
};

// 料理ポスターは2枚で1つのメニュー(1枚目: 料金+前菜・揚げ物 / 2枚目: メイン・麺・飯)
const foodPosters = [
  {
    image: "/menu/tabehodai_1.jpg",
    alt: "食べ放題コースの料金と料理メニューの一覧(前半)",
    width: 1087,
    height: 1600,
  },
  {
    image: "/menu/tabehodai_2.jpg",
    alt: "食べ放題メニューの一覧(後半)",
    width: 847,
    height: 1200,
  },
];

const drinkPoster = {
  image: "/menu/tabehodai_3.jpg",
  alt: "飲み放題メニューの一覧",
  width: 1131,
  height: 1600,
};

const categories = [
  { id: "food", label: "お料理" },
  { id: "drink", label: "お飲み物" },
];

export default function Tabehodai() {
  return (
    <MenuPageShell
      current="tabehodai"
      title="食べ放題・飲み放題"
      lead="本格中華を心ゆくまで。ご宴会・パーティーにもおすすめです"
      ctaLabel="ご宴会のご予約はお電話で！"
    >
      <CategoryNav categories={categories} />

      <div className="menu-grid menu-grid--3">
        <MenuSection id="food" label="お料理" className="menu-section--span2">
          <div className="poster-duo">
            {foodPosters.map(({ image, alt, width, height }) => (
              <ZoomableImage
                key={image}
                src={image}
                alt={alt}
                width={width}
                height={height}
                sizes="(max-width: 800px) 95vw, 380px"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ))}
          </div>
        </MenuSection>

        <MenuSection id="drink" label="お飲み物">
          <ZoomableImage
            src={drinkPoster.image}
            alt={drinkPoster.alt}
            width={drinkPoster.width}
            height={drinkPoster.height}
            sizes="(max-width: 800px) 95vw, 380px"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </MenuSection>
      </div>
    </MenuPageShell>
  );
}
