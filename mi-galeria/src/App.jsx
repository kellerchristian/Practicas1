
import './App.css'

import React from 'react';
import Gallery from './components/Gallery';
import Toolbar from './components/Toolbar';

const App = () => {
    return (
      <div>

        <Gallery></Gallery>
        <Toolbar
          onDeleteImage={() => alert('¡Borrando!')}
          onUploadImage={() => alert('¡Cargando!')}
        />
      </div>
    );
}

export default App;
