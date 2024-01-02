import "../assets/css/card.css";
import classNames from "classnames";
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
  narrow,
  info,
  work,
}) {
  const classes = classNames("card", {
    narrow,
    info,
  });

  const imgClass = classNames("card-img-container", {
    work,
  });

  const contentClass = classNames({
    cardContents: !info,
  });

  let renderedImage;
  if (image) {
    renderedImage = (
      <div className={imgClass}>
        <img src={image} alt={title} draggable={false} />;
      </div>
    );
  }

  let renderedTitle;
  if (title) {
    renderedTitle = <div className="cardTitle">{title}</div>;
  }

  let renderedSubtitle;
  if (subtitle) {
    renderedSubtitle = (
      <div className="cardSubtitle">
        {subtitle}
        <br />
        {dates}
      </div>
    );
  }

  let renderedBody;
  if (children) {
    renderedBody = <div className="cardBody">{children}</div>;
  }

  let renderedTags;
  if (tags) {
    renderedTags = tags.map((tag) => {
      return <Tag text={tag} />;
    });
    renderedTags = <div className="cardTags">{renderedTags}</div>;
  }

  const handleClick = (event) => {
    event.preventDefault();
    window.open(event.target.value);
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

  let renderedButtons;
  if (renderedSourceButton || renderedLiveButton) {
    renderedButtons = (
      <div className="cardButtonContainer">
        {renderedLiveButton}
        {renderedSourceButton}
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
        <div>{renderedButtons}</div>
      </div>
    );
  }

  return (
    <div className={classes}>
      {renderedImage}
      <div className={contentClass}>
        {renderedTitle}
        {renderedSubtitle}
        {renderedBody}
        {renderedTags}
        {renderedButtons}
      </div>
    </div>
  );
}

export default Card;
