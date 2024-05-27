import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto md:px-20 px-8">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
