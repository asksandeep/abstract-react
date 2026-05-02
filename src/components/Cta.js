import React from 'react'

function Cta() {
  return (
    <>
    <section className="cta">
      <div className="container">
        <div className="inner">
          <div className="col-left">
            <h2>Kickstart Your Next Big Idea Today</h2>
            <ul>
              <li>Driving Innovation with 15+ Years of Expertise</li>
              <li>Solutions Designed to Match Your Industry Needs</li>
              <li>Expertise That Moves Your Business Ahead</li>
              <li>Get Expert Insights in a Free 30-Minute Call</li>
            </ul>
          </div>
          <div className="col-right">
            <form className="form">
              <h3>Have Questions? <br/>We’re Just a Message Away</h3>
              <div className="grid-row">
                    <div className="form-group">
                        <input type="text" placeholder="Name " name="" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="tel" placeholder="Email" name="" className="form-control"/>
                    </div>
                </div>
                <div className="grid-row">
                    <div className="form-group">
                        <input type="text" placeholder="Company Name" name="" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="tel" placeholder="Contact Number" name="" className="form-control"/>
                    </div>
                </div>                
                <div className="form-group">
                    <textarea className="form-control text-area" placeholder="Project Brief"></textarea>
                </div>
                <button type="submit" className="submitBtn">Submit</button>   
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Cta