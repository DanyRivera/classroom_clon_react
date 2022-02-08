import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TresPuntos from '../img/puntos.svg';

const Clase = () => {

    const navigate = useNavigate();

    const [mostrar, setMostrar] = useState(false);

    return (
        <div className='border border-gray-200 rounded-xl hover:-translate-y-1 hover:shadow-md transition-all duration-300'>

            <div
                onClick={() => navigate('/clases/1')}
            >
                <div className='bg-[#038A00] p-3 text-white text-xl rounded-t-xl cursor-pointer'>
                    <h2>Nombre de la Clase</h2>
                    <p>Profesor</p>
                </div>

            </div>

            <div className='py-5 pl-3'>

                <ul className=''>
                    <li className='mb-2'>Task 1</li>
                    <li className='mb-2'>Task 2</li>
                    <li className='mb-2'>Task 3</li>
                    <li>Task 4</li>
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
                    <div className='flex flex-col divide-y z-10 absolute top-10 -right-16 bg-gray-50 rounded-md border'>
                        <button className='py-3 px-6 hover:bg-gray-200 transition-all duration-[250ms]'>Editar</button>
                        <button className='py-3 px-6 hover:bg-gray-200 transition-all duration-[250ms]'>Eliminar</button>
                    </div>
                )}

            </div>

        </div>
    )
};

export default Clase;
