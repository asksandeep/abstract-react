import React, { useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      question: "What services do you offer?",
      answer:
        "We provide end-to-end IT solutions including software development, mobile app development, web design, digital marketing, cloud solutions, and ongoing support."
    },
    {
      question: "How do I know which hiring model is right for me?",
      answer:
        "We offer flexible options like dedicated teams, hourly experts, and project-based models. Our team will guide you based on your project scope, timeline, and budget."
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Timelines vary depending on the project’s complexity and requirements. After analyzing your needs, we provide a clear roadmap with defined milestones."
    },
    {
      question: "Do you work with global clients?",
      answer:
        "Yes, we serve clients worldwide across multiple industries and maintain a strong 90% client retention rate."
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We cover a full 360° tech stack including front-end, back-end, mobile, cloud, AI, and emerging technologies."
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Absolutely. We offer maintenance and support services to ensure your solution runs smoothly even after deployment."
    },
    {
      question: "How do I get started?",
      answer:
        "Simply book a free 30-minute consultation with our experts, and we’ll guide you step by step.. We offer maintenance and support services to ensure your solution runs smoothly even after deployment."
    },
    {
      question: "How much does a project typically cost?",
      answer:
        "Project costs vary based on scope, technology, and timelines. After understanding your requirements, we provide a detailed, transparent quotation."
    },
    {
      question: "Can I hire a dedicated team for long-term projects?",
      answer:
        "Yes! Our dedicated teams can work on your projects for short-term or long-term durations, acting as an extension of your in-house team."
    }
  ];

  return (
    <section className="faq">
      <div className="container">
        <h2 className="text-center">Frequently Asked Questions</h2>

        <div className="inner">
          {data.map((item, index) => (
            <div className="accordion-item" key={index}>
              
              <button
                className="accordion-button"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>

                {/* Arrow Icon */}
                <svg
                  className="accordion-icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                </svg>
              </button>

              {/* Content */}
              <div
                className="accordion-content"
                style={{
                  maxHeight: openIndex === index ? "200px" : "0px"
                }}
              >
                <p>{item.answer}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;