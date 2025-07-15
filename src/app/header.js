export default function Header() {
return (
    <a href="/" style={{ textDecoration: "none", color: "black" }}>
        <header style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <img src="./menu/logo.jpeg" style={{ height: "90%", padding: "5px 10px" }}/>
            <h1 style={{ fontSize: 25, fontWeight: "bold", margin: 0 }}>中華美食 味縁</h1>
        </header>
    </a>
);
}