import { useState, useEffect } from 'react';
import MealCard from '../../../Components//MealCard/MealCard';
import InputSearch from '../../../Components/InputSearch/InputSearch';
interface MealAPI {
  idMeal: string;
  strMeal: string;
  strArea: string;
  strMealThumb: string;
}

export default function MainPage() {
  const [meals, setMeals] = useState<MealAPI[]>([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);

  // Función que llama a la API
  const obtenerComidas = async (query: string) => {
    setCargando(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Error al traer datos:', error);
    } finally {
      setCargando(false);
    }
  };

  // Carga inicial al montar la página
  useEffect(() => {
    obtenerComidas('');
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: 'sans-serif'
      }}
    >
      {/* Encabezado */}
      <header style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ color: '#0f172a', fontSize: '32px', marginBottom: '8px' }}>
          recetas<span style={{ color: '#ea580c' }}>.app</span>
        </h1>
        <p style={{ color: '#64748b' }}>Encuentra tu próximo plato favorito</p>
      </header>

      {/* Componente del Buscador */}
      <InputSearch
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        onBuscar={() => obtenerComidas(busqueda)}
      />

      {/* Indicador de Carga */}
      {cargando && (
        <p style={{ textAlign: 'center', color: '#ea580c', fontWeight: 'bold' }}>
          Cargando delicias...
        </p>
      )}

      {/* Mensaje si no hay resultados */}
      {!cargando && meals.length === 0 && (
        <p style={{ textAlign: 'center', color: '#64748b' }}>
          No se encontraron comidas con el término "{busqueda}".
        </p>
      )}

      {/* Grilla de Tarjetas */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        {meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            nombre={meal.strMeal}
            origen={meal.strArea || 'Internacional'}
            img={meal.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}

