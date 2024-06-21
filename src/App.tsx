import {Form}  from  "../src/Components/Form"
import Summary  from  "../src/Components/Summary"
import './App.css'
import {   Routes, Route } from 'react-router-dom';

function App() {

  return   (
    <>
     <Routes>

     <Route path="/" element={<Form />} />
     <Route path="/summary" element={<Summary/>} />

     </Routes>

    </>
  )

   
}

export default App
