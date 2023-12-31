import "../assets/css/card.css";

import Tag from "./Tag";

function Card({
  image,
  title,
  subtitle,
  dates,
  tags,
  children,
  liveButton,
  liveButtonText,
  sourceButton,
  sourceButtonText,
  wide,
  info,
}) {
  let classes = "card";

  if (wide) {
    classes += " wide";
  }
  if (info) {
    classes += " info";
  }

  let renderedImage;
  if (image) {
    renderedImage = <img src={image} alt={title} draggable={false} />;
  }

  let renderedTags;

  if (tags) {
    renderedTags = tags.map((tag) => {
      return <Tag text={tag} />;
    });
  }

  const handleLiveButton = () => {
    window.open(liveButton, "_blank");
  };

  const handleSourceButton = () => {
    window.open(sourceButton, "_blank");
  };

  let renderedLiveButton;
  if (liveButton && liveButtonText) {
    renderedLiveButton = (
      <div className="cardButton liveButton" onClick={handleLiveButton}>
        {liveButtonText}
      </div>
    );
  }

  let renderedSourceButton;
  if (sourceButton && sourceButtonText) {
    renderedSourceButton = (
      <div className="cardButton sourceButton" onClick={handleSourceButton}>
        {sourceButtonText}
      </div>
    );
  }

  let renderedContent = (
    <div>
      <div className="cardTitle">{title}</div>
      <div className="cardBody">{children}</div>
      <div className="cardTags">{renderedTags}</div>
    </div>
  );

  if (!info) {
    renderedContent = (
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
    );
  }

  return (
    <div className={classes}>
      {renderedImage}
      {renderedContent}
      <div className="cardButtonContainer">
        {renderedLiveButton}
        {renderedSourceButton}
      </div>
    </div>
  );
}

export default Card;
