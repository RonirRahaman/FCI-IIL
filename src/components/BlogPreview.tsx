import Reveal from './Reveal'
import b1 from '../image/buil-2.jpg'
import b2 from '../image/buil-3.jpg'
import b3 from '../image/buil-4.jpg'

const posts = [
  { title: 'Financing Ground-Up Projects', img: b1 },
  { title: 'Structuring Investor-Friendly Deals', img: b2 },
  { title: 'Permit Expediting Essentials', img: b3 },
]

function BlogPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Insights</h2>
          <p className="mt-2 text-white/80">Simple previews for future posts.</p>
        </div>
        <a href="#" className="hidden sm:inline-block btn-primary">View All</a>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <article className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
              <img src={p.img} alt={p.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <a className="mt-3 inline-block text-[#c3ced3] hover:underline" href="#">Read more</a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-6 sm:hidden">
        <a href="#" className="btn-primary w-full inline-flex">View All</a>
      </div>
    </section>
  )
}

export default BlogPreview


