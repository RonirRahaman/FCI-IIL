import aboutVideo from '../image/Who We ARE.mp4'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
        <p className="mt-4 text-white/80">
          FCI LLC provides specialized funding and consulting solutions for developers, contractors, and investors. We deliver high-impact services that accelerate timelines and increase profitability.
        </p>
        <Link to="/about" className="mt-6 inline-block btn-primary bg-butn">More About Us</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <video 
          className="w-full h-80 object-cover rounded-lg shadow-lg" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </motion.div>
    </section>
  )
}

export default AboutPreview


