export default function Work() {
  const projects = [
    {
      name: 'FlowState Zen',
      description: 'A neuroscience-backed focus app combining a Pomodoro timer and Web Audio synthesizer. Built in React 18 with 6 binaural soundscapes, 5 glassmorphic themes, and production CI/CD.',
      image: '/images/flowstate-zen.png',
      live: 'https://flowstate-zen.netlify.app',
      github: 'https://github.com/hafidhdark-cmyk/FlowState-Zen',
      stack: 'React 18 · Web Audio API · Vite · Netlify',
    },
    {
      name: 'Tobams Group',
      description: 'Pixel-perfect Figma-to-code build delivered in 72 hours. Matched brand colours, typography, and layout precisely across mobile and desktop. Submitted via cold email after the form closed.',
      image: '/images/tobams.png',
      live: 'https://darktobams.netlify.app',
      github: 'https://github.com/hafidhdark-cmyk/Tobams',
      stack: 'Next.js 15 · Tailwind CSS v4 · Netlify',
    },
  ]

  return (
    <main style={{ padding: '48px', maxWidth: '860px', margin: '0 auto', fontFamily: 'var(--font-body)', color: 'var(--text)' }}>

      <p style={{ fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px' }}>
        Work
      </p>

      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 400, marginBottom: '48px' }}>
        Things I've shipped.
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {projects.map((project) => (
          <div key={project.name} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>

            {/* Screenshot */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #2A2A2A' }}>
              <img
                src={project.image}
                alt={project.name}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Details */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 400, marginBottom: '12px' }}>
                {project.name}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px', lineHeight: 1.75 }}>
                {project.description}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '24px', fontFamily: 'var(--font-body)', letterSpacing: '0.06em' }}>
                {project.stack}
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--accent)', color: 'white', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ border: '1px solid #2A2A2A', color: 'var(--text)', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', textDecoration: 'none' }}>GitHub</a>
              </div>
            </div>

          </div>
        ))
        }
      </div >

    </main >
  )
}