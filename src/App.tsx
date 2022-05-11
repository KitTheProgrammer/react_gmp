import FunctionalComponent from './components/FunctionalComponent'
import ClassHello from './components/ClassComponent'
import CreateElem from './components/CreateElem'
import PureClassHello from './components/PureComponent'
import SearchBar from './components/SearchBar'
import GenreMenuBar from './components/GenreMenuBar'

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
