import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const Provider = ({ children }) => {
  const [pets, setPets] = useState([{id:1, name:'luna', breed: 'perro'},{id:2, name:'Katy', breed: 'gato'}]);
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  let value = {};

  value = {
    pets,
    activatePets: (n) => {
      console.log(n);
        setPets([...pets, n]);
    },
    removePet: (n) => {
      const array = [...pets];
      for (let i = 0; i < array.length; i += 1) {
        if (array[i] === n) {
          array.splice(i, 1);
        }
      }
      setPets(array);
    },
    updatePet: (n) => {
      const array = [...pets];
      for (let i = 0; i < array.length; i += 1) {
        if (array[i].id === n.id) {
          array[i] = n;
        }
      }
      setPets(array);
    },
    id,
    activateId: (id) => {
      setId(id);
    },
    name,
    activateName: (name) => {
      setName(name);
    },
    breed,
    activateBreed: (breed) => {
      setBreed(breed);
    },
  };
  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
