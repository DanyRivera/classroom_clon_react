import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import IconTask from '../img/icon_task.svg';
import TresPuntos from '../img/puntos.svg';

const Tarea = ({tarea, clase}) => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [mostrar, setMostrar] = useState(false);

    const {profesor, color} = clase;
    const {nombre, creado} = tarea;

    console.log(color);

    return (
        <li className='mb-5'>
            <div
                className={`shadow-md relative mx-16 p-5 rounded-md border-2 border-[${color}] flex justify-between items-center hover:bg-gray-50 transition-all cursor-pointer`}
            >
                <div
                    onClick={() => navigate(`/clases/${id}/tareas/${tarea.id}`)}
                    className='flex items-center'
                >
                    <div className='w-8'>
                        <img src={IconTask} alt="Icon Task" />
                    </div>
                    <div className='flex flex-col ml-10'>
                        <p><span className='font-bold'>{profesor} ha publicado:</span> {nombre} </p>
                        <p><span className='font-bold'>Publicado:</span> {creado} </p>
                    </div>
                </div>

                <button
                    className='w-5'
                    onClick={() => setMostrar(!mostrar)}
                >
                    <img src={TresPuntos} alt="Tres Puntos" />
                </button>

                {mostrar && (
                    <div className='flex flex-col divide-y absolute z-10 -right-12 top-16 bg-gray-50 rounded-md border'>
                        <button className='py-3 px-6 hover:bg-gray-200 transition-all duration-[250ms]'>Editar</button>
                        <button className='py-3 px-6 hover:bg-gray-200 transition-all duration-[250ms]'>Eliminar</button>

                    </div>
                )}

            </div>
        </li>
    )
};

export default Tarea;
