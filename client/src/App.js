import "bootstrap/dist/css/bootstrap.min.css";

//components
import NavBar from "./components/Nav";
import Header from "./components/Header";
import Portfolio from "./components/Porfolio";
import Bio from "./components/Bio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/Scroll";

function App() {
  return (
    <div className="website">
      <NavBar />
      <Header />
      <Bio />
      <hr />
      <Portfolio />
      <hr />
      <Blog />
      <hr />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
