import Header from "@/app/header";
import Footer from "@/app/footer";
import ZoomableImage from "@/app/menu/zoomableImage";

export const metadata = {
  title: "食べ放題・飲み放題",
  description:
    "中華美食 味縁の食べ放題・飲み放題コース。本格中華を心ゆくまでお楽しみいただけます。宴会・パーティーにもおすすめです。",
};

export default function Tabehodai() {
  return (
    <div>
      <Header />
      <h2
        id="tabehodai"
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
      <div
        id="tabehodai-body"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ZoomableImage
          src="/menu/tabehodai_1.jpg"
          alt="食べ放題コースの案内"
          width={1087}
          height={1600}
          style={{ maxWidth: "600px", margin: "20px 0", height: "auto" }}
        />
        <ZoomableImage
          src="/menu/tabehodai_2.jpg"
          alt="食べ放題メニューの一覧"
          width={847}
          height={1200}
          style={{ maxWidth: "600px", margin: "20px 0", height: "auto" }}
        />
        <ZoomableImage
          src="/menu/tabehodai_3.jpg"
          alt="飲み放題メニューの一覧"
          width={1131}
          height={1600}
          style={{ maxWidth: "600px", margin: "20px 0", height: "auto" }}
        />
      </div>
      <Footer />
    </div>
  );
}
