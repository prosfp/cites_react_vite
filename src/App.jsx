import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulari from "./components/Formulari";
import LlistatPacients from "./components/LlistatPacients";

function App() {
  const [pacients, setPacients] = useState([]);
  const [pacient, setPacient] = useState({});

  useEffect(() => {
    const obtenirLS = () => {
      const pacientsLS = JSON.parse(localStorage.getItem("pacients")) ?? [];
      setPacients(pacientsLS);
    };
    obtenirLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacients", JSON.stringify(pacients));
  }, [pacients]);

  const eliminarPacient = (id) => {
    const pacientsActual = pacients.filter((pacient) => pacient.id !== id);

    setPacients(pacientsActual);
  };
  // const [count, setCount] = useState(0);

  return (
    //fragment - JSX, tiene que devolver un bloque. Si usamos <></> le llamamos fragment
    //Tiene que haber un solo elemento en el nivel más alto.
    //Dentro del return no puedo tener funciones, condicionales, bucles... solo antes se pueden definir

    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulari
          pacients={pacients}
          setPacients={setPacients}
          pacient={pacient}
          setPacient={setPacient}
        />
        <LlistatPacients
          pacients={pacients}
          setPacient={setPacient}
          eliminarPacient={eliminarPacient}
        />
      </div>
    </div>
  );
}
export default App;
