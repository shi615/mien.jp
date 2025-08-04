import Header from "@/app/header";
import Footer from "@/app/footer";
import Image from "next/image";

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
        }}
      >
        食べ放題・飲み放題
      </h2>
      <div
        id="tabehodai-body"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="/menu/tabehodai_1.jpg"
          alt="食べ放題・飲み放題1"
          width={600}
          height={400}
          style={{ maxWidth: "600px", margin: "20px 0", height: "auto" }}
        />
        <Image
          src="/menu/tabehodai_2.jpg"
          alt="食べ放題・飲み放題2"
          width={600}
          height={400}
          style={{ maxWidth: "600px", margin: "20px 0", height: "auto" }}
        />
        <Image
          src="/menu/tabehodai_3.jpg"
          alt="食べ放題・飲み放題3"
          width={600}
          height={400}
          style={{ maxWidth: "600px", margin: "20px 0", height: "auto" }}
        />
      </div>
      <Footer />
    </div>
  );
}
