import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="products">Products List</Link></li>
        <li><Link to="category">Category List</Link></li>
        <li><Link to="order">Order List</Link></li>
      </ul>
    </div>
  );
}

export default App;
