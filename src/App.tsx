import About from './components/About'
import Banner from './components/Banner'
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
    </>
  )
}

export default App
