import { useEffect, useState } from "react";
import MealCard from "../../../Components/MealCard/MealCard";

export default function MainPage(){

const [recetas, setRecetas] = useState([]);
const [cargando, setCargando] = useState(true);

useEffect(() => {
const cargarComidas = async() => {
    try{
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await res.json();
        setRecetas(data.meals || []);
      } catch (error) {
        console.error('Error al cargar la home:', error);
      } finally {
        setCargando(false);
      }
    };
    
 cargarComidas();
}, []  )

    return (
    <div className="grid">
      {/* .map() recorre el arreglo 'meals' y por cada objeto retorna tu <MealCard /> */}
      {recetas.map((meal) => (
        <MealCard
          key={meal.idMeal}          // Requisito de React
          nombre={meal.strMeal}       // mapea a tu prop 'nombre'
          origen={meal.strArea}       // mapea a tu prop 'origen'
          img={meal.strMealThumb}     // mapea a tu prop 'img'
        />
      ))}
    </div>
  );
}