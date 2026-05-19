import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

const categories = ["All", "SEO", "Social Media", "Strategy", "Email", "Branding", "Technology", "AI"];

const posts = [
  { id: 'seo-trends', title: "SEO Trends to Watch in 2026", cat: "SEO", readTime: "6 min read", date: "May 8, 2026", desc: "Google's AI Overviews are reshaping the SERP. Discover how to adapt your content strategy for zero-click searches, entity optimization, and the rise of semantic SEO.", img: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80", author: "Raghu Vamshi", tags: ["Algorithm", "Keywords", "Rankings"] },
  { id: 'youtube-shorts', title: "Mastering YouTube Shorts for B2B Growth", cat: "Social Media", readTime: "5 min read", date: "Apr 29, 2026", desc: "Short-form video isn't just for D2C brands. Learn how B2B companies are generating qualified leads through 60-second educational content that converts.", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80", author: "Varalaxmi", tags: ["Video", "B2B", "Leads"] },
  { id: 'content-funnel', title: "The High-Converting Content Funnel", cat: "Strategy", readTime: "8 min read", date: "Apr 15, 2026", desc: "Most content fails because it targets the wrong stage. This deep-dive framework shows you how to map every piece of content to a buyer journey stage and drive real conversions.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", author: "Shridhar Kulkarni", tags: ["Funnel", "Conversion", "Content"] },
  { id: 'email-automation', title: "Email Automation Sequences That Actually Work", cat: "Email", readTime: "7 min read", date: "Apr 4, 2026", desc: "Stop sending bland drip sequences. We break down the psychology behind open rates and share 5 automation templates that consistently deliver 40%+ open rates.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", author: "Raghu Vamshi", tags: ["Automation", "Open Rate", "Sequences"] },
  { id: 'visual-identity', title: "Visual Identity That Converts in 2026", cat: "Branding", readTime: "5 min read", date: "Mar 24, 2026", desc: "Color psychology, typography hierarchy, and motion design are the new conversion levers. Explore how brand visual systems directly impact purchase confidence and trust.", img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80", author: "Shridhar Kulkarni", tags: ["Branding", "Design", "Trust"] },
  { id: 'voice-search', title: "The Rise of Voice & Conversational Search", cat: "Technology", readTime: "6 min read", date: "Mar 10, 2026", desc: "40% of searches are now voice-initiated. Is your SEO strategy built for how people speak, not just type? Learn how to optimize for conversational queries and featured snippets.", img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80", author: "Varalaxmi", tags: ["Voice", "AI", "Featured Snippets"] },
];

const Blog = () => {
  useReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filtered = posts.filter(p => {
    const matchesCat = activeCategory === "All" || p.cat === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main>
      {/* HERO */}
      <section className="mesh-gradient" style={{ padding: '140px 20px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '15%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(2,136,209,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="section-badge reveal fade-up" style={{ marginBottom: '20px' }}>Digital Marketing Insights</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.2, marginBottom: '24px', color: 'var(--text-main)' }}>
            Insights That <span className="highlight gradient-text">Move the Needle</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 40px' }}>
            No fluff, no filler. Expert-written articles on SEO, paid media, content strategy, and the technologies reshaping digital marketing in 2026.
          </p>
          {/* Search Bar */}
          <div style={{ position: 'relative', maxWidth: '520px', margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '18px 24px 18px 56px', borderRadius: '50px', border: '2px solid rgba(21,101,192,0.15)', background: '#fff', fontSize: '1rem', color: 'var(--text-main)', outline: 'none', boxShadow: '0 8px 32px rgba(21,101,192,0.08)', boxSizing: 'border-box' }}
            />
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-color)', fontSize: '1rem' }}></i>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section style={{ padding: '0 20px 60px', background: '#fff' }}>
        <div className="container">
          <div className="blog-featured-card">
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Featured" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'} />
              <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                <span style={{ padding: '6px 16px', borderRadius: '20px', background: 'linear-gradient(135deg, #6366F1, #A855F7)', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>✦ Featured</span>
              </div>
            </div>
            <div style={{ padding: '52px 52px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ padding: '4px 12px', borderRadius: '12px', background: 'rgba(2,136,209,0.08)', color: 'var(--primary-color)', fontSize: '0.8rem', fontWeight: 700 }}>AI & Marketing</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>May 12, 2026 · 10 min read</span>
              </div>
              <h2 style={{ fontSize: '2rem', lineHeight: 1.2, marginBottom: '20px', color: 'var(--text-main)' }}>The Future of AI in Digital Marketing: What's Actually Working in 2026</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                Generative AI has moved from buzzword to boardroom. We break down how deep learning and predictive models are reshaping customer acquisition, hyper-personalization, and campaign automation — with real case studies.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #0288D1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>RV</div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Raghu Vamshi</span>
                </div>
                <Link to="/blog/seo-trends" className="btn btn-primary magnetic" style={{ padding: '12px 28px', fontSize: '0.9rem' }}>Read Full Article →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ padding: '20px 20px 80px', background: 'var(--bg-dark-slate)' }}>
        <div className="container">
          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ padding: '10px 22px', borderRadius: '50px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem', background: activeCategory === cat ? 'var(--primary-color)' : '#fff', color: activeCategory === cat ? '#fff' : 'var(--text-muted)', boxShadow: activeCategory === cat ? '0 8px 24px rgba(21,101,192,0.25)' : '0 2px 8px rgba(0,0,0,0.06)', transition: 'all 0.25s', transform: activeCategory === cat ? 'scale(1.04)' : 'none' }}>
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--text-muted)' }}>
              <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '3rem', marginBottom: '16px', opacity: 0.3 }}></i>
              <p style={{ fontSize: '1.1rem' }}>No articles found matching your search. Try different keywords.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
              {filtered.map((post, idx) => (
                <div key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ borderRadius: '20px', overflow: 'hidden', background: '#fff', boxShadow: hoveredCard === idx ? '0 20px 60px rgba(21,101,192,0.12)' : '0 4px 20px rgba(0,0,0,0.06)', transition: 'all 0.35s', transform: hoveredCard === idx ? 'translateY(-6px)' : 'none' }}>
                  <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', transform: hoveredCard === idx ? 'scale(1.06)' : 'none' }} />
                    <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                      <span style={{ padding: '5px 14px', borderRadius: '14px', background: 'rgba(21,101,192,0.85)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, backdropFilter: 'blur(8px)' }}>{post.cat}</span>
                    </div>
                  </div>
                  <div style={{ padding: '24px 28px 28px' }}>
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}><i className="fa-solid fa-calendar" style={{ marginRight: '5px' }}></i>{post.date}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}><i className="fa-solid fa-clock" style={{ marginRight: '5px' }}></i>{post.readTime}</span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text-main)', lineHeight: 1.4 }}>{post.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>{post.desc}</p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                      {post.tags.map(tag => (
                        <span key={tag} style={{ padding: '3px 10px', borderRadius: '10px', background: 'rgba(99,102,241,0.07)', color: '#6366F1', fontSize: '0.75rem', fontWeight: 600 }}>#{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #0288D1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.7rem' }}>
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} style={{ color: 'var(--primary-color)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <div style={{ marginTop: '60px', padding: '40px 52px', borderRadius: '28px', background: 'linear-gradient(135deg, var(--primary-color) 0%, #6366F1 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '280px', height: '280px', background: 'rgba(255,255,255,0.04)', borderRadius: '50%', pointerEvents: 'none' }} />
            <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '12px', position: 'relative' }}>Get Weekly Marketing Intelligence</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '1rem', position: 'relative' }}>Join 12,000+ marketers who get our weekly digest of actionable insights, case studies, and industry news.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
              <input type="email" placeholder="Enter your work email" style={{ padding: '14px 24px', borderRadius: '50px', border: 'none', fontSize: '0.95rem', width: '300px', outline: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }} />
              <button className="btn" style={{ padding: '14px 32px', borderRadius: '50px', background: '#fff', color: 'var(--primary-color)', fontWeight: 800, border: 'none', cursor: 'pointer', fontSize: '0.95rem', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                Subscribe Free
              </button>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', marginTop: '16px', position: 'relative' }}>No spam. Unsubscribe anytime. Read by 12,000+ marketers.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
