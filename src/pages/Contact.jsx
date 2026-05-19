import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

const services = ["SEO Optimization", "PPC / Paid Ads", "Social Media Marketing", "Content Strategy", "Email Marketing", "Web Design & Dev", "Brand Identity", "Other"];
const budgets = ["Under ₹50K/mo", "₹50K – ₹1L/mo", "₹1L – ₹3L/mo", "₹3L+ /mo", "Let's Discuss"];

const faqs = [
  { q: "How quickly will I see results?", a: "SEO typically shows meaningful movement in 60–90 days. PPC campaigns can generate leads within the first week. We set realistic timelines during our discovery call based on your goals and competitive landscape." },
  { q: "Do you work with small businesses?", a: "Absolutely. We work with businesses ranging from funded startups to enterprise brands. Our strategies scale to your budget and goals — there's no minimum spend to work with us." },
  { q: "What does onboarding look like?", a: "After signing, we do a thorough discovery session to understand your business, competitors, and goals. Then we build a 90-day roadmap and present it within 7 days. You're in the loop every step of the way." },
  { q: "How do you measure and report success?", a: "You get a live dashboard showing every KPI that matters to your business — traffic, conversions, ROAS, leads, and revenue attribution. Plus weekly email summaries and monthly strategy calls." },
];

const officeInfo = [
  { icon: "fa-solid fa-location-dot", label: "Our Office", value: "Hi-Tech City, Madhapur, Hyderabad, Telangana 500081, India", color: "#6366F1" },
  { icon: "fa-solid fa-envelope", label: "Email Us", value: "hello@learnspacedigital.com", color: "#0288D1", link: "mailto:hello@learnspacedigital.com" },
  { icon: "fa-solid fa-phone", label: "Call Us", value: "+91 98765 43210", color: "#26C6DA", link: "tel:+919876543210" },
  { icon: "fa-solid fa-clock", label: "Working Hours", value: "Mon–Sat, 9:00 AM – 7:00 PM IST", color: "#A855F7" },
];

const Contact = () => {
  useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* HERO */}
      <section className="mesh-gradient" style={{ padding: '140px 20px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(2,136,209,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: '720px', position: 'relative' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>Let's Talk Growth</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.2, marginBottom: '24px', color: 'var(--text-main)' }}>
            Start Your <span className="highlight gradient-text">Growth Conversation</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '580px', margin: '0 auto' }}>
            Whether you need a full-funnel strategy or a quick campaign audit — we're ready to listen, diagnose, and deliver. Your free strategy session is one click away.
          </p>
          {/* Trust badges */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '36px', flexWrap: 'wrap' }}>
            {["500+ Brands Grown", "98% Client Retention", "Reply Within 4 Hours", "Free Strategy Call"].map((badge, i) => (
              <div key={i} style={{ padding: '8px 18px', borderRadius: '20px', background: '#fff', boxShadow: '0 4px 16px rgba(21,101,192,0.08)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#10B981', fontSize: '0.9rem' }}></i>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className="bg-soft-1" style={{ padding: '40px 20px 60px' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="contact-grid">

            {/* LEFT — Contact Info */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: 800 }}>Get In Touch</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '36px', lineHeight: 1.7 }}>We respond to all inquiries within 4 business hours. Your first strategy consultation is completely free.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                {officeInfo.map((info, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 24px', borderRadius: '16px', background: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${info.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: info.color, flexShrink: 0 }}>
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{info.label}</div>
                      {info.link ? (
                        <a href={info.link} style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>{info.value}</a>
                      ) : (
                        <div style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.95rem' }}>{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '16px', color: 'var(--text-main)', fontWeight: 700 }}>Follow Our Journey</h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { icon: "fa-brands fa-instagram", color: "#E1306C", href: "#" },
                    { icon: "fa-brands fa-linkedin-in", color: "#0077B5", href: "#" },
                    { icon: "fa-brands fa-twitter", color: "#1DA1F2", href: "#" },
                    { icon: "fa-brands fa-youtube", color: "#FF0000", href: "#" },
                  ].map((s, i) => (
                    <a key={i} href={s.href}
                      onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = s.color; e.currentTarget.style.transform = 'none'; }}
                      style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transition: 'all 0.3s', textDecoration: 'none' }}>
                      <i className={s.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div style={{ marginTop: '36px', borderRadius: '20px', overflow: 'hidden', height: '220px', background: 'linear-gradient(135deg, #e8edf5 0%, #d0dced 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2674840754406!2d78.37441!3d17.44611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e3e6f8cde5%3A0x33f87b4e6f8e4c2b!2sHi-Tech%20City%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="contact-form-card">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #10B981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '2rem', color: '#fff' }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '12px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>Thanks for reaching out. Our strategy team will review your details and get back to you within 4 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-primary">Send Another Message</button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: 800 }}>Request a Free Strategy Session</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '36px', fontSize: '0.95rem' }}>Fill in the details below and we'll prepare a custom growth plan for your business before our call.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Raghu Vamshi" required
                          style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '2px solid #E8EDF5', fontSize: '0.95rem', color: 'var(--text-main)', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s', background: '#FAFBFF' }}
                          onFocus={e => e.target.style.borderColor = 'var(--primary-color)'}
                          onBlur={e => e.target.style.borderColor = '#E8EDF5'} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Work Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required
                          style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '2px solid #E8EDF5', fontSize: '0.95rem', color: 'var(--text-main)', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s', background: '#FAFBFF' }}
                          onFocus={e => e.target.style.borderColor = 'var(--primary-color)'}
                          onBlur={e => e.target.style.borderColor = '#E8EDF5'} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210"
                          style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '2px solid #E8EDF5', fontSize: '0.95rem', color: 'var(--text-main)', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s', background: '#FAFBFF' }}
                          onFocus={e => e.target.style.borderColor = 'var(--primary-color)'}
                          onBlur={e => e.target.style.borderColor = '#E8EDF5'} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company"
                          style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '2px solid #E8EDF5', fontSize: '0.95rem', color: 'var(--text-main)', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s', background: '#FAFBFF' }}
                          onFocus={e => e.target.style.borderColor = 'var(--primary-color)'}
                          onBlur={e => e.target.style.borderColor = '#E8EDF5'} />
                      </div>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Service You're Interested In</label>
                      <select name="service" value={formData.service} onChange={handleChange}
                        style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '2px solid #E8EDF5', fontSize: '0.95rem', color: formData.service ? 'var(--text-main)' : 'var(--text-muted)', outline: 'none', boxSizing: 'border-box', background: '#FAFBFF', cursor: 'pointer', transition: 'border-color 0.2s' }}
                        onFocus={e => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={e => e.target.style.borderColor = '#E8EDF5'}>
                        <option value="">Select a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>Monthly Budget Range</label>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {budgets.map(b => (
                          <button type="button" key={b} onClick={() => setFormData({ ...formData, budget: b })}
                            style={{ padding: '8px 16px', borderRadius: '20px', border: `2px solid ${formData.budget === b ? 'var(--primary-color)' : '#E8EDF5'}`, background: formData.budget === b ? 'rgba(21,101,192,0.06)' : '#fff', color: formData.budget === b ? 'var(--primary-color)' : 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginBottom: '28px' }}>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Tell Us About Your Goals *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="What are your biggest marketing challenges? What does success look like for you in the next 12 months?" required
                        style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '2px solid #E8EDF5', fontSize: '0.95rem', color: 'var(--text-main)', outline: 'none', boxSizing: 'border-box', resize: 'vertical', background: '#FAFBFF', fontFamily: 'inherit', lineHeight: 1.6, transition: 'border-color 0.2s' }}
                        onFocus={e => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={e => e.target.style.borderColor = '#E8EDF5'} />
                    </div>
                    <button type="submit" className="btn btn-primary magnetic glow-on-hover" style={{ width: '100%', padding: '16px', fontSize: '1rem', borderRadius: '14px', fontWeight: 800 }}>
                      <i className="fa-solid fa-paper-plane" style={{ marginRight: '10px' }}></i>
                      Send My Free Strategy Request
                    </button>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '16px' }}>
                      <i className="fa-solid fa-lock" style={{ marginRight: '6px' }}></i>
                      Your info is 100% private. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '40px 20px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="badge" style={{ display: 'block', width: 'fit-content', margin: '0 auto 16px' }}>FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Answers to the questions we hear most before clients sign on.</p>
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ borderRadius: '16px', background: openFaq === i ? 'rgba(21,101,192,0.04)' : '#FAFBFF', border: `2px solid ${openFaq === i ? 'var(--primary-color)' : '#E8EDF5'}`, overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer' }}>
                <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-main)', fontWeight: 700 }}>{faq.q}</h4>
                  <i className={`fa-solid fa-chevron-${openFaq === i ? 'up' : 'down'}`} style={{ color: 'var(--primary-color)', fontSize: '0.85rem', flexShrink: 0, transition: 'transform 0.3s' }}></i>
                </div>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px' }}>
                    <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '40px 20px', background: 'linear-gradient(135deg, var(--primary-color) 0%, #6366F1 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '16px', fontWeight: 800 }}>Still Deciding?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.7 }}>
            Book a free 30-minute strategy call. No commitment, no sales pitch — just a genuine conversation about your growth potential.
          </p>
          <a href="mailto:hello@learnspacedigital.com"
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            style={{ display: 'inline-block', padding: '16px 44px', borderRadius: '50px', background: '#fff', color: 'var(--primary-color)', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', transition: 'transform 0.2s' }}>
            <i className="fa-solid fa-calendar-days" style={{ marginRight: '10px' }}></i>
            Book a Free Call
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
