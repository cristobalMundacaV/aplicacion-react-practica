import { useState } from 'react'
import './App.css'
import { Save, Wallet } from 'lucide-react'

function App() {
  const [price, setPrice] = useState('')
  const hasPriceError = price !== '' && Number(price) <= 0
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
              <Wallet size={17} />
              Precio exclusivo
            </span>

            <div className='card-content'>
              <h3>Arroz con Leche</h3>

              <p>
                Aquí se construirá la primera vista profesional completamente a mano.
              </p>

              <div className={`form-field ${hasPriceError ? 'has-error' : ''}`}>
                <label htmlFor="exclusive-price">
                  Nuevo precio unitario
                </label>

                <div className='price-input'>
                  <span aria-hidden="true">$</span>

                  <input
                    id='exlusive-price'
                    type='number'
                    min='0'
                    step='1'
                    placeholder='0'
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    aria-invalid={hasPriceError}
                    aria-describedby={
                      hasPriceError
                        ? 'exclusive-price-error'
                        : 'exclusive-price-help'
                    }
                  />
                </div>
                {hasPriceError ? (
                  <p
                    id='exclusive-price-error'
                    className='field-error'
                  >
                    Ingresa un precio superior a $0.
                  </p>
                ) : (
                  <p
                    id='exclusive-price-help'
                    className='field-help'
                  >
                    Este valor se aplicará únicamente a este cliente.
                  </p>
                )}
              </div>
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