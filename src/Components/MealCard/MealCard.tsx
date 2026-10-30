interface MealCardProps {
  img: string;
  origen: string;
  nombre: string;
}

export default function MealCard({ img, origen, nombre }: MealCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        border: '1px solid #f1f5f9',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <img 
        src={img} 
        alt={nombre} 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
      />
      <div style={{ padding: '16px' }}>
        <span
          style={{
            backgroundColor: '#ffedd5', // Fondo naranja claro
            color: '#c2410c',           // Texto naranja oscuro
            padding: '4px 10px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}
        >
          {origen}
        </span>
        <h2 
          style={{ 
            fontSize: '18px', 
            color: '#0f172a', 
            marginTop: '12px',
            marginBottom: '0' 
          }}
        >
          {nombre}
        </h2>
      </div>
    </div>
  );
}