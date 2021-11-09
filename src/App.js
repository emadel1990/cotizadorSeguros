import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorForm = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {

  const [resumen , guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });
  const [cargando , guardarCargando] = useState(false)

  const {cotizacion , datos} = resumen;

  return (
    <Contenedor>
      <Header
        titulo={"Cotizador de seguros"}  
      />
      <ContenedorForm>
        <Formulario 
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        
        {cargando ? (<Spinner/>) : null}

        {!cargando ? 
        (
          <Fragment>
            <Resumen datos={datos}/>
            <Resultado cotizacion={cotizacion}/>
          </Fragment>
        ) : null}
        
        
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
