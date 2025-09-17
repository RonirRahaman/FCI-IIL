import p1 from '../image/People-1.jpg'
import p2 from '../image/buil-2.jpg'
import p3 from '../image/buil-3.jpg'
import Reveal from './Reveal'

const team = [
  { name: 'Alex Carter', role: 'Managing Partner', img: p1 },
  { name: 'Jordan Lee', role: 'Head of Funding', img: p2 },
  { name: 'Casey Morgan', role: 'Lead Consultant', img: p3 },
]

function TeamPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 120}>
            <div className="flex flex-col items-center text-center">
              <div className="h-40 w-40 rounded-full ring-2 ring-white/20 overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{m.name}</h3>
              <p className="text-white/70">{m.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default TeamPreview


