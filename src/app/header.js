'use client';

import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuStyle = {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      borderBottom: "1px solid white",
    }
    return (
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", position: "relative" }}>
            <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "black" }}>
                <img src="/menu/logo.jpeg" style={{ height: "60px", padding: "5px 10px" }} />
                <h1 style={{ fontSize: 25, fontWeight: "bold", margin: 0, color: "white" }}>中華美食 味縁</h1>
            </a>
            <button
                id="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                    border: "none",
                    fontSize: 24,
                    cursor: "pointer",
                    padding: "10px",
                }}
                aria-label="メニュー"
            >
                &#9776; {/* ハンバーガーメニューアイコン */}
            </button>
            {menuOpen && (
                <nav style={{
                    position: "absolute",
                    top: "60px",
                    right: "10px",
                    backgroundColor: "#6f1a07",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    zIndex: 1001
                }}>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                        <li>
                            <a href="/menu/tanpin" style={menuStyle}>単品</a>
                        </li>
                        <li>
                            <a href="/menu/teisyoku" style={menuStyle}>ランチ・定食・セット</a>
                        </li>
                        <li>
                            <a href="/menu/otsukare" style={menuStyle}>お疲れ様酒セット</a>
                        </li>
                        <li>
                            <a href="/menu/tabehodai" style={menuStyle}>食べ放題・飲み放題</a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}