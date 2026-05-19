import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';
import '../assets/styles/about.css';

const stats = [
  { value: 500, suffix: '+', label: 'Brands Empowered', icon: 'fa-solid fa-rocket', desc: 'across 4 continents' },
  { value: 98, suffix: '%', label: 'Client Retention', icon: 'fa-solid fa-heart', desc: 'year over year average' },
  { value: 340, suffix: '%', label: 'Average ROAS', icon: 'fa-solid fa-chart-line', desc: 'across all paid channels' },
  { value: 11, suffix: '+', label: 'Years of Mastery', icon: 'fa-solid fa-trophy', desc: 'in digital marketing' },
];

const journey = [
  { year: '2015', title: 'The Spark', desc: 'Founded in Hyderabad with 3 specialists and a single client — our mission was clear: democratise enterprise-grade digital marketing for every ambitious business, not just the Fortune 500.', color: '#6366F1', icon: 'fa-lightbulb', kpi: 'First ₹1Cr in client revenue generated' },
  { year: '2018', title: 'First 100 Clients', desc: 'Reached our first major milestone with 100 active clients across 6 industries. Expanded to 20+ certified specialists and launched our proprietary real-time performance dashboard.', color: '#0288D1', icon: 'fa-users', kpi: 'Launched proprietary analytics platform v1' },
  { year: '2021', title: 'Global Footprint', desc: 'Opened international operations serving clients in US, UK, UAE, and Southeast Asia. Crossed $10M in combined client revenue generated and launched an AI-assisted ad optimisation layer.', color: '#26C6DA', icon: 'fa-globe', kpi: '$10M+ client revenue milestone' },
  { year: '2024', title: 'AI-Powered Growth', desc: 'Pioneered machine learning-driven campaign optimisation across 300+ client accounts. Reduced average client ad spend waste by 42% while simultaneously doubling conversion rates.', color: '#A855F7', icon: 'fa-microchip', kpi: '42% reduction in wasted ad spend' },
  { year: '2026', title: 'Industry Leader', desc: 'Recognised as a top-10 boutique performance marketing agency globally. 500+ brands, $12M+ in revenue driven for clients, 60 specialists across 4 countries, and a 98% client retention rate.', color: '#10B981', icon: 'fa-crown', kpi: '#1 boutique agency for ROI-driven marketing' },
];

const team = [
  { name: 'Raghu Vamshi', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', quote: '11+ years driving digital-first growth strategies for brands across every vertical.', specialty: 'Performance Strategy', color: '#1565C0', linkedin: '#' },
  { name: 'Varalaxmi', role: 'Head of Strategy & COO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', quote: 'Architect of systems that make a 60-person agency feel like a 600-person powerhouse.', specialty: 'Data & Operations', color: '#0288D1', linkedin: '#' },
  { name: 'Shridhar Kulkarni', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80', quote: 'Award-winning creative who believes great design and great ROI are never mutually exclusive.', specialty: 'Brand & Creative', color: '#6366F1', linkedin: '#' },
];

const values = [
  { icon: 'fa-fire', title: 'Passion-First Culture', desc: 'We treat every client\'s brand as our own. That means late nights when the campaign needs it, early calls when the data surprises us, and genuine investment in every outcome we drive.', color: '#6366F1', stat: '4.9/5 Client NPS' },
  { icon: 'fa-bullseye', title: 'Precision Execution', desc: 'Every headline, every bid, every creative variant is built on evidence. We run systematic A/B test frameworks — not opinions — to move the needle consistently every single month.', color: '#0288D1', stat: '2.4x faster optimisation cycle' },
  { icon: 'fa-chart-bar', title: 'Revenue-Obsessed', desc: 'Impressions don\'t pay salaries. We anchor every strategy to the metrics that actually matter — CAC, LTV, ROAS, MRR growth — and report on them with full, unfiltered transparency.', color: '#26C6DA', stat: '$12M+ client revenue driven' },
  { icon: 'fa-shield-halved', title: 'Radical Transparency', desc: 'You own your accounts, your data, and your results. Live dashboards, weekly reviews, and a no-fluff monthly report mean there are zero surprises — only forward momentum.', color: '#A855F7', stat: '100% account ownership policy' },
];

const capabilities = [
  { name: 'SEO & Organic Growth', level: 97, color: '#1565C0' },
  { name: 'Paid Media (PPC / Meta)', level: 95, color: '#0288D1' },
  { name: 'Content Marketing', level: 91, color: '#29B6F6' },
  { name: 'Email Automation', level: 89, color: '#5C6BC0' },
  { name: 'Conversion Rate Optimisation', level: 93, color: '#00BCD4' },
  { name: 'Social Media Marketing', level: 90, color: '#6366F1' },
];

const awards = [
  { title: 'Top Boutique Agency 2026', body: 'Clutch Global', icon: 'fa-solid fa-award' },
  { title: 'Best ROI Marketing Agency', body: 'Digital India Awards', icon: 'fa-solid fa-trophy' },
  { title: 'Google Premier Partner', body: 'Google Partners Program', icon: 'fa-brands fa-google' },
  { title: 'Meta Business Partner', body: 'Meta Partner Directory', icon: 'fa-brands fa-meta' },
];

const reviews = [
  { name: 'Georgia Voll', role: 'CEO, TechFlow', stars: 5, text: 'LearnSpace completely transformed our pipeline. Qualified leads tripled in 90 days and our sales team has never been busier. The depth of strategy is unlike any agency we have worked with.', avatar: 'GV', color: '#1565C0' },
  { name: 'Marcus Reid', role: 'Founder, UrbanWear', stars: 5, text: 'Their data-first approach is genuinely different. They do not just run ads — they architect growth systems. ROI speaks for itself every single month without fail.', avatar: 'MR', color: '#0288D1' },
  { name: 'Ellyse Perry', role: 'Director, GreenSpace', stars: 5, text: 'Patient enquiries went through the roof after the local SEO campaign. Professional, deeply responsive, and genuinely invested in our results — not just the contract.', avatar: 'EP', color: '#29B6F6' },
  { name: 'Lauren Bell', role: 'Marketing Director, NextGen', stars: 5, text: 'Traffic up 200%, bounce rate down 35%, conversions up 68%. Every metric moved in the right direction simultaneously. Outstanding team, outstanding process.', avatar: 'LB', color: '#6366F1' },
  { name: 'David Warner', role: 'Founder, EcoLife', stars: 5, text: 'Finally an agency that gets niche markets. Their content strategy spoke directly to our exact audience and the lead quality it generated was the best we have ever seen.', avatar: 'DW', color: '#A855F7' },
  { name: 'James Anderson', role: 'CEO, Sparkly', stars: 5, text: 'Switched from two other agencies before finding LearnSpace. Night and day difference. The transparency and reporting quality alone is worth switching for. Third year running now.', avatar: 'JA', color: '#26C6DA' },
];

const About = () => {
  useReveal();
  const [activeStage, setActiveStage] = useState(0);
  const [activeValue, setActiveValue] = useState(null);
  const [hoveredTeam, setHoveredTeam] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % journey.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main style={{ overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ minHeight: '60vh', padding: '140px 20px 90px', position: 'relative', overflow: 'hidden', background: '#05080f' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(21,101,192,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(21,101,192,0.07) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />
        <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(21,101,192,0.18) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 820 }}>
          <span className="section-badge reveal fade-up" style={{ background: 'rgba(21,101,192,0.15)', color: '#29B6F6', border: '1px solid rgba(41,182,246,0.3)', marginBottom: 24, display: 'inline-block' }}>About LearnSpace Digital</span>
          <h1 className="reveal fade-up" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', lineHeight: 1.15, color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 900, marginBottom: 24, transitionDelay: '0.1s' }}>
            The Team That Turns<br />
            <span style={{ background: 'linear-gradient(90deg, #29B6F6, #1565C0, #6366F1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Strategy Into Revenue</span>
          </h1>
          <p className="reveal fade-up" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.55)', maxWidth: 600, lineHeight: 1.8, margin: '0 auto 48px', transitionDelay: '0.2s' }}>
            Since 2015, we have combined deep data intelligence with boundary-pushing creativity to help 500+ brands dominate their digital landscape — from local startups to global enterprises operating across 15+ countries.
          </p>
          <div className="reveal fade-up" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '0.3s' }}>
            <Link to="/contact" className="btn btn-modern-white magnetic">Work With Us</Link>
            <a href="#story" style={{ padding: '14px 32px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s', fontSize: '0.95rem', borderRadius: 50, display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#29B6F6'; e.currentTarget.style.color = '#29B6F6'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}>
              Our Story ↓
            </a>
          </div>
        </div>
        <div className="reveal fade-up" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginTop: 56, position: 'relative', zIndex: 2, transitionDelay: '0.4s' }}>
          {awards.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 50, backdropFilter: 'blur(12px)' }}>
              <i className={a.icon} style={{ color: '#29B6F6', fontSize: '0.9rem' }}></i>
              <div>
                <div style={{ fontSize: '0.73rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{a.title}</div>
                <div style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1 }}>{a.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'var(--primary-color)', padding: '56px 20px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i} className="reveal fade-up" style={{ transitionDelay: `${i * 0.09}s`, color: '#fff' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 8, opacity: 0.8 }}><i className={s.icon}></i></div>
                <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1, fontFamily: 'var(--font-heading)' }}><Counter target={s.value} />{s.suffix}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: 6 }}>{s.label}</div>
                <div style={{ fontSize: '0.73rem', opacity: 0.5, marginTop: 4 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" style={{ padding: '100px 20px', background: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="section-badge reveal fade-up" style={{ marginBottom: 20, display: 'inline-block' }}>Our Story</span>
              <h2 className="reveal fade-up" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 1.2, marginBottom: 24, transitionDelay: '0.1s' }}>
                Fueling Brands With<br /><span style={{ color: 'var(--primary-color)' }}>Data-Backed</span> Innovation
              </h2>
              <p className="reveal fade-up" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85, marginBottom: 20, transitionDelay: '0.15s' }}>
                Founded in 2015 in Hyderabad, LearnSpace Digital was built with one mission: turn digital complexity into sustainable competitive advantage. We started with three people, a single laptop, and a conviction that data-driven marketing was still inaccessible to most businesses.
              </p>
              <p className="reveal fade-up" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85, marginBottom: 36, transitionDelay: '0.2s' }}>
                Eleven years later, we operate across four countries, manage $200M+ in combined client ad spend annually, and maintain a 98% retention rate — because our clients see predictable, compounding growth that transforms their entire business trajectory.
              </p>
              <div className="reveal fade-up" style={{ transitionDelay: '0.25s' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: 16 }}>Core Competencies</div>
                {capabilities.map((cap, i) => (
                  <div key={i} style={{ marginBottom: 14 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontSize: '0.83rem', fontWeight: 600, color: 'var(--text-main)' }}>{cap.name}</span>
                      <span style={{ fontSize: '0.83rem', fontWeight: 700, color: cap.color }}>{cap.level}%</span>
                    </div>
                    <div style={{ height: 5, background: 'var(--glass-bg)', borderRadius: 99, overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                      <div style={{ height: '100%', width: `${cap.level}%`, background: `linear-gradient(90deg, ${cap.color}, ${cap.color}aa)`, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal fade-left" style={{ transitionDelay: '0.2s', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: 'fa-rocket', val: '500+', label: 'Brands Served', sub: 'Since 2015', color: '#1565C0', bg: 'rgba(21,101,192,0.08)' },
                { icon: 'fa-globe', val: '15+', label: 'Countries', sub: 'Active client base', color: '#0288D1', bg: 'rgba(2,136,209,0.08)' },
                { icon: 'fa-sack-dollar', val: '$200M+', label: 'Ad Spend Managed', sub: 'Across all channels', color: '#29B6F6', bg: 'rgba(41,182,246,0.08)' },
                { icon: 'fa-users', val: '60+', label: 'Specialists', sub: 'Across 4 countries', color: '#6366F1', bg: 'rgba(99,102,241,0.08)' },
                { icon: 'fa-heart', val: '98%', label: 'Retention Rate', sub: 'Year over year', color: '#A855F7', bg: 'rgba(168,85,247,0.08)', span: true },
              ].map((card, i) => (
                <div key={i} className="reveal zoom-in" style={{ transitionDelay: `${0.15 + i * 0.08}s`, gridColumn: card.span ? 'span 2' : 'span 1', padding: '28px 24px', background: card.bg, border: `1px solid ${card.color}25`, borderRadius: 16, transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 40px ${card.color}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <i className={`fa-solid ${card.icon}`} style={{ fontSize: '1.2rem', color: card.color, marginBottom: 12, display: 'block' }}></i>
                  <div style={{ fontSize: card.span ? '2.2rem' : '1.8rem', fontWeight: 900, color: card.color, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{card.val}</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginTop: 6 }}>{card.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 3 }}>{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section style={{ padding: '100px 20px', background: 'var(--bg-soft-1)', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <span className="section-badge reveal fade-up" style={{ display: 'inline-block', marginBottom: 16 }}>Our Journey</span>
            <h2 className="section-title reveal fade-up">A Decade of Digital Excellence</h2>
            <p className="section-subtitle reveal fade-up" style={{ transitionDelay: '0.1s' }}>Five pivotal milestones that shaped who we are — and where we are going next.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 32, left: '10%', right: '10%', height: 2, background: 'linear-gradient(90deg, #6366F1, #0288D1, #26C6DA, #A855F7, #10B981)', borderRadius: 2, zIndex: 0 }} />
            {journey.map((item, idx) => (
              <div key={idx} className="reveal fade-up" style={{ transitionDelay: `${idx * 0.1}s`, position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: activeStage === idx ? item.color : '#fff', border: `3px solid ${item.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: activeStage === idx ? `0 0 0 8px ${item.color}20` : `0 4px 16px ${item.color}25`, transition: 'all 0.35s' }}>
                    <i className={`fa-solid ${item.icon}`} style={{ fontSize: '1.1rem', color: activeStage === idx ? '#fff' : item.color, transition: 'all 0.35s' }}></i>
                  </div>
                </div>
                <div style={{ padding: '20px 16px 24px', background: activeStage === idx ? '#fff' : 'transparent', border: `1px solid ${activeStage === idx ? item.color + '40' : 'transparent'}`, borderRadius: 16, boxShadow: activeStage === idx ? `0 16px 40px ${item.color}15` : 'none', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', margin: '0 6px' }}>
                  <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 50, background: `${item.color}15`, color: item.color, fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em', marginBottom: 10 }}>{item.year}</span>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: 8, color: 'var(--text-main)' }}>{item.title}</h4>
                  <div style={{ maxHeight: activeStage === idx ? 300 : 0, overflow: 'hidden', opacity: activeStage === idx ? 1 : 0, transform: activeStage === idx ? 'translateY(0)' : 'translateY(-10px)', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                    <div style={{ marginTop: 14, padding: '8px 14px', background: `${item.color}10`, borderRadius: 8, fontSize: '0.72rem', fontWeight: 700, color: item.color }}>
                      🏆 {item.kpi}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: '100px 20px', background: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, rgba(21,101,192,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 70px' }}>
            <span className="section-badge reveal fade-up" style={{ display: 'inline-block', marginBottom: 16 }}>Our Mission</span>
            <h2 className="section-title reveal fade-up">Transforming Ambition Into <span style={{ color: 'var(--primary-color)' }}>Digital Reality</span></h2>
            <p className="section-subtitle reveal fade-up" style={{ transitionDelay: '0.1s' }}>
              We empower businesses of every size with bold, data-backed strategies that create lasting competitive advantage — converting ambition into measurable, compounding revenue growth.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { icon: 'fa-rocket', title: 'Launch with Precision', desc: 'We architect digital entry strategies built for fast, targeted market penetration. Every channel, message, and touchpoint is calibrated to acquire your ideal customer at the lowest sustainable CAC.', color: '#1565C0', step: '01' },
              { icon: 'fa-chart-line', title: 'Scale with Intelligence', desc: 'Real-time analytics, systematic A/B testing, and ML-assisted optimisation ensure your performance does not plateau — it compounds. We convert data signals into revenue actions within 48 hours.', color: '#0288D1', step: '02' },
              { icon: 'fa-crown', title: 'Dominate Your Market', desc: 'Through multi-channel positioning, authority content, and strategic brand-building, we make your competitors irrelevant in the minds of your target audience. Not just visibility — category leadership.', color: '#29B6F6', step: '03' },
            ].map((p, i) => (
              <div key={i} className="reveal fade-up" style={{ transitionDelay: `${i * 0.1}s`, padding: '40px 36px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 20, backdropFilter: 'blur(16px)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = p.color + '55'; e.currentTarget.style.boxShadow = `0 24px 60px ${p.color}12`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ position: 'absolute', bottom: -10, right: 10, fontSize: '5rem', fontWeight: 900, color: p.color, opacity: 0.05, lineHeight: 1, userSelect: 'none', fontFamily: 'monospace' }}>{p.step}</div>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <i className={`fa-solid ${p.icon}`} style={{ fontSize: '1.3rem', color: p.color }}></i>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: 14, color: 'var(--text-main)' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.9rem', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '100px 20px', background: 'var(--bg-soft-1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <span className="section-badge reveal fade-up" style={{ display: 'inline-block', marginBottom: 16 }}>The Minds Behind LearnSpace</span>
            <h2 className="section-title reveal fade-up">Leadership That Drives Results</h2>
            <p className="section-subtitle reveal fade-up" style={{ transitionDelay: '0.1s' }}>Strategists, creatives, and data scientists united by one obsession: your growth.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {team.map((member, idx) => (
              <div key={idx} className="reveal fade-up" style={{ transitionDelay: `${idx * 0.1}s`, borderRadius: 24, overflow: 'hidden', background: '#fff', boxShadow: hoveredTeam === idx ? `0 32px 80px ${member.color}18` : '0 4px 24px rgba(0,0,0,0.07)', transition: 'all 0.4s', transform: hoveredTeam === idx ? 'translateY(-10px)' : 'none', cursor: 'pointer' }}
                onMouseEnter={() => setHoveredTeam(idx)}
                onMouseLeave={() => setHoveredTeam(null)}>
                <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.5s', transform: hoveredTeam === idx ? 'scale(1.06)' : 'scale(1)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: hoveredTeam === idx ? `linear-gradient(to top, ${member.color}cc 0%, transparent 55%)` : 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 55%)', transition: 'all 0.4s' }} />
                  <div style={{ position: 'absolute', bottom: 20, left: 24, right: 24, opacity: hoveredTeam === idx ? 1 : 0, transform: hoveredTeam === idx ? 'translateY(0)' : 'translateY(14px)', transition: 'all 0.4s' }}>
                    <p style={{ color: '#fff', fontSize: '0.88rem', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>"{member.quote}"</p>
                  </div>
                </div>
                <div style={{ padding: '28px 32px' }}>
                  <h4 style={{ margin: '0 0 4px', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-main)' }}>{member.name}</h4>
                  <p style={{ margin: '0 0 16px', color: member.color, fontWeight: 700, fontSize: '0.88rem' }}>{member.role}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'inline-block', padding: '5px 16px', borderRadius: 20, background: `${member.color}12`, color: member.color, fontSize: '0.78rem', fontWeight: 700 }}>{member.specialty}</span>
                    <a href={member.linkedin} style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: member.color, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.25s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = member.color; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--glass-bg)'; e.currentTarget.style.color = member.color; }}>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '100px 20px', background: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(21,101,192,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <span className="section-badge reveal fade-up" style={{ display: 'inline-block', marginBottom: 16 }}>What Drives Us</span>
            <h2 className="section-title reveal fade-up">Our Core Values</h2>
            <p className="section-subtitle reveal fade-up" style={{ transitionDelay: '0.1s' }}>The principles that guide every strategy, every campaign, every decision — every day.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {values.map((v, i) => (
              <div key={i} className="reveal fade-up" style={{ transitionDelay: `${i * 0.09}s`, padding: '40px 36px', borderRadius: 20, background: '#fff', borderTop: `4px solid ${v.color}`, boxShadow: activeValue === i ? `0 24px 60px ${v.color}18` : '0 4px 24px rgba(0,0,0,0.06)', transition: 'all 0.35s', transform: activeValue === i ? 'translateY(-6px)' : 'none', cursor: 'default' }}
                onMouseEnter={() => setActiveValue(i)}
                onMouseLeave={() => setActiveValue(null)}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `${v.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: v.color, marginBottom: 22 }}>
                  <i className={`fa-solid ${v.icon}`}></i>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: 12, color: 'var(--text-main)' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: 20 }}>{v.desc}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', background: `${v.color}10`, borderRadius: 50, fontSize: '0.78rem', fontWeight: 700, color: v.color }}>
                  <i className="fa-solid fa-circle-check" style={{ fontSize: '0.8rem' }}></i>
                  {v.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '100px 0', background: 'var(--bg-soft-1)', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: 60, padding: '0 20px' }}>
            <span className="section-badge reveal fade-up" style={{ display: 'inline-block', marginBottom: 16 }}>Client Love</span>
            <h2 className="section-title reveal fade-up">What Our Clients Say</h2>
            <p className="section-subtitle reveal fade-up" style={{ transitionDelay: '0.1s' }}>Real results. Real relationships. Real praise — from brands just like yours.</p>
          </div>
          <Marquee speed={40} pauseOnHover={true}>
            {reviews.map((review, idx) => (
              <div key={idx} style={{ minWidth: 340, maxWidth: 380, padding: '32px', background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: `1px solid ${review.color}18`, marginRight: 24, flexShrink: 0 }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 18 }}>
                  {[...Array(5)].map((_, i) => (<i key={i} className="fa-solid fa-star" style={{ color: '#F59E0B', fontSize: '0.85rem' }}></i>))}
                </div>
                <p style={{ color: 'var(--text-main)', lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic', fontSize: '0.88rem' }}>"{review.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: `linear-gradient(135deg, ${review.color}, ${review.color}aa)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>{review.avatar}</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>{review.name}</h4>
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{review.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 20px', background: 'linear-gradient(135deg, #0a0f1e 0%, #1565C0 50%, #0a0f1e 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(41,182,246,0.15) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: 720, position: 'relative', zIndex: 1 }}>
          <span className="reveal fade-up" style={{ display: 'inline-block', padding: '6px 20px', borderRadius: 50, background: 'rgba(255,255,255,0.1)', color: '#29B6F6', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>Start Today</span>
          <h2 className="reveal fade-up" style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, marginBottom: 20, lineHeight: 1.2, transitionDelay: '0.1s' }}>Ready to Scale Your Business?</h2>
          <p className="reveal fade-up" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', marginBottom: 48, lineHeight: 1.8, transitionDelay: '0.15s' }}>
            Join 500+ brands that trust LearnSpace Digital to deliver real, measurable growth. Book a free 45-minute strategy session — we will audit your current digital presence and show you exactly where the growth opportunities are hiding.
          </p>
          <div className="reveal fade-up" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '0.2s' }}>
            <Link to="/contact" style={{ padding: '16px 40px', borderRadius: 50, background: '#fff', color: 'var(--primary-color)', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', transition: 'all 0.25s', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'; }}>
              Book Free Strategy Call
            </Link>
            <Link to="/services" style={{ padding: '16px 40px', borderRadius: 50, border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', transition: 'all 0.25s', display: 'inline-block', background: 'rgba(255,255,255,0.05)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}>
              Explore Our Services →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
