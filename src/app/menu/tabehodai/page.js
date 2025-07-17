import Header from "@/app/header";
import Footer from "@/app/footer";

export default function Tabehodai() {
  return (
    <div>
      <Header />
      <h2
        id="tabehodai"
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#5e503f",
          padding: "10px",
          background: "#e6d3a3",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          marginBottom: "20px",
        }}
      >
        食べ放題・飲み放題
      </h2>
      <Footer />
    </div>
  );
}
