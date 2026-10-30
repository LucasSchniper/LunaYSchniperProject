import './MealCard.css'

interface MealCardProps {
  img: string;
  origen: string;
  nombre: string;
}

export default function MealCard({ img, origen, nombre }: MealCardProps) {
  return (
    <div className="meal-card">
      <div className="meal-card-image-container">
        <img src={img} alt={nombre} className="meal-card-image" />
        <span className="meal-card-badge">{origen}</span>
      </div>

      <div className="meal-card-content">
        <h2 className="meal-card-title">{nombre}</h2>

        <div className="meal-card-footer">
          <span className="meal-card-action">Ver detalles →</span>
        </div>
      </div>
    </div>
  );
}