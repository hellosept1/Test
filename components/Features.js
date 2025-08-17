export default function Features() {
  return (
    <section id="features" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Features</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        <div style={{ width: '250px' }}>
          <img src="/feature1.jpg" alt="Feature 1" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>Feature One</h3>
          <p>Brief description of feature one.</p>
        </div>
        <div style={{ width: '250px' }}>
          <img src="/feature1.jpg" alt="Feature 2" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>Feature Two</h3>
          <p>Brief description of feature two.</p>
        </div>
        <div style={{ width: '250px' }}>
          <img src="/feature1.jpg" alt="Feature 3" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>Feature Three</h3>
          <p>Brief description of feature three.</p>
        </div>
      </div>
    </section>
  )
}
