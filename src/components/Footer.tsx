import Reveal from './Reveal'
import Logo from '../image/bg-logo.jpeg'
import { FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-[#22211e] border-t border-white/10">
      <Reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <img src={Logo} alt="FCI LLC" className="h-20 w-auto" />
            {/* <h3 className="text-lg font-semibold">FCI LLC</h3> */}
            <p className="text-white/70">Smart funding & consulting for developers, contractors, and investors.</p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 space-y-2 text-white/80">
              <li className="flex items-center gap-2"><FaEnvelope className="text-[#c3ced3]" /> info@fci-llc.com</li>
              <li className="flex items-center gap-2"><FaPhoneAlt className="text-[#c3ced3]" /> (555) 123-4567</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#c3ced3]" /> 123 Market St, Suite 200</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-white/80">
              <li className="flex items-center gap-2"><FaChevronRight className="text-[#c3ced3]" /> Services</li>
              <li className="flex items-center gap-2"><FaChevronRight className="text-[#c3ced3]" /> About</li>
              <li className="flex items-center gap-2"><FaChevronRight className="text-[#c3ced3]" /> Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <form className="mt-2 flex gap-2">
              <input className="flex-1 rounded bg-white/10 px-3 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c3ced3]" placeholder="Your email" />
              <button className="rounded bg-[#bb9135] text-black px-4 py-2 font-medium">Subscribe</button>
            </form>
            <div className="mt-4 flex gap-4 text-white/80">
              <a href="#" aria-label="Twitter" className="hover:text-[#1DA1F2]"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#0A66C2]"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram" className="hover:text-[#E1306C]"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </Reveal>
      <div className="border-t border-white/10 py-5 text-center text-white/60 text-sm">© {new Date().getFullYear()} FCI LLC. All rights reserved.</div>
    </footer>
  )
}

export default Footer


