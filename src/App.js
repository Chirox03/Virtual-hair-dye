import logo from './logo.svg';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ColorPicker from './components/ColorPicker';

function App() {
  return (
    <div className="App">
      <header>
      <h1>Virtual hair try on </h1>
      </header>
      <body>
      <ColorPicker/>
      <ImageUpload/>
      </body>
    </div>
  );
}

export default App;
