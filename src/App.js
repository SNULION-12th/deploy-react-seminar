import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomaPage from "./routes/HomePage";
import SignUpPage from "./routes/SignUpPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomaPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
