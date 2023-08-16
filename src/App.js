import React from 'react';

import Banner from './pages/Banner';
import SobreAcadProf from './pages/SobreAcadProf';
import SobrePessoal from './pages/SobrePessoal';
import InteresseVaga from './pages/InteresseVaga';
import Rodape from './componentes/rodape'

function App() {
  return (
    <>
      <Banner/>
      <SobreAcadProf/>     
      <SobrePessoal/>
      <InteresseVaga/>
      <Rodape/>
    </>
  );
}

export default App;
