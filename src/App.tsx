import { useState, type FormEvent } from 'react'
import { Button } from './components/ui/button'

const packages = [
  {
    number: '01',
    name: 'Design & Architecture Sprint',
    type: 'THE SPRINT',
    price: '$6,000',
    length: '2 hafta',
    description: 'G‘oyangizni jamoa, investorlar va ilk foydalanuvchilarga ko‘rsatishga tayyor mahsulot rejasiga aylantiramiz.',
    includes: ['User flow va wireframe', 'Figma design system', 'Interaktiv high-fidelity prototip', 'Texnik arxitektura hujjati'],
    featured: false,
  },
  {
    number: '02',
    name: 'Full MVP Sprint',
    type: 'FLAGSHIP OFFER',
    price: '$20,000',
    length: '4 hafta',
    description: 'Validatsiya, demo va dastlabki daromad uchun production-ready mahsulot — qat’iy scope va aniq muddatda.',
    includes: ['Strategiya va Figma UX/UI system', 'Next.js frontend + Supabase backend', 'Auth, Stripe va kerakli integratsiyalar', 'QA, production deploy va video handoff'],
    featured: true,
  },
  {
    number: '03',
    name: 'Scale & Growth Retainer',
    type: 'MONTHLY PARTNER',
    price: '$5,000',
    length: 'oyiga',
    description: 'MVP’dan keyin ham yoningizdamiz: mahsulotni foydalanuvchi fikri va biznes metrikalariga qarab rivojlantiramiz.',
    includes: ['40 soat dedicated resurs', 'Yangi funksiyalar va iteratsiyalar', 'A/B test va UX yaxshilash', 'Ishlash tezligi va texnik yordam'],
    featured: false,
  },
]

const steps = [
  { week: '01', title: 'Aniqlaymiz', detail: 'Discovery, user journey, wireframe va texnik arxitektura.' },
  { week: '02', title: 'Loyihalaymiz', detail: 'Mahsulotingizga xos design system va tasdiqlangan prototip.' },
  { week: '03', title: 'Quramiz', detail: 'Asosiy oqimlar, integratsiyalar va biznes mantiqi.' },
  { week: '04', title: 'Topshiramiz', detail: 'QA, production deploy va jamoangiz uchun to‘liq handoff.' },
]

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`MVP sprint so‘rovi — ${data.get('name')}`)
    const body = encodeURIComponent(
      `Ism: ${data.get('name')}\nEmail: ${data.get('email')}\nKompaniya: ${data.get('company') || 'Ko‘rsatilmagan'}\nPaket: ${data.get('package')}\n\nLoyiha: ${data.get('message')}`,
    )
    window.location.href = `mailto:hello@forme.studio?subject=${subject}&body=${body}`
    setSubmitted(true)
    form.reset()
  }

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="FORME bosh sahifa"><span className="brand-mark">F.</span><span>FORME<span className="brand-sub">PRODUCT STUDIO</span></span></a>
        <nav className="nav-links" aria-label="Asosiy navigatsiya">
          <a href="#services">Xizmatlar</a>
          <a href="#process">Jarayon</a>
          <a href="#economics">Reja</a>
        </nav>
        <a className="nav-cta" href="#contact">Loyihani muhokama qilish <ArrowIcon /></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> STRATEGIYA · DIZAYN · DEVELOPMENT</div>
            <h1>G‘oya bor.<br />Endi uni <span className="serif-accent">ishga tushiring.</span></h1>
            <p className="hero-lede">Startaplar uchun investor ko‘rsatadigan, foydalanuvchi sinaydigan va daromad keltirishga tayyor MVP. Bitta kichik, senior jamoa bilan — atigi 4 haftada.</p>
            <div className="hero-actions"><a className="button button-dark" href="#contact">Sprint haqida gaplashamiz <ArrowIcon /></a><a className="text-link" href="#services">Paketlarni ko‘rish <span>↓</span></a></div>
            <div className="proof-row"><div className="avatar-stack"><span>AK</span><span>MN</span><span>JL</span></div><p><strong>Founder’lar uchun qurilgan.</strong><br />Strategiyadan production’gacha, bir jamoa.</p><span className="proof-divider" /><span className="proof-tag">FIXED SCOPE<br /><b>·</b> FIXED PRICE</span></div>
          </div>
          <div className="hero-art" aria-label="Mahsulotni rejalashtirish va ishga tushirish illyustratsiyasi">
            <div className="art-topline"><span>PRODUCT / 001</span><span>IDEA → IMPACT</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-card card-back"><span className="mini-label">THE QUESTION</span><p>Qanday qilib<br />tezroq <i>o‘sish</i> mumkin?</p><div className="card-lines"><i /><i /><i /></div></div>
            <div className="art-card card-front"><div className="mock-header"><span className="mock-dot" /><span>YOUR NEXT CHAPTER</span><span className="mock-menu">···</span></div><div className="mock-chart"><div className="chart-label">PRODUCT MOMENTUM <span>+128%</span></div><svg viewBox="0 0 300 120" role="img" aria-label="O‘sish grafigi"><path className="chart-fill" d="M0 98 C30 88 38 78 62 82 S95 62 120 70 S148 54 174 58 S210 29 229 43 S265 19 300 5 L300 120 L0 120Z" /><path className="chart-line" d="M0 98 C30 88 38 78 62 82 S95 62 120 70 S148 54 174 58 S210 29 229 43 S265 19 300 5" /></svg><div className="chart-months"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span></div></div><div className="mock-footer"><span>✳ &nbsp; BUILT TO MOVE</span><span>01 — 04 WKS</span></div></div>
            <div className="orbit-note"><span>✳</span> FROM FIRST<br />THOUGHT TO<br />FIRST CUSTOMER</div>
            <div className="art-index">01 <span>—</span> 04</div>
          </div>
          <div className="hero-bottom"><span>INDEPENDENT DIGITAL PRODUCT STUDIO</span><span>BUILT FOR WHAT’S NEXT <b>↓</b></span></div>
        </section>

        <section className="trust-strip" aria-label="Texnologiyalar"><span>TEZ, PUxta VA SIZNIKI.</span><div className="tech-list"><span>FIGMA</span><i /><span>NEXT.JS</span><i /><span>SUPABASE</span><i /><span>STRIPE</span><i /><span>VERCEL</span></div></section>

        <section className="services section-pad" id="services">
          <div className="section-heading"><div><span className="eyebrow">ANIQ NATIJA. OCHIQ NARX.</span><h2>Har bosqichga<br /><span className="serif-accent">bitta to‘g‘ri sprint.</span></h2></div><p>Keragidan ortiq scope yo‘q. Noaniq muddat yo‘q. Biznes maqsadingizga mos, oldindan belgilangan hamkorlik.</p></div>
          <div className="package-grid">{packages.map((item) => <article className={`package-card${item.featured ? ' featured' : ''}`} key={item.number}><div className="package-top"><span>{item.number} / 03</span><span>{item.type}</span></div><h3>{item.name}</h3><p className="package-desc">{item.description}</p><div className="package-price"><strong>{item.price}</strong><span>{item.length}</span></div><div className="card-rule" /><span className="includes-label">SPRINT ICHIGA KIRADI</span><ul>{item.includes.map((line) => <li key={line}><span>↗</span>{line}</li>)}</ul><a href="#contact" className={`package-link${item.featured ? ' light-link' : ''}`}>Paketni muhokama qilish <ArrowIcon /></a></article>)}</div>
          <p className="package-footnote">Har bir loyiha 50% oldindan to‘lov bilan boshlanadi. Qolgan to‘lov handoff’dan oldin. Qo‘shimcha talablar alohida sprintga kelishiladi.</p>
        </section>

        <section className="process section-pad" id="process"><div className="process-heading"><span className="eyebrow">TO‘RT HAFTA. BITTA MAQSAD.</span><h2>Qanday ishlaymiz<span className="serif-accent">?</span></h2><p>Kichik, tajribali jamoa. Haftalik demo. Har qadamda sizning fikringiz.</p></div><div className="timeline">{steps.map((step) => <article className="timeline-step" key={step.week}><span className="week-label">WEEK {step.week}</span><div className="step-marker">{step.week}</div><h3>{step.title}</h3><p>{step.detail}</p></article>)}</div><div className="process-note"><span>↗</span><p><strong>Scope nazorat ostida.</strong> Kickoff’da kelishilgan SOW har ikki tomonni himoya qiladi — kutilmagan vazifa yo‘q, noaniq handoff yo‘q.</p></div></section>

        <section className="economics section-pad" id="economics"><div className="economics-left"><span className="eyebrow">AGENTLIKNI HAM MAHSULOTDEK QURING</span><h2>$0 dan<br /><span className="serif-accent">$1M ARR’gacha.</span></h2><p>Bu daromad kafolati emas — to‘g‘ri narx, qayta ishlatiladigan delivery tizimi va recurring revenue bilan qurilgan amaliy o‘sish ssenariysi.</p><a className="text-link light-text-link" href="#contact">Strategiyangizni birga tuzamiz <ArrowIcon /></a></div><div className="roadmap">{[{period:'OY 01 — 03',label:'Validatsiya',metric:'$0 → $15k',note:'Founder-led · 1–2 sprint / oy'},{period:'OY 03 — 09',label:'Delivery engine',metric:'$15k → $50k',note:'Core team · ilk retainers'},{period:'OY 09 — 18',label:'Tizimlashtirish',metric:'$50k → $85k',note:'Standart SOP · 5 retainers'},{period:'OY 18 — 24',label:'Barqaror o‘sish',metric:'$90k / oy',note:'3 MVP + 6 retainers = $1.08M ARR'}].map((row,index)=><article className="roadmap-row" key={row.period}><div className="roadmap-index">0{index+1}</div><div className="roadmap-main"><span>{row.period}</span><h3>{row.label}</h3><p>{row.note}</p></div><strong>{row.metric}</strong></article>)}</div></section>

        <section className="principles section-pad"><div><span className="eyebrow">SIFAT — JARAYON NATIJASI</span><h2>Yaxshi mahsulot<br /><span className="serif-accent">yaxshi tizimdan boshlanadi.</span></h2></div><div className="principle-grid"><article><span>01</span><h3>Scope aniq</h3><p>Yozma SOW, bitta qaror qabul qiluvchi va qo‘shimcha ishlar uchun ochiq jarayon.</p></article><article><span>02</span><h3>To‘lov himoyalangan</h3><p>50% kickoff’da, 50% final handoff’dan oldin. Kod topshirilishi to‘lovga bog‘langan.</p></article><article><span>03</span><h3>Arxitektura ko‘rib chiqiladi</h3><p>Standartlar va muntazam code review. Handoff’dan keyin ham mahsulot sizniki.</p></article></div></section>

        <section className="contact section-pad" id="contact"><div className="contact-copy"><span className="eyebrow"><span className="status-dot" /> KEYINGI SPRINT UCHUN JOY BOR</span><h2>Keling,<br /><span className="serif-accent">boshlaymiz.</span></h2><p>G‘oyangiz, jamoangiz yoki hozirgi muammoingiz haqida yozing. Bir ish kuni ichida javob beramiz.</p><div className="contact-note"><span>01 / 30 MIN</span><p>Bepul tanishuv qo‘ng‘irog‘i. Bosimsiz, pitch decksiz — faqat mahsulotingiz haqida suhbat.</p></div><a className="email-link" href="mailto:hello@forme.studio">hello@forme.studio <ArrowIcon /></a></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>PROJECT INQUIRY</span><span>01 — 04</span></div><label>Ismingiz<input required name="name" placeholder="Masalan, Aziz Karimov" /></label><div className="form-row"><label>Email manzilingiz<input required type="email" name="email" placeholder="siz@kompaniya.com" /></label><label>Kompaniya (ixtiyoriy)<input name="company" placeholder="Kompaniya nomi" /></label></div><label>Qaysi xizmat qiziqtiradi?<select name="package" defaultValue="Full MVP Sprint"><option>Design & Architecture Sprint</option><option>Full MVP Sprint</option><option>Scale & Growth Retainer</option><option>Hali aniq emas</option></select></label><label>Loyiha haqida qisqacha<textarea required name="message" rows={4} placeholder="Nimani qurmoqchisiz va hozir qaysi bosqichdasiz?" /></label><Button className="button button-dark submit-button" type="submit">{submitted ? 'Email dasturi ochildi ✓' : 'So‘rov yuborish'} <ArrowIcon /></Button><p className="form-privacy">Yuborish tugmasi emailingizda tayyor xabarni ochadi. Ma’lumotlaringiz xavfsiz saqlanadi.</p></form></section>
      </main>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">F.</span><span>FORME<span className="brand-sub">PRODUCT STUDIO</span></span></a><span>G‘OYADAN ISHLAYDIGAN MAHSULOTGACHA.</span><a href="#home">YUQORIGA ↑</a><span>© 2025 FORME STUDIO</span></footer>
    </>
  )
}

export default App
