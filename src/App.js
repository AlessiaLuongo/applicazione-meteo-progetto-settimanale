import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ComponentNavbar from "./components/ComponentNavbar";
import ComponentMain from "./components/ComponentMain";
import ComponentSearchBar from "./components/ComponentSearchBar";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSearchSubmit = (city, countryCode) => {
    setCity(city);
    setCountryCode(countryCode);
  };
  return (
    <div className="App">
      <header>
        <ComponentNavbar />
      </header>
      <main>
        <ComponentSearchBar onSubmit={handleSearchSubmit} />
        <ComponentMain city={city} countryCode={countryCode} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
