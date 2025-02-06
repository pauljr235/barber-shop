import tesoura from '../../assets/images/tesoura.jpg'
import {
  Botao,
  ContatosContainer,
  ContatosInfo,
  ContatosText,
  Inputs
} from './styles'

const Contatos = () => (
  <div>
    <ContatosContainer
      style={{ display: 'flex', backgroundImage: `url(${tesoura})` }}
    >
      <div>
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
      </ContatosInfo>
    </ContatosContainer>
  </div>
)

export default Contatos
