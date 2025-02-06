import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
`

export const LinksContainer = styled.ul`
  list-style: none;
  position: absolute;
  top: 50px;
  right: 90px;
  background-color: rgba(0, 0, 0, 0.9);
  width: 250px;
  height: 40vh;
  background: rgba(0, 0, 0, 0.9);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  transition: right 0.3s ease-in-out;

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
      background: rgba(255, 255, 255, 0.2);
    }
  }
`
export const HeaderButton = styled.button`
  cursor: pointer;
  font-size: 40px;
  background: transparent;
  color: ${cores.branco};
  border: none;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`
