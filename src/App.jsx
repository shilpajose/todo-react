import React from 'react';
import TodoList from './Pages/TodoList';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';

function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/todo' element={<TodoList/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
