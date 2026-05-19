import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

const Blog = () => {
  useReveal();

  const posts = [
    { id: 'seo-trends', title: "SEO Trends to Watch in 2026", cat: "SEO", desc: "Discover the latest algorithm updates and how to stay on top.", img: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80" },
    { id: 'youtube-shorts', title: "Mastering Youtube Shorts for Business", cat: "Social Media", desc: "How to leverage short-form video to explode your brand reach.", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80" },
    { id: 'content-funnel', title: "The Content Marketing Funnel", cat: "Strategy", desc: "Guide your customers from awareness to purchase effectively.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" },
    { id: 'email-automation', title: "Email Automation Best Practices", cat: "Email", desc: "Increase your open rates and conversions with personalized tripwires.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" },
    { id: 'visual-identity', title: "Visual Identity that Converts", cat: "Branding", desc: "Why color psychology matters more than you think in 2026.", img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80" },
    { id: 'voice-search', title: "The Rise of Voice Search", cat: "Technology", desc: "Is your website ready for the conversational search revolution?", img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <main>
      <section id="blog" className="blog reveal mesh-gradient" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="blog-featured reveal fade-in-up" style={{ marginBottom: '60px' }}>
            <div className="featured-card">
              <div className="featured-img">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Featured" />
              </div>
              <div className="featured-content">
                <span className="blog-cat">Featured</span>
                <h2 className="reveal slide-in-left">The Future of AI in Digital Marketing: Trends for 2026</h2>
                <p style={{ color: 'var(--text-muted)', margin: '20px 0' }}>
                  Artificial intelligence is no longer just a buzzword. Explore how deep learning and generative models are reshaping customer acquisition and personalization strategies.
                </p>
                <Link to="/blog/seo-trends" className="btn btn-primary magnetic" style={{ alignSelf: 'flex-start' }}>Read Full Insight</Link>
              </div>
            </div>
          </div>

          <h2 className="section-title">Latest Insights</h2>
          <p className="section-subtitle">Stay ahead of the curve with our marketing tips.</p>

          <div className="blog-grid-modern stagger-container">
            {posts.map((post, idx) => (
              <div key={idx} className="blog-card reveal fade-in-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="blog-img"><img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                <div className="blog-content">
                  <span className="blog-cat">{post.cat}</span>
                  <h4>{post.title}</h4>
                  <p style={{ color: 'var(--text-muted)', margin: '10px 0' }}>{post.desc}</p>
                  <Link to={`/blog/${post.id}`} style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>Read More &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
