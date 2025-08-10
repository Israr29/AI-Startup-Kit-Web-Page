import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="frame">
          <span>NEW</span>Latest integration just arrived
        </div>
        <h1>
          Boost your <br />
          <span className="faded-text"> rankings with AI.</span>
        </h1>
        <p>
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <button className="hero-btn">Start for free</button>
      </div>
    </section>
  );
}

export default HeroSection;
