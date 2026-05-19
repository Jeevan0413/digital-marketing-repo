import React from 'react';
import { useLocation } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

const legalData = {
  '/privacy-policy': {
    title: 'Privacy Policy',
    lastUpdated: 'February 14, 2026',
    sections: [
      {
        h2: '1. Introduction',
        p: 'Welcome to LearnSpace Digital. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.',
        p2: 'When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.'
      },
      {
        h2: '2. Information We Collect',
        p: 'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.',
        p2: 'The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following:',
        ul: ['Name and Contact Data (email address, phone number, etc.)', 'Business Information (company name, industry, website URL)', 'Inquiry Details (information provided in contact forms)']
      },
      {
        h2: '3. How We Use Your Information',
        p: 'We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.',
        ul: ['To provide and facilitate delivery of services to the user.', 'To respond to user inquiries and offer support.', 'To send marketing and promotional communications.', 'To improve our website and marketing efforts.']
      },
      {
        h2: '4. Data Security',
        p: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.'
      },
      {
        h2: '5. Your Privacy Rights',
        p: 'In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.'
      },
      {
        h2: '6. Contact Us',
        p: 'If you have questions or comments about this notice, you may email us at hello@learnspacedigital.com or by post to:',
        address: ['LearnSpace Digital', 'Hi-tech city, Madhapur', 'Hyderabad, India']
      }
    ]
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions',
    lastUpdated: 'February 14, 2026',
    sections: [
      {
        h2: '1. Agreement to Terms',
        p: 'By accessing or using the services provided by LearnSpace Digital, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.'
      },
      {
        h2: '2. Services Provided',
        p: 'LearnSpace Digital provides premium digital marketing solutions, including but not limited to SEO optimization, social media management, PPC advertising, and web development. The specific scope of work for any project will be outlined in a separate service agreement or proposal.'
      },
      {
        h2: '3. Intellectual Property',
        p: 'Unless otherwise stated, LearnSpace Digital and/or its licensors own the intellectual property rights for all material on the website and deliverables provided as part of our services. All intellectual property rights are reserved.',
        p2: 'You may access this for your own personal or business use subjected to restrictions set in these terms and conditions. You must not:',
        ul: ['Republish material from LearnSpace Digital without credit.', 'Sell, rent or sub-license material from LearnSpace Digital.', 'Reproduce, duplicate or copy material from LearnSpace Digital for commercial purposes without authorization.']
      },
      {
        h2: '4. User Obligations',
        p: 'As a user of our services, you agree to:',
        ul: ['Provide accurate and complete information as required for the delivery of services.', 'Maintain the confidentiality of any account credentials.', 'Notify us immediately of any unauthorized use of your information or breach of security.']
      },
      {
        h2: '5. Limitation of Liability',
        p: 'In no event shall LearnSpace Digital, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website or our services whether such liability is under contract. LearnSpace Digital shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of our services.'
      },
      {
        h2: '6. Governing Law',
        p: 'These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Hyderabad, Telangana.'
      },
      {
        h2: '7. Contact Us',
        p: 'If you have questions about these Terms & Conditions, please email us at hello@learnspacedigital.com or contact us via our website.'
      }
    ]
  },
  '/cookie-policy': {
    title: 'Cookie Policy',
    lastUpdated: 'February 14, 2026',
    sections: [
      {
        h2: '1. What Are Cookies',
        p: 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.'
      },
      {
        h2: '2. How We Use Cookies',
        p: 'LearnSpace Digital uses cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.'
      },
      {
        h2: '3. Types of Cookies We Use',
        ul: [
          '<strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features.',
          '<strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to its use.',
          '<strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are.',
          '<strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing.'
        ]
      },
      {
        h2: '4. How Can I Control Cookies?',
        p: 'You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.'
      },
      {
        h2: '5. Updates to This Cookie Policy',
        p: 'We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.'
      },
      {
        h2: '6. Contact Us',
        p: 'If you have any questions about our use of cookies or other technologies, please email us at hello@learnspacedigital.com or by post to:',
        address: ['LearnSpace Digital', 'Hi-tech city, Madhapur', 'Hyderabad, India']
      }
    ]
  }
};

const LegalPage = () => {
  const { pathname } = useLocation();
  const data = legalData[pathname] || legalData['/privacy-policy'];
  useReveal();

  return (
    <main>
      <div className="container" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="policy-container reveal fade-up">
          <div className="policy-content">
            <h1>{data.title}</h1>
            <span className="last-updated">Last Updated: {data.lastUpdated}</span>

            {data.sections.map((section, idx) => (
              <section key={idx} className="policy-section">
                <h2>{section.h2}</h2>
                {section.p && <p>{section.p}</p>}
                {section.p2 && <p>{section.p2}</p>}
                {section.ul && (
                  <ul>
                    {section.ul.map((li, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: li }}></li>
                    ))}
                  </ul>
                )}
                {section.address && (
                  <p>
                    {section.address.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalPage;
