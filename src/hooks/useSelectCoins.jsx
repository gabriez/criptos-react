import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
color: white;
display: block;
font-family: 'Lato', sans-serif;
font-size: 24px;
font-weight: 700;
margin: 15px 0;
`
const Select = styled.select`
width: 100%;
font-size: 18px;
padding: 14px;
border-radius: 10px;
`


const useSelectCoins = (label, options) => {
    
    const [state, setState] = useState('');

    const selectCoins = () => (
            <>
                <Label> {label} </Label>
                <Select value={state} onChange={e => setState(e.target.value)}>
                    <option value="">Seleccione una moneda</option>
                    {options.map(item => (<option key={item.id} value={item.id}>{item.name}</option>))}
                </Select>
            </>
        );

  return [state, selectCoins];
}

export default useSelectCoins
