import MenuPageShell, { MenuSection } from "@/app/menu/menuPageShell";
import CategoryNav from "@/app/menu/categoryNav";
import ZoomableImage from "@/app/menu/zoomableImage";

export const metadata = {
  title: "単品メニュー",
  description:
    "中華美食 味縁の単品メニュー。前菜・揚げ物・肉料理・海鮮料理・点心・麺類・飯類など豊富な本格中華をご用意しています。",
};

const categories = [
  { id: "zensai", label: "前菜", image: "/menu/high-resolution/zensai_new.png", width: 1171, height: 1343 },
  { id: "agemono", label: "揚げ物", image: "/menu/high-resolution/agemono_new.png", width: 1285, height: 1224 },
  { id: "niku", label: "肉料理", image: "/menu/high-resolution/niku_new.png", width: 1133, height: 1388 },
  { id: "yasai", label: "野菜料理", image: "/menu/high-resolution/yasai_new.png", width: 1366, height: 1152 },
  { id: "kaisen", label: "海鮮料理", image: "/menu/high-resolution/kaisen_new.png", width: 1790, height: 878 },
  { id: "teppan", label: "鉄板", image: "/menu/high-resolution/teppan_new.png", width: 1656, height: 950 },
  { id: "tenshin", label: "点心", image: "/menu/high-resolution/tenshin_new.png", width: 1462, height: 1076 },
  { id: "menrui", label: "麺類", image: "/menu/high-resolution/menrui_new.png", width: 1193, height: 1318 },
  { id: "okayu", label: "お粥・スープ", image: "/menu/high-resolution/okayu_new.png", width: 2170, height: 725 },
  { id: "hanrui", label: "飯類", image: "/menu/high-resolution/hanrui_new.png", width: 1296, height: 1213 },
  { id: "alcohol", label: "アルコール", image: "/menu/high-resolution/alcohol_new.png", width: 1487, height: 1058 },
  { id: "drink", label: "ドリンク", image: "/menu/drink.jpeg", width: 485, height: 369 },
];

export default function Menu() {
  return (
    <MenuPageShell current="tanpin" title="単　品" lead="前菜から麺・飯類まで、本格中華を一品からどうぞ">
      <CategoryNav categories={categories} />

      <div className="menu-grid menu-grid--3">
        {categories.map(({ id, label, image, width, height }) => (
          <MenuSection key={id} id={id} label={label}>
            <ZoomableImage
              src={image}
              alt={`${label}のメニュー表`}
              width={width}
              height={height}
              sizes="(max-width: 800px) 95vw, 380px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </MenuSection>
        ))}
      </div>
    </MenuPageShell>
  );
}
