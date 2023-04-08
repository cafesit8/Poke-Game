export default function Modal({points, setModal, setPoints}) {

    function handleClick(){
        setModal(false)
        setPoints(0)
    }

  return (
    <div className="absolute w-[500px] p-4 h-[500px] rounded-xl m-auto z-10 bg-gray-800/90 grid place-content-center max-[530px]:w-[80%]">
        <h3 className="text-xl text-center">Bien jugado, tu puntaje es de {points}</h3>
        <button className="bg-gray-700 py-1 rounded-lg mt-3" onClick={handleClick}>Jugar de Nuevo</button>      
    </div>
  )
}
