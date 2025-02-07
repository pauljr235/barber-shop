import About from './components/About'
import Banner from './components/Banner'
import Contatos from './components/Contatos'
import Header from './components/Header'
import Reservas from './components/Reservas'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Servicos from './components/Serviços'

import { GlobalCss } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <About />
      <Servicos />
      <Reservas />
      <Contatos />
      <Footer />
    </>
  )
}

export default App
