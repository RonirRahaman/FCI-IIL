function BannerFull({
  title,
  subtitle,
  ctaLabel,
  ctaHref = '#',
  image,
  video,
}: {
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  image?: string
  video?: string
}) {
  return (
    <section className="relative h-[88vh] min-h-[540px] w-full overflow-hidden">
      {video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b via-black/40" />
      <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center text-white">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight opacity-0 animate-[fadeInUp_700ms_ease_100ms_forwards]"
          style={{ textShadow: "4px 4px 12px rgba(0,0,0,0.7)" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-4 max-w-2xl text-white/90 text-base sm:text-lg opacity-0 animate-[fadeInUp_700ms_ease_300ms_forwards]"
            style={{ textShadow: "3px 3px 10px rgba(0,0,0,0.65)" }}
          >
            {subtitle}
          </p>
        )}

        {ctaLabel && (
          <div className="mt-8 opacity-0 animate-[fadeInUp_700ms_ease_500ms_forwards]">
            <a href={ctaHref} className="btn-primary bg-butn">{ctaLabel}</a>
          </div>
        )}
      </div>
      <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  )
}

export default BannerFull


