import React from 'react';
import IconTask from '../img/icon_task.svg';

const TareaPage = () => {
    return (
        <>
            <div className='border-b-2 border-gray-200'>
                <p className='p-7 text-xl'>Nombre de la Clase</p>
            </div>
            <div className='flex m-10'>
                <div className='w-3/4'>
                    <div className='flex border-b-2 border-gray-200'>
                        <div className='w-14'>
                            <img src={IconTask} alt="Icon Task" />
                        </div>
                        <div className='ml-10'>
                            <h2 className='text-5xl text-[#038A00] mb-5'>Titulo de la Tarea Asignada</h2>
                            <p className='text-2xl mb-5'>Nombre del Profesor</p>
                            <div className='flex justify-between text-xl mb-7'>
                                <p>10 puntos</p>
                                <p><span className='font-bold'>Fecha de entrega: </span>9 Feb 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-5'>
                        <p className='text-xl'>
                            Descripción Descripción Descripción Descripción Descripción Descripción Descripción Descripción Descripción Descripción Descripción Descripción
                        </p>
                    </div>
                </div>
                <div className='w-1/4'>
                    <div className='flex justify-around items-center'>
                        <p className='text-xl'>Acciones</p>
                        <p className='text-[#FD0000]'>Sin entregar</p>
                        {/* <p className='text-[#038A00]'>Entregada</p> */}
                    </div>
                    <div className='mt-5 cursor-pointer'>
                        <a
                            className='py-3 m-0 block rounded-md text-center text-white w-100 bg-[#038A00]'
                        >
                            <button>Entregar</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TareaPage;
