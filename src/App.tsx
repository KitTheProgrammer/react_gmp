import FunctionalComponent from './components/FunctionalComponent/index'
import ClassHello from './components/ClassComponent/index'
import CreateElem from './components/CreateElem/index'
import PureClassHello from './components/PureComponent/index'
import SearchBar from './components/SearchBar/index'
import GenreMenuBar from './components/GenreMenuBar/index'

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
