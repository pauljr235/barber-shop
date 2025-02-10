import styled from 'styled-components'

export const ReservasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
  padding: 80px 5% 130px;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`

export const ReservasBox = styled.div`
  background-color: rgba(255, 165, 0, 0.5);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 700px;
  border-radius: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
`
