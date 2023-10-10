import styled from "@emotion/styled"

const Div = styled.div`
    background-color: #B7322C;
    color: #FFF;
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    padding: 10px 0;
    border-radius: 5px;
    margin-top: 15px;
    text-transform: uppercase;
`

const Error = ({children}) => {
  return (
    <Div>
      {children}
    </Div>
  )
}

export default Error
