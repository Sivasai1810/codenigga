import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from "./Auth/login"
import Signup from './Auth/signup';
import Dashboard from './Dashboard/dashboard';
import Uploadpannel from './upload-pannel/uploadpannel';
import Filesuploadform from "./upload-forms/fileuploadfrom"

function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
<Route path="/login" element={<Login />}/>
<Route path='/' element={<Signup />}></Route>
<Route path='/dashboard' element={<Dashboard />}></Route>
<Route path='/fileupload' element={ <Filesuploadform/>}></Route>
<Route path='/uploadpannel' element={<Uploadpannel />}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
