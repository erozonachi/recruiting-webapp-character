const AttributeRow = ({ name, value, modifier, handleIncrement, handleDecrement }) => {
  return (
    <div className="v-margin">
      <span className="h-margin">{`${name}: ${value} (modifier: ${modifier})`}</span>
      <button className="h-margin" onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default AttributeRow;
