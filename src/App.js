import './App.css';
import Title from './Title';
import Logo from './Logo';
import PopiList from './PopiList';
import Footer from './Footer'
import '@fontsource/roboto/400.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Title />
      <PopiList />
      <Footer />
    </div>
  );
}

export default App;