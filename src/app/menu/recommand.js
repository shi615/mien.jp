import Image from "next/image";

export default function Recommand() {
    return (
        <div style={{ margin: "32px 0", textAlign: "center" }}>
            <h2 style={{ fontSize: 30, fontWeight: "bold" }}>おすすめメニュー</h2>
            <ul id="recommend" style={{
                listStyleType: "none",
                padding: 0,
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {/* 焼き餃子 */}
                <li style={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    margin: "0 8px"
                }}>
                    <Image
                        src="/globe.svg"
                        alt="焼き餃子"
                        width={100}
                        height={100}
                    />
                    <p style={{ marginTop: "8px" }}>焼き餃子</p>
                </li>
                {/* 青菜炒め */}
                <li style={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    margin: "0 8px"
                }}>
                    <Image
                        src="/globe.svg"
                        alt="青菜炒め"
                        width={100}
                        height={100}
                    />
                    <p style={{ marginTop: "8px" }}>青菜炒め</p>
                </li>
                {/* 焼き餃子 */}
                <li style={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    margin: "0 8px"
                }}>
                    <Image
                        src="/globe.svg"
                        alt="餃子"
                        width={100}
                        height={100}
                    />
                    <p style={{ marginTop: "8px" }}>焼き餃子</p>
                </li>
                <li style={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    margin: "0 8px"
                }}>
                    <Image
                        src="/globe.svg"
                        alt="餃子"
                        width={100}
                        height={100}
                    />
                    <p style={{ marginTop: "8px" }}>焼き餃子</p>
                </li>
                <li style={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    margin: "0 8px"
                }}>
                    <Image
                        src="/globe.svg"
                        alt="餃子"
                        width={100}
                        height={100}
                    />
                    <p style={{ marginTop: "8px" }}>焼き餃子</p>
                </li>
            </ul>
            <a href="/menu/tanpin" style={{
                backgroundColor: "#e6d3a3",
                color: "#5e503f",
                fontSize: "20px",
                borderRadius: "50px",
                padding: "10px",
                width: "200px",
                display: "inline-block",
            }}>
                メニューを見る
            </a>
        </div>
    );
}