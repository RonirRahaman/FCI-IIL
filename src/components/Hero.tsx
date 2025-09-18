import heroVideo from '../image/hero-bg.mp4'
// import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#22211e]/80" />
      <div className="relative z-10 h-full mx-auto max-w-6xl px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight opacity-0 animate-[fadeInUp_700ms_ease_100ms_forwards]">Empowering Developers, Contractors, and Investors</h1>
        <p className="mt-4 max-w-2xl text-white/85 text-base sm:text-lg opacity-0 animate-[fadeInUp_700ms_ease_300ms_forwards]">
          Smart funding & consulting solutions to accelerate timelines and maximize returns.
        </p>
        <div className="mt-8 opacity-0 animate-[fadeInUp_700ms_ease_500ms_forwards]">
          {/* <Link to="/services" className="relative btn-primary bg-butn overflow-hidden">
            <span className="relative z-10">Explore Services</span>
            <span className="absolute inset-0 translate-x-[-120%] bg-white/30 skew-x-12" style={{ transition: 'transform 600ms' }} />
          </Link> */}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .btn-primary:hover span:nth-child(2){ transform: translateX(120%); }
      `}</style>
    </section>
  )
}

export default Hero


