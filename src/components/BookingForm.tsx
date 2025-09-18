import { useState } from 'react'

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    datetime: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const field = (id: string, label: string, input: React.ReactNode) => (
    <div className="relative">
      {input}
      <label htmlFor={id} className="pointer-events-none absolute left-3 top-2 text-black/60 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-black/50 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#c3ced3]">
        {label}
      </label>
    </div>
  )

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {submitted && (
        <div className="rounded bg-emerald-500/20 border border-emerald-400/40 px-4 py-2 text-emerald-200 animate-[fadeInUp_400ms_ease]">Thanks! We will reach out within 24 hours.</div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        {field(
          'name',
          'Full Name*',
          <input id="name" required name="name" value={form.name} onChange={onChange} placeholder=" " className="peer rounded bg-black/10 px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#c3ced3]" />
        )}
        {field(
          'email',
          'Email Address*',
          <input id="email" required type="email" name="email" value={form.email} onChange={onChange} placeholder=" " className="peer rounded bg-black/10 px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#c3ced3]" />
        )}
        {field(
          'phone',
          'Phone Number*',
          <input id="phone" required name="phone" value={form.phone} onChange={onChange} placeholder=" " className="peer rounded bg-black/10 px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#c3ced3]" />
        )}
        <div className="relative">
          <select id="service" required name="service" value={form.service} onChange={onChange} className="peer text-black rounded bg-black/10 px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#c3ced3]">
            <option value="" disabled hidden></option>
            <option>Funding</option>
            <option>Investor Loans</option>
            <option>Off-Market Properties</option>
            <option>Permit Expediting</option>
            <option>FCA</option>
            <option>Architecture & Engineering</option>
            <option>Contractor Support</option>
          </select>
          <label
            htmlFor="service"
            className={`pointer-events-none absolute left-3 ${form.service ? '-top-3 text-xs text-black' : 'top-2'} text-black/60 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#c3ced3]`}
          >
            Service of Interest*
          </label>
        </div>
        {field(
          'datetime',
          '',
          <input id="datetime" required type="datetime-local" name="datetime" value={form.datetime} onChange={onChange} placeholder=" " className="peer text-black/60 rounded bg-black/10 px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#c3ced3]" />
        )}
      </div>
      {field(
        'message',
        'Project Details / Message',
        <textarea id="message" name="message" value={form.message} onChange={onChange} placeholder=" " rows={4} className="peer rounded bg-black/10 px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#c3ced3]" />
      )}
      <button type="submit" className="relative btn-primary overflow-hidden bg-butn">
        <span className="relative z-10">Book Free Consultation</span>
        <span className="absolute inset-0 translate-x-[-120%] bg-black/30 skew-x-12" style={{ transition: 'transform 600ms' }} />
      </button>
      <style>{`.btn-primary:hover span:nth-child(2){ transform: translateX(120%); }`}</style>
    </form>
  )
}

export default BookingForm


