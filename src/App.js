import "./App.css";
import Header from "./components/Header";
import HomaPage from "./routes/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HomaPage />
      <Footer />
    </div>
  );
}

export default App;
