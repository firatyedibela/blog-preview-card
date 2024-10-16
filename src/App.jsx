import './scss/main.scss';
import Card from './components/Card';
import cardData from './data/cardData';

function App() {
  return (
    <main className="container">
      <Card {...cardData}></Card>
    </main>
  );
}

export default App;
