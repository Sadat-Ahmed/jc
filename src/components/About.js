


import React from "react";

function About() {
  return (
    <section id="about">
      <div className="section-container">
        <div className="text-container">
          <h1>About JCare</h1>
          <p>
          We are the Jamaica Community Against Rezoning Expansion (JCARE), and we are actively working to prevent the Department of City Planning, Councilmember Nantasha Williams, and the Mayor's Office from advancing rezoning efforts in Jamaica, Queens.          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdp7Mw_FV62Wk5ClpvSOIoorMbce9G2xtcZs8uNH-9IQWaSpg/viewform" className="button">Sign the Petition</a>

        </div>
        <div className="image-container">
          <img src="/images/jc1.jpeg" alt="About JCare" />
        </div>
      </div>
    </section>
  );
}

export default About;
