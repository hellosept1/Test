import Image from 'next/image'

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', alignItems: 'center', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Image src="/logo.png" alt="Whoso Live" width={120} height={40} />
      <nav>
        <a href="#features" style={{ margin: '0 1rem' }}>Features</a>
        <a href="#about" style={{ margin: '0 1rem' }}>About</a>
        <a href="#contact" style={{ margin: '0 1rem' }}>Contact</a>
      </nav>
    </header>
  )
}
