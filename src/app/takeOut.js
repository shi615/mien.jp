import Link from "next/link";
import Image from "next/image";

export default function TakeOut() {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold"}}>テイクアウト</h2>
            <p>出前館とUberEatsがご利用可能！</p>
            <p>↓アイコンをタップ↓</p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Link href="https://demae-can.com/shop/menu/3336238" target="_blank" style={{ margin: "10px" }}>
                    <Image
                        src="/demaekan.jpeg"
                        alt="出前館"
                        width={100}
                        height={100}
                        style={{ width: "100px", height: "auto", border: "2px solid #EA332F", borderRadius: "24px" }}
                    />
                </Link>
                <Link href="https://www.ubereats.com/store/%E4%B8%AD%E8%8F%AF%E7%BE%8E%E9%A3%9F-%E5%91%B3%E7%B8%81/iNikYx95TAaRbAd8j2EJSg?diningMode=DELIVERY" target="_blank" style={{ margin: "10px" }}>
                    <Image
                        src="/ubereats.jpeg"
                        alt="UberEats"
                        width={100}
                        height={100}
                        style={{ width: "100px", height: "auto", border: "2px solid black", borderRadius: "24px" }}
                    />
                </Link>
            </div>
        </div>
    );
}