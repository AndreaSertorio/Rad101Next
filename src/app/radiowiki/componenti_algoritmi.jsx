import { Button, Card } from 'antd';

// Componente per il Bottone Sì (Verde)
export const YesButton = ({ onClick }) => (
  <Button className="bg-green-500 mx-auto" onClick={onClick}>
    Sì
  </Button>
);

// Componente per il Bottone No (Rosso)
export const NoButton = ({ onClick }) => (
  <Button className="bg-red-500 mx-auto" onClick={onClick}>
    No
  </Button>
);

// Componente per la Casella Standard dell'Algoritmo (Arancione)
export const StandardCard = ({ children }) => (
  <Card className="p-4 rounded-xl bg-orange-200" style={{ width: 'fit-content', textAlign: 'center' }}>
    {children}
  </Card>
);

// Componente per la Casella Finale dell'Algoritmo (Verde)
export const FinalCard = ({ children }) => (
  <Card className="p-4 rounded-xl bg-green-100" style={{ width: 'fit-content', minHeight: '200px', minWidth: '200px', textAlign: 'center' }}>
    {children}
  </Card>
);
// Componente per la Casella Iniziale dell'Algoritmo (Blu)
export const InitialCard = ({ children }) => (
  <Card className="p-4 rounded-xl bg-blue-300" style={{ width: 'fit-content', textAlign: 'left' }}>
    {children}
  </Card>
);
