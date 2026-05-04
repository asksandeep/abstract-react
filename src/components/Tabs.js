import { useState } from "react";

function Tabs() {
  const [active, setActive] = useState(0);

  const tabs = [
    {
      title: (
        <>
          Requirements <br /> Analysis
        </>
      ),
      heading: "Requirements Analysis",
      icon: "/img/analysis.png",
      image: "/img/analysis.jpg",
      content:
        "We start by gathering and analyzing your business needs, goals, and challenges. This step helps us define clear project requirements, align expectations, and create a roadmap for success."
    },
    {
      title: (
        <>
          UI/UX <br /> Design
        </>
      ),
      heading: "UI/UX Design",
      icon: "/img/graphic-design.png",
      image: "/img/uiux.jpg",
      content:
        "In this phase, we craft intuitive, user-friendly, and visually appealing designs that align with your brand identity. Wireframes, prototypes, and UI/UX strategies ensure the solution is both functional and engaging."
    },
    {
      title: (
        <>
          Development & <br /> Implementation
        </>
      ),
      heading: "Development & Implementation",
      icon: "/img/software.png",
      image: "/img/development.jpg",
      content:
        "Our developers bring your project to life using the latest technologies and frameworks. We follow agile practices to ensure scalable, secure, and high-performance solutions, implemented step by step for faster delivery."
    },
    {
      title: (
        <>
          Testing & Quality <br /> Assurance
        </>
      ),
      heading: "Testing & Quality Assurance",
      icon: "/img/qc.png",
      image: "/img/testing.jpg",
      content:
        "Before launch, we rigorously test every feature to ensure functionality, performance, and security. Our QA process eliminates bugs, optimizes speed, and guarantees a flawless user experience across all devices."
    },
    {
      title: (
        <>
          Deployment <br /> & Launch
        </>
      ),
      heading: "Deployment & Launch",
      icon: "/img/start-up.png",
      image: "/img/deployment.jpg",
      content:
        "Once the solution passes all quality checks, we deploy it to the live environment with minimal downtime. Our team ensures smooth launch, proper configuration, and a seamless transition from development to production."
    },
    {
      title: (
        <>
          Maintenance <br /> & Support
        </>
      ),
      heading: "Maintenance & Support",
      icon: "/img/support.png",
      image: "/img/support.jpg",
      content:
        "Our work doesn’t stop at launch — we provide continuous support to keep your solution secure, updated, and performing at its best. From bug fixes to feature upgrades, we ensure long-term reliability and scalability."
    }
  ];

  return (
    <div className="tabs">

      {/* 🔹 Tab Buttons */}
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`label ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <img src={tab.icon} alt="" />
            {tab.title}
          </div>
        ))}
      </div>

      {/* 🔹 Content */}
      <div className="panel">
        <div className="innerpanel">
          <div className="col">
            <img
              src={tabs[active].image}
              alt=""
              className="w-100 mainimg"
            />
          </div>

          <div className="col">
            <h3>{tabs[active].heading}</h3>
            <p>{tabs[active].content}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Tabs;