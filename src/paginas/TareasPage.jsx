import { useContext } from "react";
import AppContext from "../context/App/AppContext";
import Tarea from "../components/Tarea";

const TareasPage = () => {

  const { tareas } = useContext(AppContext);

  return (
    <>
      {tareas.length > 0 ? (

        <>
          <h2 className='text-center mx-5 md:mx-0 my-12 text-3xl'>Visualiza todas tus Tareas</h2>

          <div>
            <ul>

              {tareas.map(tarea => (
                <Tarea tarea={tarea} key={tarea.id} />
              ))}

            </ul>
          </div>
        </>

      ) : (

        <p className='text-center text-5xl mt-40'>Aún No Creas Alguna Tarea!</p>

      )}
    </>
  )

};

export default TareasPage;
