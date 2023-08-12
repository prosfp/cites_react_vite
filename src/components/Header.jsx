// Los componentes deben ser creados con primera letra en Mayúsucla
// Al ser Vite --> .jsx

function Header() {
  return (
    <>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        Seguiment Pacients Amb Github
        <span className="text-indigo-600"> Veterinària</span>
      </h1>
    </>
  );
}
export default Header;
