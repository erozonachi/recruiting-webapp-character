import { useMemo } from "react";

const ClassRow = ({ name, matchedClasses }) => {
  const matched = useMemo(() => matchedClasses.includes(name) ? 'matched' : '', [matchedClasses, name]);
  return (
    <span className={`${matched} v-margin`}>{name}</span>
  );
}

export default ClassRow;
