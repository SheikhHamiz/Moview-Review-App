import './App.css';
import ReviewList from './components/reviewsList';
import Search from './components/search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateReview from './components/updateReview';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/movie-review/:movieId' element={<ReviewList/>}/>
        <Route path='/update-review/:id' element={<UpdateReview/>} />
      </Routes>
    </Router>
  );
}

export default App;
