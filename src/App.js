import React from 'react';
import Context from './store/index';
import Inputs from './components/inputs';
import Tabla from './components/tabla';

function App() {
  return (
    <Context.Provider>
      <div className="container" style={{ marginTop: '3%' }}>
        <div className="row">
          <div className="col col-lg-4">
            <Inputs />
          </div>
          <div className="col col-lg-8">
            <Tabla />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
