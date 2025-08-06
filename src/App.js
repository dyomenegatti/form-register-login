import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SegmentedControl from './components/SegmentedControl/SegmentedControl';

function App() {
  return (
    <div className="App">
      <SegmentedControl></SegmentedControl>

      {/* <Login></Login>
      <Register></Register> */}
    </div>
  );
}

export default App;
