import React, {useState} from 'react'
import styled from '@emotion/styled';
import { obtenerDiferenciaYear , calcularMarca , calcularPlan } from '../helper';


// Styled Components
const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;
const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;
const Error = styled.div`
   background-color: red;
   color: white;
   padding: 1rem;
   margin-bottom: 2rem;
   width: 100%;
   text-align: center;
`;

//Component
function Formulario({guardarResumen , guardarCargando}) {

    const [datos , guardarDatos] = useState({
        marca: "",
        year: "",
        plan: ""
    });
    const [error , guardarError] = useState(false);

    // extraer los valores del state
    const {marca , year, plan} = datos;
    
    //Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = (e) =>{
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario presiona cotizar
    const cotizarSeguro = (e) =>{
        e.preventDefault();

     
        if(year === undefined || marca === undefined || plan === undefined){
            guardarError(true);
            return;
        } 
        if(year.trim() === '' || marca.trim() === '' || plan.trim() === ''){
            guardarError(true);
            return;
        } 
       
        guardarError(false);

        //una base de 2000
        let resultado = 2000;

        // obtener la diferencia de anios
        const diferencia = obtenerDiferenciaYear(year);
        

        // por cada anio hay que restar el 3%
        resultado -= (( diferencia * 3) * resultado) / 100;
       

        //americano 15%
        //asiativco 5%
        //europeo 30%
        resultado = calcularMarca(marca) * resultado;

       

        // basico aumenta 20%
        // completo aumenta 50%        
        resultado = parseFloat( calcularPlan(plan) * resultado).toFixed(2);
        
        
        guardarCargando(true);

        setTimeout(() => {

            guardarCargando(false)
            guardarResumen({
                cotizacion: resultado,
                datos
            })            
        }, (Math.random() * 1000 + 1000));

        //total
        
    }

    return (
        <form
            onSubmit={cotizarSeguro}
        >
            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    onChange={obtenerInformacion}
                    value={marca}
                >
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                     name="year"
                     onChange={obtenerInformacion}
                     value={year}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <div>
                <InputRadio type="radio" id="basico" name="plan" value="basico" onChange={obtenerInformacion}/>
                <label htmlFor="basico">Basico</label>
                </div>

                <div>
                <InputRadio type="radio" id="completo" name="plan" value="completo" onChange={obtenerInformacion} />
                <label htmlFor="completo">Completo</label>
                </div>
            </Campo>
            <Boton type="submit">Cotizar</Boton>
            

            
        </form>
    )
}

export default Formulario
