import './scss/main.scss';
import Card from './components/Card';
import cardData from './data/cardData';

function App() {
  return <Card {...cardData}></Card>;
}

export default App;
