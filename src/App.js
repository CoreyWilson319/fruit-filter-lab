import './App.css';

// Components
import FruitContainer from './components/FruitContainer'

function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'grape', 'orange', 'kiwi', 'starfruit', 'crabapple', 'grapefruit', 'mango', 'mangosteen', 'tangerine']
  return (
    <div className="App">
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
