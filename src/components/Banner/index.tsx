import banner from '../../assets/images/banner1.jpg'
import { Button, Imagem, Logo, Titulo } from './styles'
import logo from '../../assets/images/logo.jpg'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <Logo>
      <a href="#">
        <img src={logo} alt="Logo da barbearia" />
      </a>
    </Logo>
    <Titulo>
      Experience the Best Barber <br /> Services at Babearia poçoca
    </Titulo>
    <Button type="button">Faça sua reserva</Button>
  </Imagem>
)

export default Banner
