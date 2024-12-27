import { useContext } from 'react';

import CharacterStoreContext from '../contexts/character-store';

const useCharacterStore = () => useContext(CharacterStoreContext);

export default useCharacterStore;
