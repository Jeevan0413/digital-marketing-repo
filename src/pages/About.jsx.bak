import React, { useEffect, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';
import '../assets/styles/about.css';

const reviews = [
  { name: "Georgia Voll", role: "CEO, TechFlow", stars: 5, text: "Elevate Digital completely transformed our online presence. Our leads have tripled in just 3 months!" },
  { name: "Stephen Hawking", role: "Founder, UrbanWear", stars: 5, text: "Professional, responsive, and results-driven. These guys know what they are doing. Highly recommended." },
  { name: "Ellyse Perry", role: "Director, GreenSpace", stars: 4.5, text: "The ROI we've seen from their PPC campaigns has been incredible. Best investment we've made this year." },
  { name: "Lauren Bell", role: "Marketing Director, NextGen", stars: 5, text: "Our traffic has increased by 200% since we started working with them. The team is knowledgeable and responsive." },
  { name: "David Warner", role: "Founder, EcoLife", stars: 5, text: "Finally an agency that understands our niche market. Their content strategy is spot on." },
  { name: "James Anderson", role: "CEO, Sparkly", stars: 5, text: "The best digital marketing agency we've ever worked with. Their attention to detail is second to none." }
];

const About = () => {
  useReveal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
  ];

  const journey = [
    { year: "2015", title: "The Beginning", desc: "LearnSpace Digital was founded in a small garage in Hyderabad, starting with a vision to revolutionize digital growth." },
    { year: "2018", title: "First 100 Clients", desc: "Reached a major milestone and expanded our team to 20 experts, moving to our first official headquarters." },
    { year: "2021", title: "Global Expansion", desc: "Opened our first international office and launched our proprietary SaaS platform for data-driven marketing." },
    { year: "2026", title: "Industry Leader", desc: "Recognized as the #1 boutique marketing agency for ROI-driven strategies, serving clients worldwide." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const moveSlider = (direction) => {
    setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
  };

  const puzzleSceneRef = useRef(null);
  const [isPuzzleActive, setIsPuzzleActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsPuzzleActive(true);
      }
    }, { threshold: 0.2 });

    if (puzzleSceneRef.current) {
      observer.observe(puzzleSceneRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero-v2 reveal zoom-in mesh-gradient" style={{ minHeight: '40vh', padding: '120px 10px' }}>
        <div className="container hero-v2-container">
          <div className="hero-v2-card">
            <span className="badge">Our Impact</span>
            <h1>Results That Speak <span className="highlight gradient-text">Volumes</span></h1>
            <p>Explore how we've helped diverse businesses scale their presence and smash their growth targets through data-driven creativity.</p>
          </div>
        </div>
      </section>

      <section id="story" className="split-section" style={{ padding: '140px 0', position: 'relative', zIndex: 1, background: '#fff', overflow: 'hidden' }}>
        <div className="bg-glow" style={{ position: 'absolute', top: '10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)', zIndex: -1 }}></div>
        <div className="split-container">
          <div className="split-content-side stagger-container">
            <h2 className="display-title stagger-fade-item" style={{ color: '#E2E8F0', fontSize: '4.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '0' }}>Fueling Brands with</h2>
            <h2 className="display-title stagger-fade-item" style={{ fontSize: '5rem', fontWeight: 900, marginTop: '-10px', marginBottom: '40px' }}>
              <span className="highlight" style={{ background: 'linear-gradient(90deg, #6366F1, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Innovation</span>
            </h2>
            
            <p className="lead-text stagger-fade-item" style={{ color: '#64748B', fontSize: '1.2rem', maxWidth: '550px', marginBottom: '25px' }}>
              Founded in 2015, LearnSpace Digital emerged with a single mission: to empower businesses by navigating the complexities of the digital landscape with clarity and creativity.
            </p>
            <p className="stagger-fade-item" style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '550px', lineHeight: 1.8, marginBottom: '50px' }}>
              By combining deep-dive data analytics with boundary-pushing creative vision, we help brands find their authentic voice in a crowded marketplace.
            </p>

            <div className="floating-cards-container stagger-fade-item" style={{ height: 'auto', marginTop: '0' }}>
              <div className="float-card highlight-card" style={{ 
                position: 'relative', 
                width: '340px', 
                padding: '30px 35px', 
                borderRadius: '28px', 
                background: 'linear-gradient(135deg, #818CF8 0%, #A855F7 100%)',
                boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div className="float-icon" style={{ 
                  background: 'rgba(255, 255, 255, 0.2)', 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#fff'
                }}>
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className="float-info" style={{ color: '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1 }}><Counter target={98} /></span>
                  </div>
                  <span style={{ fontSize: '1rem', fontWeight: 600, opacity: 0.9 }}>% Client Love</span>
                </div>
              </div>
            </div>
          </div>

          <div className="split-image-side">
            <div className="parallax-wrapper">
              <div className="parallax-img-container legacy-slider">
                <div className="slider-wrapper">
                  {slides.map((src, idx) => (
                    <img key={idx} src={src} alt="Slider" className={`parallax-element ${idx === currentSlide ? 'active' : ''}`} />
                  ))}
                </div>
                <button className="slider-btn prev-btn" onClick={() => moveSlider(-1)}><i className="fa-solid fa-arrow-left"></i></button>
                <button className="slider-btn next-btn" onClick={() => moveSlider(1)}><i className="fa-solid fa-arrow-right"></i></button>
              </div>
              <div className="experience-badge">
                <span className="exp-number"><Counter target={10} /></span>
                <span className="exp-text">Years Of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="mission-section bg-soft-1">
        <div className="mission-container">
          <div className="mission-visual-side">
            <div className="rocket-container">
              <div className="rocket-graphic">
                <svg width="200" height="280" viewBox="0 0 200 280" fill="none">
                  <path d="M50 180L10 240H60L50 180Z" fill="var(--neon-purple)" stroke="var(--neon-purple)" strokeWidth="2" />
                  <path d="M150 180L190 240H140L150 180Z" fill="var(--neon-purple)" stroke="var(--neon-purple)" strokeWidth="2" />
                  <path d="M60 90C60 40 100 0 100 0C100 0 140 40 140 90V220H60V90Z" fill="white" stroke="var(--primary-color)" strokeWidth="4" />
                  <path d="M60 90C60 40 100 0 100 0C100 0 140 40 140 90H60Z" fill="var(--neon-cyan)" stroke="var(--neon-cyan)" strokeWidth="2" />
                  <circle cx="100" cy="115" r="28" fill="#e0e7ff" stroke="var(--primary-color)" strokeWidth="3" />
                </svg>
              </div>
              <div className="smoke-base">
                <svg width="300" height="100" viewBox="0 0 300 100" fill="none">
                  <path d="M0 100C0 70 30 50 70 50C100 50 120 70 140 70C160 70 180 40 210 40C240 40 270 60 300 60V100H0Z" fill="var(--neon-emerald)" fillOpacity="0.8" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mission-text-side">
            <span className="badge" style={{ marginBottom: '20px' }}>Our mission</span>
            <h2>Transforming Ambition Into <span className="highlight">Digital Reality</span></h2>
            <p>Our mission is to empower businesses of every size with bold, data-backed digital strategies that create lasting impact — turning vision into measurable growth.</p>
            <div className="mission-pillars">
              <div className="pillar-item"><i className="fa-solid fa-rocket"></i><h4>Launch</h4><p>Accelerating brands with innovative digital entry strategies.</p></div>
              <div className="pillar-item"><i className="fa-solid fa-chart-line"></i><h4>Scale</h4><p>Ensuring sustainable growth through data analytics.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section bg-soft-1 reveal fade-in-up" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">How we became a leader in digital marketing.</p>
          <div className="funnel-journey-wrapper">
            <div className="funnel-viz-container">
              <div className="funnel-viz">
                {journey.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`funnel-stage stage-${idx} ${activeStage === idx ? 'active' : ''}`}
                    onClick={() => setActiveStage(idx)}
                  >
                    <div className="funnel-ring"></div>
                    <div className="stage-label"><i className="fa-solid fa-arrow-down"></i></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="funnel-menu">
              {journey.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`funnel-item ${activeStage === idx ? 'active' : ''}`}
                  onClick={() => setActiveStage(idx)}
                >
                  <div className="funnel-item-header">
                    <span className="funnel-year">{item.year}</span>
                    <h4>{item.title}</h4>
                  </div>
                  <div className="funnel-item-content">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="team-section reveal bg-soft-1" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title">The Minds Behind LearnSpace</h2>
          <p className="section-subtitle">Meet our leadership team of industry experts.</p>
          <div className="team-grid">
            {[
              { name: "Raghu Vamshi", role: "Founder & CEO", img: "https://www.shutterstock.com/image-illustration/ceo-icon-manager-illustartion-600nw-1857126589.jpg" },
              { name: "Varalaxmi", role: "Head of Strategy & COO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXea5d-MNkRufdRao2cItjnxVtTn9xkP1j1yocFmPgQ&s" },
              { name: "shridhar kulkarni", role: "Creative Director", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlxzr_XTrP3GHTNMhvQcfIbSfBLrq0A5XBw&s" }
            ].map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-img"><img src={member.img} alt={member.name} /></div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <span className="team-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section bg-soft-2" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-row-container">
            <div className="values-puzzle-col">
              <div className={`puzzle-scene ${isPuzzleActive ? 'active' : ''}`} ref={puzzleSceneRef}>
                <div className="puzzle-svg-wrap">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`puzzle-piece piece-${i}`}>
                      <svg width="175" height="175" viewBox="0 0 175 175" fill="none">
                        <path d="M 0,0 H 160 V 65 Q 175,65 175,80 Q 175,95 160,95 V 160 H 95 Q 95,175 80,175 Q 65,175 65,160 H 0 V 0 Z" fill={i % 2 === 0 ? "var(--neon-cyan)" : "none"} stroke="var(--neon-purple)" strokeWidth="3.5" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="values-cards-col">
              <div className="values-grid">
                <div className="value-card"><h3>Passion</h3><p>We love what we do, and it shows in the energy we bring to every client project.</p></div>
                <div className="value-card"><h3>Precision</h3><p>Every pixel, every word, and every line of code is crafted with meticulous attention to detail.</p></div>
                <div className="value-card"><h3>Performance</h3><p>We are obsessed with results. If it doesn't move the needle, we don't do it.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials reveal bg-soft-1" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
          <h2 className="section-title" style={{ padding: '0 20px' }}>Client Feedback</h2>
          <p className="section-subtitle" style={{ padding: '0 20px' }}>Don't just take our word for it.</p>
          
          <Marquee speed={40} pauseOnHover={true}>
            {reviews.map((review, idx) => (
              <div key={idx} className="review-card" style={{ width: '400px', flexShrink: 0, opacity: 1, transform: 'none' }}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fa-solid fa-star ${i >= review.stars ? 'fa-star-half-stroke' : ''}`}></i>
                  ))}
                </div>
                <p>"{review.text}"</p>
                <div className="client-info">
                  <div>
                    <h4>{review.name}</h4>
                    <small className="text-muted">{review.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </main>
  );
};

export default About;
