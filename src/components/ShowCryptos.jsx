import styled from "@emotion/styled";
    
const CONTAINER = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const PARAGRAPH = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }`;

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`;

const IMAGE = styled.img`
    display: block;
    width: 120px;
`

const ShowCryptos = ({cryptoData}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cryptoData;


    return (
        <CONTAINER>
            <IMAGE src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imagen de cripto' />
            <div>
                <Price> El precio es de: <span> {PRICE} </span></Price>
                <PARAGRAPH> Precio más alto del día: <span> {HIGHDAY} </span></PARAGRAPH>
                <PARAGRAPH> Precio más bajo del día: <span> {LOWDAY} </span></PARAGRAPH>
                <PARAGRAPH> Variación últimas 25 horas: <span> {CHANGEPCT24HOUR} </span></PARAGRAPH>
                <PARAGRAPH> Ultima actualización: <span> {LASTUPDATE} </span></PARAGRAPH>
            </div>
            
        </CONTAINER>
    )
}

export default ShowCryptos
