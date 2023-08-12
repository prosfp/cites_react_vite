import { useState, useEffect } from "react";
import Error from "./Error";

//Generalment es fa ús de les arrow functions
const Formulari = ({ pacients, setPacients, pacient, setPacient }) => {
  // Els hooks han d'anar a la part superior del component
  // No s'han de fer servir dins de condicionals o després d'un return

  const [nom, setNom] = useState("");
  const [propietari, setPropietari] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [simptomes, setSimptomes] = useState("");

  const [error, setError] = useState(false);

  // El useEffect s'executa només d'acord amb el canvi del component que decidim, "pacient".
  useEffect(() => {
    if (Object.keys(pacient).length > 0) {
      setNom(pacient.nom);
      setPropietari(pacient.propietari);
      setEmail(pacient.email);
      setData(pacient.data);
      setSimptomes(pacient.simptomes);
    }
  }, [pacient]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const data = Date.now().toString(36);

    return random + data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validació del Formulari
    if ([nom, propietari, email, data, simptomes].includes("")) {
      console.log("Existeixen camps buits");
      setError(true);
      return;
    }

    setError(false);

    // Objecte de pacient
    const objectePacient = {
      nom,
      propietari,
      email,
      data,
      simptomes,
    };

    if (pacient.id) {
      //Editant el registre
      objectePacient.id = pacient.id;

      const pacientsActual = pacients.map((pacientEstat) =>
        pacientEstat.id === pacient.id ? objectePacient : pacientEstat
      );

      setPacients(pacientsActual);
      setPacient({});
    } else {
      //Nou registre
      objectePacient.id = generarId();
      setPacients([...pacients, objectePacient]);
    }

    //Reiniciar el formulari
    setNom(" ");
    setPropietari(" ");
    setData(" ");
    setEmail(" ");
    setSimptomes(" ");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text text-3xl text-center">
        Seguiment pacients
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Afegeix Pacients i{" "}
        <span className="text-indigo-600 font-bold"> Administra'ls</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {/* Alternativa a passar per props, per passa múltiples línies de codi html */}
        {error && (
          <Error>
            <p>Tots els camps són obligatoris</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nom Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nom de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietari"
            className="block text-gray-700 uppercase font-bold"
          >
            Nom Propietari
          </label>
          <input
            id="propietari"
            type="text"
            placeholder="Nom del propietari"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={propietari}
            onChange={(e) => setPropietari(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Contacte propietari"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="simptomes"
            className="block text-gray-700 uppercase font-bold"
          ></label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="simptomes"
            cols="30"
            rows="10"
            placeholder="Descriu els símptomes"
            value={simptomes}
            onChange={(e) => setSimptomes(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
          value={pacient.id ? "Editar Pacient" : "Agregar pacient"}
        />
      </form>
    </div>
  );
};

export default Formulari;
