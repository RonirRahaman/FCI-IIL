import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Import video files
import landAcquisitionVideo from '../image/Real Estate & Development Services/Land Acquisition.mp4'
import privateCapitalVideo from '../image/Financial & Capital Advisory Services/Private Capital.mp4'
import governmentContractingVideo from '../image/Global Trade & Strategic Consulting/Government Contracting Consulting.mp4'

const services = [
  {
    title: 'Real Estate & Development Services',
    desc: 'FCI LLC specializes in land acquisition services that help investors and developers secure high-value property for residential, commercial, and industrial projects. We conduct due diligence, market research, and negotiations to ensure properties align with zoning and investment goals.',
    video: landAcquisitionVideo,
    link: '/real-estate-services',
  },
  {
    title: 'Financial & Capital Advisory Services',
    desc: 'FCI LLC connects clients with private capital funding solutions for real estate, infrastructure, and large-scale projects. We source investors and structure deals to maximize returns while minimizing risks. Our financial expertise ensures access to the right funding at the right time.',
    video: privateCapitalVideo,
    link: '/financial-advisory',
  },
  {
    title: 'Global Trade & Strategic Consulting',
    desc: 'FCI LLC provides government contracting consulting services that help businesses win and manage public-sector contracts. We guide clients through bidding, compliance, and project execution. Our expertise ensures businesses remain competitive in federal, state, and local government opportunities.',
    video: governmentContractingVideo,
    link: '/global-trade',
  },
]

function ServicesPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<number | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1
          // Reset to 0 when we reach the end of the original services array
          return nextIndex >= services.length ? 0 : nextIndex
        })
      }, 4000) // Change slide every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      return nextIndex >= services.length ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexValue = prevIndex - 1
      return prevIndexValue < 0 ? services.length - 1 : prevIndexValue
    })
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
        className="flex items-end justify-between gap-4 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
        <Link to="/services" className="hidden sm:inline-block rounded bg-[#bb9135] text-black px-5 py-2.5 font-semibold hover:bg-[#a67d2a] transition-colors">View All</Link>
      </motion.div>

      {/* Desktop Carousel - 2 cards at a time */}
      <div className="hidden lg:block">
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {/* Duplicate services for infinite loop */}
              {[...services, ...services].map((service, index) => (
                <div key={`${service.title}-${index}`} className="w-1/2 flex-shrink-0 px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index % services.length) * 0.1 }}
                    className="group rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(195,206,211,0.15)]"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <video 
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-500" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      >
                        <source src={service.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-white/75 mb-4 text-sm leading-relaxed">{service.desc}</p>
                      <Link 
                        to={service.link}
                        className="inline-block bg-[#c3ced3] text-black px-4 py-2 rounded font-semibold hover:bg-[#a8b5bb] transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-[#c3ced3]' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Carousel - 1 card at a time */}
      <div className="lg:hidden">
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Duplicate services for infinite loop */}
              {[...services, ...services].map((service, index) => (
                <div key={`${service.title}-${index}`} className="w-full flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index % services.length) * 0.1 }}
                    className="group rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-md"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <video 
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-500" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      >
                        <source src={service.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-white/75 mb-3 text-sm leading-relaxed">{service.desc}</p>
                      <Link 
                        to={service.link}
                        className="inline-block bg-[#c3ced3] text-black px-4 py-2 rounded font-semibold hover:bg-[#a8b5bb] transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-[#c3ced3]' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 sm:hidden">
        <Link to="/services" className="inline-block rounded bg-[#bb9135] text-black px-5 py-2.5 font-semibold w-full text-center hover:bg-[#a67d2a] transition-colors">View All Services</Link>
      </div>
    </section>
  )
}

export default ServicesPreview


