import React from "react";

function CitySays() {
  return (
    <section id="city-says">
      <div className="section-container">
        <div className="text-container">
          <h1>What the City Says</h1>
          <p>
            According to the city, this rezoning plan is designed to bring
            more affordable housing and development to Jamaica. However, past
            experiences show that these plans often displace long-term
            residents and businesses, replacing them with high-end luxury
            developments.
          </p>
        </div>
        <div className="image-container">
          <img src="/images/rz3.jpg" alt="City Statement" />
        </div>
      </div>
    </section>
  );
}

export default CitySays;
