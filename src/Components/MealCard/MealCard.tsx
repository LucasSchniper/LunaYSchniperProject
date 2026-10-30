interface MealCardProps {
  img: string;
  origen: string;
  nombre: string;
}
export default function MealCard({ img, origen, nombre }: MealCardProps) {
  return (
    <div className="MealCard">
      <img src={img} alt="" />
      <h2>Origen: {origen}</h2>
      <h1>{nombre}</h1>
    </div>
  );
}
