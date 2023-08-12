import Pacient from "./Pacient";

const LlistatPacients = ({ pacients, setPacient, eliminarPacient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/ md:h-screen overflow-y-scroll">
      {pacients && pacients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Llistat de Pacients
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra els teus{" "}
            <span className="text-indigo-600 font-bold">Pacients i Cites</span>
          </p>
          {/* Amb els props estem obligats a identifiar unívocament cadascuna de les entrades; per això cal un id que en aquest cas ens generem nosaltres. */}
          {pacients.map((pacient) => (
            <Pacient
              key={pacient.id}
              pacient={pacient}
              setPacient={setPacient}
              eliminarPacient={eliminarPacient}
            />
          ))}
        </>
      ) : (
        <>
          {" "}
          <h2 className="font-black text-3xl text-center">No hi ha pacients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comença afegint pacients{" "}
            <span className="text-indigo-600 font-bold">
              i apareixeran aqui
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default LlistatPacients;
