export default function About() {
  return (
    <div style={{ padding: "20px"}}>
      <h2 style={{ textAlign: "center", fontSize: '24px', fontWeight: 'bold' }}>
        当店のこだわり
      </h2>
      <ul style={{ textAlign: "center"}}>
        <li style={{ margin: "5px 0" }}>
          新米
          <a style={{ borderBottom: "1px solid" }} href="https://kuriya.co.jp/blog/other/20201009-1975.html">
            「あいちのかおり」
          </a>
          を使用！
        </li>
        <li>
          愛知県西尾市養鶏場
          <a style={{ borderBottom: "1px solid" }} href="https://kira-farm.com/">
            「吉良農場」
          </a>
          の卵を使用しています！
        </li>
      </ul>
    </div>
  )
}