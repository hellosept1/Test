export default function Features() {
  const features = [
    { title: 'Strategic Challenges', desc: 'Solve puzzles that sharpen your mind.', icon: '/knight.svg' },
    { title: 'Community Matches', desc: 'Play and learn with like-minded players.', icon: '/bishop.svg' },
    { title: 'Learning Resources', desc: 'Explore tips, tricks, and tutorials.', icon: '/feature1.svg' },
    { title: 'Track Progress', desc: 'Visualize your growth and victories.', icon: '/feature1.svg' }
  ];

  return (
    <section id="features" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Features</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {features.map((f, idx) => (
          <div key={idx} style={{ background: '#f0f0f0', padding: '2rem', borderRadius: '10px' }}>
            <img src={f.icon} alt={f.title} style={{ width: '50px', marginBottom: '1rem' }} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
