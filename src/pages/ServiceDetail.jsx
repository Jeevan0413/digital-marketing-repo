import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import Counter from '../components/Counter';

const serviceData = {
  'seo-optimization': {
    title: 'SEO Optimization',
    badge: 'Advanced SEO Strategies',
    heroH1: 'Command the First Page with Search Excellence',
    heroP: 'We combine technical precision with creative strategy to build digital authority that lasts. Stop being found; start being chosen.',
    heroImg: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    pillarsTitle: 'The Three Pillars of SEO Success',
    pillars: [
      { title: 'Semantic Intelligence', icon: 'fa-magnifying-glass-chart', desc: 'Beyond keywords. We map user intent to your content, ensuring you capture high-value traffic ready to convert.' },
      { title: 'Technical Dominance', icon: 'fa-microchip', desc: 'From Core Web Vitals to Schema Markup architecture, we build a foundation that search engines love.' },
      { title: 'Authority Building', icon: 'fa-shield-halved', desc: 'We earn high-quality digital footprints through premium content and strategic PR, cementing your market leadership.' }
    ],
    processTitle: 'How SEO Helps Digital Marketing',
    processImg: 'https://images.openai.com/static-rsc-3/yb_UKRqqpt2Ec-Dc1e_W4GlTe43vgWtOIMw0TNyOy-v22wBCfF71u_SYIpPagEPSoqXFzlQe2x1anW5vGlXPzqGMUtDj-nh6N2OlH5IBaus?purpose=fullsize&v=1',
    processItems: [
      { title: 'Increases Organic Traffic', desc: 'SEO attracts visitors without paid ads, reducing marketing costs.' },
      { title: 'Improves Brand Visibility', desc: 'Higher rankings mean more exposure and brand recognition.' },
      { title: 'Targets the Right Audience', desc: 'SEO focuses on users actively searching for your services.' },
      { title: 'Boosts Conversions', desc: 'Well-optimized websites provide better user experience and higher lead generation.' }
    ],
    resultsTitle: 'Why SEO Matters',
    stats: [
      { value: 300, label: 'Avg. Increase in Traffic', suffix: '%' },
      { value: 45, label: 'Lower Lead Cost', suffix: '%' },
      { value: 24, label: 'Visibility on Search', suffix: '/7' },
      { value: 1, label: 'Market Authority', suffix: '#' }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    badge: 'Social Growth Engine',
    heroH1: 'Ignite Your Brand with Social Authority',
    heroP: 'We craft data-backed social strategies that spark conversations, build loyal communities, and drive measurable ROI for your brand.',
    heroImg: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    pillarsTitle: 'The Three Pillars of Social Impact',
    pillars: [
      { title: 'Community Engagement', icon: 'fa-comments', desc: "We don't just speak to your audience; we build relationships. Our community management ensures your brand stays human and heard." },
      { title: 'Creative Strategy', icon: 'fa-pen-nib', desc: 'Stopping the scroll with thumb-stopping content. Our creative team develops visually stunning assets tailored for every platform.' },
      { title: 'Targeted Advertising', icon: 'fa-bullseye', desc: 'Scaling your reach with surgical precision. Our paid social specialists ensure every dollar spent drives high-intent traffic.' }
    ],
    processTitle: 'How Social Media Drives Growth',
    processImg: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    processItems: [
      { title: 'Amplifies Brand Voice', desc: 'Consistent, high-quality messaging that resonates with your core demographic.' },
      { title: 'Drives Customer Loyalty', desc: 'Direct engagement builds trust and turns one-time buyers into lifelong fans.' },
      { title: 'Real-Time Market Insights', desc: 'Social listening allows us to pivot strategies based on live audience feedback.' },
      { title: 'Multi-Channel Synergy', desc: 'Integrating social with SEO and PPC for a unified digital marketing ecosystem.' }
    ],
    resultsTitle: 'Social Powerhouse Results',
    stats: [
      { value: 250, label: 'Avg. Engagement Boost', suffix: '%' },
      { value: 15, label: 'ROI on Paid Social', suffix: 'x' },
      { value: 1, label: 'Monthly Impressions', suffix: 'M+' },
      { value: 1, label: 'Industry Sentiment', suffix: '#' }
    ]
  },
  'ppc-advertising': {
    title: 'PPC Advertising',
    badge: 'Immediate Results',
    heroH1: 'Maximize ROI with PPC Advertising',
    heroP: 'Drive targeted traffic and generate quality leads instantly with data-driven Pay-Per-Click campaigns designed to convert.',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    pillarsTitle: 'Precision Targeting, Maximum Returns',
    pillars: [
      { title: 'Strategic Keyword Research', icon: 'fa-magnifying-glass-dollar', desc: 'We identify high-intent keywords that drive conversions, not just clicks, ensuring you reach ready-to-buy customers.' },
      { title: 'Ad Copywriting', icon: 'fa-bullseye', desc: "Compelling ad copy that grabs attention and speaks directly to your audience's pain points and desires." },
      { title: 'Performance Optimization', icon: 'fa-chart-line', desc: 'Continuous monitoring and A/B testing to lower your CPC and increase your conversion rates over time.' }
    ],
    processTitle: 'Our PPC Methodology',
    processImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    processItems: [
      { title: 'Multi-Platform Campaigns', desc: 'Expertise across Google Ads, Bing, Facebook, LinkedIn, and more to reach your audience where they are.' },
      { title: 'Retargeting Strategies', desc: 'Re-engage visitors who didn\'t convert the first time, keeping your brand top-of-mind.' },
      { title: 'Detailed Analytics', desc: 'Comprehensive reporting that connects ad spend directly to revenue and leads.' },
      { title: 'Competitor Analysis', desc: 'Stay ahead of the competition by analyzing their strategies and identifying market gaps.' }
    ],
    resultsTitle: 'Driven by Data & Results',
    stats: [
      { value: 300, label: 'Avg. ROAS', suffix: '%' },
      { value: 40, label: 'Reduction in CPA', suffix: '-%' },
      { value: 10, label: 'Leads Generated', suffix: 'k+' },
      { value: 24, label: 'Campaign Monitoring', suffix: '/7' }
    ]
  },
  'content-marketing': {
    title: 'Content Marketing',
    badge: 'Storytelling That Sells',
    heroH1: 'Engage & Convert with Strategic Content',
    heroP: 'We create compelling content that captures attention, educates your audience, and drives profitable customer action.',
    heroImg: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    pillarsTitle: 'Content That Connects',
    pillars: [
      { title: 'Copywriting & Storytelling', icon: 'fa-pen-fancy', desc: 'High-quality articles and website copy that rank on search engines and resonate with your readers.' },
      { title: 'Video Production', icon: 'fa-video', desc: 'Engaging video content for social media, explainers, and ads that tell your brand story visually.' },
      { title: 'Content & Blogging', icon: 'fa-pen-nib', desc: 'Engaging and SEO-friendly content that boosts visibility, builds credibility, and converts visitors into loyal customers' }
    ],
    processTitle: 'How Content Drives Growth',
    processImg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    processItems: [
      { title: 'Brand Authority', desc: 'Establish your business as an industry thought leader with insightful and expert content.' },
      { title: 'SEO Boost', desc: 'Fresh, relevant content signals to search engines that your site is active and valuable.' },
      { title: 'Lead Nurturing', desc: 'Guide potential customers through the sales funnel with targeted educational materials.' },
      { title: 'Social Sharing', desc: 'Create shareable assets that expand your reach organically across social platforms.' }
    ],
    resultsTitle: 'Proven Content Results',
    stats: [
      { value: 4, label: 'Higher Traffic', suffix: 'x' },
      { value: 60, label: 'Cost Less per Lead', suffix: '%' },
      { value: 200, label: 'Assets Created', suffix: '+' },
      { value: 1, label: 'Topic Authority', suffix: '#' }
    ]
  },
  'email-marketing': {
    title: 'Email Marketing',
    badge: 'Direct & Personal',
    heroH1: 'Connect Directly with Email Marketing',
    heroP: 'Nurture leads, retain customers, and drive repeat sales with personalized, automated email campaigns that get opened and clicked.',
    heroImg: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    pillarsTitle: 'The Power of the Inbox',
    pillars: [
      { title: 'Smart Segmentation', icon: 'fa-users-viewfinder', desc: 'Deliver the right message to the right person. We slice your list based on behavior and demographics for maximum relevance.' },
      { title: 'Marketing Automation', icon: 'fa-robot', desc: 'Set it and grow it. From welcome series to abandoned cart recovery, we build workflows that work 24/7.' },
      { title: 'Deliverability Optimization', icon: 'fa-chart-line', desc: 'Ensure your emails land in the inbox, not spam. We optimize sender reputation, timing, and content for maximum reach.' }
    ],
    processTitle: 'How Email Drives ROI',
    processImg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    processItems: [
      { title: 'High ROI', desc: 'For every $1 spent, email marketing generates an average return of $42.' },
      { title: 'Customer Retention', desc: 'Keep your brand top-of-mind and turn one-time buyers into loyal brand advocates.' },
      { title: 'Personalized Experience', desc: 'Speak directly to your customer\'s needs with dynamic content and personalized subject lines.' },
      { title: 'Owned Audience', desc: 'Stop renting space on social media. Your email list is an asset you own 100%.' }
    ],
    resultsTitle: 'Email Success Stories',
    stats: [
      { value: 45, label: 'Avg. Open Rate', suffix: '%' },
      { value: 3, label: 'Click-Through Rate', suffix: 'x' },
      { value: 24, label: 'Automated Sales', suffix: '/7' },
      { value: 0, label: 'Low Unsubscribe Rate', suffix: '' }
    ]
  },
  'web-design': {
    title: 'Web Design',
    badge: 'Digital Experiences',
    heroH1: 'Create a Digital Presence That Inspires',
    heroP: 'We design stunning, user-centric websites that tell your brand\'s story and convert visitors into loyal customers.',
    heroImg: 'https://images.yourstory.com/cs/1/07d110709d5a11e9a87aa50459271f27/HowToGrowYourWebDesignBusiness-1585304714237.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75',
    pillarsTitle: 'Design with Purpose',
    pillars: [
      { title: 'UX/UI Design', icon: 'fa-pen-ruler', desc: 'Intuitive and aesthetically pleasing interfaces that provide a seamless user journey.' },
      { title: 'Responsive Development', icon: 'fa-mobile-screen', desc: 'Flawless performance across all devices, ensuring your site looks great everywhere.' },
      { title: 'Performance Optimization', icon: 'fa-rocket', desc: 'Fast-loading, optimized websites built to deliver smooth experiences, reduce bounce rates, and improve overall site performance.' }
    ],
    processTitle: 'How Great Design Drives Growth',
    processImg: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    processItems: [
      { title: 'First Impressions Matter', desc: 'Captivate users instantly with professional design that reflects your brand\'s quality.' },
      { title: 'Brand Consistency', desc: 'Unified visual identity across all digital touchpoints builds recognition and trust.' },
      { title: 'Enhanced Usability', desc: 'Frictionless navigation that keeps users engaged and reduces bounce rates.' },
      { title: 'SEO Friendly', desc: 'Clean code and structure that search engines love, helping you rank higher.' }
    ],
    resultsTitle: 'Design Impact',
    stats: [
      { value: 2, label: 'Conversion Rate', suffix: 'x' },
      { value: 50, label: 'Lower Bounce Rate', suffix: '%' },
      { value: 99, label: 'Mobile Optimized', suffix: '%' },
      { value: 1, label: 'Award Winning', suffix: '#' }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const data = serviceData[serviceId] || serviceData['seo-optimization'];
  useReveal();

  return (
    <main>
      <section className="hero reveal mesh-gradient">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="badge">{data.badge}</span>
            <h1>{data.heroH1.split(' ').map((word, i, arr) => i >= arr.length - 2 ? <span key={i} className="gradient-text">{word} </span> : word + ' ')}</h1>
            <p>{data.heroP}</p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-primary magnetic">Free Audit</Link>
              <a href="#process" className="btn btn-outline magnetic">Our Process</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={data.heroImg} alt={data.title} />
          </div>
        </div>
      </section>


      <section className="why-choose reveal bg-soft-2">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-badge reveal fade-up">Core Pillars</span>
            <h2 className="section-title">{data.pillarsTitle}</h2>
          </div>
          <div className="features-grid stagger-container">
            {data.pillars.map((pillar, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-icon-box"><i className={`fa-solid ${pillar.icon}`}></i></div>
                <div className="feature-text">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="process" className="about reveal bg-soft-1">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-badge reveal fade-up">Our Process</span>
            <h2 className="section-title">🔹 {data.processTitle}</h2>
          </div>
          <div className="about-grid">
            <div className="about-image">
              <img src={data.processImg} alt="Process" />
            </div>
            <div className="about-text">
              {data.processItems.map((item, idx) => (
                <div key={idx} style={{ marginBottom: '25px' }}>
                  <h4 style={{ color: 'var(--primary-color)' }}>✔ {item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="testimonials reveal bg-soft-2">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-badge reveal fade-up">Results</span>
            <h2 className="section-title">{data.resultsTitle}</h2>
          </div>
          <div className="about-stats">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-number"><Counter target={stat.value} />{stat.suffix}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
