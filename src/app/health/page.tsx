async function getHealth() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/name/nigeria', {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error(`API error: ${res.status}`)
    const data = await res.json()
    return data[0]
  } catch (error) {
    return null
  }
}

export default async function HealthCheck() {
  const country = await getHealth()

  if (!country) {
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
      <p style={{ color: 'var(--muted)', marginBottom: '8px' }}>Data fetched from REST Countries API</p>
      <div style={{ color: 'var(--text)', lineHeight: '2' }}>
        <p>Country: {country.name.common}</p>
        <p>Capital: {country.capital[0]}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Flag: {country.flag}</p>
      </div>
    </main>
  )
}