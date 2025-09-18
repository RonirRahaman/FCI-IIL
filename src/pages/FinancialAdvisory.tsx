import BannerFull from '../components/BannerFull'
import Reveal from '../components/Reveal'
import BookingForm from '../components/BookingForm'
import heroVideo from '../image/Financial & Capital Advisory Services.mp4'

// Import video files
import privateCapitalVideo from '../image/Financial & Capital Advisory Services/Private Capital.mp4'
import specializedFundingVideo from '../image/Financial & Capital Advisory Services/Specialized Funding Solutions.mp4'
import realEstateInvestorVideo from '../image/Financial & Capital Advisory Services/Real Estate Investor Funding.mp4'
import highNetWorthVideo from '../image/Financial & Capital Advisory Services/High Net-Worth Advisory Consulting Services.mp4'
import highRiskInsuranceVideo from '../image/Financial & Capital Advisory Services/High Risk Insurance.mp4'

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

function FinancialAdvisory() {
  const services = [
    {
      title: "Private Capital",
      description: "FCI LLC connects clients with private capital funding solutions for real estate, infrastructure, and large-scale projects. We source investors and structure deals to maximize returns while minimizing risks. Our financial expertise ensures access to the right funding at the right time. With us, clients gain a competitive edge in securing capital.",
      video: privateCapitalVideo
    },
    {
      title: "Specialized Funding Solutions",
      description: "Our specialized funding solutions are designed to address unique project requirements. From alternative lending models to structured finance, we create custom financial plans. These strategies help clients overcome funding challenges in competitive markets. With innovative financing, we make ambitious projects possible.",
      video: specializedFundingVideo,
      reverse: true
    },
    {
      title: "Real Estate Investor Funding",
      description: "We provide real estate investor funding services that give clients access to capital for acquisitions, renovations, and developments. Our funding options are flexible and tailored to market conditions. This enables quick deal closures and higher ROI. Investors trust us to unlock growth opportunities in real estate.",
      video: realEstateInvestorVideo
    },
    {
      title: "High Net-Worth Advisory Consulting Services",
      description: "Our high-net-worth consulting services offer wealth management strategies for ultra-affluent individuals. We focus on asset diversification, legacy planning, and risk management. Each advisory plan is tailored to client goals, ensuring sustainable long-term growth. We protect wealth while creating new investment opportunities.",
      video: highNetWorthVideo,
      reverse: true
    },
    {
      title: "High Risk Insurance",
      description: "We design high-risk insurance solutions for projects and investments exposed to political, financial, and environmental uncertainties. Our coverage minimizes exposure to unexpected disruptions. By tailoring policies to each venture, we provide maximum protection. This allows clients to pursue high-value opportunities with confidence.",
      video: highRiskInsuranceVideo
    }
  ]

  return (
    <div className="pt-20">
      <BannerFull 
        title="Financial & Capital Advisory Services" 
        subtitle="Strategic financial solutions and capital access for ambitious projects and investments." 
        video={heroVideo} 
        ctaLabel="Book a Consultation" 
        ctaHref="#booking" 
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <header className="text-center">
          <Reveal delay={0}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Financial & Capital Advisory Services</h1>
            <p className="text-white/80 max-w-4xl mx-auto text-lg leading-relaxed">
              Access private capital, specialized funding solutions, and expert financial advisory services 
              designed to maximize returns while minimizing risks for your investments and projects.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Secure Your Funding?</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Let's discuss how our financial and capital advisory services can help you access the right funding 
                and maximize your investment returns. We'll reach out within 24 hours to schedule your consultation.
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

export default FinancialAdvisory
