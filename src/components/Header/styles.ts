import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  z-index: 9999; /* Garante que o cabeçalho fique acima de outros conteúdos */

  @media (max-width: 768px) {
    top: 0px;
    left: 320px;
    padding: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    top: 30px;
    left: 650px;
  }
`

export const LinksContainer = styled.ul`
  list-style: none;
  position: absolute;
  top: 50px;
  right: 90px;
  background-color: rgba(0, 0, 0, 0.9);
  width: 250px;
  height: 40vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  transition: right 0.3s ease-in-out;
  z-index: 9999; /* Garante que os links fiquem acima de outras seções */

  @media (max-width: 768px) {
    top: 50px;
    right: 60px;
    height: 50vh;
  }

  a {
    color: ${cores.branco};
    text-decoration: none;
    padding: 10px;
    display: block;
    width: 100%;
    text-align: center;
    border-radius: 8px;
    transition: background 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`
export const HeaderButton = styled.button`
  cursor: pointer;
  font-size: 32px;
  background: black;
  color: #f5a623;
  border: none;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    background-color: black;
    margin-top: 30px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: black;
    font-size: 50px;
  }
`
