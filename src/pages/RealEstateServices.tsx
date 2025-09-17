import BannerFull from '../components/BannerFull'
import Reveal from '../components/Reveal'
import BookingForm from '../components/BookingForm'
import hero from '../image/Service-1.jpg'

// Import video files
import landAcquisitionVideo from '../image/Real Estate & Development Services/Land Acquisition.mp4'
import entitlementStrategyVideo from '../image/Real Estate & Development Services/Entitlement Strategy.mp4'
import stakeholderRelationsVideo from '../image/Real Estate & Development Services/Stakeholder Relations.mp4'
import developmentServicesVideo from '../image/Real Estate & Development Services/Development Services.mp4'
import siteAssessmentsVideo from '../image/Real Estate & Development Services/Site Assessments.mp4'
import offMarketPropertyVideo from '../image/Real Estate & Development Services/Off-Market Property Acquisition.mp4'
import permitExpeditingVideo from '../image/Real Estate & Development Services/Permit Expediting Services.mp4'
import facilityConditionVideo from '../image/Real Estate & Development Services/Facility Condition Assessments (FCA).mp4'
import architecturalEngineeringVideo from '../image/Real Estate & Development Services/Architectural & Engineering Services.mp4'
import developerContractorVideo from '../image/Real Estate & Development Services/Developer & Contractor Support.mp4'

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

function RealEstateServices() {
  const services = [
    {
      title: "Land Acquisition",
      description: "FCI LLC specializes in land acquisition services that help investors and developers secure high-value property for residential, commercial, and industrial projects. We conduct due diligence, market research, and negotiations to ensure properties align with zoning and investment goals. Our expert strategies reduce risk and maximize ROI. With our land acquisition support, clients gain access to prime real estate opportunities in competitive markets.",
      video: landAcquisitionVideo
    },
    {
      title: "Entitlement Strategy",
      description: "Our entitlement strategy services simplify the complex process of zoning, permitting, and regulatory approvals. We manage everything from rezoning applications to community engagement, ensuring compliance with local laws. By streamlining approvals, we accelerate project timelines and minimize costly delays. This allows developers to move forward with confidence in high-demand areas.",
      video: entitlementStrategyVideo,
      reverse: true
    },
    {
      title: "Stakeholder Relations",
      description: "Successful real estate development requires strong stakeholder relations. We connect with government officials, community leaders, and private investors to build support for major projects. Our proactive engagement reduces resistance, increases collaboration, and creates community buy-in. This ensures smoother project execution and long-term success.",
      video: stakeholderRelationsVideo
    },
    {
      title: "Power Delivery Projects (Loudoun & Prince William Counties)",
      description: "FCI LLC provides consulting and support for power delivery and energy infrastructure projects in Loudoun and Prince William Counties. We assist with regulatory compliance, project management, and stakeholder engagement. Our expertise ensures efficient power distribution to meet regional growth demands. By bridging energy needs with development, we deliver sustainable infrastructure solutions.",
      video: developmentServicesVideo,
      reverse: true
    },
    {
      title: "Development Services",
      description: "Our real estate development services cover the full lifecycle of projects, from feasibility studies to construction oversight. We manage budgets, timelines, and coordination with contractors, engineers, and architects. This ensures efficiency, cost savings, and quality outcomes. Clients rely on us to bring visions to life while minimizing risks.",
      video: developmentServicesVideo
    },
    {
      title: "Site Assessments",
      description: "We provide comprehensive site assessment services to evaluate environmental, structural, and zoning conditions. Our reports highlight risks and opportunities, guiding informed decision-making. These assessments help investors understand property feasibility before committing capital. With our expertise, clients reduce risk and unlock hidden potential in their properties.",
      video: siteAssessmentsVideo,
      reverse: true
    },
    {
      title: "Off-Market Property Acquisition",
      description: "FCI LLC helps investors access off-market property acquisitions that provide exclusive opportunities. Through our private network, we identify high-value properties before they hit public listings. This competitive advantage allows clients to secure prime assets quickly. Our team negotiates favorable terms to maximize returns.",
      video: offMarketPropertyVideo
    },
    {
      title: "Permit Expediting Services",
      description: "We offer permit expediting services that help developers cut through red tape and accelerate approvals. Our relationships with local agencies allow us to navigate bureaucratic challenges efficiently. By reducing delays, we save time and costs for our clients. This ensures projects start and finish on schedule.",
      video: permitExpeditingVideo,
      reverse: true
    },
    {
      title: "Facility Condition Assessments (FCA)",
      description: "Our facility condition assessment services provide a detailed evaluation of building systems, infrastructure, and maintenance needs. We identify deficiencies and future risks to guide capital planning. These reports are essential for investors and property managers. With our FCA solutions, clients can extend facility life and optimize investments.",
      video: facilityConditionVideo
    },
    {
      title: "Architectural & Engineering Services",
      description: "FCI LLC delivers architectural and engineering design services that balance creativity with compliance and efficiency. From design concepts to technical construction documents, we ensure functionality and cost-effectiveness. Our solutions enhance project aesthetics while maintaining structural integrity. This makes us a trusted partner for innovative developments.",
      video: architecturalEngineeringVideo,
      reverse: true
    },
    {
      title: "Developer & Contractor Support",
      description: "We provide developer and contractor support services that improve efficiency and reduce risks in project delivery. Our team assists with resource management, scheduling, compliance, and budgeting. By bridging gaps between developers, contractors, and stakeholders, we ensure successful project outcomes. Clients rely on us for seamless execution.",
      video: developerContractorVideo
    }
  ]

  return (
    <div className="pt-20">
      <BannerFull 
        title="Real Estate & Development Services" 
        subtitle="Comprehensive real estate solutions from land acquisition to project completion." 
        image={hero} 
        ctaLabel="Book a Consultation" 
        ctaHref="#booking" 
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <header className="text-center">
          <Reveal delay={0}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Real Estate & Development Services</h1>
            <p className="text-white/80 max-w-4xl mx-auto text-lg leading-relaxed">
              From land acquisition to project completion, we provide comprehensive real estate development services 
              that help investors, developers, and contractors achieve their goals efficiently and profitably.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Let's discuss how our real estate and development services can help you achieve your investment goals. 
                We'll reach out within 24 hours to schedule your consultation.
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

export default RealEstateServices
