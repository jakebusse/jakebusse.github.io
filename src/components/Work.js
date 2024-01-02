import "../assets/css/section.css";

import north from "../assets/img/north.jpg";
import walmart from "../assets/img/walmart.jpg";
import resumeImg from "../assets/img/resume.jpg";

import resume from "../assets/docs/Resume_Jake_Busse.pdf";

import Card from "./Card";

function Work() {
  return (
    <div className="section gradient" id="work">
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
          work
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
        <Card
          image={walmart}
          title="Customer Service Associate"
          subtitle="Walmart"
          dates="June 2020 - April 2022"
          tags={["Customer Service", "Point of Sale"]}
          work
        >
          <ul>
            <li>
              Worked with customers in a variety of bank-level financial
              transactions to provide excellent service.
            </li>
            <li>
              Facilitated an organized and productive working environment.
            </li>
            <li>
              Delegated tasks to other team members in order to sustain or
              increase productivity when team leaders were not present.
            </li>
          </ul>
        </Card>
        <Card
          image={resumeImg}
          title="Check out my Resume"
          subtitle="To see more of my qualifications"
          liveButton={resume}
          liveButtonText="View Here"
          narrow
          work
        />
      </div>
    </div>
  );
}

export default Work;
