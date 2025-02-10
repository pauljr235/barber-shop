import styled from 'styled-components'
import { cores } from '../../styles'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${cores.branco};
  padding: 80px 5%;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 60px 5%;
  }
`

export const Imagem = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 8px;

    @media (max-width: 768px) {
      max-width: 350px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      max-width: 500px;
    }
  }
`

export const AboutText = styled.div`
  max-width: 600px;

  h1 {
    font-size: 48px;
    padding-bottom: 24px;
    font-family: 'Playfair Display', serif;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {
      font-size: 36px;
      padding-bottom: 16px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 42px;
      padding-top: 20px;
    }

    &::after {
      content: '';
      flex-grow: 1;
      height: 1px;
      background-color: white;
      margin-left: 15px;
    }
  }

  p {
    line-height: 1.6;
    font-weight: 300;
    font-size: 18px;
    padding: 0 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
    }
  }
`
