import "../assets/css/section.css";

function About() {
  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.value.slice(0, 5) === "https") {
      window.open(event.target.value);
    } else {
      document
        .getElementById(event.target.value)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
          <button
            className="link"
            value="https://umn.edu"
            onClick={handleClick}
          >
            University of Minnesota - Twin Cities
          </button>{" "}
          and an IT Intern at{" "}
          <button
            className="link"
            value="https://northmemorial.com"
            onClick={handleClick}
          >
            North Memorial Health
          </button>
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
          <button
            className="link"
            value="https://northshorevisitor.com/"
            onClick={handleClick}
          >
            Minnesota's North Shore
          </button>{" "}
          ⛰️, cross-stitching 🧵, or going to the{" "}
          <button
            className="link"
            value="https://www.emagine-entertainment.com/"
            onClick={handleClick}
          >
            movies
          </button>{" "}
          🎥.
        </p>
      </div>
    </div>
  );
}

export default About;
