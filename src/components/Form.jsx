import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectCoins from '../hooks/useSelectCoins';
import Error from './Error';
import {ForEx} from '../data/currency';

const InputStyled = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Form = ({setCoins}) => {
  const [cryptos, useCryptos] = useState([]);
  const [errors, setErrors] = useState({
    criptos: false,
    currency: false
  });

  const [stateCurrency, SelectCurrency] = useSelectCoins("Selecciona tu moneda", ForEx);
  const [stateCrypto, SelectCrypto] = useSelectCoins("Selecciona tu cripto", cryptos)

  useEffect(() => {
    const getCriptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const response = await fetch(url);
      const resultado = await response.json();

      let newCriptos = resultado.Data.map( item => {
        return {
          id: item.CoinInfo.Name, 
          name: item.CoinInfo.FullName
        }
      });

      useCryptos(newCriptos);
    }

    getCriptos();
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    setErrors({
      criptos: false,
      currency: false
    });
    if ([stateCrypto, stateCurrency].includes('')){
      if ( stateCurrency === '') setErrors(prevState => ({...prevState, currency: true}));
      if ( stateCrypto === '' ) setErrors(prevState => ({...prevState, criptos: true}));
      return
    }

    setCoins({
      stateCurrency, 
      stateCrypto
    })

    

  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectCurrency/>
      {errors.currency && <Error>Este campo es requerido</Error>}
      <SelectCrypto/>
      {errors.criptos && <Error>Este campo es requerido</Error>}
      <InputStyled 
      type="submit" value="Cotizar" />
    </form>
  )
}

export default Form
