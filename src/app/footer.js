import Link from "next/link";

export default function Footer() {
return (
    <footer style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
        <div style={{ textAlign: "left" }}>
            <h2 style={{ fontSize: 25, fontWeight: "bold" }}>中華美食 味縁</h2>
            <Link href="https://maps.app.goo.gl/4tSLj812MDLeYESU7" target="_blank" rel="noopener noreferrer">
                〒446-0018 愛知県安城市東新町8-8（地図はこちら）
            </Link>
            <br />
            <Link href="tel:0566-77-4665">
                ☎︎ 0566-77-4665（受付時間毎日11時〜23時30分）
            </Link>
        </div>
    </footer>
);
}
