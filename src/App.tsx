import { useState } from 'react';
import './App.css';

import CharacterStoreContext from './contexts/character-store';
import useStoreDefaults from './hooks/use-store-defaults';
import CharacterView from './components/views/character-view';


function App() {
  const storeDefaults = useStoreDefaults();

  return (
    <CharacterStoreContext.Provider value={storeDefaults}>
      <CharacterView />
    </CharacterStoreContext.Provider>
  );
}

export default App;
