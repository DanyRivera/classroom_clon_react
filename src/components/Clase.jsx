import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AppContext from '../context/App/AppContext';
import TresPuntos from '../img/puntos.svg';

const Clase = ({ clase }) => {

    const navigate = useNavigate();
    const { tareas, eliminarClase } = useContext(AppContext);

    const [mostrar, setMostrar] = useState(false);
    const [limiteTareas, setLimiteTareas] = useState([]);

    const { profesor, nombreClase, color, id } = clase;

    const tareasClase = tareas.filter(tarea => tarea.idClase == id);
    // console.log(tareasClase);

    useEffect(() => {

        if (tareasClase.length > 4) {


            setLimiteTareas([tareasClase[0], tareasClase[1], tareasClase[2], tareasClase[3]]);


        } else {

            setLimiteTareas(tareasClase);

        }

    }, []);


    return (
        <div className='border border-gray-200 rounded-xl hover:-translate-y-1 hover:shadow-md transition-all duration-300'>

            <div
                onClick={() => navigate(`/clases/${id}`)}
            >
                <div className={`bg-[${color}] p-3 text-white text-xl rounded-t-xl cursor-pointer`}>
                    <h2>{nombreClase}</h2>
                    <p>{profesor}</p>
                </div>

            </div>

            <div
                className={`
                    py-5 pl-5 
                    ${tareasClase.length == 0 && 'pb-[140px]'} 
                    ${tareasClase.length >= 4 && 'pb-3'} 
                    ${tareasClase.length == 1 && 'pb-[108px]'} 
                    ${tareasClase.length == 2 && 'pb-[77px]'} 
                    ${tareasClase.length == 3 && 'pb-[46px]'}
                `}
            >

                <ul >

                    {
                        limiteTareas.map(tarea => (
                            <li key={tarea.id} className='mb-2'>
                                <Link to={`${id}/tareas/${tarea.id}`}>{tarea.nombre}</Link>
                            </li>
                        ))
                    }

                </ul>

            </div>

            <div className='py-3 px-3 flex justify-end border-t border-gray-200 relative'>
                <button
                    className='w-5'
                    onClick={() => setMostrar(!mostrar)}
                >
                    <img src={TresPuntos} alt="Tres Puntos" />
                </button>

                {mostrar && (
                    <div className='flex flex-col divide-y z-10 absolute top-10 -right-7 md:-right-16 bg-gray-50 rounded-md border'>

                        <button
                            className='py-3 px-6 hover:bg-gray-200 transition-all duration-[250ms]'
                            onClick={() => navigate(`editar/${id}`)}
                        >Editar</button>

                        <button
                            className='py-3 px-6 hover:bg-gray-200 transition-all duration-[250ms]'
                            onClick={() => eliminarClase(id)}
                        >Eliminar</button>

                    </div>
                )}

            </div>

        </div>
    )
};

export default Clase;
