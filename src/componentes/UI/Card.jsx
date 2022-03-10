import React from 'react'

export const Card = ({src, alt, idImg, idSection, idH2, idP}) => {
  return (
    <section className="card" id={idSection}>
        <img className="img-card" src={src} alt={alt} id={idImg}></img>
        <h2 className="nombre-card" id= {idH2}></h2>
        <p className="genero-card" id= {idP}></p>
    </section>
  )
}
