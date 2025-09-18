import BannerFull from '../components/BannerFull'
import Reveal from '../components/Reveal'
import BookingForm from '../components/BookingForm'
import heroVideo from '../image/Global Trade & Strategic Consulting.mp4'

// Import video files
import governmentContractingVideo from '../image/Global Trade & Strategic Consulting/Government Contracting Consulting.mp4'
import oilGasContractsVideo from '../image/Global Trade & Strategic Consulting/Oil and Gas Contracts.mp4'
import goldMiningVideo from '../image/Global Trade & Strategic Consulting/Gold Mining.mp4'
import importExportVideo from '../image/Global Trade & Strategic Consulting/Import and Export.mp4'

function ServiceSection({ 
  title, 
  description, 
  video, 
  reverse = false, 
  delay = 0 
}: { 
  title: string
  description: string
  video: string
  reverse?: boolean
  delay?: number 
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <Reveal delay={delay}>
        <div className="space-y-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-white">{title}</h3>
          <p className="text-white/80 leading-relaxed">{description}</p>
        </div>
      </Reveal>
      <Reveal delay={delay + 100}>
        <div className="relative group">
          <video 
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Reveal>
    </div>
  )
}

function GlobalTrade() {
  const services = [
    {
      title: "Government Contracting Consulting",
      description: "FCI LLC provides government contracting consulting services that help businesses win and manage public-sector contracts. We guide clients through bidding, compliance, and project execution. Our expertise ensures businesses remain competitive in federal, state, and local government opportunities. With us, clients secure more contracts and deliver with confidence.",
      video: governmentContractingVideo
    },
    {
      title: "Global Commodities Transactions (Oil & Gas Contracts)",
      description: "We facilitate global commodities transactions in the oil and gas sector, connecting buyers and sellers worldwide. Our services include contract structuring, compliance, and logistics. With strict adherence to international trade laws, we ensure safe and profitable deals. Clients rely on us for access to energy markets.",
      video: oilGasContractsVideo,
      reverse: true
    },
    {
      title: "Gold Mining / Refining",
      description: "Our gold mining and refining consulting services cover exploration, extraction, and processing. We help investors and companies streamline operations while meeting regulatory and environmental standards. By leveraging global market insights, we support profitable gold ventures. This positions clients to benefit from the enduring value of precious metals.",
      video: goldMiningVideo
    },
    {
      title: "Imports / Exports",
      description: "We offer import and export consulting services that simplify global trade. From customs compliance to international logistics, we manage the full process. Our expertise reduces delays and ensures efficient product distribution. This helps businesses expand globally with ease and confidence.",
      video: importExportVideo,
      reverse: true
    }
  ]

  return (
    <div className="pt-20">
      <BannerFull 
        title="Global Trade & Strategic Consulting" 
        subtitle="International trade solutions and strategic consulting for global market expansion." 
        video={heroVideo} 
        ctaLabel="Book a Consultation" 
        ctaHref="#booking" 
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <header className="text-center">
          <Reveal delay={0}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Global Trade & Strategic Consulting</h1>
            <p className="text-white/80 max-w-4xl mx-auto text-lg leading-relaxed">
              Navigate global markets with confidence through our comprehensive trade consulting services, 
              government contracting support, and strategic guidance for international business expansion.
            </p>
          </Reveal>
        </header>

        <div className="space-y-20">
          {services.map((service, index) => (
            <ServiceSection
              key={service.title}
              title={service.title}
              description={service.description}
              video={service.video}
              reverse={service.reverse}
              delay={index * 100}
            />
          ))}
        </div>

        <section id="booking" className="rounded-xl bg-white/5 border border-white/10 p-8 lg:p-12">
          <Reveal delay={0}>
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Go Global?</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Let's discuss how our global trade and strategic consulting services can help you expand 
                internationally and access new markets. We'll reach out within 24 hours to schedule your consultation.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <BookingForm />
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  )
}

export default GlobalTrade
