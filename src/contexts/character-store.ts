import { createContext } from "react";

import { CharacterStore } from "../types";

const CharacterStoreContext = createContext<CharacterStore>({
  characters: [],
  setCharacters: () => { },
});

export default CharacterStoreContext;
