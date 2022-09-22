import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Todoapp from './Todoapp';

function App() {
  return (
    <div className="center">
      <span className='title'>todos</span><br />
      <Todoapp />
    </div>
  );
}

export default App;
