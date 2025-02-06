import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`
export const Titulo = styled.h1`
  font-family: 'Pacific', cursive;
  font-weight: 500;
  font-size: 40px;
  position: absolute;
  top: 400px;
  left: 550px;
  color: white;
`
export const Logo = styled.div`
  position: absolute;
  top: 250px;
  left: 730px;
  img {
    border-radius: 24px;
    width: 150px;
  }
`

export const Button = styled.button`
  position: absolute;
  top: 650px;
  left: 100px;
  padding: 18px 30px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  background: ${cores.preto};
  color: ${cores.branco};
  border: none;
  transition: 0.5s ease-in-out;
  font-weight: 400;
  background: cinza;
  border: 1px solid;

  &:hover {
    background: #f5a623;
    color: ${cores.preto};
    padding: 18px 50px;
  }
`
