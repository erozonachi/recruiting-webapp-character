import { useCallback, useMemo } from 'react';

import useCharacterStore from './use-character-store';

const useSkillOperations = (charIndex: number) => {
  const { characters, setCharacters } = useCharacterStore();

  const totalPointsAvailableToSpend = useMemo(() => 10 + (4 * characters[charIndex].attributes['Intelligence'].modifier), [characters, charIndex]);
  const totalSkillPonts = useMemo(() => Object.values(characters[charIndex].skills).reduce((acc, { value }) => acc + value, 0), [characters, charIndex]);

  const handleSkillChange = useCallback((name: string, count: number) => {
    if (totalSkillPonts + count > totalPointsAvailableToSpend) {
      alert('You do not have enough skill points to spend');
      return;
    }

    const { value } = characters[charIndex].skills[name];
    const newValue = value + count;

    setCharacters((prev) => {
      const newCharacters = [...prev];
      newCharacters[charIndex].skills[name] = {
        ...newCharacters[charIndex].skills[name],
        value: newValue,
      };

      return newCharacters;
    });
  }, [characters, setCharacters]);

  const incrementSkill = useCallback((name: string) => {
    handleSkillChange(name, 1);
  }, [handleSkillChange]);

  const decrementSkill = useCallback((name: string) => {
    const { value } = characters[charIndex].skills[name];

    if (value > 0) {
      handleSkillChange(name, -1);
    }
  }, [handleSkillChange, characters, charIndex]);

  return {
    totalPointsAvailableToSpend,
    totalSkillPonts,
    incrementSkill,
    decrementSkill,
  };
}

export default useSkillOperations;
