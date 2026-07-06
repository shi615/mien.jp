import Header from "@/app/header";
import Footer from "@/app/footer";
import Link from "next/link";

const menuTabs = [
  { key: "tanpin", href: "/menu/tanpin", label: <>単品</> },
  { key: "teisyoku", href: "/menu/teisyoku", label: <>ランチ・<wbr />定食・セット</> },
  { key: "otsukare", href: "/menu/otsukare", label: <>お疲れ様<wbr />酒セット</> },
  { key: "tabehodai", href: "/menu/tabehodai", label: <>食べ放題<wbr />飲み放題</> },
];

export function MenuSection({ id, label, note, className, children }) {
  return (
    <section id={id} className={className ? `menu-section ${className}` : "menu-section"}>
      <div className="frame-section">
        <div className="frame-section-inner">
          <h3 className="ribbon-label">{label}</h3>
          {note && <p className="menu-section-note">{note}</p>}
          <div className="menu-section-body">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function MenuPageShell({ current, title, lead, ctaLabel, children }) {
  return (
    <div>
      <Header />

      <div className="menu-hero">
        <h2 className="menu-hero-title brush-text">{title}</h2>
        {lead && <p className="menu-hero-lead">{lead}</p>}
      </div>

      <nav className="menu-tabs" aria-label="メニューの種類">
        {menuTabs.map(({ key, href, label }) => (
          <Link
            key={key}
            href={href}
            className="menu-tab"
            aria-current={key === current ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>

      {children}

      <div style={{ display: "flex", justifyContent: "center", padding: "32px 16px 36px" }}>
        <Link href="tel:0566-77-4665" className="phone-cta" style={{ width: "100%", maxWidth: "440px" }}>
          <span className="phone-cta-label">{ctaLabel ?? "お持ち帰り・ご予約はお電話で！"}</span>
          <span className="phone-cta-number">☎ 0566-77-4665</span>
          <span className="phone-cta-note">受付時間 11:00 〜 23:30（火曜定休）</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
