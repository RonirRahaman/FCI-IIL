import { motion } from 'framer-motion'

const items = [
  { title: 'Tailored Capital', desc: 'Loans designed for your deal structure.' },
  { title: 'Fast Approvals', desc: 'Move quickly on time-sensitive opportunities.' },
  { title: 'Expert Consulting', desc: 'Architecture, engineering, and compliance guidance.' },
  { title: 'Nationwide Network', desc: 'Access off-market properties and partners.' },
]

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose FCI LLC</h2>
        <p className="mt-3 text-white/80">Reliable funding, deep expertise, and a partnership mindset.</p>
      </motion.div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-xl bg-white/5 border border-white/10 p-6 h-full hover:border-white/20 transition shadow-sm hover:shadow-[0_8px_30px_rgba(195,206,211,0.1)]"
          >
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-white/75 mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features


