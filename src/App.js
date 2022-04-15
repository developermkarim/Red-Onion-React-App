import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Share/Header/Header';
import SignIn from './Pages/Login/SignIn/SignIn'
import SignUp from './Pages/Login/SignUp/SignUp';
function App() {
  return (
    <>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<SignIn></SignIn>}></Route>
       <Route path='/signUp' element={<SignUp></SignUp>}></Route>
     </Routes>
    </>
  );
}

export default App;
