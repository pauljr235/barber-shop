import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center; // Centraliza os itens verticalmente
  position: relative; // Necessário para o posicionamento do botão
`

export const Titulo = styled.h1`
  font-family: 'Pacific', cursive;
  font-weight: 500;
  font-size: 40px;
  color: white;
  position: absolute;
  top: 20%; // Ajusta a posição do título
  text-align: center; // Garante que o título ficará centralizado horizontalmente
`

export const Logo = styled.div`
  position: absolute;
  top: 10%; // Ajusta a posição da logo
  text-align: center; // Garante centralização da logo
  img {
    border-radius: 24px;
    width: 150px;
  }
`

export const Button = styled.button`
  position: absolute;
  top: 80%; // Centraliza o botão verticalmente
  left: 50%; // Centraliza o botão horizontalmente
  transform: translate(-50%, -50%); // Ajusta o centro real do botão
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

  @media (max-width: 500px) {
    font-size: 16px;
    background: black;
    color: ${cores.preto};
  }

  @media (max-width: 768px) {
    font-size: 18px;
    background: #f5a623;
    color: ${cores.preto};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
  }
`
