export default function Header({ pokemon, points }) {
  return (
    <header style={{display:'flex', flexDirection: 'column', alignItems:'center', zIndex:'10'}} className="App">
      <h1 className="text-xl text-center">Adivina ¿Quién es este pokemon?</h1>
      <h2 className="text-white/70">Su puntaje es: {points}</h2>
      <img
        style={{ width: "250px", height: "250px" }}
        src={pokemon?.img}
      />
    </header>
  );
}
