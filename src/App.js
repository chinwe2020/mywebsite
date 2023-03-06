import NavBar from './components/nav';
import Header from './components/header';
import Portfolio from './components/porfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from './components/bio';

function App() {
  return (
  <div className="website">
    <NavBar />
    <Header />
    <Bio />
    <Portfolio />
  </div>
  );
}

export default App;
