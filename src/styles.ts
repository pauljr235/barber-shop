import { createGlobalStyle } from 'styled-components'

export const cores = {
  preto: '#000',
  cinza: '#898888',
  branco: '#fff',
  cinzaEscuro: '#6666'
}

export const GlobalCss = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body{
  background: ${cores.preto}
}

  .container{
    max-width: 1268px;
    margin: 0 auto;
    width: 100%;
  }

`
