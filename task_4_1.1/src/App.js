import Counter from './component/counter';
import Buttons from './component/buttons';
import './style/style.css';

function App() {
  return (
    <div className="counters">
      <Counter />
      <Buttons />
    </div>
  );
}

export default App;
