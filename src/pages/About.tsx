import banner from '../image/buil-4.jpg'
import Reveal from '../components/Reveal'
import { FaBullseye, FaEye, FaHandshake, FaBolt, FaGlobeAmericas, FaPuzzlePiece } from 'react-icons/fa'
import BannerFull from '../components/BannerFull'
import CTA from '../components/CTA'
// import p1 from '../image/People-1.jpg'
import p2 from '../image/buil-2.jpg'
import p3 from '../image/buil-3.jpg'

// const team = [
//   { name: 'Alex Carter', role: 'Managing Partner', img: p1 },
//   { name: 'Jordan Lee', role: 'Head of Funding', img: p2 },
//   { name: 'Casey Morgan', role: 'Lead Consultant', img: p3 },
//   { name: 'Taylor Brooks', role: 'A&E Director', img: p2 },
// ]

const highlights = [
  { title: 'Fast Approvals', desc: 'Move quickly on time-sensitive opportunities.', icon: <FaBolt className="text-[#c3ced3]" /> },
  { title: 'Flexible Terms', desc: 'Loans structured around your deal.', icon: <FaPuzzlePiece className="text-[#c3ced3]" /> },
  { title: 'Expert Support', desc: 'A&E, compliance, and planning help.', icon: <FaHandshake className="text-[#c3ced3]" /> },
  { title: 'Nationwide Reach', desc: 'Access deals and partners across markets.', icon: <FaGlobeAmericas className="text-[#c3ced3]" /> },
]

function About() {
  return (
    <div className="pt-20">
      <BannerFull title="About Us" subtitle="Smart, scalable, and sustainable solutions for real estate." image={banner} ctaLabel="Contact Us" ctaHref="/contact" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <img src={p2} alt="Mission" className="w-full h-72 object-cover rounded-xl border border-white/10" />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2"><FaBullseye className="text-[#c3ced3]" /> Our Mission</h2>
              <p className="mt-4 text-white/80">To bridge the gap between opportunity and execution with smart, scalable, and sustainable funding and consulting solutions.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center md:[&>*:first-child]:order-2">
          <Reveal>
            <img src={p3} alt="Vision" className="w-full h-72 object-cover rounded-xl border border-white/10" />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2"><FaEye className="text-[#c3ced3]" /> Our Vision</h2>
              <p className="mt-4 text-white/80">To be the go-to partner for developers, contractors, and investors, recognized for reliability, technical expertise, and project success.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <img src={p2} alt="Values" className="w-full h-72 object-cover rounded-xl border border-white/10" />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2"><FaHandshake className="text-[#c3ced3]" /> Core Values</h2>
              <ul className="mt-4 space-y-2 text-white/80 list-disc pl-5">
                <li>Integrity: Transparent, ethical practices in every deal.</li>
                <li>Innovation: Smart solutions for today’s real estate challenges.</li>
                <li>Partnership: Working side by side for long-term success.</li>
                <li>Results: Focused on ROI, portfolio growth, and completion.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 100}>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 h-full transition hover:translate-y-[-2px] hover:border-white/20">
                <div className="text-3xl">{h.icon}</div>
                <h4 className="mt-3 text-lg font-semibold">{h.title}</h4>
                <p className="text-white/80 mt-1">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </section>
      </div>

      {/* <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
              <div className="rounded-lg overflow-hidden bg-white/5 border border-white/10 group">
                <div className="h-56 overflow-hidden">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="text-white/75">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section> */}
      <CTA />
    </div>
  )
}

export default About



