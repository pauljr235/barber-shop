const Reservas = () => (
  <div
    id="reservas"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#fff',
      padding: '40px'
    }}
  >
    <div
      style={{
        backgroundColor: 'rgba(255, 165, 0, 0.5)',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '900px',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <h2
        style={{
          fontSize: '50px',
          fontWeight: '600',
          color: '#333',
          marginBottom: '20px',
          fontFamily: 'playfair, cursive'
        }}
      >
        Agende seu horário
      </h2>
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2yfLzcpaLqgbCuiQfEMska-blZ4fGKuRMWIaw1bltwMjLAFR1hRQVqXrZonrDXD6uKIyTEkAh0?gv=true"
        style={{
          border: 'none',
          width: '100%',
          height: '700px',
          borderRadius: '10px',
          boxSizing: 'border-box'
        }}
        frameBorder="0"
      ></iframe>
    </div>
  </div>
)

export default Reservas
