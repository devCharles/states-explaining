import { useEffect, useState } from "react";

// const [valor, establecerValor] = useState();
// useEffect
// 1.- Cuando el componente termina de renderizar POR PRIMERA VEZ
// 2.- Cuando una de sus dependencias se actualiza

function App() {
  console.log("render");
  let [nombre, setNombre] = useState("charles");
  const [contador, establecerContador] = useState(0);

  useEffect(() => {
    console.log("useEffect contador");
    if (contador !== 0) {
      setNombre("nuevo contador");
    }
  }, [contador]);

  useEffect(() => {
    console.log("useEffect nombre");
  }, [nombre]);

  useEffect(() => {
    console.log("useEffect gregregrewgregrew ");
  }, [nombre, contador]);

  useEffect(() => {
    console.log("useEffect solito");
  }, []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/2")
      .then((response) => response.json())
      .then((pokemon) => {
        console.log("El pokemon", pokemon);
        setNombre(pokemon.name);
      });
  }, []);

  return (
    <>
      <div>
        Hola {nombre} {contador}
      </div>
      <button
        onClick={() => {
          setNombre("leo");
        }}
      >
        Saluda a leo
      </button>
      <button
        onClick={() => {
          establecerContador(contador + 1);
        }}
      >
        mas uno
      </button>
    </>
  );
}

export default App;
