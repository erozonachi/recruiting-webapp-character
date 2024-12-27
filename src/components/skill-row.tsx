import { useMemo } from "react";

const SkillRow = ({ name, value, modifier, handleIncrement, handleDecrement }) => {
  const total = useMemo(() => value + modifier.value, [value, modifier.value]);

  return (
    <div className="v-margin">
      <span className="h-margin">{`${name}: ${value} (modifier: ${modifier.name}: ${modifier.value})`}</span>
      <button className="h-margin" onClick={handleIncrement}>+</button>
      <button className="h-margin" onClick={handleDecrement}>-</button>
      <span>total: {total}</span>
    </div>
  );
}

export default SkillRow;
