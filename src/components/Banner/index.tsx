import banner from '../../assets/images/banner1.jpg'
import { Button, Imagem, Logo, Titulo } from './styles'
import logo from '../../assets/images/logo.jpg'

const Banner = () => (
  <Imagem id="home" style={{ backgroundImage: `url(${banner})` }}>
    <Logo>
      <a href="#"></a>
    </Logo>
    <Titulo></Titulo>
    <Button type="button">RESERVAS</Button>
  </Imagem>
)

export default Banner
