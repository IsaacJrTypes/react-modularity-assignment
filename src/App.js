import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SharedComponents from './components/SharedComponents';
import ContentA from './components/ContentA';
import ContentB from './components/ContentB';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentA>
        <SharedComponents />
      </ContentA>
      <ContentB>
        <SharedComponents />
      </ContentB>
      <Footer />
    </div>
  );
}

export default App;
