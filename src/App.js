import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Team from './components/Team';
import Players from './components/Players';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/Players' element={<Players/>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
