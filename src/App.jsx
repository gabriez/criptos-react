import { useEffect, useState } from 'react';
import Form from './components/Form';
import ShowCryptos from './components/ShowCryptos';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';
import CriptoImage from './img/imagen-criptos.png'
import './App.css';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const ImageCripto = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display:block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  const [coins, setCoins] = useState({});
  const [cryptoData, setCryptoData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length > 0){
      const getCoinsData = async () => {
        setCryptoData({});
        setLoading(true);
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins.stateCrypto}&tsyms=${coins.stateCurrency}`;
        let response = await fetch(URL); 
        let resultado = await response.json();

        setCryptoData(resultado.DISPLAY[coins.stateCrypto][coins.stateCurrency]);
        setLoading(false);
      }
      getCoinsData();
    }
  }, [coins])

  return (
    <Container>
      <ImageCripto
        src={CriptoImage}
        alt='Imagen de criptomonedas'
      />
      <div>
        <Heading> Cotiza Criptomonedas al Instante</Heading>
        <Form setCoins={setCoins}/>
        {loading && <Spinner/>}
        {cryptoData.PRICE && <ShowCryptos cryptoData={cryptoData}/>}
      </div>
    </Container>
  )
}

export default App
