import { useEffect, useState } from 'react'
import {uniqueRandomArrayWithMultipleNumbers} from './data/data.js'
import Header from './components/Header'
import Article from './components/Article'
import Modal from './components/Modal'
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState(null)
  const [number , setNumber] = useState(1)
  const [alternativesNumber, setAlternativesNumber] = useState(null)
  const [alternatives, setAlternatives] = useState([])
  const [points, setPoints] = useState(0)
  const [modal, setModal] = useState(false)

  useEffect(()=>{
    const arrayAlternatives = uniqueRandomArrayWithMultipleNumbers(number, 1, 100, 5)
    setAlternativesNumber(arrayAlternatives)
  }, [number])

  useEffect(()=>{
    const getData= async(id = 1)=>{
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const resp = await data.json()
      const arbol = {
          img: resp.sprites.front_default,
          name: resp.name
      }
      setPokemon(arbol)
    }
    getData(number)
  }, [number])

  useEffect(()=>{
    const arr = []
    async function getNames(id){
      const options = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const resp = await options.json()
      const alter = {
        name: resp.name
      }
      arr.push(alter)
      arr.length === 5 ? setAlternatives(arr) : false
    }
    alternativesNumber?.map(number => getNames(number))
  }, [alternativesNumber])

  return (
    <main className='bg-gray-800 relative w-full min-h-screen flex flex-col justify-center items-center text-white bg-[url("./img/pokeFondo.webp")] bg-cover bg-center'>
      <Header points={points} pokemon={pokemon} />
      <Article
        setModal={setModal} 
        points={points}
        setPoints={setPoints}
        pokemon={pokemon} 
        number={number} 
        setNumber={setNumber} 
        alternatives={alternatives} />
      {modal && <Modal setPoints={setPoints} setModal={setModal} points={points} />}
    </main>
  )
}

export default App
