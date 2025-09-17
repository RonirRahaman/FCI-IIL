import Reveal from './Reveal'
import p1 from '../image/People-1.jpg'
import p2 from '../image/buil-2.jpg'
import p3 from '../image/buil-3.jpg'

const testimonials = [
  { quote: "FCI made the funding part easy. We moved fast and didn't miss our window. 🙌", name: 'R. Evans', role: 'Developer', img: p1 },
  { quote: 'Friendly team, clear options, and no fluff. Exactly what we needed to scale. 👍', name: 'M. Patel', role: 'Investor', img: p2 },
  { quote: 'Their consulting shaved weeks off our timeline. Total lifesaver. 🚀', name: 'J. Kim', role: 'General Contractor', img: p3 },
]

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
        <p className="mt-3 text-white/80">We focus on results and relationships.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 h-full transition hover:translate-y-[-2px] hover:border-white/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-white/70 text-sm">{t.role}</div>
                </div>
              </div>
              <div className="mt-3 text-[#c3ced3]">★★★★★</div>
              <p className="mt-2 text-white/85 leading-relaxed">“{t.quote}”</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Testimonials


