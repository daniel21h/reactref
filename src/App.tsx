import React, { useRef, useCallback } from 'react';

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null)

  const handleFocus = useCallback(() => {
    nameInputRef.current?.focus()
  }, [])

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Digite seu nome"
        ref={nameInputRef}
      />

      <button onClick={handleFocus}>Realizar foco</button>
    </div>
  );
}

export default App;
