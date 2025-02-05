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
    width: 800px;
    height: 700px;
    border-radius: 8px;
  }
`

export const AboutText = styled.div`
  h1 {
    font-size: 40px;
    padding-bottom: 24px;
    text-align: center;
    font-family: 'Pacific', cursive;
  }

  p {
    line-height: 24px;
    padding: 24px 50px;
  }
`
