export const Card = ({ cardData }) => {
  return (
    <div className="card">
      <img src={cardData.photo} alt={cardData.title} />
      <div className="card-metadata">
        <div className="card-metadata-row">
          {cardData.superHost && <div className="pill">SUPER HOST</div>}
          <span>
            {cardData.type}
            {cardData.beds ? `. ${cardData.beds} beds` : ""}
          </span>
        </div>
        <div className="card-metadata-row-2">
          <span className="material-symbols-outlined rating-icon">star</span>
          <div className="rating">{cardData.rating}</div>
        </div>
      </div>
      <div className="card-title">{cardData.title}</div>
    </div>
  );
};
