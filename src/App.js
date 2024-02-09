import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import ComponentNavbar from "./components/ComponentNavbar";
import ComponentMain from "./components/ComponentMain";
import ComponentSearchBar from "./components/ComponentSearchBar";
import { useState } from "react";
import ComponentDetail from "./components/ComponentDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSearchSubmit = (city, countryCode) => {
    setCity(city);
    setCountryCode(countryCode);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <ComponentNavbar />
        </header>

        <main className="App-header">
          <Routes>
            <Route
              element={
                <>
                  <ComponentSearchBar onSubmit={handleSearchSubmit} />
                  <ComponentMain city={city} countryCode={countryCode} />
                </>
              }
              path="/"
            />
          </Routes>
          <Routes>
            <Route
              element={
                <ComponentDetail city={city} countryCode={countryCode} />
              }
              path="/detail"
            />
          </Routes>
        </main>

        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
