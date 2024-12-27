import { useMemo } from "react";

import CharacterDisplayCard from "./character-display-card";
import AttributeRow from "./attribute-row";
import ClassRow from "./class-row";
import SkillRow from "./skill-row";
import useCharacterStore from "../hooks/use-character-store";
import useAttributeOperations from "../hooks/use-attribute-operations";
import { CLASS_LIST } from "../consts";
import useCheckClassCharacterMatch from "../hooks/use-check-class-character-match";
import useSkillOperations from "../hooks/use-skill-operations";

const CharacterDisplay = ({ charIndex }) => {
  const { characters } = useCharacterStore();
  const { incrementAttribute, decrementAttribute } = useAttributeOperations(charIndex);
  const { totalPointsAvailableToSpend, incrementSkill, decrementSkill } = useSkillOperations(charIndex);
  const { matchedClasses } = useCheckClassCharacterMatch(charIndex);
  const character = useMemo(() => characters[charIndex], [characters, charIndex]);

  return (
    <div className="row">
      <CharacterDisplayCard heading="Attributes">
        {Object.keys(character.attributes).map((attr) => (
          <AttributeRow
            key={attr}
            name={attr}
            value={character.attributes[attr].value}
            modifier={character.attributes[attr].modifier}
            handleDecrement={() => decrementAttribute(attr)}
            handleIncrement={() => incrementAttribute(attr)}
          />
        ))}
      </CharacterDisplayCard>
      <CharacterDisplayCard heading="Classes">
        {Object.keys(CLASS_LIST).map((key) => (<ClassRow
          key={key}
          name={key}
          matchedClasses={matchedClasses}
        />))}
      </CharacterDisplayCard>
      <CharacterDisplayCard
        heading="Skills"
        subHeading={`Total skill points available to spend: ${totalPointsAvailableToSpend}`}
      >
        {Object.keys(character.skills).map((skill) => (
          <SkillRow
            key={skill}
            name={skill}
            value={character.skills[skill].value}
            modifier={{
              name: character.skills[skill].attributeModifier,
              value: character.attributes[character.skills[skill].attributeModifier].modifier
            }}
            handleDecrement={() => decrementSkill(skill)}
            handleIncrement={() => incrementSkill(skill)}
          />
        ))}
      </CharacterDisplayCard>
    </div>
  );
}

export default CharacterDisplay;
