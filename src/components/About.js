import "../assets/css/section.css";

function About() {
  const handleClick = (event) => {
    console.log(event);
    event.preventDefault();
    document
      .getElementById(event.target.value)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="section" id="about">
      <div className="section-header gradient">About Me</div>
      <div className="section-body">
        <p>
          My name is{" "}
          <button className="link" value="about" onClick={handleClick}>
            Jake Busse
          </button>
          . I am a second-year computer science student at the{" "}
          <a className="link" href="https://umn.edu" target="_blank">
            University of Minnesota - Twin Cities
          </a>{" "}
          and an IT Intern at{" "}
          <a className="link" href="https://northmemorial.com" target="_blank">
            North Memorial Health
          </a>
          . In addition to the wealth of knowledge I have gained through{" "}
          <button className="link" value="education" onClick={handleClick}>
            formal education
          </button>{" "}
          and{" "}
          <button className="link" value="work" onClick={handleClick}>
            working experience
          </button>
          , I have also mastered many technological skills through various{" "}
          <button className="link" value="portfolio" onClick={handleClick}>
            passion projects
          </button>
          , such as{" "}
          <button className="link" value="hero" onClick={handleClick}>
            this portfolio
          </button>
          . When I'm not sitting in front of a computer you can most likely find
          me cuddling up with one of my three cats 🐈, hiking along{" "}
          <a
            className="link"
            href="https://northshorevisitor.com/"
            target="_blank"
          >
            Minnesota's North Shore
          </a>{" "}
          ⛰️, cross-stitching 🧵, or going to the{" "}
          <a
            className="link"
            href="https://www.emagine-entertainment.com/"
            target="_blank"
          >
            movies
          </a>{" "}
          🎥.
        </p>
      </div>
    </div>
  );
}

export default About;
