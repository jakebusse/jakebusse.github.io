import "../assets/css/section.css";

import Card from "./Card";

function Education() {
  return (
    <div className="section" id="education">
      <div className="section-header gradient">Education</div>
      <div className="section-body card-container">
        <Card title="Institution" info>
          University of Minnesota - Twin Cities
        </Card>
        <Card title="Degree" info>
          Computer Science, BA
        </Card>
        <Card title="GPA" info>
          3.5
        </Card>
        <Card title="Expected Graduation" info>
          May 2026
        </Card>
        <Card
          title="Relevant Coursework"
          tags={[
            "Intro to Data Structures and Algorithms",
            "Machine Architecture and Organization",
            "Discrete Structures",
            "Data Structures and Algorithms",
            "Advanced Programming Principles",
          ]}
          info
        />
      </div>
    </div>
  );
}

export default Education;
