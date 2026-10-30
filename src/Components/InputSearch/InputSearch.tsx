import React from 'react';

interface InputSearchProps {
  busqueda: string;
  setBusqueda: (valor: string) => void;
  onBuscar: () => void;
}

export default function InputSearch({ busqueda, setBusqueda, onBuscar }: InputSearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBuscar();
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '32px'
      }}
    >
      <input
        type="text"
        placeholder="Busca una comida (ej: chicken, pasta)..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: '12px 18px',
          borderRadius: '10px',
          border: '2px solid #e2e8f0',
          fontSize: '16px',
          width: '320px',
          outline: 'none',
          backgroundColor: '#ffffff',
          color: '#1e293b'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '12px 24px',
          borderRadius: '10px',
          border: 'none',
          backgroundColor: '#ea580c', // Naranja vibrante
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '16px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgba(234, 88, 12, 0.3)'
        }}
      >
        Buscar
      </button>
    </form>
  );
}