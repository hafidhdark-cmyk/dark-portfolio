async function getHealth() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error(`API error: ${res.status}`)
    const data = await res.json()
    return data
  } catch (error) {
    return null
  }
}

export default async function HealthCheck() {
  const user = await getHealth()

  if (!user) {
    return (
      <main style={{ padding: '40px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', marginBottom: '24px' }}>
          Health Check ✓
        </h1>
        <p style={{ color: 'var(--muted)' }}>API fetch failed — but the page rendered successfully.</p>
      </main>
    )
  }

  return (
    <main style={{ padding: '40px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', marginBottom: '24px' }}>
        Health Check ✓
      </h1>
      <p style={{ color: 'var(--muted)', marginBottom: '8px' }}>
        Data fetched from JSONPlaceholder API
      </p>
      <div style={{ color: 'var(--text)', lineHeight: '2' }}>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Company: {user.company.name}</p>
        <p>City: {user.address.city}</p>
      </div>
    </main>
  )
}