import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Components/Search";
import ListBook from "./Components/ListBook";

function App() {
  return (
    /* Navigation */
    <Router>
      <div className="app">
        <Routes>
          <Route  path="/" element={<ListBook />}></Route>
          <Route  path="/search" element={<Search />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
