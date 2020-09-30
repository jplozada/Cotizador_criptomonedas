import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = () => {

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'BOL', nombre: 'Boliviano' },
        { codigo: 'EUR', nombre: 'Euro' }
    ]

    // Utilizar useMoneda
    const [moneda, SelectMonedas, actualizarState] = useMoneda('Elige tu Moneda', '', MONEDAS);

    return ( 
        <form>
            <SelectMonedas/>
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;