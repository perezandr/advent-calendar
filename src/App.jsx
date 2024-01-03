import { useState } from "react";
import Present from "./components/present";
import PresentList from "./components/presentList";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1 className="title">Calendario dell'avvento!</h1> */}
      {/* <Present /> */}
      <PresentList />
    </div>
  );
}

export default App;
