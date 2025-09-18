import { motion } from 'framer-motion'
import commitmentVideo from '../image/Our Commitment to Your Success.mp4'

function CommitmentSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left"> Our Commitment to Your Success</h2>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <h3 className="text-xl font-semibold text-[#c3ced3] mb-3">Building Lasting Partnerships</h3>
            <p>
              At FCI LLC, we don't just fund projects — we build lasting partnerships. Our team brings decades of combined experience in real estate, construction, finance, and government contracting, giving you the confidence that every solution is backed by expertise and industry insight. From the first consultation to the final closing, we stand by your side with hands-on guidance, transparent communication, and a results-driven approach.
            </p>
            <p>
              Whether you're tackling your first investment or managing multi-million-dollar developments, we are committed to helping you achieve your vision with integrity, speed, and precision.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="order-1 lg:order-2"
        >
          <div className="relative group">
            <video 
              className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src={commitmentVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommitmentSection
