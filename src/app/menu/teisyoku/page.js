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
          background: "#e6d3a3",
          paddingTop: "10px",
        }}
      >
        定食
      </h2>
      <Footer />
    </div>
  );
}
