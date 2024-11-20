


import React from "react";

function About() {
  return (
    <section id="about">
      <div className="section-container">
        <div className="text-container">
          <h1>About JCare</h1>
          <p>
            Introducing JCARE - a community-led coalition fighting against
            gentrification in Jamaica. When the Department of City Planning
            introduced the “Jamaica Plan,” a group of long-term residents and
            community members came together to ensure the future of Jamaica
            stays within our hands. After the effects of the 2008 rezoning and
            the loss of many beloved businesses, we know this is the city’s way
            of bringing in more money rather than investing in improving our
            community.
          </p>
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
