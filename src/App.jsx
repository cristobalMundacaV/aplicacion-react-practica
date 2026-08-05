import { useState } from 'react'
import './App.css'
import { Save, Wallet, LoaderCircle, CircleCheck, CircleAlert } from 'lucide-react'

function App() {
  const [price, setPrice] = useState('')
  const [priceTouched, setPriceTouched] = useState(false)
  const [saveStatus, setSaveStatus] = useState('idle')
  const isPriceInvalid = price === '' || Number(price) <= 0
  const showPriceError = priceTouched && isPriceInvalid
  const isSaving = saveStatus === 'loading'
  const saveSucceeded = saveStatus === 'success'
  const saveFailed = saveStatus === 'error'
  const handlePriceChange = (event) => {
    setPrice(event.target.value)

    if (saveStatus !== 'idle') {
      setSaveStatus('idle')
    }
  }

  const handleSave = async () => {
    setPriceTouched(true)

    if (isPriceInvalid || isSaving) {
      return
    }

    setSaveStatus('loading')

    await new Promise((resolve) => {
      setTimeout(resolve, 1200)
    })

    const shouldFail = Number(price) === 999

    if (shouldFail) {
      setSaveStatus('error')
      return
    }

    setSaveStatus('success')

    console.log('Precio válido:', price)
  }

  const handleCancel = () => {
    setPrice('')
    setPriceTouched(false)
    setSaveStatus('idle')
  }

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

              <div className={`form-field ${showPriceError ? 'has-error' : ''}`}>
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
                    onChange={handlePriceChange}
                    disabled={isSaving}
                    aria-invalid={showPriceError}
                    aria-describedby={
                      showPriceError
                        ? 'exclusive-price-error'
                        : 'exclusive-price-help'
                    }
                    onBlur={() => setPriceTouched(true)}
                  />
                </div>
                {showPriceError ? (
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
              <button
                className='secondary-button'
                type='button'
                onClick={handleCancel}
                disabled={isSaving}
              >
                Cancelar
              </button>

              <button
                className='primary-button'
                type='button'
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <LoaderCircle
                      className='button-spinner'
                      size={17}
                    />
                    Guardando...
                  </>
                ) : (
                  <>
                    <Save size={17} />
                    Guardar precio
                  </>
                )}
              </button>
            </div>
            {saveSucceeded && (
              <div
                className='save-feedback success-feedback'
                role='status'
              >
                <CircleCheck size={18} />
                <div>
                  <strong>Precio guardado</strong>
                  <p>
                    El nuevo precio exclusivo es ${price}
                  </p>
                </div>
              </div>
            )}
            {saveFailed && (
              <div
                className='save-feedback error-feedback'
                role="alert"
              >
                <CircleAlert size={18} />
                <div className='feedback-content'>
                  <strong>No pudimos guardar el precio</strong>

                  <p>
                    Ocurrio un problema durante el guardado. Inténtalo nuevamente.
                  </p>

                  <button
                    className='feedback-action'
                    type='button'
                    onClick={handleSave}
                  >
                    Reintentar
                  </button>
                </div>
              </div>
            )}

          </section>
        </div>
      </section>
    </main>
  )
}

export default App