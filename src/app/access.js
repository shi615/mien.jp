export default function Access() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            margin: "20px auto",
            maxWidth: "800px",
        }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', paddingBottom: '20px' }}>
                アクセス
            </h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1833.0951722290479!2d137.09581699618144!3d34.957114662628165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600499b2dbb658a5%3A0xe70dd1347ccd6d5b!2z5Lit6I-v576O6aOfIOWRs-e4gQ!5e0!3m2!1sja!2sjp!4v1753185027104!5m2!1sja!2sjp"
                style={{width: "100%", height: "300px"}}
                loading="lazy"
            />
        </div>
    )
}