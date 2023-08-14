import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import UseState from './components/UseState';
import UseStatePrevState from './components/UseStatePrevState';
import UseStateWithObject from './components/UseStateWithObject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseState />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/usestate-prevstate" element={<UseStatePrevState />} />
        <Route path="/usestate-object" element={<UseStateWithObject />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
