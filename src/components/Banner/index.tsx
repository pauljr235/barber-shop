import banner from '../../assets/images/banner1.jpg'
import { Button, Imagem, Logo, Titulo } from './styles'
import logo from '../../assets/images/logo.jpg'

const Banner = () => (
  <Imagem id="home" style={{ backgroundImage: `url(${banner})` }}>
    <Logo>
      <a href="#"></a>
    </Logo>
    <Titulo></Titulo>
    <a href="#reservas">
      <Button type="button">FAÇA SUA RESERVA</Button>
    </a>
  </Imagem>
)

export default Banner
