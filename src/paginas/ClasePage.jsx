import React from 'react';
import Tarea from '../components/Tarea';
import BtnAgregar from '../components/BtnAgregar';

const ClasePage = () => {

  return (
    <>
      <div className='bg-[#038A00] m-16 p-10 rounded-xl text-white'>
        <h1 className='text-5xl'>Nombre Clase</h1>
        <p className='text-3xl mt-5'>Nombre del Profesor</p>
      </div>
      <div>
        <ul>
          <Tarea />
        </ul>
      </div>
      <div className='flex justify-end'>
        <BtnAgregar />
      </div>
    </>
  )
};

export default ClasePage;
