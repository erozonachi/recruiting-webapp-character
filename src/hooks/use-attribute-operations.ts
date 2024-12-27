import { useCallback } from 'react';

import useCharacterStore from './use-character-store';

const useAttributeOperations = (charIndex: number) => {
  const { characters, setCharacters } = useCharacterStore();

  const handleAttributeChange = useCallback((name: string, count: number) => {
    const { value } = characters[charIndex].attributes[name];
    const newValue = value + count;
    const signFactor = newValue > 10 ? 1 : -1;
    const derivedMod = Math.floor(Math.abs(newValue - 10) / 2);
    const newModifier = derivedMod !== 0 ? (signFactor * derivedMod) : derivedMod;

    setCharacters((prev) => {
      const newCharacters = [...prev];
      newCharacters[charIndex].attributes[name] = {
        value: newValue,
        modifier: newModifier,
      };

      return newCharacters;
    });
  }, [characters, setCharacters]);

  const incrementAttribute = useCallback((name: string) => {
    handleAttributeChange(name, 1);
  }, [handleAttributeChange]);

  const decrementAttribute = useCallback((name: string) => {
    const { value } = characters[charIndex].attributes[name];

    if (value > 0) {
      handleAttributeChange(name, -1);
    }
  }, [handleAttributeChange, characters, charIndex]);

  return {
    incrementAttribute,
    decrementAttribute,
  };
}

export default useAttributeOperations;
