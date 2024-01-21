// App.tsx
import React from "react";
import Useeffect from "./components/Useeffect";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="pagina">
      <h1 className="titulo">Garanta seu Ingresso</h1>
      <Useeffect />
    </div>
  );
};

export default App;
