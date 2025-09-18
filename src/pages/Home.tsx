import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import ServicesPreview from '../components/ServicesPreview'
import CommitmentSection from '../components/CommitmentSection'
import TrustedSection from '../components/TrustedSection'
// import TeamPreview from '../components/TeamPreview'
import Features from '../components/Features'
import FeaturesCopy from '../components/FeaturesCopy'
// import Testimonials from '../components/Testimonials'
// import Pricing from '../components/Pricing'
import FAQs from '../components/FAQs'
import CTA from '../components/CTA'
// import Partners from '../components/Partners'
// import Stats from '../components/Stats'
// import CaseStudies from '../components/CaseStudies'
// import BlogPreview from '../components/BlogPreview'

function Home() {
  return (
    <div>
      <div className="pt-20 bg-[#22211e]">
        <Hero />
      </div>
      {/* <Stats /> */}
      <Features />
      <AboutPreview />
      <FeaturesCopy />
      <ServicesPreview />
      <CommitmentSection />
      <TrustedSection />
      {/* <Partners /> */}
      {/* <CaseStudies /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <TeamPreview /> */}
      {/* <BlogPreview /> */}
      <FAQs />
      <CTA />
    </div>
  )
}

export default Home


