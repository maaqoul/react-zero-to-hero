import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContentPage from "./components/ContentPage";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const animal = "dog";
    const location = "rabat";
    const breed = "";

    fetch(`http://localhost:3001/pets?animal=${animal}&location=${location}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <Router className="app-background">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/lesson/:section/:title" element={<ContentPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
