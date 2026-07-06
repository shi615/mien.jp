import MenuPageShell, { MenuSection } from "@/app/menu/menuPageShell";
import CategoryNav from "@/app/menu/categoryNav";
import ZoomableImage from "@/app/menu/zoomableImage";

export const metadata = {
  title: "ランチ・定食・セットメニュー",
  description:
    "中華美食 味縁のランチ・定食・セットメニュー。お得なランチから、ボリューム満点の定食・セットまでご用意しています。",
};

const sections = [
  { id: "lunch", label: "ランチ", image: "/menu/lunch.jpeg", width: 692, height: 686 },
  { id: "teisyoku", label: "定食", image: "/menu/teisyoku.jpeg", width: 847, height: 997 },
  { id: "set", label: "セット", image: "/menu/set.jpeg", width: 746, height: 1050 },
];

export default function Teisyoku() {
  return (
    <MenuPageShell
      current="teisyoku"
      title="ランチ・定食・セット"
      lead="お得なランチから、ボリューム満点の定食・セットまで"
    >
      <CategoryNav categories={sections} />

      <div className="menu-grid menu-grid--3">
        {sections.map(({ id, label, image, width, height }) => (
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
