import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import BookingForm from './Pages/BookingForm/BookingForm';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/booking' element={<BookingForm></BookingForm>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>


    </div>
  );
}

export default App;
