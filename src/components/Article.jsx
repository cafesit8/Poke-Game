import {Option} from "./Option";

export default function Article({alternatives, setNumber, number, pokemon, setPoints, points, setModal}) {

  return (
    <article className="w-[400px] max-[440px]:w-[90%] z-10">
      <h3 className="text-center text-lg">Marca la respuesta correcta:</h3>
      <ul className="list-none flex flex-col gap-3 mt-5">
        {alternatives?.map((alter) => (
          <Option
            setModal={setModal}
            points={points}
            setPoints={setPoints}
            pokemon={pokemon} 
            key={alter.name} 
            number={number} 
            setNumber={setNumber} 
            alter={alter} />
        ))}
      </ul>
    </article>
  );
}
