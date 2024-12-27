const CharacterDisplayCard = ({ heading, subHeading, children }) => {
  return (
    <div className="col">
      <h3>{heading}</h3>
      {subHeading && <h4>{subHeading}</h4>}
      <div className="col">{children}</div>
    </div>
  );
}

export default CharacterDisplayCard;
