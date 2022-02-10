import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/App/AppContext';
import Tarea from '../components/Tarea';
import BtnAgregar from '../components/BtnAgregar';

const ClasePage = () => {

  const { id } = useParams();
  const { clases, tareas } = useContext(AppContext);

  const clase = clases.filter(clase => clase.id == id);
  const { profesor, nombreClase, color } = clase[0];

  const tareasClase = tareas.filter(tarea => tarea.idClase == id);

  // console.log(tareasClase);

  return (
    <>
      <div className={`bg-[${color}] m-16 p-10 rounded-xl text-white`}>
        <h1 className='text-5xl'>{nombreClase}</h1>
        <p className='text-3xl mt-5'>{profesor}</p>
      </div>

      {tareasClase.length > 0 ? (

        <div>
          <ul>

            {tareasClase.map(tarea => (
              <Tarea 
                key={tarea.id}
                tarea={tarea}
                clase={clase[0]}
              />
            ))}

          </ul>
        </div>

      ) : (

        <p className='text-center text-5xl mt-40'>Aún No Creas Alguna Tarea!</p>

      )}

      <div className='flex justify-end'>
        <BtnAgregar
          id={id}
        />
      </div>
    </>
  )
};

export default ClasePage;
