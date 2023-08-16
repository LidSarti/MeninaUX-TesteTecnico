import React from 'react';
import './SobreAcadProf.css';
import Card from '../../componentes/card';
import Foto from '../../img/FotoPerfil.png';

const SobreAcadProf = () => {
  return (
    <div className="wrapper">
      <div className="title-acad-prof">
        <h2>Ocupações</h2>
      </div>

      <div className="content">
        <div className="text">
          <p>
            Olá! 👋 Meu nome é Lídia Sarti e tenho 19 anos. <br />
            Apaixonada por tecnologia e em constante busca por conhecimento. 🔍 <br />
            Minha paixão pela tecnologia não se limita a uma área específica, <br />
            pois acredito que a diversidade é uma riqueza e a chave para novas oportunidades. <br />
            Tenho conhecimento em Front-end, utilizando linguagens como <br />
            JavaScript, ReactJS, HTML e <br />
            CSS para criar interfaces atraentes e responsivas. 💻✨
          </p>
        </div>
        <div className="image">
          <img src={Foto} alt="Minha Foto de Perfil" />
        </div>
      </div>

      <div className="cards">
        <Card
          backgroundColor="#EBAEB3"
          emoji="🤓"
          title="Cursando"
          text="Engenharia de Computação Univesp"
        />
        <Card
          backgroundColor="#EBAEB3"
          emoji="🕹️"
          title="Cursando"
          text="Jogos Digitais Faculdade Descomplica"
        />
        <Card
          backgroundColor="#EBAEB3"
          emoji="💻"
          title="Estágio"
          text="Dev Ops Data System"
        />
      </div>
    </div>
  );
};

export default SobreAcadProf;
