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
  top: 90px;
  right: 60px;
  background-color: black;
  width: 200px;
  padding: 10px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  a {
    color: white;
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
  font-size: 50px;
  background: transparent;
  color: ${cores.branco};
  border: none;
  padding-right: 30px;
  padding-top: 20px;
`
