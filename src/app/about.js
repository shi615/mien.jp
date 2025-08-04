import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: "20px"}}>
      <h2 style={{ textAlign: "center", fontSize: '24px', fontWeight: 'bold' }}>
        当店のこだわり
      </h2>
      <ul style={{ textAlign: "center"}}>
        <li style={{ margin: "5px 0" }}>
          新米
          <Link
            href="https://kuriya.co.jp/blog/other/20201009-1975.html"
            style={{ borderBottom: "1px solid" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            「あいちのかおり」
          </Link>
          を使用！
        </li>
        <li>
          愛知県西尾市養鶏場
          <Link
            href="https://kira-farm.com/"
            style={{ borderBottom: "1px solid" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            「吉良農場」
          </Link>
          の卵を使用しています！
        </li>
      </ul>
    </div>
  )
}