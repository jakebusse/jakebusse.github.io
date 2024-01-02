import "../assets/css/section.css";

import Card from "./Card";

import umngpa_light from "../assets/img/umngpa-light.png";
import umngpa_dark from "../assets/img/umngpa-dark.png";
import busse_xp from "../assets/img/busse-xp.png";
import bingo_labs from "../assets/img/bingo-labs.png";

function Portfolio({ mode }) {
  let umngpa = umngpa_light;

  if (mode) {
    umngpa = umngpa_dark;
  }
  return (
    <div className="section gradient" id="portfolio">
      <div className="section-header">Portfolio</div>
      <div className="section-content card-container">
        <Card
          image={umngpa}
          title="UMN GPA"
          subtitle="Simple react app that calculates a University of Minnesota student GPA based on inputed values"
          tags={["React", "CSS", "JavaScript"]}
          liveButton="https://jakebusse.net/umngpa"
          liveButtonText="./umngpa"
          sourceButton="https://github.com/jakebusse/umngpa"
          sourceButtonText="View on GitHub"
          wide
        >
          &nbsp;
        </Card>
        <Card
          image={busse_xp}
          title="Busse XP"
          subtitle="Interactive portfolio website in the styling of Windows XP"
          tags={["React", "CSS", "JavaScript"]}
          liveButton="https://jakebusse.net/busse-xp"
          liveButtonText="./busse-xp"
          sourceButton="https://github.com/jakebusse/busse-xp"
          sourceButtonText="View on GitHub"
        >
          &nbsp;
        </Card>
        <Card
          image={bingo_labs}
          title="Bingo Labs"
          subtitle="Python program that runs a statistical analysis of simulated bingo games using various patterns"
          tags={["Python", "CSS", "Bootstrap"]}
          liveButton="https://jakebusse.net/bingo"
          liveButtonText="./bingo"
          sourceButton="https://github.com/jakebusse/bingo"
          sourceButtonText="View on GitHub"
        >
          &nbsp;
        </Card>
      </div>
    </div>
  );
}

export default Portfolio;
