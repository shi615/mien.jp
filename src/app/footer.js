export default function Footer() {
return (
    <footer style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
        <div style={{ textAlign: "left" }}>
            <h2 style={{ fontSize: 25, fontWeight: "bold" }}>中華美食 味縁</h2>
            <a href="https://maps.app.goo.gl/4tSLj812MDLeYESU7">
                〒446-0018 愛知県安城市東新町8-8（地図はこちら）
            </a>
            <br />
            <a href="tel:0566-77-4665">☎︎ 0566-77-4665（受付時間毎日11時〜23時30分）</a>
        </div>
        {/* <div style={{ textAlign: "center", margin: 0 }}>
            <h3 style={{ fontSize: 20, fontWeight: "bold" }}>年中無休</h3>
            <table style={{ textAlign: "right"}}>
                <tbody>
                    <tr>
                        <td>月</td>
                        <td>火</td>
                        <td>水</td>
                        <td>木</td>
                        <td>金</td>
                        <td>土</td>
                        <td>日</td>
                    </tr>
                    <tr>
                        <td>⚪︎</td>
                        <td>⚪︎</td>
                        <td>⚪︎</td>
                        <td>⚪︎</td>
                        <td>⚪︎</td>
                        <td>⚪︎</td>
                        <td>⚪︎</td>
                    </tr>
                </tbody>
            </table>
        </div> */}
    </footer>
);
}
