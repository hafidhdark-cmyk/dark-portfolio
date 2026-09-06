export default function Home() {
  return (
    <main style={{ padding: '48px', maxWidth: '680px', margin: '0 auto', fontFamily: 'var(--font-body)', color: 'var(--text)' }}>

      {/* WHO I AM */}
      <p style={{ fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px' }}>
        Frontend Engineer · Lagos, Nigeria
      </p>

      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '42px', fontWeight: 400, lineHeight: 1.15, marginBottom: '20px', color: 'var(--text)' }}>
        I build launch-ready websites for founders who ship fast.
      </h1>

      <p style={{ fontSize: '16px', color: 'var(--muted)', marginBottom: '40px', lineHeight: 1.7 }}>
        Pixel-perfect. Deployed in under a week. Currently completing the FlyRank AI Internship (Front-end AI Engineering track) and building my portfolio of real, shipped products.
      </p>

      {/* LINKS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
        <a href="https://linkedin.com/in/abdulmuhmeen" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '15px' }}>
          LinkedIn →
        </a>
        <a href="https://github.com/hafidhdark-cmyk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '15px' }}>
          GitHub →
        </a>
        <a href="https://drive.google.com/drive/folders/1m5LISR5hiuBcuzUhOlJvYlCP3LaHwnbr?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '15px' }}>
          CV →
        </a>
        <a href="mailto:hafidhdark@gmail.com" style={{ color: 'var(--accent)', fontSize: '15px' }}>
          Email me →
        </a>
      </div>

      {/* CURRENT WORK */}
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 400, marginBottom: '16px' }}>
        What I'm building
      </h2>
      <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '16px' }}>
        Frontend engineer and Software Engineering student (NIIT Nigeria, Semester 3 of 4). Currently completing the FlyRank AI Internship and building a portfolio of production-grade web products for startups and creators.
      </p>
      <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '40px' }}>
        Recent work: <a href="https://flowstate-zen.netlify.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>FlowState Zen</a> — a neuroscience-backed focus app built in React 18. <a href="https://darktobams.netlify.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Tobams</a> — a pixel-perfect Figma-to-code build shipped in 72 hours.
      </p>

      {/* CAPSTONE PLACEHOLDER */}
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 400, marginBottom: '16px' }}>
        Capstone
      </h2>
      <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75 }}>
        FlyRank AI Internship capstone work in progress. FlyRank completion badge will appear here upon track completion.
      </p>

    </main>
  )
}