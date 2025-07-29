import ImageSlider from "@/app/imageSlider";

export default function Main() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ImageSlider />
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', paddingTop: '20px' }}>
          年中無休で営業中！
        </h2>
        <p style={{fontSize: "20px"}}>11:00~14:00 17:00~23:30</p>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', paddingTop: '20px' }}>
          お持ち帰り電話でご注文ください！
        </h2>
      <p><a style={{fontSize: "20px", borderBottom: "1px solid"}} href="tel:0566-77-4665">0566-77-4665</a>（11:00~23:30）</p>
      </div>
    </div>
  )
}