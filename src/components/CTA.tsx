import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-2xl bg-gradient-to-r from-[#c3ced3]/20 to-white/10 border border-black/10 p-10"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">Let's build success together</h2>
        <p className="mt-3 text-black/80">Book a free consultation and get a tailored, specialized support.</p>
        <div className="mt-6">
          <Link to="/contact" className="btn-primary bg-butn">Contact Us</Link>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA


