import './App.css'

function App() {
  return (
    <main className='component-lab'>
      <header className='lab-header'>
        <div>
          <span className='lab-eyebrow'>
            Mundaca's Solutions
          </span>

          <h1>Laboratorio de componentes de Cafetal</h1>

          <p>
            Espacio de práctica para construir interfaces profesionales
          </p>
        </div>
        <span className='lab-status'>
          Fase 1
        </span>
      </header>

      <section className='lab-section'>
        <div className='lab-section-heading'>
          <span>Fundamentos Visuales</span>
          <h2>Tarjeta de precio exclusivo</h2>
          <p>
            Construiremos este componente desde su geometria hasta sus
            estados interactivos
          </p>
        </div>

        <div className='lab-canvas'>
          <section className='card'>
            <span className='badge'>
              Precio exclusivo
            </span>

            <h3>Arroz con leche</h3>

            <p>
              Aquí se construirá la primera vista profesional completamente a mano.
            </p>
            <button type='button'>
              Guardar precio
            </button>
          </section>
        </div>
      </section>
    </main>
  )
}

export default App