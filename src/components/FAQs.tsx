import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  { q: 'How fast can I get funded?', a: 'Many approvals in days depending on documentation.' },
  { q: 'Do you work nationwide?', a: 'Yes, we support clients across the U.S.' },
  { q: 'What types of loans are available?', a: 'Fix-and-flip, rental portfolios, ground-up, SBA, and more.' },
]

function FAQs() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">FAQs</h2>
        <p className="mt-3 text-white/80">Answers to common questions.</p>
      </motion.div>
      <div className="mt-8 space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={f.q}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-xl bg-white/5 border border-white/10"
          >
            <button onClick={() => setOpenIdx((o) => (o === i ? null : i))} className="w-full text-left px-4 py-3 font-semibold flex items-center justify-between">
              <span>{f.q}</span>
              <span className="text-white/60">{openIdx === i ? '−' : '+'}</span>
            </button>
            <div className={`px-4 overflow-hidden transition-[max-height] duration-300 ${openIdx === i ? 'max-h-40 pb-4' : 'max-h-0'}`}>
              <p className="text-white/80">{f.a}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FAQs


