import React, { useState, useEffect } from 'react'
import { Input } from '../UI/Input'
import logo from '../images/logo1.jpg'

export const Main = () => {
  const [personajes, setPersonajes] = useState([]);
  

  useEffect(() => {
    const input= document.getElementById('input');
    let valorInput= input.value;
    const URL = "https://rickandmortyapi.com/api/character/?name="+valorInput;
    FetchApi(URL)
  }, [personajes])
  
  const MostrarPersonajes = (event) => {
      if (event.keyCode === 13) {
        console.log(personajes)
        CrearCards()
      }
  }

  function FetchApi(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(card => {
      setPersonajes(card.results)
    })
  }

  function CrearCards(){
    console.log(personajes)
    const main= document.getElementById('main');
    main.innerHTML='';
    for (let i = 0; i < personajes.length; i++) {
      const card= document.createElement('section');
      card.setAttribute('class', 'card');
      const img= document.createElement("img");
      img.setAttribute("src", personajes[i].image);
      img.setAttribute("class", "img-card");
      const pNombre= document.createElement("h2");
      pNombre.textContent= `${personajes[i].name}`;
      const pGenero= document.createElement("p");
      pGenero.textContent= `${personajes[i].gender}`;
      card.appendChild(img)
      card.appendChild(pNombre)
      card.appendChild(pGenero)
      main.appendChild(card)
    }
  }

  // useEffect(() => {
  //   FetchApi()
  // }, [personajes])

  return (
    <div id="constructor">
        <nav id="nav-main">
          <img src={logo} alt="logo Rick y Morty" id='img-logo' />
          <Input tipo="text" idName= "input" down= {MostrarPersonajes} />
        </nav>
        <main id="main">
              
        </main>
    </div>
  )
}
