import styled from 'styled-components'
import { cores } from '../../styles'

export const AboutContainer = styled.div`
  display: flex;
  color: ${cores.branco};
  padding: 16px 16px;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Imagem = styled.div`
  img {
    width: 600px;
    height: 600px;
    border-radius: 8px;

    @media (max-width: 768px) {
      width: 350px;
      height: 350px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      width: 730px;
      height: 550px;
    }
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

    @media (max-width: 768px) {
      padding-top: 16px;
      padding-bottom: 0;
      text-align: center;
      padding-left: 0;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      padding-top: 40px;
      font-size: 56px;
    }

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

    @media (max-width: 768px) {
      padding-top: 16px;
      padding-bottom: 0;
      text-align: center;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 24px;
      line-height: 24px;
      padding: 40px;
    }
  }
`
