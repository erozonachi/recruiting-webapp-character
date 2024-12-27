import { useMemo } from 'react';

import useCharacterStore from './use-character-store';
import { CLASS_LIST } from '../consts';

const useCheckClassCharacterMatch = (charIndex: number) => {
  const { characters } = useCharacterStore();

  const matchedClasses = useMemo(() => {
    const attributes = characters[charIndex].attributes;

    const classKeys = Object.keys(CLASS_LIST);

    return classKeys.filter((key) => {
      const classAttributes = CLASS_LIST[key];

      return Object.keys(classAttributes).every((attr) => {
        return attributes[attr].value >= classAttributes[attr];
      });
    });
  }, [characters, charIndex]);

  return {
    matchedClasses,
  };
}

export default useCheckClassCharacterMatch;
