import Reveal from './Reveal'
import logo from '../image/Logo.png'

const partners = [logo, logo, logo, logo, logo]

function Partners() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Trusted by Partners</h2>
        <p className="mt-3 text-white/80">We collaborate with investors, developers, and contractors.</p>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
        {partners.map((src, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="rounded-lg bg-white/5 border border-white/10 p-4 flex items-center justify-center hover:border-white/20 transition">
              <img src={src} alt="Partner" className="h-10 w-auto opacity-80" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Partners


