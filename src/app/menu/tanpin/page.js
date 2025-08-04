import React from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div>
      <Header />
      <h2
        id="tanpin"
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
        単品
      </h2>
      <div
        id="menu-header"
        style={{
          background: "#e6d3a3",
          color: "#5e503f",
          padding: "5px",
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
            <Link href="#zensai">
              <h3 style={{ borderBottom: "1px solid" }}>前菜</h3>
            </Link>
          </li>
          <li>
            <Link href="#agemono">
              <h3 style={{ borderBottom: "1px solid" }}>揚げ物</h3>
            </Link>
          </li>
          <li>
            <Link href="#niku">
              <h3 style={{ borderBottom: "1px solid" }}>肉料理</h3>
            </Link>
          </li>
          <li>
            <Link href="#yasai">
              <h3 style={{ borderBottom: "1px solid" }}>野菜料理</h3>
            </Link>
          </li>
          <li>
            <Link href="#kaisen">
              <h3 style={{ borderBottom: "1px solid" }}>海鮮料理</h3>
            </Link>
          </li>
          <li>
            <Link href="#teppan">
              <h3 style={{ borderBottom: "1px solid" }}>鉄板</h3>
            </Link>
          </li>
          <li>
            <Link href="#tenshin">
              <h3 style={{ borderBottom: "1px solid" }}>点心</h3>
            </Link>
          </li>
          <li>
            <Link href="#okayu">
              <h3 style={{ borderBottom: "1px solid" }}>お粥・スープ</h3>
            </Link>
          </li>
          <li>
            <Link href="#menrui">
              <h3 style={{ borderBottom: "1px solid" }}>麺類</h3>
            </Link>
          </li>
          <li>
            <Link href="#hanrui">
              <h3 style={{ borderBottom: "1px solid" }}>飯類</h3>
            </Link>
          </li>
          <li>
            <Link href="#alcohol">
              <h3 style={{ borderBottom: "1px solid" }}>アルコール</h3>
            </Link>
          </li>
          <li>
            <Link href="#drink">
              <h3 style={{ borderBottom: "1px solid" }}>ドリンク</h3>
            </Link>
          </li>
        </ul>
      </div>
      <div id="menu" style={{ textAlign: "center", margin: "32px 0" }}>
        {/* 前菜 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #EA332F",
          }}
        >
          <h2
            id="zensai"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#EA332F",
            }}
          >
            前菜
          </h2>
          <Image src="/menu/zensai.jpeg" alt="前菜" width={400} height={300} />
        </div>
        {/* 揚げ物 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #DE742D",
          }}
        >
          <h2
            id="agemono"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#DE742D",
            }}
          >
            揚げ物
          </h2>
          <Image src="/menu/agemono.jpeg" alt="揚げ物" width={400} height={300} />
        </div>
        {/* 肉料理 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #D15F27",
          }}
        >
          <h2
            id="niku"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#D15F27",
            }}
          >
            肉料理
          </h2>
          <Image src="/menu/niku.jpeg" alt="肉料理" width={400} height={300} />
        </div>
        {/* 野菜料理 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #4E8326",
          }}
        >
          <h2
            id="yasai"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#4E8326",
            }}
          >
            野菜料理
          </h2>
          <Image src="/menu/yasai.jpeg" alt="野菜料理" width={400} height={300} />
        </div>
        {/* 海鮮料理 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #53B7E3",
          }}
        >
          <h2
            id="kaisen"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#53B7E3",
            }}
          >
            海鮮料理
          </h2>
          <Image src="/menu/kaisen.jpeg" alt="海鮮料理" width={400} height={300} />
        </div>
        {/* 鉄板 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #E33231",
          }}
        >
          <h2
            id="teppan"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#E33231",
            }}
          >
            鉄板
          </h2>
          <Image src="/menu/teppan.jpeg" alt="鉄板" width={400} height={300} />
        </div>
        {/* 点心 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #E1AA3A",
          }}
        >
          <h2
            id="tenshin"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#E1AA3A",
            }}
          >
            点心
          </h2>
          <Image src="/menu/tenshin.jpeg" alt="点心" width={400} height={300} />
        </div>
        {/* お粥・スープ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #DCAA3B",
          }}
        >
          <h2
            id="okayu"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#DCAA3B",
            }}
          >
            お粥・スープ
          </h2>
          <Image src="/menu/okayu.jpeg" alt="お粥・スープ" width={400} height={300} />
        </div>
        {/* 麺類 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #D65F28",
          }}
        >
          <h2
            id="menrui"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#D65F28",
            }}
          >
            麺類
          </h2>
          <Image src="/menu/menrui.jpeg" alt="麺類" width={400} height={300} />
        </div>
        {/* 飯類 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #CF2D24",
          }}
        >
          <h2
            id="hanrui"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#CF2D24",
            }}
          >
            飯類
          </h2>
          <Image src="/menu/hanrui.jpeg" alt="飯類" width={400} height={300} />
        </div>
        {/* アルコール */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #F2A93B",
          }}
        >
          <h2
            id="alcohol"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#F2A93B",
            }}
          >
            アルコール
          </h2>
          <Image src="/menu/alcohol.jpeg" alt="アルコール" width={400} height={300} />
        </div>
        {/* ドリンク */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "2px solid #F0AC3F",
          }}
        >
          <h2
            id="drink"
            style={{
              scrollMarginTop: "170px",
              textAlign: "center",
              fontSize: "30px",
              color: "#F0AC3F",
            }}
          >
            ドリンク
          </h2>
          <Image src="/menu/drink.jpeg" alt="ドリンク" width={400} height={300} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
