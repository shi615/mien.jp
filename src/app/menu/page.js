import React from "react";
import Header from "../header";
import Footer from "../footer";

export default function Menu() {
return (
    <div>
        <Header />
        <div
            id="menu-header"
            style={{
                padding: "5px",
                position: "sticky",
                top: 0,
                background: "#e6d3a3",
                zIndex: 1000,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                color: "#5e503f"
            }}
        >
            <h2 style={{ textAlign: "center", fontSize: "30px", margin: "10px", fontWeight: "bold" }}>
                メニュー
            </h2>
            <ul
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "16px",
                    padding: 0,
                    listStyle: "none",
                }}
            >
                <li>
                    <a href="#zensai">
                        <h3 style={{ borderBottom: "1px solid" }}>前菜</h3>
                    </a>
                </li>
                <li>
                    <a href="#agemono">
                        <h3 style={{ borderBottom: "1px solid" }}>揚げ物</h3>
                    </a>
                </li>
                <li>
                    <a href="#niku">
                        <h3 style={{ borderBottom: "1px solid" }}>肉料理</h3>
                    </a>
                </li>
                <li>
                    <a href="#yasai">
                        <h3 style={{ borderBottom: "1px solid" }}>野菜料理</h3>
                    </a>
                </li>
                <li>
                    <a href="#kaisen">
                        <h3 style={{ borderBottom: "1px solid" }}>海鮮料理</h3>
                    </a>
                </li>
                <li>
                    <a href="#teppan">
                        <h3 style={{ borderBottom: "1px solid" }}>鉄板</h3>
                    </a>
                </li>
                <li>
                    <a href="#tenshin">
                        <h3 style={{ borderBottom: "1px solid" }}>点心</h3>
                    </a>
                </li>
                <li>
                    <a href="#okayu">
                        <h3 style={{ borderBottom: "1px solid" }}>
                            お粥・スープ
                        </h3>
                    </a>
                </li>
                <li>
                    <a href="#menrui">
                        <h3 style={{ borderBottom: "1px solid" }}>麺類</h3>
                    </a>
                </li>
                <li>
                    <a href="#hanrui">
                        <h3 style={{ borderBottom: "1px solid" }}>飯類</h3>
                    </a>
                </li>
                <li>
                    <a href="#alcohol">
                        <h3 style={{ borderBottom: "1px solid" }}>アルコール</h3>
                    </a>
                </li>
                <li>
                    <a href="#drink">
                        <h3 style={{ borderBottom: "1px solid" }}>ドリンク</h3>
                    </a>
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#EA332F" }}
                >
                    前菜
                </h2>
                <img src="./menu/zensai.jpeg" alt="前菜" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#DE742D" }}
                >
                    揚げ物
                </h2>
                <img src="./menu/agemono.jpeg" alt="揚げ物" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#D15F27" }}
                >
                    肉料理
                </h2>
                <img src="./menu/niku.jpeg" alt="肉料理" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#4E8326" }}
                >
                    野菜料理
                </h2>
                <img src="./menu/yasai.jpeg" alt="野菜料理" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#53B7E3" }}
                >
                    海鮮料理
                </h2>
                <img src="./menu/kaisen.jpeg" alt="海鮮料理" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#E33231" }}
                >
                    鉄板
                </h2>
                <img src="./menu/teppan.jpeg" alt="鉄板" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#E1AA3A" }}
                >
                    点心
                </h2>
                <img src="./menu/tenshin.jpeg" alt="点心" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#DCAA3B" }}
                >
                    お粥・スープ
                </h2>
                <img src="./menu/okayu.jpeg" alt="お粥・スープ" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#D65F28" }}
                >
                    麺類
                </h2>
                <img src="./menu/menrui.jpeg" alt="麺類" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#CF2D24" }}
                >
                    飯類
                </h2>
                <img src="./menu/hanrui.jpeg" alt="飯類" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#F2A93B" }}
                >
                    アルコール
                </h2>
                <img src="./menu/alcohol.jpeg" alt="アルコール" />
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
                    style={{ textAlign: "center", fontSize: "30px", color: "#F0AC3F" }}
                >
                    ドリンク
                </h2>
                <img src="./menu/drink.jpeg" alt="ドリンク" />
            </div>
        </div>
        <Footer />
    </div>
);
}
