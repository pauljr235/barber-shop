import { useState } from 'react'
import { Container, HeaderButton, LinksContainer } from './styles'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container>
      <HeaderButton onClick={() => setMenuOpen(!menuOpen)}>☰</HeaderButton>
      {menuOpen && (
        <nav>
          <LinksContainer>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#serviços">Serviços</a>
            </li>
            <li>
              <a href="#reservas">Reservas</a>
            </li>
            <li>
              <a href="#contactos">Contactos</a>
            </li>
          </LinksContainer>
        </nav>
      )}
    </Container>
  )
}

export default Header
