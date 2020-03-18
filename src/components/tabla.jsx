import React from 'react';
import Context from '../store/index';

export default function Tabla() {
  return (
    <>
      <Context.Consumer>
      {
        (value) => {
          return(
            <div className="card">
              <div className="card-body">
                <table style={{ width: '100%'  }}>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>BREED</th>
                  </tr>
                  <tbody>
                  {
                    value.pets.map(pet => (
                      <tr key={pet.id}>
                        <td>{pet.id}</td>
                        <td>{pet.name}</td>
                        <td>{pet.breed}</td>
                        <td>
                          <button type="button" className="btn btn-warning" onClick={() => {
                          value.activateId(pet.id);
                          value.activateName(pet.name);
                          value.activateBreed(pet.breed);
                        }} >
                          Actualizar
                          </button>
                          <button type="button" className="btn btn-success" 
                           onClick={() => { value.updatePet({id:value.id, name:value.name, breed:value.breed}); }}>
                             Check
                          </button>
                        </td>
                        <td><button type="button" class="btn btn-danger" onClick={() => {
                          value.removePet(pet)
                        }}>Eliminar</button></td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </div>
            </div>
          )
        }
      }
      </Context.Consumer>
    </>
  )
} 