import office from '../image/Contact-1.jpg'
import BookingForm from '../components/BookingForm'
import BannerFull from '../components/BannerFull'
import hero from '../image/Contact-2.jpg'

function Contact() {
  return (
    <div className="pt-20">
      <BannerFull title="Contact" subtitle="We’ll respond within 24 hours." image={hero} ctaLabel="Email Us" ctaHref="mailto:info@fci-llc.com" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="mt-3 text-white/80">Fill out the form and our team will reach out within 24 hours.</p>
          <div className="mt-6">
            <BookingForm />
          </div>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden border border-white/10">
            <img src={office} alt="Office" className="w-full h-72 object-cover" />
          </div>
          <div className="mt-6 rounded-lg overflow-hidden border border-white/10">
            <iframe
              title="FCI LLC Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019013624072!2d-122.4014149232181!3d37.79361757197821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f4b0a0d3%3A0x5a1b9e0ff0!2sFinancial%20District!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6 space-y-2 text-white/80">
            <div><span className="font-semibold text-white">Address:</span> 123 Market St, Suite 200</div>
            <div><span className="font-semibold text-white">Phone:</span> (555) 123-4567</div>
            <div><span className="font-semibold text-white">Email:</span> info@fci-llc.com</div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


