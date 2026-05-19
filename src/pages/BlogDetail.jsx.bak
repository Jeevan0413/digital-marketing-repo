import React from 'react';
import { useParams } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

const blogData = {
  'content-funnel': {
    category: 'Strategy',
    title: 'The Content Marketing Funnel',
    author: 'LearnSpace Editorial',
    date: 'February 21, 2026',
    videoUrl: 'https://www.youtube.com/embed/sSNoXWup0Y0',
    content: (
      <>
        <p>Creating content without a strategy is just noise. To drive real business results, your content must align with the different stages of the buyer's journey.</p>
        <h2>TOFU, MOFU, and BOFU</h2>
        <p>Top Of Funnel (TOFU) content builds awareness through education. Middle Of Funnel (MOFU) content builds trust and considers solutions. Bottom Of Funnel (BOFU) content converts leads into customers with proof and personalized offers.</p>
        <h2>Mapping Your Content</h2>
        <p>Every piece of content you produce should have a clear goal. Are you teaching? Are you comparing? Or are you closing the deal? Understanding this sequence is the key to a high-converting digital presence.</p>
      </>
    )
  },
  'email-automation': {
    category: 'Email',
    title: 'Email Automation Best Practices',
    author: 'LearnSpace Editorial',
    date: 'February 21, 2026',
    videoUrl: 'https://www.youtube.com/embed/0G6w2iV41N8',
    content: (
      <>
        <p>Email marketing remains the channel with the highest ROI. However, manual newsletters are no longer enough. Automation is the key to scaling your communication without losing the human touch.</p>
        <h2>Work smarter, not harder</h2>
        <p>Setting up behavioral triggers—such as abandoned cart reminders or welcome sequences—ensures that you are reaching your customers at the exact moment they are most likely to convert.</p>
        <h2>Segmentation for Success</h2>
        <p>One-size-fits-all emails are a thing of the past. Segmenting your list based on customer behavior and preferences allows you to deliver highly relevant content that drives 18x more revenue than global broadcasts.</p>
      </>
    )
  },
  'seo-trends': {
    category: 'SEO',
    title: 'SEO Trends to Watch in 2026',
    author: 'LearnSpace Editorial',
    date: 'February 21, 2026',
    videoUrl: 'https://www.youtube.com/embed/D3-h6295xY8',
    content: (
      <>
        <p>As we move into 2026, search engine optimization is undergoing a monumental shift. The integration of advanced AI and generative search experiences means that traditional keyword stuffing is officially a thing of the past. Today's SEO is about intent, authority, and user experience.</p>
        <h2>1. Search Generative Experience (SGE)</h2>
        <p>Google's SGE is fundamentally changing how users interact with search results. Instead of a list of links, users are now receiving comprehensive AI-generated summaries. To stay relevant, brands must focus on being cited as a source within these AI snapshots by providing unique, high-value data.</p>
        <h2>2. Voice Search and Conversational Queries</h2>
        <p>With the rise of more sophisticated virtual assistants, voice search has become more conversational. Optimizing for "long-tail" natural language queries is no longer optional—it is a requirement for capturing mobile and hands-free search traffic.</p>
        <h2>3. EEAT: Experience is King</h2>
        <p>Google's emphasis on Experience, Expertise, Authoritativeness, and Trustworthiness (EEAT) has reached a new peak. In 2026, showing first-hand experience through reviews, case studies, and original insights is the most effective way to protect your rankings from AI-generated generic content.</p>
      </>
    )
  },
  'visual-identity': {
    category: 'Branding',
    title: 'Visual Identity that Converts',
    author: 'LearnSpace Editorial',
    date: 'February 21, 2026',
    videoUrl: 'https://www.youtube.com/embed/Y-9k7T4qnt8',
    content: (
      <>
        <p>Your brand is more than just a logo. It’s the visual language that tells your story and builds an emotional connection with your audience.</p>
        <h2>First Impressions Matter</h2>
        <p>The human brain processes images 60,000 times faster than text. Your visual identity is your first—and sometimes only—chance to make an impression. It must be consistent, professional, and aligned with your values.</p>
        <h2>Color Psychology and conversion</h2>
        <p>The colors you choose can influence a user's perception of your brand by up to 80%. Understanding the psychological impact of your palette is essential for driving the right emotional response from your prospects.</p>
      </>
    )
  },
  'voice-search': {
    category: 'Technology',
    title: 'The Rise of Voice Search',
    author: 'LearnSpace Editorial',
    date: 'February 21, 2026',
    videoUrl: 'https://www.youtube.com/embed/nUiz56pU0h8',
    content: (
      <>
        <p>Voice search is no longer a gimmick—it’s a behavior. As more users rely on Siri, Alexa, and Google Assistant, the way we optimize for search must change.</p>
        <h2>Searching with Words, Not Keywords</h2>
        <p>Voice queries are longer and more conversational than typed ones. They are often phrased as questions. To win in voice search, your content must provide direct answers to the "Who, What, Where, When, and Why" of your industry.</p>
        <h2>Local Search dominance</h2>
        <p>A significant portion of voice searches are local. Ensuring your website is optimized for local SEO is the single best way to capture the "near me" traffic being generated by voice-enabled devices.</p>
      </>
    )
  },
  'youtube-shorts': {
    category: 'Social Media',
    title: 'Mastering YouTube Shorts for Business',
    author: 'LearnSpace Editorial',
    date: 'February 21, 2026',
    videoUrl: 'https://www.youtube.com/embed/Ssh7ybe1LpE',
    content: (
      <>
        <p>Short-form video is the dominant content format of the mid-2020s. YouTube Shorts offers businesses a unique opportunity to reach massive audiences without the production overhead of long-form videos.</p>
        <h2>The Power of Vertical Video</h2>
        <p>With billions of daily views, YouTube Shorts has become a primary discovery engine. It allows brands to showcase personality, share quick tips, and drive traffic to their main channel or website in under 60 seconds.</p>
        <h2>Engagement Secrets</h2>
        <p>Successful shorts hook the viewer in the first 3 seconds. Using trending audio, clear captions, and a strong call to action at the end are critical components of a viral short-form strategy.</p>
      </>
    )
  }
};

const BlogDetail = () => {
  const { blogId } = useParams();
  const data = blogData[blogId];
  useReveal();

  if (!data) return <div className="container" style={{paddingTop: '140px'}}>Post not found.</div>;

  return (
    <main className="post-container" style={{ paddingTop: '140px' }}>
      <div className="post-header reveal fade-up">
        <span className="post-category">{data.category}</span>
        <h1 className="post-title">{data.title}</h1>
        <div className="post-meta">
          <span>By {data.author}</span> &bull; <span>{data.date}</span>
        </div>
      </div>

      <div className="video-container reveal fade-up">
        <iframe 
          src={data.videoUrl} 
          title={data.title} 
          allowFullScreen
        ></iframe>
      </div>

      <article className="post-content reveal fade-up">
        {data.content}
      </article>
    </main>
  );
};

export default BlogDetail;
