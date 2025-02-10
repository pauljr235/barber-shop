import styled from 'styled-components'
import { cores } from '../../styles'

export const ContatosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  background-size: cover;
  background-position: center;
  padding: 40px;
  position: relative;

  /* sobreposição escura */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Escurecendo a imagem de fundo */
    z-index: 1;
  }

  > div {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding-top: 0;
  }
`

export const Inputs = styled.div`
  color: '#fff';
  padding: 50px 30px;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #e1e1e1;
    margin-right: 16px;
    padding: 8px;
    font-size: 16px;
    color: ${cores.preto};

    @media (max-width: 768px) {
      margin: 0;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      margin-left: 0;
      margin-right: 30px;
    }

    &:focus {
      border-color: #f5a623;
      outline: none;
      box-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
    }

    &::placeholder {
      color: ${cores.branco};
      opacity: 1;
    }

    &:hover {
      transform: scale(1.15);
      transition: 0.3s;
    }
  }
`

export const ContatosText = styled.div`
  width: 100%;
  max-width: 400px;

  textarea {
    width: 100%;
    height: 120px;
    background-color: transparent;
    border: 2px solid white;
    padding: 12px;
    margin-left: 30px;
    font-size: 16px;
    border-radius: 5px;
    resize: none;
    color: white;
    transition: 0.3s ease-in-out;

    @media (max-width: 768px) {
      margin-left: 30px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      background-color: black;
      margin-left: 140px;
    }

    &:focus {
      border-color: #f5a623;
      outline: none;
      box-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
    }

    &::placeholder {
      color: white;
      opacity: 0.8;
    }
  }
`

export const Botao = styled.button`
  padding: 12px 20px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: #f5a623;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  @media (max-width: 768px) {
    margin-left: 0;
  }

  &:hover {
    background-color: #d48f1a;
  }
`

export const ContatosInfo = styled.div`
  color: white;
  padding: 40px;
  max-width: 350px;

  h4 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #f5a623;
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;
  }

  i {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    margin-top: 15px;

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #f5a623;
      }
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin-top: 16px;
  }
`

export const Titulo = styled.h1`
  font-family: 'playfair', cursive;
  color: #f5a623;
  font-size: 48px;
  text-align: center;
`
