import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContentPage from "./components/ContentPage";

function App() {
  return (
    <Router className="bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/lesson/:section/:title" element={<ContentPage />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
