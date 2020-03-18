import React from 'react';
import Context from '../store/index';

export default function Inputs() {

  return (
    <>
      <Context.Consumer>
        {
          (value) => {
            const handleSave = () =>{
              value.activatePets({ id:value.id, name: value.name, breed: value.breed });               
            }
            return(
              <div className="form-group">
              <input type="number" className="form-control" placeholder="id" value={value.id} onChange={(e) => { value.activateId(e.target.value); }}/>
              <br/>
              <input type="text" className="form-control" placeholder="name" value={value.name} onChange={(e) => { value.activateName(e.target.value); }}/>
              <br/>
              <input type="text" className="form-control"  placeholder="breed" value={value.breed} onChange={(e) => { value.activateBreed(e.target.value); }}/>
              <br/>
              <button type="button" className="btn btn-success" onClick={handleSave}>Crear</button>
            </div>
            );
          }
        }  
      </Context.Consumer>
    </>
  );
}