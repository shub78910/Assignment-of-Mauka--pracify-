import "./app.css"
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Features from "./components/Features";
import Sponsors from "./components/Sponsors";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Body />
      <Features />
      <Sponsors />
      <Testimonials />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;