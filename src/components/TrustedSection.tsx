import { motion } from 'framer-motion'
import trustedVideo from '../image/Trusted Reliable proven section.mp4'

function TrustedSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="order-2 lg:order-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left"> Trusted. Reliable. Proven.</h2>
          <div className="space-y-4 text-black/80 leading-relaxed">
            <h3 className="text-xl font-semibold text-[#bb9135] mb-3">Your Trusted Financial Partner</h3>
            <p>
              When it comes to funding and consulting, trust is everything. FCI has built a reputation for reliability, transparency, and delivering results that matter. Our proven track record includes successful partnerships with developers, contractors, and investors across diverse markets.
            </p>
            <p>
              We combine financial expertise with real-world industry knowledge, ensuring that every project we touch is supported by strong due diligence and risk management practices. With us, you gain more than funding — you gain a trusted ally dedicated to helping you achieve long-term success.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="order-1 lg:order-1"
        >
          <div className="relative group">
            <video 
              className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src={trustedVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedSection
