
import './App.css'

import React from 'react';
import Gallery from './components/Gallery';
import Toolbar from './components/Toolbar';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';

const App = () => {
    return (
      <div>
        <Counter></Counter>
        <ToDoList></ToDoList>
        <Gallery></Gallery>
        <Toolbar
          onDeleteImage={() => alert('¡Borrando!')}
          onUploadImage={() => alert('¡Cargando!')}
        />
      </div>
    );
}

export default App;
