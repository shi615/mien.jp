import ImageSlider from "@/app/imageSlider";
import Link from "next/link";

export default function Main() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ImageSlider />
      <h2 style={{ textAlign: "center", fontSize: '30px', fontWeight: 'bold', paddingTop: '20px' }}>
        メニュー
      </h2>
      <div
        id="menu-buttons"
        style={{
          display: "flex",
          flexWrap: "wrap", // 追加: 折り返しを許可
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginTop: "10px",
          marginBottom: "24px"
        }}
      >
        {/* 単品 */}
        <a href="/menu/tanpin" style={{
          backgroundColor: "#e6d3a3",
          color: "#5e503f",
          fontSize: "17px",
          borderRadius: "50px",
          padding: "10px",
          width: "160px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}>
          単品
        </a>
        {/* ランチ・定食・セット */}
        <a href="/menu/teisyoku" style={{
          backgroundColor: "#e6d3a3",
          color: "#5e503f",
          fontSize: "17px",
          borderRadius: "50px",
          padding: "10px",
          width: "160px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}>
          ランチ<br />定食<br />セット
        </a>
        {/* お疲れ様酒セット */}
        <a href="/menu/otsukare" style={{
          backgroundColor: "#e6d3a3",
          color: "#5e503f",
          fontSize: "17px",
          borderRadius: "50px",
          padding: "10px",
          width: "160px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}>
          お疲れ様酒セット
        </a>
        {/* 食べ放題・飲み放題 */}
        <a href="/menu/tabehodai" style={{
          backgroundColor: "#e6d3a3",
          color: "#5e503f",
          fontSize: "17px",
          borderRadius: "50px",
          padding: "10px",
          width: "160px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}>
          食べ放題<br />飲み放題
        </a>
      </div>
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', paddingTop: '20px' }}>
          年中無休で営業中！
        </h2>
        <p style={{fontSize: "20px"}}>11:00~14:00 17:00~23:30</p>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', paddingTop: '20px' }}>
          お持ち帰り電話でご注文ください！
        </h2>
        <p>
          <Link
            href="tel:0566-77-4665"
            style={{fontSize: "20px", borderBottom: "1px solid"}}
          >
            0566-77-4665
          </Link>
          （11:00~23:30）
        </p>
      </div>
    </div>
  )
}