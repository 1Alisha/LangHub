import React, { useState } from 'react';
import './FAQPage.css';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';

const FAQPage = () => {

  const faqData = [
    { question: 'How do I get started with learning a new language on your platform?', answer: 'To get started, simply choose the language you want to learn, explore available courses, and start your language learning journey.' },
    { question: 'What languages do you offer courses for?', answer: 'We offer courses for a wide range of languages, including but not limited to Spanish, French, German, Chinese, Japanese, and many more. Check our course catalog for a complete list.' },
    { question: 'Are your courses suitable for beginners, intermediate, and advanced learners?', answer: 'Yes, our courses are designed to cater to learners of all proficiency levels. Whether you are a beginner, intermediate, or advanced learner, you will find suitable content to enhance your language skills.' },
    { question: 'How does your adaptive learning system work?', answer: 'Our adaptive learning system tailors lessons to your individual proficiency level. As you progress, the system adjusts to your learning pace, ensuring a personalized and effective language learning experience.' },
    { question: 'Can I access the courses on multiple devices?', answer: 'Absolutely! You can access our language courses on your computer, tablet, or mobile device. ' },
    { question: 'Do you offer live instructor-led sessions or is it all self-paced learning?', answer: 'We provide a mix of self-paced learning and live instructor-led sessions. You can choose the format that suits you best. Our live sessions offer opportunities for real-time interaction and feedback.' },
    { question: 'What makes your language learning platform different from others?', answer: 'Our platform stands out with innovative technology, cultural immersion experiences, and a commitment to providing a diverse and engaging learning environment. Explore our unique features to enhance your language learning journey.' },
    { question: 'How can I track my progress and achievements?', answer: 'We offer tools to track your progress, view achievements, and set personalized language learning goals. Monitor your advancement through our user-friendly dashboard.' },
    { question: 'Is there a trial period or a money-back guarantee?', answer: 'Yes, we offer a trial period for users to explore our platform. Additionally, we provide a satisfaction guarantee. If you are not satisfied with your learning experience within a certain period, we offer a money-back guarantee.' },
    { question: 'How can I get support if I encounter issues or have questions?', answer: ' If you have questions or encounter issues, our customer support team is here to help. Contact us through the support page on our website, and our team will respond promptly to assist you. We also have a comprehensive FAQ section and community forums for additional support.' }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq">
    <Container>
      <Row>
        <Col>
        <h1>Frequently Asked Questions</h1>
        <p>Have Questions? Here you will find the answers of the most <br/>
        asked questions that our previous learners have asked.</p>
        </Col>
        <Col><Image src="faq.png" className="faq-img"/></Col>
      </Row>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`question ${openIndex === index ? 'open' : ''}`}
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <p>+</p>
            </div>
            {openIndex === index && (
              <div className="answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
};

export default FAQPage;
