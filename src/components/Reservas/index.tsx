import { ReservasBox, ReservasContainer, StyledIframe, Title } from './styles'

const Reservas = () => (
  <ReservasContainer id="reservas">
    <ReservasBox>
      <Title>Agende seu horário</Title>
      <StyledIframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2yfLzcpaLqgbCuiQfEMska-blZ4fGKuRMWIaw1bltwMjLAFR1hRQVqXrZonrDXD6uKIyTEkAh0?gv=true"
        frameBorder="0"
      ></StyledIframe>
    </ReservasBox>
  </ReservasContainer>
)

export default Reservas
