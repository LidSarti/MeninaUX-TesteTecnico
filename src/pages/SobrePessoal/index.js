import React from 'react';
import './SobrePessoal.css';
import Card from '../../componentes/card';
import Caozinho from '../../img/Caozinho.png'

const SobrePessoal = () => {
  return(
  <div className='wrapper-pessoal'>

    <div className="title-pessoal">
      <h2>Sobre mim</h2>
    </div>

    <div className='wrapper-cards'>
      <div className="cards">
        <Card
          backgroundColor="#F9CE8D"
          emoji="🐶"
          title="Mãe de Pet"
          text="Com muito orgulho, sou mãe de uma adorável companheira peluda, a Princesa Leia."
        />
        <Card
          backgroundColor="#F9CE8D"
          emoji="🎮"
          title="Gamer"
          text="No meu tempo livre, minha paixão é mergulhar em jogos"
        />
        <Card
          backgroundColor="#F9CE8D"
          emoji="🦄"
          title="Leitora"
          text="Também sou uma entusiasta de bons livros de fantasia!"
        />
      </div>
      </div>
      <div className="image-container">
        <img src={Caozinho} alt="Caozinho" className="bottom-right-image"/>
      </div>
  </div>
    
    
  )
};

export default SobrePessoal;
