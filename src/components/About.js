import "../assets/css/section.css";

function About() {
  return (
    <div className="section" id="about">
      <div className="section-header">About Me</div>
      <div className="section-body">
        My name is <a href="#">Jake Busse</a>. I am a second-year computer
        science student at the{" "}
        <a href="https://umn.edu" target="_blank">
          University of Minnesota - Twin Cities
        </a>{" "}
        and an IT Intern at{" "}
        <a href="https://northmemorial.com" target="_blank">
          North Memorial Health
        </a>
        . In addition to the wealth of knowledge I have gained through{" "}
        <a href="">formal education</a> and <a href="">working experience</a>, I
        have also mastered many technological skills through various{" "}
        <a href="">passion projects</a>, such as <a href="">this portfolio</a>.
        When I'm not sitting in front of a computer you can most likely find me
        cuddling up with one of my <a href="">three cats</a> 🐈, hiking along{" "}
        <a href="https://northshorevisitor.com/" target="_blank">
          Minnesota's North Shore
        </a>{" "}
        ⛰️, cross-stitching 🧵, or going to the{" "}
        <a href="https://www.emagine-entertainment.com/" target="_blank">
          movies
        </a>{" "}
        🎥.
      </div>
    </div>
  );
}

export default About;
