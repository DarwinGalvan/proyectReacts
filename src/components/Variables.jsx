import React from 'react'

const Variables = () => {

    const saludo = "Hola mundo"
    const imagen = "https://picsum.photos/400"
    const texto_alt = "Esto es una imagen"
  return (
    <div content='center'>
        <h1>{saludo}</h1>
        <img src={imagen} alt={texto_alt} />
    </div>
  )
}

export default Variables