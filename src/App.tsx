import {Form } from  "./components/EventForm"
import Summary  from  "./components/Summary"
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
