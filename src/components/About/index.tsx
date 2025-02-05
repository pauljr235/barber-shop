import { AboutContainer, AboutText, Imagem } from './styles'

import barbeiro1 from '../../assets/images/barbeiro1.jpg'
import barbeiro2 from '../../assets/images/barbeiro2.jpg'
import barbeiro3 from '../../assets/images/barbeiro3.jpg'
import { useEffect, useState } from 'react'

const images = [barbeiro1, barbeiro2, barbeiro3]

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0) // Índice da imagem atual

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <AboutContainer>
      <Imagem>
        <img src={images[currentIndex]} alt="" />
      </Imagem>
      <AboutText>
        <h1>Sobre a Barbearia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea
          adipisci, repudiandae doloribus id facilis veritatis quisquam,
          voluptates quod magni nesciunt, odit perferendis! Numquam sit quam
          repudiandae provident commodi molestiae.
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          asperiores illum praesentium magnam quia, optio, reprehenderit iure
          rerum ab earum totam, laboriosam non tempore repudiandae velit nobis.
          Natus, aliquam fugit.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          obcaecati. Illum vero vel obcaecati eius in necessitatibus rem
          doloremque ducimus cupiditate, quo repellendus sunt quam repellat
          facere quae. Ullam, deserunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          culpa, atque optio odit perspiciatis dicta autem voluptate corrupti
          repudiandae nostrum quibusdam perferendis, molestiae, assumenda nulla.
          Similique pariatur dolorum sapiente suscipit.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolores
          voluptatum quam odio perferendis corrupti exercitationem! Ea magni
          tempore expedita repellat, cupiditate at, natus quos ad doloremque
          recusandae, unde eaque?
        </p>
      </AboutText>
    </AboutContainer>
  )
}

export default About
