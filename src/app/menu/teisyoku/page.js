import Header from "@/app/header";
import Footer from "@/app/footer";

export default function Teisyoku() {
  return (
    <div>
      <Header />
      <div
        id="teisyoku-header"
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#5e503f",
          padding: "10px",
          background: "#e6d3a3",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "13px",
            padding: "10px",
            listStyle: "none",
          }}
        >
          <li>
            <a href="#lunch">
              <h3 style={{ borderBottom: "1px solid" }}>ランチ</h3>
            </a>
          </li>
          <li>
            <a href="#teiysoku">
              <h3 style={{ borderBottom: "1px solid" }}>定食</h3>
            </a>
          </li>
          <li>
            <a href="#set">
              <h3 style={{ borderBottom: "1px solid" }}>セット</h3>
            </a>
          </li>
        </ul>
      </div>
      <div id="teisyoku-body" style={{ textAlign: "center", margin: "32px 0" }}>
        {/* ランチ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #EA332F",
          }}
        >
          <h2
            id="lunch"
            style={{
              scrollMarginTop: "70px",
              textAlign: "center",
              fontSize: "30px",
              color: "#EA332F",
            }}
          >
            ランチ
          </h2>
          <img src="/menu/lunch.jpeg" alt="ランチ" />
        </div>
        {/* 定食 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #DE742D",
          }}
        >
          <h2
            id="teiysoku"
            style={{
              scrollMarginTop: "70px",
              textAlign: "center",
              fontSize: "30px",
              color: "#DE742D",
            }}
          >
            定食
          </h2>
          <img src="/menu/teisyoku.jpeg" alt="定食" />
        </div>
        {/* セット */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #D15F27",
          }}
        >
          <h2
            id="set"
            style={{
              scrollMarginTop: "70px",
              textAlign: "center",
              fontSize: "30px",
              color: "#D15F27",
            }}
          >
            セット
          </h2>
          <img src="/menu/set.jpeg" alt="セット" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
