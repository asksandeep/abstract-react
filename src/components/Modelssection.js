import React from 'react'

function Modelssection() {
  return (
    <>
      <section className="home-section-5">
        <div className="container">
          <h2>Custom Hiring Models for Maximum Impact</h2>
          <p className="content-para">
            Our customized hiring solutions help you scale efficiently. Choose from dedicated resources, part-time specialists, or full project teams to match your unique business goals.
          </p>
          <div className="inner">
            <div className="item">
              <div className="icon">
                <img src="img/people.png" alt="" className="w-100" />
              </div>
              <h3>Dedicated Team</h3>
              <p>Hire a Team That Works Only for You.</p>
              <ul>
                <li>160 hours/month per developer</li>
                <li>Flexible task allocation</li>
                <li>Daily stand‑ups with your team</li>
              </ul>
              <p className="note">
                Best for: Long-term product builds, growing apps, or when you need full ownership
              </p>
            </div>
            <div className="item">
              <div className="icon">
                <img src="img/save-time.png" alt="" className="w-100" />
              </div>
              <h3>Time & Material</h3>
              <p>Ideal for agile projects with changing priorities.</p>
              <ul>
                <li>Pay only for hours used</li>
                <li>Scale team up/down anytime</li>
                <li>Track hours transparently via shared tools</li>
              </ul>
              <p className="note">
                Best for: Projects where scope isn’t fully locked, or short-term spikes in need
              </p>
            </div>
            <div className="item">
              <div className="icon">
                <img src="img/best-price.png" alt="" className="w-100" />
              </div>
              <h3>Fixed Price</h3>
              <p>Clear scope, clear timeline, fixed cost.</p>
              <ul>
                <li>Milestone-based delivery</li>
                <li>Fixed pricing for scoped features</li>
                <li>Predictable budgeting</li>
              </ul>
              <p className="note">
                Best for: MVPs, pilot apps, or feature add-ons with well-defined scop
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Modelssection