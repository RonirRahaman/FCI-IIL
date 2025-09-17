import s1 from '../image/Service-1.jpg'
import s2 from '../image/Service-2.jpg'
import s3 from '../image/Service-3.jpg'
import BookingForm from '../components/BookingForm'
import Reveal from '../components/Reveal'
import BannerFull from '../components/BannerFull'
import hero from '../image/Service-2.jpg'
import { FaBolt, FaHandshake, FaGlobeAmericas, FaPuzzlePiece } from 'react-icons/fa'

function Section({ image, title, text, reverse = false, delay = 0 }: { image: string; title: string; text: string; reverse?: boolean; delay?: number }) {
  return (
    <div className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <Reveal delay={delay}>
        <img src={image} alt={title} className="w-full h-72 object-cover rounded-lg shadow" />
      </Reveal>
      <Reveal delay={delay + 120}>
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-3 text-white/80">{text}</p>
          <a href="#booking" className="mt-6 inline-block btn-primary">Book a Consultation</a>
        </div>
      </Reveal>
    </div>
  )
}

const highlights = [
  { title: 'Fast Approvals', desc: 'Move quickly on time-sensitive opportunities.', icon: <FaBolt className="text-[#c3ced3]" /> },
  { title: 'Flexible Terms', desc: 'Loans structured around your deal.', icon: <FaPuzzlePiece className="text-[#c3ced3]" /> },
  { title: 'Expert Support', desc: 'A&E, compliance, and planning help.', icon: <FaHandshake className="text-[#c3ced3]" /> },
  { title: 'Nationwide Reach', desc: 'Access deals and partners across markets.', icon: <FaGlobeAmericas className="text-[#c3ced3]" /> },
]

function Services() {
  return (
    <div className="pt-20">
      <BannerFull title="Services" subtitle="Funding, consulting, and support tailored to your goals." image={hero} ctaLabel="Book a Call" ctaHref="#booking" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <header>
          <h1 className="text-4xl font-extrabold">Services</h1>
          <p className="mt-3 text-white/80 max-w-3xl">Specialized funding and consulting solutions tailored to developers, contractors, and investors. Fast approvals, flexible terms, and expert guidance to keep your projects moving.</p>
        </header>

        <Section image={s1} title="Private Money Loans" text="Fast access to capital without the red tape of traditional banks." delay={0} />
        <Section image={s2} title="Bridge & Gap Financing" text="Short-term funding to cover immediate cash flow needs." reverse delay={100} />
        <Section image={s3} title="SBA & Investment Property Loans" text="Government-backed loans and investment property financing for long-term growth." delay={200} />

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

        <section id="booking" className="rounded-xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-2xl font-bold">Book a Consultation</h2>
          <p className="mt-2 text-white/80">Ready to discuss your project? We’ll reach out within 24 hours.</p>
          <div className="mt-6">
            <BookingForm />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services


