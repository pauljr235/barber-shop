import {
  Container,
  Descricao,
  ServicosLista,
  ServicoItem,
  Titulo,
  PrecoTempo
} from './styles'

const Servicos = () => (
  <Container id="serviços">
    <div className="container">
      <Titulo>NOSSOS SERVIÇOS</Titulo>
      <ServicosLista>
        {[
          {
            nome: 'Cortes',
            preco: '28.5',
            tempo: '40 min',
            descricao:
              'Com diversas técnicas de corte, requer habilidade e sensibilidade'
          },
          {
            nome: 'Retoque',
            preco: '28.5',
            tempo: '40 min',
            descricao:
              'Com diversas técnicas de corte, requer habilidade e sensibilidade'
          },
          {
            nome: 'Corte Clássico',
            preco: '28.5',
            tempo: '40 min',
            descricao:
              'Com diversas técnicas de corte, requer habilidade e sensibilidade'
          },
          {
            nome: 'Ritual Barba',
            preco: '28.5',
            tempo: '40 min',
            descricao:
              'Com diversas técnicas de corte, requer habilidade e sensibilidade'
          },
          {
            nome: 'Barba Aparada',
            preco: '28.5',
            tempo: '40 min',
            descricao:
              'Com diversas técnicas de corte, requer habilidade e sensibilidade'
          },
          {
            nome: 'Criança -10',
            preco: '28.5',
            tempo: '40 min',
            descricao:
              'Com diversas técnicas de corte, requer habilidade e sensibilidade'
          }
        ].map((servico, index) => (
          <ServicoItem key={index}>
            <div className="header">
              <h3>{servico.nome}</h3>
              <PrecoTempo>
                <span>
                  <i className="bi bi-currency-euro"></i> {servico.preco}
                </span>
                <span>
                  <i className="bi bi-clock"></i> {servico.tempo}
                </span>
              </PrecoTempo>
            </div>
            <Descricao>{servico.descricao}</Descricao>
          </ServicoItem>
        ))}
      </ServicosLista>
    </div>
  </Container>
)

export default Servicos
