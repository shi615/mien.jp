import MenuPageShell, { MenuSection } from "@/app/menu/menuPageShell";
import ZoomableImage from "@/app/menu/zoomableImage";

export const metadata = {
  title: "お疲れ様酒セット",
  description:
    "中華美食 味縁のお疲れ様酒セット(1380円)。お好きなドリンク1杯と料理2品が選べるお得な晩酌セットです。",
};

export default function Otsukare() {
  return (
    <MenuPageShell
      current="otsukare"
      title="お疲れ様酒セット"
      lead="お好きなドリンクと料理二品が選べる、お得な晩酌セット"
    >
      <MenuSection label="セット内容" className="menu-section--single">
        <ZoomableImage
          src="/menu/otsukare.jpeg"
          alt="お疲れ様酒セットのメニュー表。1380円でドリンク1杯と料理2品、さらに+400円で麺・飯類から1品選べます"
          width={1688}
          height={1200}
          sizes="(max-width: 800px) 95vw, 860px"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </MenuSection>
    </MenuPageShell>
  );
}
