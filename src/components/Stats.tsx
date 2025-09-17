import Reveal from './Reveal'

const stats = [
  { label: 'Projects Financed', value: '250+' },
  { label: 'Avg. Approval Time', value: '4 days' },
  { label: 'Nationwide Markets', value: '30+' },
  { label: 'Client Satisfaction', value: '98%' },
]

function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-2xl bg-gradient-to-r from-[#044b82]/20 via-transparent to-[#c3ced3]/20 border border-white/10 p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <div className="text-3xl font-extrabold">{s.value}</div>
                <div className="mt-1 text-white/80">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats


