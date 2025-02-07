import React from 'react'
import Slider from 'react-slick' // Importando o React Slick
import {
  Container,
  Descricao,
  ServicosLista,
  ServicoItem,
  Titulo,
  PrecoTempo
} from './styles'

const Servicos = () => {
  // Configuração do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Exibe 3 itens por vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Para telas maiores que 1024px
        settings: {
          slidesToShow: 3, // 3 itens por vez
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Para telas menores que 768px (tablets e celulares)
        settings: {
          slidesToShow: 2, // 2 itens por vez
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // Para telas menores que 480px (celulares)
        settings: {
          slidesToShow: 1, // 1 item por vez
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Container id="serviços">
      <div className="container">
        <Titulo>NOSSOS SERVIÇOS</Titulo>
        <Slider {...settings}>
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
            <div key={index}>
              <ServicoItem>
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
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  )
}

export default Servicos
