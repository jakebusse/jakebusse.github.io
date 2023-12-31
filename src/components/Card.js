import { render } from "@testing-library/react";
import "../assets/css/card.css";

import Tag from "./Tag";

function Card({ image, title, subtitle, dates, tags, children, wide }) {
  let classes = "card";
  if (wide) {
    classes = "card wide";
  }

  let renderedTags;

  if (tags) {
    renderedTags = tags.map((tag) => {
      return <Tag text={tag} />;
    });
  }

  return (
    <div className={classes}>
      <img src={image} alt={title} draggable={false} />
      <div className="cardContents">
        <div className="cardTitle">{title}</div>
        <div className="cardSubtitle">
          {subtitle}
          <br />
          {dates}
        </div>
        <div className="cardBody">{children}</div>
        <div className="cardTags">{renderedTags}</div>
      </div>
    </div>
  );
}

export default Card;
