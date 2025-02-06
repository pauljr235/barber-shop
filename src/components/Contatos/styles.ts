import styled from 'styled-components'
import { cores } from '../../styles'

export const ContatosContainer = styled.div`
  height: 400px;
  background-size: cover;
  background-position: center;
  padding-left: 80px;
  padding-top: 30px;
`

export const Inputs = styled.div`
  color: '#fff';
  padding: 50px 30px;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #e1e1e1;
    margin-right: 8px;
    padding: 8px;
    font-size: 16px;
    color: ${cores.preto};

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
  padding-left: 30px;
  textarea {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    margin-right: 8px;
    padding: 8px;
    resize: none;
    font-size: 16px;
    color: ${cores.branco};
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

export const ContatosInfo = styled.div`
  padding: 50px 100px;
  color: ${cores.branco};
`

export const Botao = styled.button`
  padding: 16px 20px;
  margin-left: 30px;
  margin-top: 16px;
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  border-color: ${cores.branco};
  color: ${cores.branco};

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    background: ${cores.preto};
  }
`
