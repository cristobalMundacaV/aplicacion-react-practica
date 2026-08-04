import './App.css'
import { Save } from 'lucide-react'

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

            <div className='card-content'>
              <h3>Arroz con Leche</h3>

              <p>
                Aquí se construirá la primera vista profesional completamente a mano.
              </p>
            </div>
            <div className='card-actions'>
              <button className='secondary-button' type='button'>
                Cancelar
              </button>

              <button className='primary-button' type='button'>
                <Save size={17} />
                Guardar precio
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default App