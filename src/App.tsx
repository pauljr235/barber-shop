import About from './components/About'
import Banner from './components/Banner'
import Contatos from './components/Contatos'
import Header from './components/Header'
import Servicos from './components/Serviços'

import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <About />
      <Servicos />
      <Contatos />
    </>
  )
}

export default App
