import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  padding: 10px;
  z-index: 9999;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    left: auto;
    padding: 5px;
  }
`

export const LinksContainer = styled.ul`
  list-style: none;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.9);
  width: 250px;
  max-width: 90vw;
  height: auto;
  min-height: 40vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  transition: right 0.3s ease-in-out;
  z-index: 9999;

  @media (max-width: 768px) {
    top: 50px;
    right: 10px;
    width: 200px;
    height: 50vh;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    top: 60px;
    right: 30px;
    width: 220px;
    height: 45vh;
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

  @media (max-width: 480px) {
    font-size: 24px;
    padding: 8px;
  }

  @media (max-width: 768px) {
    background-color: black;
    margin-top: 20px;
    font-size: 28px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: black;
    font-size: 40px;
  }
`
