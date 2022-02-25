import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/App/AppContext';
import Tarea from '../components/Tarea';
import BtnAgregar from '../components/BtnAgregar';

const ClasePage = () => {

  const { id } = useParams();
  const { clases, tareas } = useContext(AppContext);

  const clase = clases.find(clase => clase.id == id);
  const { profesor, nombreClase, color } = clase;

  const tareasClase = tareas.filter(tarea => tarea.idClase == id);

  // console.log(tareasClase);

  return (
    <>
      <div className={`bg-[${color}] md:m-16 p-10 md:rounded-xl text-white`}>
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
              />
            ))}

          </ul>
        </div>

      ) : (

        <p className='text-center text-3xl px-5 md:p-0 md:text-5xl mt-14 md:mt-40'>Aún No Creas Alguna Tarea!</p>

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
