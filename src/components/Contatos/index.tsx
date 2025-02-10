import tesoura from '../../assets/images/tesoura.jpg'
import {
  Botao,
  ContatosContainer,
  ContatosInfo,
  ContatosText,
  Inputs,
  Titulo
} from './styles'

const Contatos = () => (
  <div id="contactos">
    <ContatosContainer
      style={{ display: 'flex', backgroundImage: `url(${tesoura})` }}
    >
      <div>
        <Titulo>DÚVIDAS</Titulo>
        <Inputs>
          <input type="text" placeholder="Nome*" />
          <input type="text" placeholder="E-mail*" />
          <input type="email" placeholder="Assunto*" />
        </Inputs>
        <ContatosText>
          <textarea name="" id="" placeholder="Mensagem*"></textarea>
        </ContatosText>
        <Botao type="submit">Enviar</Botao>
      </div>
      <ContatosInfo>
        <h4>Barbearia Caparica</h4>
        <p>
          Rua. Prof.Gonçalves <br />
          Nº105, Costa da Caparica <br />
          2055-470 Almada
        </p>
        <i className="bi bi-envelope">
          <a href="https://outlook.com"> info@barbeariadopacoka.pt</a>
        </i>
        <i className="bi bi-phone">
          <a href="https://outlook.com">
            299 777 963 (Custo de uma <br /> chamada da rede fixa ou rede móvel{' '}
            <br />
            nacional, de acordo com o <br /> artigo 3º do Decreto-Lei n.º <br />{' '}
            59/2021, de 14 de julho)
          </a>
        </i>
        <i className="bi bi-geo-alt">
          <a href="https://outlook.com"> LOCALIZAÇÃO</a>
        </i>
      </ContatosInfo>
    </ContatosContainer>
  </div>
)

export default Contatos
