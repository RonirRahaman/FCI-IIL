import Reveal from './Reveal'

const tiers = [
  { name: 'Starter', price: 'Custom', perks: ['Quick consult', 'Funding options review', 'Recommendations'] },
  { name: 'Growth', price: 'Custom', perks: ['Investor funding plan', 'Permit expediting guidance', 'A&E consult'] },
  { name: 'Enterprise', price: 'Custom', perks: ['Full project support', 'Preferred network access', 'Priority response'] },
]

function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Flexible Engagement</h2>
        <p className="mt-3 text-white/80">Choose the level of support your project needs.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-white/80 flex-1">
                {t.perks.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <a href="#booking" className="mt-6 btn-primary bg-butn text-center">Get Started</a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Pricing


