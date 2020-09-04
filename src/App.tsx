import React, { useRef, useCallback, FormEvent } from 'react';

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const acceptTermsRef = useRef({ value: false })

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()

    nameInputRef.current?.focus()

    // Mostra valor anotado no input
    console.log(nameInputRef.current?.value)
    console.log(acceptTermsRef.current.value)
  }, [])

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Digite seu nome"
          ref={nameInputRef}
        />

        <button type="button" onClick={handleAcceptTerms}>
          Aceitar termos
        </button>

        <button type="submit">Realizar foco</button>
      </form>
    </div>
  );
}

export default App;
