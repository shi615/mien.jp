'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        const onPointerDown = (e) => {
            if (
                navRef.current && !navRef.current.contains(e.target) &&
                buttonRef.current && !buttonRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('pointerdown', onPointerDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('pointerdown', onPointerDown);
        };
    }, [menuOpen]);

    const menuLinkStyle = {
        textDecoration: "none",
        color: "white",
        fontSize: "18px",
        display: "block",
        padding: "10px 16px",
        borderRadius: "8px",
        transition: "background 0.15s ease",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        whiteSpace: "nowrap",
    };

    return (
        <header style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            cursor: "pointer",
        }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: "10px" }}>
                <Image
                    src="/menu/logo.jpeg"
                    alt="Logo"
                    height={60}
                    width={60}
                    style={{
                        height: "56px",
                        width: "56px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "2px solid #c9950c",
                        margin: "8px 4px 8px 12px",
                    }}
                />
                <h1 style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    margin: 0,
                    color: "#f5d06a",
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                    letterSpacing: "0.06em",
                }}>
                    中華美食 味縁
                </h1>
            </Link>

            <button
                id="menu-button"
                ref={buttonRef}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="メニュー"
                aria-expanded={menuOpen}
                aria-controls="header-nav"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {menuOpen && (
                <nav id="header-nav" ref={navRef} style={{
                    position: "absolute",
                    top: "72px",
                    right: "10px",
                    background: "linear-gradient(160deg, #9b1a1a, #6b0f0f)",
                    border: "1px solid #c9950c",
                    borderRadius: "12px",
                    padding: "8px",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
                    zIndex: 1001,
                    minWidth: "200px",
                }}>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                        {[
                            { href: "/menu/tanpin", label: "🍜 単品" },
                            { href: "/menu/teisyoku", label: "🍱 ランチ・定食・セット" },
                            { href: "/menu/otsukare", label: "🍺 お疲れ様酒セット" },
                            { href: "/menu/tabehodai", label: "🎉 食べ放題・飲み放題" },
                        ].map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} style={menuLinkStyle} onClick={() => setMenuOpen(false)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
