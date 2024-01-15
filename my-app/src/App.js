import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './bootstrap.css';
import Table from './files/Table.js';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


function MainPage()
{
  return(
    <div>
      <Table/>
    </div>
  );
}
export default App;
