export default function PaymentWay() {
  const payments = [
    { label: "現金", group: "cash" },
    { label: "VISA", group: "card" },
    { label: "マスターカード", group: "card" },
    { label: "JCB", group: "card" },
    { label: "银联", group: "card" },
    { label: "AMERICAN EXPRESS", group: "card" },
    { label: "Diners Club", group: "card" },
    { label: "PayPay", group: "qr" },
    { label: "d払い", group: "qr" },
    { label: "iD", group: "qr" },
    { label: "QUICPay", group: "qr" },
    { label: "交通系電子マネー", group: "ic" },
  ];

  return (
    <div style={{ padding: "24px 20px 28px" }}>
      <h2 className="section-title">◆ お支払い方法 ◆</h2>

      <div className="info-card" style={{ maxWidth: "560px", margin: "20px auto 0", textAlign: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px" }}>
          {payments.map(({ label }) => (
            <span key={label} className="payment-badge">{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
