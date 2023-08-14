import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import UseState from './components/UseState';
import UseState_prevState from './components/UseState_prevState';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseState />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/usestate-prevstate" element={<UseState_prevState />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
