import { useState } from 'react';
import { Character } from '../types';

const characterDefault: Character = {
  attributes: {
    Strength: { value: 10, modifier: 0 },
    Dexterity: { value: 10, modifier: 0 },
    Constitution: { value: 10, modifier: 0 },
    Intelligence: { value: 10, modifier: 0 },
    Wisdom: { value: 10, modifier: 0 },
    Charisma: { value: 10, modifier: 0 },
  },
  skills: {
    'Acrobatics': { value: 0, attributeModifier: 'Dexterity' },
    'Animal Handling': { value: 0, attributeModifier: 'Wisdom' },
    'Arcana': { value: 0, attributeModifier: 'Intelligence' },
    'Athletics': { value: 0, attributeModifier: 'Strength' },
    'Deception': { value: 0, attributeModifier: 'Charisma' },
    'History': { value: 0, attributeModifier: 'Intelligence' },
    'Insight': { value: 0, attributeModifier: 'Wisdom' },
    'Intimidation': { value: 0, attributeModifier: 'Charisma' },
    'Investigation': { value: 0, attributeModifier: 'Intelligence' },
    'Medicine': { value: 0, attributeModifier: 'Wisdom' },
    'Nature': { value: 0, attributeModifier: 'Intelligence' },
    'Perception': { value: 0, attributeModifier: 'Wisdom' },
    'Performance': { value: 0, attributeModifier: 'Charisma' },
    'Persuasion': { value: 0, attributeModifier: 'Charisma' },
    'Religion': { value: 0, attributeModifier: 'Intelligence' },
    'Sleight of Hand': { value: 0, attributeModifier: 'Dexterity' },
    'Stealth': { value: 0, attributeModifier: 'Dexterity' },
    'Survival': { value: 0, attributeModifier: 'Wisdom' },
  }
};

const useStoreDefaults = () => {
  const [characters, setCharacters] = useState<Character[]>([characterDefault]);

  return {
    characters,
    setCharacters,
  };
}

export default useStoreDefaults;
