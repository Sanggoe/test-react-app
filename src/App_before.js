import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject>
      <Subject title="React" sub="For UI"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
