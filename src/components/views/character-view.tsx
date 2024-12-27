import useCharacterStore from "../../hooks/use-character-store";
import Character from "../character";
import CharacterControls from "../character-controls";

const CharacterView = () => {
  const { characters } = useCharacterStore();

  return (
    <main className="container">
      <CharacterControls />
      {
        characters.map((_char, index) => (<Character key={index} charIndex={index} />))
      }
    </main>
  );
}

export default CharacterView;
