import { useEffect } from "react";

const Pacient = ({ pacient, setPacient, eliminarPacient }) => {
  //Apliquem destructuring
  const { nom, propietari, email, data, simptomes, id } = pacient;

  const handleEliminar = () => {
    const resposta = confirm("Desitges eliminar aquest pacient?");

    if (resposta) {
      eliminarPacient(id);
    }
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nom: <span className="font-normal normal-case">{nom}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietari:{" "}
        <span className="font-normal normal-case">{propietari}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correu: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Data d'Alta: <span className="font-normal normal-case">{data}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Símptomes: <span className="font-normal normal-case">{simptomes}</span>
      </p>
      <div className="flex justify-around">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
          onClick={() => setPacient(pacient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
          /* Quant només cridem a una funció que no li hem de passar cap argument podem cridar-la així: */
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pacient;
