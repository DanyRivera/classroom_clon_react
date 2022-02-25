import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/App/AppContext';
import { formatearFecha } from '../helpers';
import IconTask from '../img/icon_task.svg';

const TareaPage = () => {

    const { id, idTarea } = useParams();
    const { clases, tareas, setEntregada } = useContext(AppContext);


    const clase = clases.find(clase => clase.id == id);
    const tarea = tareas.find(tarea => tarea.id == idTarea);

    const { nombreClase, profesor, color } = clase;
    const { nombre, puntos, entrega, descripcion, entregada } = tarea;

    return (
        <>
            <div className='border-b-2 border-gray-200'>
                <p className='p-7 text-xl'>{nombreClase}</p>
            </div>
            <div className='md:flex m-16'>
                <div className='md:w-3/4'>
                    <div className='flex border-b-2 border-gray-200'>
                        <div className='w-14'>
                            <img src={IconTask} alt="Icon Task" />
                        </div>
                        <div className='md:ml-10'>
                            <h2 className={`text-5xl text-[${color}] mb-5`}>{nombre}</h2>
                            <p className='text-2xl mb-5'>{profesor}</p>
                            <div className='md:flex md:justify-between md:text-xl mb-7'>
                                <p className='mb-5 md:m-0'>{puntos} puntos</p>
                                <p><span className='font-bold md:ml-48'>Fecha de entrega: </span>{formatearFecha(entrega)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-5 w-auto'>
                        <p className='text-xl'>
                            {descripcion}
                        </p>
                    </div>
                </div>
                <div className='md:w-1/4 mt-20 md:m-0'>
                    <div className='flex justify-around items-center'>
                        <p className='text-xl'>Acciones</p>

                        {entregada ? (

                            <p className='text-[#038A00]'>Entregada</p>

                        ) : (

                            <p className='text-[#FD0000]'>Sin entregar</p>

                        )}

                    </div>
                    <div
                        className='mt-5 cursor-pointer'
                    >
                        <button
                            className={`py-3 m-0 block rounded-md text-center text-white w-100 bg-[#000] w-full`}
                            onClick={() => setEntregada(tarea)}
                        >
                            Entregar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TareaPage;
