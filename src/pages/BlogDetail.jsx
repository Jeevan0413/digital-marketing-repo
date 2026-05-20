import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

/* ─── REUSABLE CONTENT COMPONENTS ─────────────────────────────────── */

const Callout = ({ icon, title, children, color = '#0288D1' }) => (
  <div style={{
    borderLeft: `4px solid ${color}`,
    background: `${color}15`,
    borderRadius: '0 16px 16px 0',
    padding: '20px 24px',
    margin: '28px 0',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  }}>
    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{icon}</span>
    <div>
      {title && <strong style={{ display: 'block', marginBottom: '6px', color, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</strong>}
      <span style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.97rem' }}>{children}</span>
    </div>
  </div>
);

const StatRow = ({ stats }) => (
  <div className="blog-stat-grid" style={{
    '--cols': stats.length,
  }}>
    {stats.map((s, i) => (
      <div key={i} style={{
        textAlign: 'center',
        padding: '24px 12px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(2,136,209,0.05), rgba(99,102,241,0.07))',
        border: '1px solid rgba(2,136,209,0.12)',
      }}>
        <div style={{ fontSize: '1.9rem', fontWeight: 900, color: 'var(--primary-color)', marginBottom: '6px', lineHeight: 1 }}>{s.value}</div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, lineHeight: 1.4 }}>{s.label}</div>
      </div>
    ))}
  </div>
);

const StepList = ({ steps }) => (
  <div style={{ margin: '28px 0' }}>
    {steps.map((step, i) => (
      <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '12px',
          background: 'linear-gradient(135deg, var(--primary-color), #6366F1)',
          color: '#fff', fontWeight: 900, fontSize: '0.9rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>{i + 1}</div>
        <div>
          <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--text-main)', fontSize: '1rem' }}>{step.title}</strong>
          <span style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{step.desc}</span>
        </div>
      </div>
    ))}
  </div>
);

const CheckList = ({ items, color = '#10B981' }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.97rem' }}>
        <span style={{ color, fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}>✓</span>
        {item}
      </li>
    ))}
  </ul>
);

const TableComp = ({ headers, rows }) => (
  <div style={{ overflowX: 'auto', margin: '28px 0', borderRadius: '16px', border: '1px solid rgba(2,136,209,0.12)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
      <thead>
        <tr style={{ background: 'linear-gradient(135deg, var(--primary-color), #6366F1)' }}>
          {headers.map((h, i) => (
            <th key={i} style={{ padding: '14px 20px', textAlign: 'left', color: '#fff', fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : 'rgba(2,136,209,0.02)' }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: '13px 20px', color: 'var(--text-muted)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Quote = ({ text, author }) => (
  <blockquote style={{
    margin: '32px 0', padding: '28px 32px', borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(2,136,209,0.06))',
    border: '1px solid rgba(99,102,241,0.14)', position: 'relative',
  }}>
    <span style={{ fontSize: '4rem', lineHeight: 0.5, color: 'rgba(99,102,241,0.2)', position: 'absolute', top: '20px', left: '20px', fontFamily: 'Georgia, serif' }}>"</span>
    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-main)', lineHeight: 1.8, margin: '16px 0 12px', paddingLeft: '16px' }}>{text}</p>
    {author && <footer style={{ color: 'var(--primary-color)', fontWeight: 700, fontSize: '0.88rem', paddingLeft: '16px' }}>— {author}</footer>}
  </blockquote>
);

const TwoCol = ({ left, right }) => (
  <div className="blog-two-col">
    <div style={{ padding: '22px', borderRadius: '16px', background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
      <strong style={{ display: 'block', marginBottom: '12px', color: '#10B981', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{left.title}</strong>
      <CheckList items={left.items} color="#10B981" />
    </div>
    <div style={{ padding: '22px', borderRadius: '16px', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.14)' }}>
      <strong style={{ display: 'block', marginBottom: '12px', color: '#EF4444', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{right.title}</strong>
      <CheckList items={right.items} color="#EF4444" />
    </div>
  </div>
);

/* ─── BLOG DATA ───────────────────────────────────────────────────── */

const blogData = {

  'seo-trends': {
    category: 'SEO', title: 'SEO Trends to Watch in 2026',
    author: 'Raghu Vamshi', authorRole: 'Head of SEO Strategy',
    date: 'May 8, 2026', readTime: '6 min read',
    videoUrl: 'https://www.youtube.com/embed/D3-h6295xY8',
    content: (
      <>
        <p>Search in 2026 is not the same beast it was three years ago. Google's AI Overviews now appear on over 65% of informational queries — and that number is climbing. The question is no longer "how do I rank #1?" but rather <strong>"how do I get cited inside the AI snapshot?"</strong></p>
        <StatRow stats={[
          { value: '65%', label: 'Queries with AI Overviews' },
          { value: '3.1×', label: 'More clicks from cited sources' },
          { value: '40%', label: 'Drop in zero-rank CTR' },
          { value: '58%', label: 'Searches now conversational' },
        ]} />
        <h2>1. The AI Overview Citation Strategy</h2>
        <p>Google's Search Generative Experience pulls authoritative, structured information into a synthesised summary at the top of results. Traditional ranking signals still matter, but getting <em>cited</em> requires a fundamentally different playbook.</p>
        <Callout icon="🎯" title="The New Goal" color="#0288D1">Your content's objective is no longer to earn the click — it's to be the source Google's AI paraphrases. This means writing with entity-dense, citable precision rather than keyword density.</Callout>
        <StepList steps={[
          { title: 'Lead with a Direct Answer', desc: 'Open every section with a crisp, attributable statement. AI models prefer content that states its conclusion first, then provides supporting evidence — similar to an inverted pyramid news structure.' },
          { title: 'Add Original Data & Statistics', desc: 'AI-generated answers have a critical weakness: they cannot produce proprietary numbers. Publish original survey data, case studies, or benchmarks that generative AI must cite you to reference.' },
          { title: 'Use Structured Markup (Schema.org)', desc: 'FAQ, HowTo, Article, and Speakable schemas give crawlers semantic signals about what each block of content represents. This directly improves your probability of being pulled into an AI Overview.' },
          { title: 'Build Topical Authority, Not Just Pages', desc: 'Google\'s helpful content system rewards sites with comprehensive coverage of a topic. A single viral blog post no longer carries the same weight as a content hub with 15–20 deeply interlinked pieces.' },
        ]} />
        <h2>2. Entity SEO & Semantic Search</h2>
        <p>Keyword matching is giving way to entity recognition. Google's Knowledge Graph contains over 500 billion facts, and modern rankings heavily reward content that references named entities in the correct semantic context.</p>
        <TableComp
          headers={['Old SEO Signal', 'Modern Equivalent', 'Impact Level']}
          rows={[
            ['Keyword density', 'Entity co-occurrence', 'High'],
            ['Backlink count', 'Topical authority score', 'High'],
            ['Meta keyword tag', 'Structured data markup', 'Medium'],
            ['Exact-match anchor text', 'Contextual relevance signals', 'Medium'],
            ['Page loading speed', 'Core Web Vitals (LCP, CLS, INP)', 'High'],
          ]}
        />
        <h2>3. EEAT in the Age of AI Content</h2>
        <p>With AI-generated content flooding the web, Google's Experience, Expertise, Authoritativeness, and Trustworthiness signals have become more important than ever before.</p>
        <TwoCol
          left={{ title: 'What signals EEAT positively', items: ['Named author with verifiable credentials and author page', 'First-person case studies with specific outcomes', 'Original research published with methodology', 'Industry expert quotes and attributed statistics', 'Clearly dated content with visible last-updated timestamps'] }}
          right={{ title: 'What signals EEAT negatively', items: ['Anonymous or generic "Editorial Team" bylines', 'Unsubstantiated claims without source links', 'Thin content with no original insight', 'Affiliate pages without disclosed relationships', 'Factual errors left uncorrected'] }}
        />
        <h2>4. Core Web Vitals & INP</h2>
        <p>Google officially replaced First Input Delay with INP as a Core Web Vital. It measures the latency of all interactions on a page — clicks, taps, keyboard events — not just the first one.</p>
        <Callout icon="⚡" title="INP Target Benchmarks" color="#F59E0B">
          <strong>Good:</strong> under 200ms &nbsp;|&nbsp; <strong>Needs Improvement:</strong> 200–500ms &nbsp;|&nbsp; <strong>Poor:</strong> over 500ms. Sites in the "poor" range are seeing measurable ranking decreases in competitive verticals.
        </Callout>
        <h2>5. Voice Search & Conversational Optimisation</h2>
        <CheckList items={[
          'Write in Q&A format — ask the real question your audience asks, then answer it concisely in 40–60 words.',
          'Claim and optimise your Google Business Profile with weekly posts and up-to-date hours.',
          'Use speakable schema on pages where content is likely to be read aloud by Google Assistant.',
          'Target question-intent keywords (who, what, where, why, how) with dedicated FAQ sections.',
          'Build location-specific landing pages for multi-location businesses with unique, locally relevant content.',
        ]} />
        <Quote text="The brands that will win in SEO's next chapter are those that act like publishers — producing citable, authoritative, original content that the AI wants to reference, not just content that humans want to click." author="Google I/O 2025 Keynote" />
        <h2>Action Plan: 90 Days to AI-Ready SEO</h2>
        <StepList steps={[
          { title: 'Month 1 — Audit & Architecture', desc: 'Conduct a full content audit. Identify your top 20 pages and add FAQ, author, and article schema. Fix Core Web Vitals issues, especially INP on high-traffic pages.' },
          { title: 'Month 2 — Content Hub Creation', desc: 'Build or consolidate topical hubs. Each hub should have a pillar page (2,000+ words) and 8–12 supporting cluster pages linked bidirectionally.' },
          { title: 'Month 3 — EEAT Signals & Link Earning', desc: 'Create and verify author pages. Develop one original research report or industry survey. Pursue digital PR to earn 5–10 high-authority backlinks pointing to the new hub.' },
        ]} />
      </>
    ),
  },

  'youtube-shorts': {
    category: 'Social Media', title: 'Mastering YouTube Shorts for B2B Growth',
    author: 'Varalaxmi', authorRole: 'Social Media Lead',
    date: 'Apr 29, 2026', readTime: '5 min read',
    videoUrl: 'https://www.youtube.com/embed/Ssh7ybe1LpE',
    content: (
      <>
        <p>Short-form video has crossed the threshold from "nice to have" to a primary B2B lead generation channel. YouTube Shorts now serves over 70 billion daily views, and the algorithm aggressively promotes Shorts from channels in their early-growth phase — making it one of the most accessible organic growth levers available today.</p>
        <StatRow stats={[
          { value: '70B', label: 'Daily Shorts views' },
          { value: '2.4×', label: 'Higher watch-through vs long-form' },
          { value: '34%', label: 'B2B buyers influenced by short video' },
          { value: '$0', label: 'Organic reach cost' },
        ]} />
        <h2>Why B2B Brands Are Finally Winning on Short-Form</h2>
        <p>The myth that short-form video is only for D2C consumer brands has been shattered. B2B companies in SaaS, consulting, manufacturing, and professional services are generating qualified demo requests directly from YouTube Shorts — by solving micro-problems in 59 seconds or less.</p>
        <Callout icon="💡" title="The B2B Short-Form Insight" color="#6366F1">B2B buyers watch short videos at every stage of the funnel. Decision-makers use short video to quickly validate a vendor's expertise before agreeing to a discovery call. Your Shorts are your first impression.</Callout>
        <h2>The Anatomy of a High-Converting B2B Short</h2>
        <StepList steps={[
          { title: 'The 3-Second Hook (Frames 1–90)', desc: 'Lead with the outcome, not the introduction. "Here\'s how we increased a client\'s pipeline by 300% using one LinkedIn automation" outperforms any intro-style opening every single time.' },
          { title: 'The Problem-Agitation Bridge (Seconds 4–25)', desc: 'Briefly name the pain your viewer is likely experiencing. Use "You probably know this feeling…" framing to create empathy without wasting precious seconds.' },
          { title: 'The Core Value Delivery (Seconds 26–50)', desc: 'This is your expertise moment. Give ONE actionable insight, framework, or proprietary piece of advice. Depth beats breadth in short-form retention.' },
          { title: 'The Soft CTA (Seconds 51–59)', desc: '"Comment the word X and I\'ll send you the full framework" or "Full breakdown in description." This drives comments (algorithmic signal) and captures warm leads.' },
        ]} />
        <h2>Content Formats That Convert for B2B</h2>
        <TableComp
          headers={['Format', 'Best For', 'Avg. Completion Rate', 'Lead Quality']}
          rows={[
            ['Myth-busting ("Stop doing X")', 'Thought leadership, awareness', '72%', '⭐⭐⭐⭐'],
            ['Quick tutorial (show, don\'t tell)', 'Product awareness, demos', '68%', '⭐⭐⭐⭐⭐'],
            ['Stat reveal + implication', 'Market education', '65%', '⭐⭐⭐'],
            ['Client result breakdown', 'Social proof, BOFU', '61%', '⭐⭐⭐⭐⭐'],
            ['Tool / software walkthrough', 'Product-led growth', '58%', '⭐⭐⭐⭐⭐'],
          ]}
        />
        <TwoCol
          left={{ title: '✅ Do This', items: ['Start with a visual hook before any text appears', 'Use dynamic cuts every 3–5 seconds', 'Show process, not just outcomes', 'Add a pattern interrupt at the 15-second mark', 'End with an open loop or teaser for next Short'] }}
          right={{ title: '❌ Avoid This', items: ['Logo or intro animations (instant swipe-away)', 'Talking-head only with no B-roll or text overlay', 'Mentioning your company name before value delivery', 'CTAs that require leaving the platform', 'Repurposed horizontal video with black bars'] }}
        />
        <Quote text="We generated 47 demo requests in a single month from one YouTube Short that hit 890,000 views. The video cost us three hours to make. No ad spend, no influencer budget — just a genuine insight delivered well." author="CMO at a Series-B SaaS Company, 2026" />
        <h2>30-Day B2B Shorts Launch Plan</h2>
        <StepList steps={[
          { title: 'Week 1: Research & Scripting', desc: 'Identify your 10 most common sales objections or prospect questions. Each one is a Short. Validate each concept by checking if it gets 1M+ views in your niche by searching the topic on YouTube Shorts.' },
          { title: 'Week 2: Batch Shoot 10 Shorts', desc: 'Record all 10 in a single 3-hour session. Use consistent branding: same background, same text style, same outro music. Batch processing dramatically reduces per-video effort.' },
          { title: 'Week 3–4: Publish, Analyse, Iterate', desc: 'Post one Short daily. Track average percentage viewed and swipe-away rate in YouTube Studio. After 10 posts, double down on the 2–3 formats with the highest completion rates.' },
        ]} />
      </>
    ),
  },

  'content-funnel': {
    category: 'Strategy', title: 'The High-Converting Content Funnel',
    author: 'Shridhar Kulkarni', authorRole: 'Content Strategy Director',
    date: 'Apr 15, 2026', readTime: '8 min read',
    videoUrl: 'https://www.youtube.com/embed/sSNoXWup0Y0',
    content: (
      <>
        <p>Most content fails not because of poor writing, poor SEO, or poor distribution — it fails because it's targeting the wrong buyer at the wrong moment. A lead who just discovered you needs education. A lead who's been reading you for two months needs a reason to buy.</p>
        <StatRow stats={[
          { value: '73%', label: 'Content sent to wrong funnel stage' },
          { value: '6×', label: 'Higher conversion with stage-matched content' },
          { value: '47', label: 'Content pieces consumed before B2B purchase' },
          { value: '81%', label: 'Buyers research online before engaging sales' },
        ]} />
        <h2>The Three-Stage Funnel Framework</h2>
        <Callout icon="🔭" title="TOFU — Top of Funnel (Awareness)" color="#3B82F6">Goal: Attract and educate strangers. The buyer doesn't know they have a problem yet, or they're just beginning to name it. Content at this stage should be freely shareable, search-optimised, and deeply educational. No sales language. Zero friction.</Callout>
        <Callout icon="⚙️" title="MOFU — Middle of Funnel (Consideration)" color="#F59E0B">Goal: Build trust and demonstrate expertise. The buyer knows their problem and is researching solutions. They need to see that you understand their world better than anyone else. Content here earns email addresses and micro-commitments.</Callout>
        <Callout icon="🎯" title="BOFU — Bottom of Funnel (Decision)" color="#10B981">Goal: Eliminate doubt and trigger action. The buyer is comparing you against competitors and looking for reasons to choose. Social proof, case studies, and personalised demos are the weapons of choice at this stage.</Callout>
        <TableComp
          headers={['Stage', 'Best Formats', 'CTA Type', 'Success Metric']}
          rows={[
            ['TOFU', 'Blog posts, short videos, podcasts, infographics', 'Subscribe, share, bookmark', 'Organic traffic, social shares'],
            ['TOFU', 'Free tools, calculators, industry reports', 'Download / try for free', 'Email signups, tool usage'],
            ['MOFU', 'Webinars, email courses, comparison guides', 'Sign up, attend, compare', 'Email open rate, webinar attendance'],
            ['MOFU', 'White papers, deep-dive case studies', 'Download (gated)', 'Lead quality score, MQL rate'],
            ['BOFU', 'ROI calculators, live demos, free trials', 'Start trial, book demo', 'Demo-to-close rate'],
            ['BOFU', 'Customer testimonials, analyst reports', 'See their results, read story', 'Win rate against competitors'],
          ]}
        />
        <h2>Mapping Your Buyer's 47-Touchpoint Journey</h2>
        <StepList steps={[
          { title: 'Map Your Buyer\'s Questions at Each Stage', desc: 'Start with a customer interview project. Ask 10 existing customers: "What were you searching for before you found us?" These answers directly reveal your content gaps.' },
          { title: 'Assign Every Existing Piece to a Stage', desc: 'Audit your content library. Tag every article, video, and download as TOFU, MOFU, or BOFU. Most companies discover they\'re 80%+ TOFU-heavy with almost no BOFU conversion content.' },
          { title: 'Build Internal Content Bridges', desc: 'Add a contextual MOFU CTA inside your highest-traffic TOFU articles. Insert a BOFU case study inside your most-read MOFU comparison guides.' },
          { title: 'Create Stage-Specific Lead Magnets', desc: 'A TOFU lead magnet (free checklist) should be followed by a MOFU email sequence that progressively deepens the relationship, culminating in a BOFU offer like a personalised audit or demo.' },
        ]} />
        <TwoCol
          left={{ title: 'First-Touch Attribution (Awareness)', items: ['Track organic landing page for each lead', 'Record first blog post or video consumed', 'Tag UTM source on all paid promotions', 'Report weekly on top "first-touch" content assets'] }}
          right={{ title: 'Last-Touch Attribution (Decision)', items: ['Track content viewed in the 72hrs before conversion', 'Flag which case study preceded demo bookings', 'A/B test BOFU CTAs by content type', 'Report on content-influenced pipeline, not just direct conversion'] }}
        />
        <Quote text="Content marketing's job is not to create content. Its job is to move people from one stage of awareness to the next — and to do it faster than your competitors can." author="Andrew Davis, Content Marketing World 2025" />
        <h2>Advanced: Behaviour-Triggered Content Sequences</h2>
        <CheckList items={[
          'If a user reads 3+ SEO articles → trigger a MOFU email: "You\'ve been diving into SEO. Here\'s our free keyword research template."',
          'If a user views your pricing page but doesn\'t convert → trigger a BOFU retargeting ad featuring a directly relevant case study.',
          'If a user attends a webinar but doesn\'t book a demo → send a post-webinar sequence with an ROI calculator and competitor comparison.',
          'If a user downloads a TOFU checklist → enroll them in a 7-day email course that progressively moves them toward a demo.',
        ]} />
      </>
    ),
  },

  'email-automation': {
    category: 'Email', title: 'Email Automation Sequences That Actually Work',
    author: 'Raghu Vamshi', authorRole: 'Growth & CRM Lead',
    date: 'Apr 4, 2026', readTime: '7 min read',
    videoUrl: 'https://www.youtube.com/embed/0G6w2iV41N8',
    content: (
      <>
        <p>Email is still the highest-ROI digital marketing channel — returning an average of $42 for every $1 spent. But the days of batch-and-blast newsletters driving real business results are over. The brands outperforming with email in 2026 have built intelligent automation architectures that respond to behaviour, not just calendar dates.</p>
        <StatRow stats={[
          { value: '$42', label: 'Average email ROI per $1 spent' },
          { value: '40%+', label: 'Open rate with behaviour triggers' },
          { value: '8×', label: 'Higher CTR vs broadcast emails' },
          { value: '320%', label: 'Revenue lift from cart abandon sequences' },
        ]} />
        <h2>Sequence 1: The Welcome Series (5 Emails, 14 Days)</h2>
        <p>Your welcome sequence is the single most important automation you'll build. New subscribers have peak engagement in the first 48 hours. Failing to capitalise on this with a value-first sequence is one of the most costly email marketing mistakes.</p>
        <StepList steps={[
          { title: 'Email 1 (Immediate): Deliver & Set Expectations', desc: 'Deliver the lead magnet, set the cadence of what\'s coming, and ask one engagement question. This reply-triggering technique moves you to the Primary inbox.' },
          { title: 'Email 2 (Day 2): Your Best Content', desc: 'Share your single highest-value resource. This establishes expertise before any commercial message. Subject line: "The [number] thing I wish I knew about [topic]."' },
          { title: 'Email 3 (Day 5): Social Proof + Story', desc: 'Share a specific client transformation using the Problem → Solution → Result structure. Include a real metric where possible (e.g., "from 3% to 12% conversion rate in 6 weeks").' },
          { title: 'Email 4 (Day 9): Handle the Top Objection', desc: 'Address the #1 reason people don\'t buy from you. Frame it as "I know you\'re probably thinking [objection]… here\'s the reality." This pre-handles sales resistance before it solidifies.' },
          { title: 'Email 5 (Day 14): Soft Offer', desc: 'Introduce your product or service with a problem-first framing. "If you\'ve found this series useful and you\'re dealing with [problem], here\'s how we can work together." Low pressure, high relevance.' },
        ]} />
        <h2>Sequence 2: Abandoned Cart Recovery (3 Emails, 72 Hours)</h2>
        <TableComp
          headers={['Email', 'Timing', 'Subject Line Formula', 'Core Message']}
          rows={[
            ['#1', '1 hour after abandon', '"Did something go wrong?"', 'Friendly check-in, remove friction, offer live chat'],
            ['#2', '24 hours later', '"Still thinking it over? Here\'s what others say"', 'Social proof + FAQ objection handling'],
            ['#3', '72 hours later', '"Last chance: [specific offer] expires tonight"', 'Urgency + final risk-reversal (guarantee, trial)'],
          ]}
        />
        <Callout icon="📊" title="Benchmark Results" color="#10B981">A well-structured 3-email abandon sequence recovers 15–25% of lost revenue. Adding SMS alongside email pushes recovery rates to 35%+. The first email — sent within 1 hour — accounts for 60% of total sequence recoveries.</Callout>
        <h2>Segmentation Architecture That Actually Scales</h2>
        <TwoCol
          left={{ title: 'High-Value Segments to Build First', items: ['Opened last 3 emails (hot leads)', 'Clicked pricing or product pages', 'Downloaded a MOFU or BOFU asset', 'Attended a webinar or event', 'Referred another subscriber'] }}
          right={{ title: 'Segments to Suppress or Remove', items: ['No opens in 180+ days', 'Marked any email as spam (auto-suppress)', 'Role-based addresses (info@, admin@)', 'Bounced addresses (hard bounce)', 'Duplicate contacts across lists'] }}
        />
        <h2>Subject Line Psychology: What the Data Says in 2026</h2>
        <TableComp
          headers={['Technique', 'Example', 'Average Open Lift']}
          rows={[
            ['Curiosity gap', '"The SEO technique everyone is afraid to use"', '+23%'],
            ['Personalisation', '"Raghu, your Q2 marketing plan is missing this"', '+18%'],
            ['Numbers & specificity', '"7 sequences that drove $2.1M in 6 months"', '+21%'],
            ['Controversy', '"Email marketing is dead (and that\'s good news)"', '+31%'],
            ['Ultra-short (1–3 words)', '"Quick question" / "Important update"', '+27%'],
            ['Re-send to non-openers', 'Same content, completely different subject line', '+18% extra opens'],
          ]}
        />
        <Quote text="The biggest email marketing mistake I see is sending the right content to the wrong person at the wrong time. Automation solves for timing. Segmentation solves for relevance. Together, they compound." author="Joanna Wiebe, Copyhackers" />
      </>
    ),
  },

  'visual-identity': {
    category: 'Branding', title: 'Visual Identity That Converts in 2026',
    author: 'Shridhar Kulkarni', authorRole: 'Brand Design Strategist',
    date: 'Mar 24, 2026', readTime: '5 min read',
    videoUrl: 'https://www.youtube.com/embed/Y-9k7T4qnt8',
    content: (
      <>
        <p>Your brand is making decisions for you every second — whether you're aware of it or not. Every typeface, every shade of blue, every button radius communicates something to your audience before a single word is read. In a market flooded with AI-generated sameness, a deliberate visual identity is one of the last true competitive moats.</p>
        <StatRow stats={[
          { value: '0.05s', label: 'Time to form a visual first impression' },
          { value: '80%', label: 'Brand recognition boost from consistent colour' },
          { value: '3.5×', label: 'Revenue advantage of consistent branding' },
          { value: '94%', label: 'First impressions driven by visual design' },
        ]} />
        <h2>Pillar 1: Colour Psychology with Intent</h2>
        <p>Colour is not decoration — it's direction. Every colour choice activates psychological associations that either build trust or erode it.</p>
        <TableComp
          headers={['Colour', 'Primary Association', 'Best Used For', 'Risk']}
          rows={[
            ['Blue', 'Trust, stability, intelligence', 'SaaS, finance, healthcare', 'Can feel cold if overused'],
            ['Green', 'Growth, health, sustainability', 'Fintech, wellness, eco brands', 'Can signal "budget" at wrong shade'],
            ['Orange', 'Energy, enthusiasm, accessibility', 'Consumer apps, food, creativity', 'Can feel aggressive at high saturation'],
            ['Black', 'Luxury, authority, sophistication', 'Premium B2B, fashion, tech', 'Inaccessible if contrast is low'],
            ['Purple', 'Innovation, wisdom, creativity', 'AI tools, wellness, education', 'Overused in SaaS — differentiate carefully'],
          ]}
        />
        <Callout icon="🎨" title="The 60-30-10 Rule" color="#A855F7">Apply 60% dominant colour (backgrounds), 30% secondary colour (cards, sections), and 10% accent colour (CTAs, highlights, links). This ratio creates visual harmony while ensuring important elements stand out.</Callout>
        <h2>Pillar 2: Typography as Brand Voice</h2>
        <StepList steps={[
          { title: 'Choose a Display Font for Headers', desc: 'This is your brand\'s personality font — distinctive, memorable, and aligned with your brand archetype. It appears in headlines and hero text. It does not need to be highly legible at small sizes.' },
          { title: 'Pair with a Utility Font for Body Text', desc: 'Optimise for readability. Clean, neutral fonts at 16–18px base size with 1.7 line-height maximise reading comprehension and reduce bounce rate significantly.' },
          { title: 'Establish a Type Scale', desc: 'Define no more than 5–6 type sizes with a consistent ratio (1.25–1.5×). Inconsistent type scales are one of the most common indicators of an unprofessional brand.' },
        ]} />
        <h2>Pillar 3: Motion as Trust Signal</h2>
        <CheckList items={[
          'Add a 200–300ms ease-in-out transition to all interactive elements (buttons, links, cards). This alone elevates perceived quality significantly.',
          'Use scroll-triggered fade-and-rise animations for content sections. Users associate smooth scroll behaviour with high-end products.',
          'Animate your primary CTA button — a gentle pulse or colour shift on hover increases click-through rate by an average of 12%.',
          'Avoid complex animations that delay content display. Performance is a brand signal.',
          'Test all animations with the prefers-reduced-motion media query to ensure accessibility.',
        ]} />
        <h2>Pillar 4: Consistency as Conversion Driver</h2>
        <TwoCol
          left={{ title: 'Consistency Checklist', items: ['Same primary colour HEX across all platforms', 'Logo minimum size and clear-space rules documented', 'Font files embedded in shared design system', 'Photo style guide (subjects, mood, colour treatment)', 'Icon set consistent in stroke weight and style'] }}
          right={{ title: 'Common Inconsistency Failures', items: ['Slightly different brand blues across print and digital', 'Compressed or stretched logos in presentations', 'Mixed typefaces across social media templates', 'Stock photography in multiple contradictory styles', 'No dark-mode version of logo or icons'] }}
        />
        <Quote text="Design is not just what it looks like and feels like. Design is how it works — and how reliably it performs the psychological job of building trust." author="Steve Jobs" />
        <h2>Building Your Brand System: A Practical Starting Point</h2>
        <StepList steps={[
          { title: 'Define Your Brand Archetype', desc: 'Choose from the 12 Jungian archetypes (Hero, Sage, Caregiver, Ruler, Creator, etc.). Your archetype governs every subsequent visual decision.' },
          { title: 'Create a 1-Page Visual Identity Document', desc: 'Document your primary and secondary palettes, chosen fonts with size scale, logo variations, and imagery direction in a single shareable file.' },
          { title: 'Conduct a Brand Consistency Audit Quarterly', desc: 'Review your website, social profiles, email templates, and pitch decks every quarter. Visual drift happens gradually — catching it early prevents brand dilution.' },
        ]} />
      </>
    ),
  },

  'voice-search': {
    category: 'Technology', title: 'The Rise of Voice & Conversational Search',
    author: 'Varalaxmi', authorRole: 'Technology & SEO Analyst',
    date: 'Mar 10, 2026', readTime: '6 min read',
    videoUrl: 'https://www.youtube.com/embed/nUiz56pU0h8',
    content: (
      <>
        <p>Voice search has matured from a novelty to a dominant search behaviour. In 2026, over 40% of all search queries are initiated by voice — and that number climbs to 58% on mobile. The optimisation strategies that drove traffic from typed searches are increasingly ineffective against queries that begin with "Hey Google, what's the best…"</p>
        <StatRow stats={[
          { value: '40%', label: 'All searches now voice-initiated' },
          { value: '58%', label: 'Mobile searches via voice' },
          { value: '8.4B', label: 'Voice assistant-enabled devices in use' },
          { value: '76%', label: 'Voice search users want local results' },
        ]} />
        <h2>How Voice Queries Differ from Text Queries</h2>
        <TableComp
          headers={['Query Type', 'Typed Example', 'Voice Equivalent', 'Key Difference']}
          rows={[
            ['Informational', '"digital marketing tips"', '"What are the best digital marketing strategies for a small business in 2026?"', 'Full-sentence, context-rich'],
            ['Local', '"coffee shop near me"', '"Where can I get a good flat white within walking distance right now?"', 'Time-aware, specific preference'],
            ['Transactional', '"buy running shoes online"', '"What\'s the best place to buy trail running shoes under ₹8000 with fast delivery?"', 'Criteria-heavy, immediate intent'],
          ]}
        />
        <h2>The Technical Optimisation Framework</h2>
        <StepList steps={[
          { title: 'Answer Boxes & Featured Snippets (Position Zero)', desc: 'Voice assistants almost always read the featured snippet. To earn this, structure content to answer a specific question in 40–55 words, using the exact question as a heading followed by a direct, concise answer.' },
          { title: 'FAQ Schema Markup', desc: 'FAQPage schema directly tells Google which questions your page answers. This structured markup significantly increases your probability of appearing in voice responses.' },
          { title: 'Speakable Schema', desc: 'The Speakable schema property specifically marks sections of your content that are most suitable for text-to-speech. Particularly powerful for news publishers but expanding to all content types.' },
          { title: 'Page Speed Optimisation', desc: 'Google reports that voice search results load 52% faster than average pages. Achieving a sub-2-second load time is a prerequisite for voice result inclusion.' },
          { title: 'Mobile-First & HTTPS', desc: 'Voice searches are overwhelmingly mobile. Google only pulls voice results from mobile-friendly pages. Additionally, 70%+ of voice results come from HTTPS domains.' },
        ]} />
        <h2>Local Voice Search: The High-Intent Goldmine</h2>
        <Callout icon="📍" title="Local Voice Search Optimisation Checklist" color="#10B981">Claim and fully complete your Google Business Profile. Add your NAP (Name, Address, Phone) as structured data on your website. Get 20+ recent Google reviews. Create location-specific landing pages for every service area you cover.</Callout>
        <h2>The Conversational AI Shift: Beyond Google</h2>
        <p>Voice search is no longer limited to Google and Apple. In 2026, a significant percentage of conversational queries happen inside ChatGPT, Claude, Perplexity, and Gemini — often via voice interfaces. Your content needs to be AI-citation-optimised, not just voice-optimised.</p>
        <TwoCol
          left={{ title: 'Voice SEO Wins (2026)', items: ['Conversational, Q&A structured content', 'Local Schema + fully completed Google Business Profile', 'Featured snippet targeting for high-volume questions', 'Ultra-fast page load (< 2 seconds)', 'Long-tail keyword integration into headings'] }}
          right={{ title: 'Becoming AI-Citation Ready', items: ['Original data and statistics (AI cites proprietary numbers)', 'Named author with verifiable credentials and bio', 'Structured data on all key pages', 'Clear, citable answers at the top of each section', 'HTTPS + high domain authority from earned backlinks'] }}
        />
        <Quote text="The shift to voice is really a shift to intent. People speaking to devices want direct answers, not ten blue links. If your content can't answer a question clearly in 40 words, it won't exist in voice search's world." author="Marie Haynes, Search Algorithm Expert" />
        <h2>Measuring Voice Search Performance</h2>
        <CheckList items={[
          'Track featured snippet rankings in Google Search Console. Filter by question-format queries (how, what, where, why, who).',
          'Monitor your Google Business Profile\'s "Discovery" searches — this reveals how many people find you via search rather than branded queries.',
          'Use tools like SEMrush or Ahrefs to track Position Zero rankings for conversational queries in your niche.',
          'Measure local pack appearances (top 3 local results) using Local Falcon or BrightLocal.',
          'Analyse your mobile Core Web Vitals monthly — voice search performance is directly tied to mobile page speed.',
        ]} />
      </>
    ),
  },
};

/* ─── READING PROGRESS BAR ─────────────────────────────────────── */
const ReadingProgress = () => {
  const barRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = total > 0 ? (scrollTop / total) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, height: '4px', background: 'rgba(0,0,0,0.06)' }}>
      <div ref={barRef} style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary-color), #6366F1)', transition: 'width 0.1s', width: '0%' }} />
    </div>
  );
};

/* ─── MAIN COMPONENT ───────────────────────────────────────────── */
const BlogDetail = () => {
  const { blogId } = useParams();
  const data = blogData[blogId];
  useReveal();

  if (!data) return (
    <div className="container" style={{ paddingTop: '140px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <span style={{ fontSize: '3rem' }}>📭</span>
      <h2>Post not found</h2>
      <Link to="/blog" className="btn btn-primary">← Back to Blog</Link>
    </div>
  );

  return (
    <>
      <ReadingProgress />
      <main style={{ paddingTop: '100px' }}>

        {/* HERO HEADER */}
        <section style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #fafaff 60%, #fff 100%)', padding: '60px 20px 0', borderBottom: '1px solid rgba(2,136,209,0.08)' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal fade-up" style={{ marginBottom: '16px' }}>
              <Link to="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                ← All Articles
              </Link>
            </div>
            <span className="reveal fade-up" style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '20px', background: 'rgba(2,136,209,0.1)', color: 'var(--primary-color)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '20px' }}>
              {data.category}
            </span>
            <h1 className="reveal fade-up" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', lineHeight: 1.25, color: 'var(--text-main)', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              {data.title}
            </h1>
            <div className="reveal fade-up" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', paddingBottom: '40px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-color), #6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '0.9rem', flexShrink: 0 }}>
                {data.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{data.author}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{data.authorRole}</div>
              </div>
              <div style={{ height: '24px', width: '1px', background: 'rgba(0,0,0,0.1)' }} />
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}><i className="fa-solid fa-calendar" style={{ marginRight: '5px' }} />{data.date}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}><i className="fa-solid fa-clock" style={{ marginRight: '5px' }} />{data.readTime}</span>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section style={{ background: '#fff', padding: '0 20px' }}>
          <div className="container reveal fade-up" style={{ maxWidth: '820px' }}>
            <div style={{ margin: '0 0 8px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(2,136,209,0.12)', aspectRatio: '16/9', transform: 'translateY(-28px)' }}>
              <iframe src={data.videoUrl} title={data.title} allowFullScreen style={{ width: '100%', height: '100%', border: 'none' }} />
            </div>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        <section style={{ padding: '0 20px 80px', background: '#fff' }}>
          <div className="container reveal fade-up" style={{ maxWidth: '820px' }}>
            <article style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              <style>{`
                .post-content-wrap h2 { font-size: 1.5rem; font-weight: 800; color: var(--text-main); margin: 44px 0 16px; padding-bottom: 10px; border-bottom: 2px solid rgba(2,136,209,0.1); letter-spacing: -0.01em; }
                .post-content-wrap h3 { font-size: 1.1rem; font-weight: 700; margin: 28px 0 10px; }
                .post-content-wrap p { margin-bottom: 18px; }
                .post-content-wrap strong { color: var(--text-main); }
                .post-content-wrap em { color: var(--primary-color); font-style: italic; }

                .blog-stat-grid {
                  display: grid;
                  grid-template-columns: repeat(var(--cols, 4), 1fr);
                  gap: 16px;
                  margin: 32px 0;
                }

                .blog-two-col {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 20px;
                  margin: 28px 0;
                }

                @media (max-width: 768px) {
                  .blog-stat-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                  }
                  .blog-two-col {
                    grid-template-columns: 1fr !important;
                  }
                }

                @media (max-width: 480px) {
                  .blog-stat-grid {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>
              <div className="post-content-wrap">{data.content}</div>
            </article>

            {/* BOTTOM CTA */}
            <div style={{ marginTop: '56px', padding: '40px 40px', borderRadius: '24px', background: 'linear-gradient(135deg, var(--primary-color) 0%, #6366F1 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '160px', height: '160px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '12px' }}>Want to implement this for your brand?</h3>
                <p style={{ color: 'rgba(255,255,255,0.82)', marginBottom: '28px', fontSize: '0.97rem' }}>Our team builds data-driven digital marketing strategies tailored to your industry and goals.</p>
                <Link to="/contact" style={{ background: '#fff', color: 'var(--primary-color)', padding: '14px 36px', borderRadius: '50px', fontWeight: 800, fontSize: '0.97rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 8px 28px rgba(0,0,0,0.15)' }}>
                  Book a Free Strategy Call →
                </Link>
              </div>
            </div>

            <div style={{ marginTop: '36px', textAlign: 'center' }}>
              <Link to="/blog" style={{ color: 'var(--primary-color)', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default BlogDetail;
