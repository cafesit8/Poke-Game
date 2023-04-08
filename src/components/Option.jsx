import React from 'react'

export function Option({alter, number, setNumber, pokemon, setPoints, points, setModal}) {
    const handleClick=()=> {
        if(number <= 5){
            alter.name === pokemon.name ? setPoints(points + 1) : points 
            setNumber(number + 1) 
            if(number === 5){
                setModal(true)
                setNumber(number) 
                setNumber(1)
            }            
        }
        return
    }
  return (
    <li className='bg-gray-700 text-center py-2 cursor-pointer rounded-lg hover:bg-gray-800 hover:duration-200'
        onClick={handleClick} 
        key={alter.name}>
        {alter.name}
    </li>
  )
}
