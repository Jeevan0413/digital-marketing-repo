import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import Counter from '../components/Counter';

const services = [
  {
    id: 'seo-optimization',
    icon: 'fa-magnifying-glass-chart',
    tag: 'Organic Growth',
    title: 'SEO Optimization',
    desc: 'Dominate search engine results with a full-stack SEO strategy — from technical audits to authority building — that compounds traffic month over month.',
    features: ['Comprehensive Keyword Research', 'Technical SEO & Core Web Vitals', 'Backlink Building Strategies', 'Local SEO & Google Maps'],
    stat: '+320%', statLabel: 'Avg. Traffic Lift', color: '#1565C0', gradient: 'linear-gradient(135deg, #1565C0, #0288D1)'
  },
  {
    id: 'social-media-marketing',
    icon: 'fa-share-nodes',
    tag: 'Brand Awareness',
    title: 'Social Media Marketing',
    desc: 'Build vibrant communities, spark meaningful engagement, and drive measurable ROI across Instagram, LinkedIn, Facebook and TikTok.',
    features: ['Content Strategy & Calendars', 'Community Management', 'Influencer Partnerships', 'Paid Social Campaigns'],
    stat: '2.1M+', statLabel: 'Monthly Reach', color: '#E1306C', gradient: 'linear-gradient(135deg, #E1306C, #F77737)'
  },
  {
    id: 'ppc-advertising',
    icon: 'fa-bullhorn',
    tag: 'Instant Results',
    title: 'PPC Advertising',
    desc: 'Generate high-intent leads instantly with precision-targeted Google Ads, Meta and LinkedIn campaigns that maximize every rupee of ad spend.',
    features: ['Google Ads & Search Marketing', 'Retargeting & Remarketing', 'Conversion Rate Optimization', 'Detailed Performance Audits'],
    stat: '4.8x', statLabel: 'Avg. ROAS', color: '#0288D1', gradient: 'linear-gradient(135deg, #0288D1, #26C6DA)'
  },
  {
    id: 'content-marketing',
    icon: 'fa-pen-nib',
    tag: 'Authority Building',
    title: 'Content Marketing',
    desc: 'Strategic storytelling through blogs, whitepapers, and video scripts that educates your audience, earns trust, and converts at every funnel stage.',
    features: ['Blog Posts & Article Writing', 'Whitepapers & E-books', 'Video Scripting & Production', 'Content Distribution Plans'],
    stat: '3x', statLabel: 'Lead Quality Boost', color: '#5C6BC0', gradient: 'linear-gradient(135deg, #5C6BC0, #7E57C2)'
  },
  {
    id: 'email-marketing',
    icon: 'fa-envelope-open-text',
    tag: 'Retention & Nurture',
    title: 'Email Marketing',
    desc: 'Personalized automation, behavioral segmentation, and A/B-optimized campaigns that keep your audience engaged and your revenue growing on autopilot.',
    features: ['Automated Drip Campaigns', 'List Segmentation & Tagging', 'Custom Newsletter Design', 'A/B Testing & Analysis'],
    stat: '42%', statLabel: 'Avg. Open Rate', color: '#00BCD4', gradient: 'linear-gradient(135deg, #00BCD4, #26C6DA)'
  },
  {
    id: 'web-design',
    icon: 'fa-code',
    tag: 'Conversion Design',
    title: 'Web Design & CRO',
    desc: 'High-converting, mobile-first websites built for speed, UX, and measurable conversion uplift — from landing pages to full e-commerce platforms.',
    features: ['Custom UI/UX Design', 'Responsive Web Applications', 'E-commerce Solutions', 'Speed & Performance Tuning'],
    stat: '+68%', statLabel: 'Conversion Rate', color: '#26C6DA', gradient: 'linear-gradient(135deg, #26C6DA, #4FC3F7)'
  }
];

const stats = [
  { value: 500, suffix: '+', label: 'Clients Served', icon: 'fa-users' },
  { value: 98, suffix: '%', label: 'Client Retention', icon: 'fa-heart' },
  { value: 11, suffix: ' yrs', label: 'Industry Experience', icon: 'fa-award' },
  { value: 12, suffix: 'M+', label: 'Revenue Generated', icon: 'fa-sack-dollar' },
];

const caseStudies = [
  { name: 'TechFlow', type: 'SaaS PPC Campaign', stats: [{ label: 'Leads', value: 150, prefix: '+' }, { label: 'CPA', value: 30, prefix: '-' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', tag: 'PPC' },
  { name: 'UrbanMarket', type: 'Local Search Strategy', stats: [{ label: 'Ranking', value: 3, prefix: 'Top ' }, { label: 'Visits', value: 200, prefix: '+' }], img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', tag: 'SEO' },
  { name: 'GreenSpace', type: 'E-Commerce Growth', stats: [{ label: 'ROAS', value: 4.5, prefix: '' }, { label: 'Sales', value: 50, prefix: '$' }], img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', tag: 'Social' },
  { name: 'NexusAI', type: 'Growth Marketing', stats: [{ label: 'Growth', value: 250, prefix: '+' }, { label: 'Users', value: 500, prefix: '+' }], img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80', tag: 'Content' },
  { name: 'FoodDash', type: 'App Performance', stats: [{ label: 'Load Time', value: 2, prefix: '' }, { label: 'Orders', value: 1000, prefix: '+' }], img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80', tag: 'Web' },
  { name: 'FitCore', type: 'Social Engagement', stats: [{ label: 'Followers', value: 300, prefix: '+' }, { label: 'Engagement', value: 15, prefix: '' }], img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80', tag: 'Social' },
];

const team = [
  { name: 'Raghu Vamshi', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', desc: 'Visionary leader with 11+ years driving digital strategy for global brands.' },
  { name: 'Varalaxmi', role: 'Head of Strategy & COO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', desc: 'Operations maestro ensuring every campaign runs on time, on budget, and over target.' },
  { name: 'Shridhar Kulkarni', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80', desc: 'Award-winning designer translating brand stories into striking digital experiences.' },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  useReveal([activeTab]);
  const [activeIndex, setActiveIndex] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const displayStudies = [...caseStudies, ...caseStudies, ...caseStudies];

  const nextSlide = useCallback(() => {
    setActiveIndex(prev => prev + 1);
  }, []);

  const prevSlide = () => setActiveIndex(prev => prev - 1);

  useEffect(() => {
    if (activeIndex === caseStudies.length * 2) {
      setTimeout(() => setActiveIndex(caseStudies.length), 600);
    } else if (activeIndex === caseStudies.length - 1) {
      setTimeout(() => setActiveIndex(caseStudies.length * 2 - 1), 600);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const tabs = [
    { key: 'all', label: 'All Services', icon: 'fa-th-large' },
    { key: 'seo-optimization', label: 'SEO', icon: 'fa-magnifying-glass-chart' },
    { key: 'social-media-marketing', label: 'Social Media', icon: 'fa-share-nodes' },
    { key: 'ppc-advertising', label: 'PPC Ads', icon: 'fa-bullhorn' },
    { key: 'content-marketing', label: 'Content', icon: 'fa-pen-nib' },
    { key: 'email-marketing', label: 'Email', icon: 'fa-envelope-open-text' },
    { key: 'web-design', label: 'Web Design', icon: 'fa-code' },
  ];

  const filteredServices = activeTab === 'all' ? services : services.filter(s => s.id === activeTab);

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="svc-hero">
        <div className="container">
          <div className="svc-hero-inner">
            <span className="svc-hero-badge"><i className="fa-solid fa-rocket"></i> Full-Service Digital Agency</span>
            <h1 className="svc-hero-title">Services Built to <span className="gradient-text">Grow Your Business</span></h1>
            <p className="svc-hero-sub">From search to social, content to conversion — every service is engineered for one outcome: measurable, compounding growth.</p>
            <div className="svc-hero-ctas">
              <Link to="/contact" className="btn btn-primary magnetic">Book a Free Strategy Call</Link>
              <a href="#services-grid" className="btn btn-outline">Explore Services</a>
            </div>
          </div>
          {/* Floating stat pills */}
          <div className="svc-hero-stats">
            {stats.map((s, i) => (
              <div key={i} className="svc-stat-pill">
                <i className={`fa-solid ${s.icon}`}></i>
                <div>
                  <strong><Counter target={s.value} />{s.suffix}</strong>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE TABS & CARDS ─────────────────────── */}
      <section id="services-grid" className="svc-main-section bg-soft-2">
        <div className="container">
          <div className="svc-section-head reveal fade-up">
            <span className="section-badge">Our Services</span>
            <h2 className="section-title">What We Do Best</h2>
            <p className="section-subtitle">Click any service to explore in depth — or view all at once.</p>
          </div>

          {/* Tab Filter */}
          <div className="svc-tabs reveal fade-up">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`svc-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <i className={`fa-solid ${tab.icon}`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="svc-cards-grid">
            {filteredServices.map((service, idx) => (
              <div key={service.id} className="svc-card reveal fade-up" style={{ '--card-color': service.color, '--card-gradient': service.gradient, animationDelay: `${idx * 0.08}s` }}>
                <div className="svc-card-top">
                  <div className="svc-card-icon" style={{ background: service.gradient }}>
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  <span className="svc-card-tag">{service.tag}</span>
                </div>
                <h3 className="svc-card-title">{service.title}</h3>
                <p className="svc-card-desc">{service.desc}</p>
                <ul className="svc-card-features">
                  {service.features.map((f, i) => (
                    <li key={i}><i className="fa-solid fa-check"></i>{f}</li>
                  ))}
                </ul>
                <div className="svc-card-footer">
                  <div className="svc-card-stat">
                    <strong>{service.stat}</strong>
                    <span>{service.statLabel}</span>
                  </div>
                  <Link to={`/services/${service.id}`} className="svc-card-btn">
                    Explore <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ─────────────────────────────── */}
      <section className="svc-process-section bg-soft-1">
        <div className="container">
          <div className="svc-section-head reveal fade-up">
            <span className="section-badge">How We Work</span>
            <h2 className="section-title">Our Proven Process</h2>
            <p className="section-subtitle">A repeatable framework that turns your goals into measurable outcomes.</p>
          </div>
          <div className="svc-process-steps">
            {[
              { num: '01', icon: 'fa-binoculars', title: 'Discovery & Audit', desc: 'We deep-dive into your brand, competitors, and digital footprint to uncover gaps and prioritise the highest-impact opportunities.' },
              { num: '02', icon: 'fa-map', title: 'Strategy Blueprint', desc: 'A bespoke growth roadmap — channels, KPIs, timelines and budget allocation all aligned to your specific business goals.' },
              { num: '03', icon: 'fa-rocket', title: 'Execute & Launch', desc: 'Our specialists activate campaigns, create high-quality assets, and deploy tech integrations with precision and speed.' },
              { num: '04', icon: 'fa-chart-line', title: 'Optimise & Scale', desc: 'Continuous A/B testing, analytics reviews, and iteration ensure your results compound month over month.' },
            ].map((step, i) => (
              <div key={i} className="svc-process-step reveal fade-up" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="svc-step-number">{step.num}</div>
                <div className="svc-step-icon"><i className={`fa-solid ${step.icon}`}></i></div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < 3 && <div className="svc-step-connector"><i className="fa-solid fa-arrow-right"></i></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES CAROUSEL ────────────────────── */}
      <section className="svc-cases-section bg-soft-2" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="container">
          <div className="svc-section-head reveal fade-up">
            <span className="section-badge">Success Stories</span>
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Real results delivered for real businesses across every industry.</p>
          </div>
          <div className="story-carousel-container" style={{ position: 'relative' }}>
            <div className="carousel-viewport" style={{ overflow: 'visible', width: '100%', position: 'relative', height: '500px', display: 'flex', alignItems: 'center' }}>
              <div className="portfolio-grid" style={{
                position: 'absolute', left: '50%',
                '--active-index': activeIndex,
                transition: (activeIndex === caseStudies.length || activeIndex === caseStudies.length * 2 - 1) ? 'none' : undefined,
                display: 'flex', width: 'max-content'
              }}>
                {displayStudies.map((study, idx) => (
                  <div key={idx} className={`project-card ${idx % caseStudies.length === activeIndex % caseStudies.length ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    style={{ opacity: idx % caseStudies.length === activeIndex % caseStudies.length ? 1 : 0.55 }}>
                    <img src={study.img} alt={study.name} className="project-bg" />
                    <div className="project-overlay">
                      <span className="project-tag">{study.tag}</span>
                      <h3>{study.name}</h3>
                      <p>{study.type}</p>
                      <div className="project-stats">
                        {study.stats.map((s, i) => (
                          <span key={i} className="proj-stat">
                            {s.prefix}<Counter target={s.value} />{s.label === 'Sales' || s.label === 'Orders' || s.label === 'Followers' ? 'k' : ''} {s.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-nav prev" onClick={prevSlide}><i className="fa-solid fa-chevron-left"></i></button>
            <button className="carousel-nav next" onClick={nextSlide}><i className="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────── */}
      <section className="svc-team-section bg-soft-1">
        <div className="container">
          <div className="svc-section-head reveal fade-up">
            <span className="section-badge">Our Team</span>
            <h2 className="section-title">The Minds Behind LearnSpace</h2>
            <p className="section-subtitle">Seasoned specialists who live and breathe digital marketing.</p>
          </div>
          <div className="svc-team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="svc-team-card reveal fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="svc-team-img">
                  <img src={member.img} alt={member.name} style={{ objectPosition: 'top' }} />
                  <div className="svc-team-overlay"></div>
                </div>
                <div className="svc-team-info">
                  <h4>{member.name}</h4>
                  <span className="svc-team-role">{member.role}</span>
                  <p>{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="svc-cta-section">
        <div className="container">
          <div className="svc-cta-inner reveal fade-up">
            <div className="svc-cta-text">
              <h2>Ready to Accelerate Your Growth?</h2>
              <p>Get a free, no-obligation digital audit and discover exactly where your biggest opportunities lie.</p>
            </div>
            <div className="svc-cta-actions">
              <Link to="/contact" className="btn btn-primary">Get Free Audit <i className="fa-solid fa-arrow-right"></i></Link>
              <a href="https://wa.me/1234567890" className="svc-cta-whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
