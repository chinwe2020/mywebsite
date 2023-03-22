import "bootstrap/dist/css/bootstrap.min.css";

//components
import NavBar from "./components/nav";
import Header from "./components/header";
import Portfolio from "./components/porfolio";
import Bio from "./components/bio";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollToTopButton from "./components/scroll";

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
