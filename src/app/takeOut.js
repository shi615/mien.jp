import Link from "next/link";
import Image from "next/image";
import PosterGallery from "@/app/posterGallery";

export default function TakeOut() {
  const takeOutPosters = [
    { src: "/poster/bento.jpeg", alt: "人気No.1 美味しいお弁当 税込800円のポスター", width: 724, height: 1086 },
    { src: "/poster/starter.jpeg", alt: "期間限定・ご予約受付中 中華オードブル Aセット5,280円 / Bセット4,880円のポスター", width: 1054, height: 1492 },
  ];

  return (
    <div style={{ padding: "24px 20px 28px", textAlign: "center" }}>
      <h2 className="section-title">テイクアウト</h2>

      <PosterGallery posters={takeOutPosters} gridClassName="poster-grid-2" />

      <p style={{ fontSize: "15px", margin: "14px 0 0" }}>
        ご注文・ご予約は{" "}
        <Link
          href="tel:0566-77-4665"
          style={{ color: "var(--primary)", fontWeight: "bold", textDecoration: "none", borderBottom: "2px solid var(--gold)" }}
        >
          ☎ 0566-77-4665
        </Link>
      </p>

      {/* ── デリバリー ── */}
      <div className="info-card" style={{ maxWidth: "480px", margin: "24px auto 0" }}>
        <p style={{ fontSize: "17px", color: "#5a3010", marginBottom: "16px" }}>
          出前館・UberEats でもご注文いただけます！
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "24px" }}>
          <Link
            href="https://demae-can.com/shop/menu/3336238"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", transition: "transform 0.2s ease" }}
          >
            <Image
              src="/demaekan.jpeg"
              alt="出前館"
              width={110}
              height={110}
              style={{
                width: "110px",
                height: "auto",
                border: "3px solid #EA332F",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(234,51,47,0.25)",
              }}
            />
            <p style={{ marginTop: "8px", fontSize: "14px", color: "#EA332F", fontWeight: "bold" }}>出前館</p>
          </Link>
          <Link
            href="https://www.ubereats.com/store/%E4%B8%AD%E8%8F%AF%E7%BE%8E%E9%A3%9F-%E5%91%B3%E7%B8%81/iNikYx95TAaRbAd8j2EJSg?diningMode=DELIVERY"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", transition: "transform 0.2s ease" }}
          >
            <Image
              src="/ubereats.jpeg"
              alt="UberEats"
              width={110}
              height={110}
              style={{
                width: "110px",
                height: "auto",
                border: "3px solid #06C167",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(6,193,103,0.25)",
              }}
            />
            <p style={{ marginTop: "8px", fontSize: "14px", color: "#333", fontWeight: "bold" }}>UberEats</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
