export default function TakeOut() {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold"}}>テイクアウト</h2>
            <p>出前館とUberEatsがご利用可能！</p>
            <p>↓アイコンをタップ↓</p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <a href="https://demae-can.com/shop/menu/3336238" target="_blank" style={{ margin: "10px" }}>
                    <img src="./demaekan.jpeg" alt="出前館" style={{ width: "100px", height: "auto", border: "2px solid #EA332F", borderRadius: "24px" }} />
                </a>
                <a href="https://www.ubereats.com/store/%E4%B8%AD%E8%8F%AF%E7%BE%8E%E9%A3%9F-%E5%91%B3%E7%B8%81/iNikYx95TAaRbAd8j2EJSg?diningMode=DELIVERY%20https://www.ubereats.com/jp/store/%E4%B8%AD%E8%8F%AF%E7%BE%8E%E9%A3%9F-%E5%91%B3%E7%B8%81/iNikYx95TAaRbAd8j2EJSg?diningMode=%20https://www.ubereats.com/jp/store/%E4%B8%AD%E8%8F%AF%E7%BE%8E%E9%A3%9F-%E5%91%B3%E7%B8%81/iNikYx95TAaRbAd8j2EJSg?diningMode=DELIVERY%20DELIVERY%20https://www.ubereats.com/jp/store/%E4%B8%AD%E8%8F%AF%E7%BE%8E%E9%A3%9F-%E5%91%B3%E7%B8%81/iNikYx95TAaRbAd8j2EJSg?diningMode=DELIVERY" target="_blank" style={{ margin: "10px" }}>
                    <img src="./ubereats.jpeg" alt="UberEats" style={{ width: "100px", height: "auto", border: "2px solid black", borderRadius: "24px" }} />
                </a>
            </div>
        </div>
    );
}