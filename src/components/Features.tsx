import { motion } from 'framer-motion'
import { FaBuilding, FaHospital, FaHandsHelping, FaDraftingCompass } from 'react-icons/fa'

const items = [
  { 
    title: 'Developers, owners & real-estate investors', 
    desc: 'Move quickly on time-sensitive opportunities.',
    icon: <FaBuilding className="text-[#bb9135] text-4xl mb-4" />
  },
  { 
    title: 'Healthcare providers', 
    desc: 'Loans designed for your deal structure.',
    icon: <FaHospital className="text-[#bb9135] text-4xl mb-4" />
  },
  { 
    title: 'Nonprofits & For-profits', 
    desc: 'Access off-market properties and partners.',
    icon: <FaHandsHelping className="text-[#bb9135] text-4xl mb-4" />
  },
  { 
    title: 'General contractors & A/E firms', 
    desc: 'Architecture, engineering, and compliance guidance.',
    icon: <FaDraftingCompass className="text-[#bb9135] text-4xl mb-4" />
  },
]

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Who we serve</h2>
      </motion.div>
      
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center rounded-2xl bg-black/5 border border-black/10 p-6 h-full hover:border-[#bb9135]/50 transition shadow-sm hover:shadow-[0_8px_30px_rgba(187,145,53,0.2)]"
          >
            <div className="flex justify-center">{f.icon}</div>
            <h3 className="text-lg font-semibold mt-2">{f.title}</h3>
            {/* <p className="text-white/70 mt-2 text-sm">{f.desc}</p> */}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
