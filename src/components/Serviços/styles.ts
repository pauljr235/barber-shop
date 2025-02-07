import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.branco};
  padding-bottom: 200px;
  padding-top: 150px;
`

export const ServicosLista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  list-style: none;
  column-gap: 40px;
  row-gap: 24px;
  padding-left: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px;
    row-gap: 16px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  grid-template-columns: 1fr 1fr;
    }

  }
  h3 {
    padding-bottom: 16px;
    font-size: 20px;
  }

  li {
    width: 500px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      row-gap: 16px;
      width: 350px;
    }

    i {
      margin-left: 16px;
    }
  }
`

export const Descricao = styled.p`
  text-align: left;
  padding-top: 16px;
  font-size: 16px;
`
export const Titulo = styled.h1`
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  font-size: 48px;
  font-family: 'playfair', cursive;
`

export const PrecoTempo = styled.div`
  display: flex;
  gap: 12px;

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: ${cores.preto};
  }

  i {
    color: ${cores.cinza};
    font-size: 24px;
  }
`
export const ServicoItem = styled.li`
  border-radius: 8px;
  list-style: none;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${cores.preto};
    padding-bottom: 8px;
  }

  h3 {
    font-size: 20px;
    color: ${cores.preto};
  }
`
