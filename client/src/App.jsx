import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { EditTask, Error, HomeIndex, MyTasks, NewTask } from './index';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeIndex />}></Route>
          <Route path="mytasks" element={<MyTasks />}></Route>
          <Route path="newtask" element={<NewTask />}></Route>
          <Route path="edittask" element={<EditTask />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
