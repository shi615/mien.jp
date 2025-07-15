export default function Main() {
    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(./outLook.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.7,
                    zIndex: 0,
                }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                
            </div>
        </div>
    )
}