import Header from "@/app/header";
import Footer from "@/app/footer";

export default function Teisyoku() {
  return (
    <div>
      <Header />
      <h2
        id="teisyoku"
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#5e503f",
          padding: "10px",
          background: "#e6d3a3",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        定食
      </h2>
      <Footer />
    </div>
  );
}
