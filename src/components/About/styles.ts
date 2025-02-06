import styled from 'styled-components'
import { cores } from '../../styles'

export const AboutContainer = styled.div`
  display: flex;
  color: ${cores.branco};
  padding: 16px 16px;
  align-items: center;
`

export const Imagem = styled.div`
  img {
    width: 600px;
    height: 600px;
    border-radius: 8px;
  }
`

export const AboutText = styled.div`
  h1 {
    font-size: 48px;
    padding-bottom: 24px;
    padding-left: 50px;
    font-family: 'playfair', cursive;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      flex-grow: 1;
      height: 1px;
      background-color: white;
    }
  }

  p {
    line-height: 24px;
    padding: 24px 50px;
    font-weight: 200;
    font-size: 18px;
  }
`
