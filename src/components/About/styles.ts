import styled from 'styled-components'
import { cores } from '../../styles'

export const AboutContainer = styled.div`
  display: flex;
  color: ${cores.branco};
  padding-top: 8px;
`

export const Imagem = styled.div`
  img {
    width: 800px;
  }
`

export const AboutText = styled.div`
  padding-top: 80px;

  h1 {
    font-size: 40px;
    padding-bottom: 24px;
    text-align: center;
  }

  p {
    line-height: 24px;
    padding: 32px;
  }
`
