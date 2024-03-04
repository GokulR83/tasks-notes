import './App.css'
import { Routes, Route } from "react-router-dom";
import { CompletedTask, CreateNote, CreateTask, DeleteNote, DeleteTask, EditNote, EditTask, Home } from './pages'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/note/create' element={<CreateNote/>} />
      <Route path='/note/edit/:id' element={<EditNote/>} />
      <Route path='/note/delete/:id' element={<DeleteNote/>} />
      <Route path='/task/create' element={<CreateTask/>} />
      <Route path='/task/edit/:id' element={<EditTask/>} />
      <Route path='/task/delete/:id' element={<DeleteTask/>}/>
      <Route path='/task/completed/:id' element={<CompletedTask/>}/>
    </Routes>
  )
}

export default App
