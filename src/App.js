import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Landing from './pages/Landing';
import WatchHistory from './pages/WatchHistory';


function App() {
  return (
    <div>

      <Header />

      <Routes>

        <Route path='/' element={<Landing/>}/>

        <Route path='/home' element={<Home />}/>

        <Route path='/watch' element={<WatchHistory />}/>

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
