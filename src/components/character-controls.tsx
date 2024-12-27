import useAddCharacter from "../hooks/use-add-character";

const CharacterControls = () => {
  const { addCharacter } = useAddCharacter();

  return (
    <section className="row">
      <button className="h-margin" onClick={addCharacter}>New Character +</button>
    </section>
  );
}

export default CharacterControls;
