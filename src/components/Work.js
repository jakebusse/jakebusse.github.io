import "../assets/css/section.css";

import north from "../assets/img/north.jpg";

import Card from "./Card";

function Work() {
  return (
    <div className="section" id="work">
      <div className="section-header">Work Experience</div>
      <div className="section-body card-container">
        <Card
          image={north}
          title="End User Technology Intern"
          subtitle="North Memorial Health"
          dates="June 2022 - Present"
          tags={[
            "Agile",
            "Project Management",
            "Microsoft Azure",
            "SQL",
            "Microsoft Office",
          ]}
          wide
        >
          <ul>
            <li>
              Communicate effectively with users and team members to provide
              unmatched customer service and resolve user issues.
            </li>
            <li>
              Provide Tier II on-site support in a large-scale hospital
              environment.
            </li>
            <li>
              Provide support for many varieties of applications, devices, and
              interfaces that impact patient care.
            </li>
          </ul>
        </Card>
        <Card wide />
        <Card />
      </div>
    </div>
  );
}

export default Work;
