export default function PaymentWay() {
  const groups = [
    {
      label: "電子マネー・スマホ決済",
      items: ["PayPay", "d払い", "iD", "QUICPay", "交通系電子マネー"],
    },
    {
      label: "クレジットカード",
      items: ["VISA", "マスターカード", "JCB", "AMERICAN EXPRESS", "Diners Club", "銀聯（UnionPay）"],
    },
  ];

  return (
    <div style={{ padding: "24px 20px 28px", textAlign: "center" }}>
      <h2 className="section-title">お支払い方法</h2>
      <p style={{ fontSize: "15px", color: "var(--text-soft)", margin: "4px 0 0" }}>
        様々なお支払い方法に対応しております
      </p>

      <div style={{ maxWidth: "560px", margin: "24px auto 0", display: "flex", flexDirection: "column", gap: "26px" }}>
        {groups.map(({ label, items }) => (
          <div key={label}>
            <span className="ribbon-label" style={{ position: "relative", zIndex: 1, marginBottom: "-14px", display: "inline-block" }}>
              {label}
            </span>
            <div className="info-card" style={{ paddingTop: "28px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px" }}>
                {items.map((item) => (
                  <span key={item} className="payment-badge">{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: "14px", color: "var(--text-soft)", margin: "18px 0 0" }}>
        現金はもちろんご利用いただけます。キャッシュレスでスムーズにお会計！
      </p>
    </div>
  );
}
