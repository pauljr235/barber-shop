import About from './components/About'
import Banner from './components/Banner'
import Header from './components/Header'

import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <About />
    </>
  )
}

export default App
