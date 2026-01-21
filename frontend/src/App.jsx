import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from "./Auth/login"
import Signup from './Auth/signup';

function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
<Route path="/login" element={<Login />}/>
<Route path='/signup' element={<Signup />}></Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
