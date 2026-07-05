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
                <h1 className="brush-text" style={{
                    fontSize: 24,
                    margin: 0,
                    color: "#f5d06a",
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                    letterSpacing: "0.1em",
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
                <nav id="header-nav" ref={navRef} className="header-nav">
                    <ul>
                        {[
                            { href: "/menu/tanpin", label: "単品", seal: "#9c1c22" },
                            { href: "/menu/teisyoku", label: "ランチ・定食・セット", seal: "#a06e08" },
                            { href: "/menu/otsukare", label: "お疲れ様酒セット", seal: "#5c3a21" },
                            { href: "/menu/tabehodai", label: "食べ放題・飲み放題", seal: "#b34a12" },
                        ].map(({ href, label, seal }) => (
                            <li key={href}>
                                <Link href={href} className="header-nav-link" onClick={() => setMenuOpen(false)}>
                                    <span className="header-nav-seal" style={{ background: seal }} aria-hidden="true" />
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
