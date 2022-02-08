import Tarea from "../components/Tarea";

const TareasPage = () => {

  return (
    <>
        <h2 className='text-center my-12 text-3xl'>Visualiza todas tus Tareas</h2>

        <div>
            <ul>
                <Tarea />
                <Tarea />
                <Tarea />
                <Tarea />
            </ul>
        </div>
    </>
  )

};

export default TareasPage;
