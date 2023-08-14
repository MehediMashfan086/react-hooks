import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import UseState from './components/UseState';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseState />} />
        <Route path="/usestate" element={<UseState />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
