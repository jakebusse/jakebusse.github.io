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
  work,
}) {
  let classes = "card";
  let imgClass = "card-img-container";

  if (wide) {
    classes += " wide";
  }
  if (info) {
    classes += " info";
  }
  if (work) {
    imgClass += " work";
  }

  let renderedImage;
  if (image) {
    renderedImage = (
      <div className={imgClass}>
        <img src={image} alt={title} draggable={false} />;
      </div>
    );
  }

  let renderedTags;

  if (tags) {
    renderedTags = tags.map((tag) => {
      return <Tag text={tag} />;
    });
  }

  const handleClick = (event) => {
    event.preventDefault();
    window.open(event.target.value);
  };

  const handleLiveButton = () => {
    window.open(liveButton);
  };

  const handleSourceButton = () => {
    window.open(sourceButton);
  };

  let renderedLiveButton;
  if (liveButton && liveButtonText) {
    renderedLiveButton = (
      <button
        className="cardButton liveButton"
        value={liveButton}
        onClick={handleClick}
      >
        {liveButtonText}
      </button>
    );
  }

  let renderedSourceButton;
  if (sourceButton && sourceButtonText) {
    renderedSourceButton = (
      <button
        className="cardButton sourceButton"
        value={sourceButton}
        onClick={handleClick}
      >
        {sourceButtonText}
      </button>
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
        <div className="cardButtonContainer">
          {renderedLiveButton}
          {renderedSourceButton}
        </div>
      </div>
    );
  }

  return (
    <div className={classes}>
      {renderedImage}
      {renderedContent}
    </div>
  );
}

export default Card;
