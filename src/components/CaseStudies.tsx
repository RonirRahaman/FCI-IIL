import Reveal from './Reveal'
import c1 from '../image/Service-1.jpg'
import c2 from '../image/Service-2.jpg'
import c3 from '../image/Service-3.jpg'

const cases = [
  { title: 'Multifamily Renovation', desc: 'Bridge loan enabled swift repositioning.', img: c1 },
  { title: 'Ground-Up Townhomes', desc: 'Investor funding structured for phases.', img: c2 },
  { title: 'Portfolio Refi', desc: 'Rental portfolio optimized for cash flow.', img: c3 },
]

function CaseStudies() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
        <p className="mt-3 text-white/80">Real projects, measurable results.</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {cases.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 120}>
            <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
              <img src={cs.img} alt={cs.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{cs.title}</h3>
                <p className="text-white/80 mt-2">{cs.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default CaseStudies


