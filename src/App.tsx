// @ts-ignore
import { FunctionalComponent, ClassHello, CreateElem, PureClassHello, SearchBar, GenreMenuBar } from './components/index.js'

import './App.scss';

function App() {
  return (
    <div>
      <ClassHello/>
      {CreateElem}
      <FunctionalComponent/>
      <PureClassHello/>
      <SearchBar/>
      <GenreMenuBar/>
    </div>
  );
}

export default App;
