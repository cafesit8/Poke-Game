export default function Modal({points, setModal, setPoints}) {

    function handleClick(){
        setModal(false)
        setPoints(0)
    }

  return (
    <div className="absolute w-[500px] h-[500px] m-auto z-10 bg-blue-900 grid place-content-center">
        <h3>Bien jugado, tu puntaje es de {points}</h3>
        <button className="bg-gray-800 py-1 rounded-lg mt-2" onClick={handleClick}>Jugar de Nuevo</button>      
    </div>
  )
}
