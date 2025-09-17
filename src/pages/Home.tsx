import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import ServicesPreview from '../components/ServicesPreview'
// import TeamPreview from '../components/TeamPreview'
import Features from '../components/Features'
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
      <div className="pt-20">
        <Hero />
      </div>
      <Features />
      {/* <Stats /> */}
      <AboutPreview />
      <ServicesPreview />
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


