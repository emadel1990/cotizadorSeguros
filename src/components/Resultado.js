import React from 'react'
import styled from '@emotion/styled'

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const Cotizacion = styled.p`
    display: flex;
    justify-content: center;
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {
 
     return (
        <div>
            {cotizacion === 0
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
            : (
                <ResultadoCotizacion>
                    <Cotizacion>El total es: ${cotizacion}</Cotizacion>
                </ResultadoCotizacion>
                )
            }
        </div>
    )
}

export default Resultado
