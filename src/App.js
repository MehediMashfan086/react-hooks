import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import UseState from './components/useState/UseState';
import UseStatePrevState from './components/useState/UseStatePrevState';
import UseStateWithObject from './components/useState/UseStateWithObject';
import UseStateWithArray from './components/useState/UseStateWithArray';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseState />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/usestate-prevstate" element={<UseStatePrevState />} />
        <Route path="/usestate-object" element={<UseStateWithObject />} />
        <Route path="/usestate-array" element={<UseStateWithArray />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
