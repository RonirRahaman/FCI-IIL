import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../image/bg-logo.jpeg'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#22211e]/90 backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="FCI LLC" className="h-18 w-auto" />
          {/* <span className="font-semibold tracking-wide">FCI LLC</span> */}
        </Link>
        <button className="md:hidden p-2 rounded hover:bg-white/10" onClick={() => setIsOpen((v) => !v)} aria-label="Toggle Menu">
          <span className="i-heroicons-bars-3 w-6 h-6">☰</span>
        </button>
        <ul className="hidden md:flex items-center gap-8">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
          ].map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={({ isActive }) => `group relative pb-1 hover:text-[#c3ced3] transition-colors ${isActive ? 'text-[#c3ced3]' : ''}`}>
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#c3ced3] transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </>
                )}
              </NavLink>
            </li>
          ))}
          
          {/* Services Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="group relative hover:text-[#c3ced3] transition-colors flex items-center gap-1"
            >
              <span>Services</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#c3ced3] transition-all ${isServicesOpen ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className={`absolute top-full left-0 mt-2 w-80 bg-[#22211e]/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="p-2">
                <Link
                  to="/real-estate-services"
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="font-semibold text-white group-hover:text-[#c3ced3] transition-colors">Real Estate & Development Services</div>
                  <div className="text-sm text-white/70 mt-1">Land acquisition, entitlements, and development support</div>
                </Link>
                <Link
                  to="/financial-advisory"
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="font-semibold text-white group-hover:text-[#c3ced3] transition-colors">Financial & Capital Advisory Services</div>
                  <div className="text-sm text-white/70 mt-1">Private capital, funding solutions, and wealth management</div>
                </Link>
                <Link
                  to="/global-trade"
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="font-semibold text-white group-hover:text-[#c3ced3] transition-colors">Global Trade & Strategic Consulting</div>
                  <div className="text-sm text-white/70 mt-1">Government contracting, commodities, and international trade</div>
                </Link>
              </div>
            </div>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => `group relative pb-1 hover:text-[#c3ced3] transition-colors ${isActive ? 'text-[#c3ced3]' : ''}`}>
              {({ isActive }) => (
                <>
                  <span>Contact</span>
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#c3ced3] transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>
          </li>
          <li>
            <Link to="/contact" className="btn-primary bg-butn">Book</Link>
          </li>
        </ul>
      </nav>
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-4">
          <ul className="space-y-2 rounded-lg bg-[#22211e]/95 p-4">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `block px-3 py-3 rounded hover:bg-white/10 transition-colors ${isActive ? 'text-[#c3ced3]' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            
            {/* Services Section in Mobile */}
            <li>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-left hover:bg-white/10 transition-colors rounded"
              >
                <span className="text-sm font-semibold text-[#c3ced3]">Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 space-y-1 pb-2">
                  <NavLink
                    to="/real-estate-services"
                    onClick={() => {
                      setIsOpen(false)
                      setIsMobileServicesOpen(false)
                    }}
                    className={({ isActive }) => `block px-3 py-2 rounded text-sm hover:bg-white/10 transition-colors ${isActive ? 'text-[#c3ced3]' : ''}`}
                  >
                    Real Estate & Development
                  </NavLink>
                  <NavLink
                    to="/financial-advisory"
                    onClick={() => {
                      setIsOpen(false)
                      setIsMobileServicesOpen(false)
                    }}
                    className={({ isActive }) => `block px-3 py-2 rounded text-sm hover:bg-white/10 transition-colors ${isActive ? 'text-[#c3ced3]' : ''}`}
                  >
                    Financial & Capital Advisory
                  </NavLink>
                  <NavLink
                    to="/global-trade"
                    onClick={() => {
                      setIsOpen(false)
                      setIsMobileServicesOpen(false)
                    }}
                    className={({ isActive }) => `block px-3 py-2 rounded text-sm hover:bg-white/10 transition-colors ${isActive ? 'text-[#c3ced3]' : ''}`}
                  >
                    Global Trade & Strategic Consulting
                  </NavLink>
                </div>
              </div>
            </li>
            
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-3 py-3 rounded hover:bg-white/10 transition-colors ${isActive ? 'text-[#c3ced3]' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar


