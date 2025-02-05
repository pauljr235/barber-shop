import {
  Container,
  Descricao,
  ServicosLista,
  ServicoItem,
  Titulo,
  PrecoTempo
} from './styles'

const Servicos = () => (
  <Container>
    <div className="container">
      <Titulo>Nossos Serviços</Titulo>
      <ServicosLista>
        {[
          { nome: 'Cortes', preco: '28.5', tempo: '40 min' },
          { nome: 'Retoque', preco: '28.5', tempo: '40 min' },
          { nome: 'Corte Clássico', preco: '28.5', tempo: '40 min' },
          { nome: 'Ritual Barba', preco: '28.5', tempo: '40 min' },
          { nome: 'Barba Aparada', preco: '28.5', tempo: '40 min' },
          { nome: 'Criança -10', preco: '28.5', tempo: '40 min' }
        ].map((servico, index) => (
          <ServicoItem key={index}>
            <div className="header">
              <h3>{servico.nome}</h3>
              <PrecoTempo>
                <span>
                  <i className="bi bi-calendar2-heart"></i> {servico.preco}
                </span>
                <span>
                  <i className="bi bi-clock"></i> {servico.tempo}
                </span>
              </PrecoTempo>
            </div>
            <Descricao>
              Com diversas técnicas de corte, requer habilidade e sensibilidade
              de quem o executa. Para homens contemporâneos.
            </Descricao>
          </ServicoItem>
        ))}
      </ServicosLista>
    </div>
  </Container>
)

export default Servicos
