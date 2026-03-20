import Link from "next/link";
import Image from "next/image";

export default function TakeOut() {
  return (
    <div style={{ padding: "24px 20px 28px", textAlign: "center" }}>
      <h2 className="section-title">◆ テイクアウト ◆</h2>

      <div className="info-card" style={{ maxWidth: "480px", margin: "20px auto 0" }}>
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
