import React from 'react'

const PeticionApi = () => {

    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const traerPersonajes = async (paginacion) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${paginacion}`)
        const { results, info } = await res.json()
        console.log(results, info)
        setPersonajes(results)
        return () => {}
    }

    const siguiente = () =>{
        setPaginacion(paginacion+1)
        traerPersonajes()
    }

    const atras = () =>{
        setPaginacion(paginacion-1)
        traerPersonajes()
    }
  return (
    <div>
        <h1>PETICIÓN AL API DE RICK AND MORTY</h1>
        <button onClick={traerPersonajes}>Traer Personajes</button>
        <button onClick={atras}>Atrás</button>
        <button onClick={siguiente}>Siguiente</button>
        
        {
            personajes.map(({id, name, image}) => (
                <div key= {id}>
                    <h4>{id} - {name}</h4>
                    <img src={image} alt={name} />
                </div>
            ))
        }
        
    </div>
  )
}

export default PeticionApi