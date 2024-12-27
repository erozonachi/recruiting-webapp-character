export type Attributes = {
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
};

export type Class = "Barbarian" | "Wizard" | "Bard";

export type Attribute = {
  value: number;
  modifier: number;
};

export type Skill = {
  value: number;
  attributeModifier: string;
};

export type Character = {
  attributes: Record<string, Attribute>;
  skills: Record<string, Skill>;
};

export type CharacterStore = {
  characters: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>
};
