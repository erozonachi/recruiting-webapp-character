import { useMemo } from "react";
import CharacterDisplay from "./character-display";

const Character = ({ charIndex }) => {
  const title = useMemo(() => `Character ${charIndex + 1}`, [charIndex]);

  return (
    <section className="character">
      <h2>{title}</h2>
      <CharacterDisplay charIndex={charIndex} />
    </section>
  );
}

export default Character;
