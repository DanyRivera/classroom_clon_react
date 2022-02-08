import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppContext from '../context/App/AppContext';

const Layout = () => {

    const {compress, setCompress} = useContext(AppContext);

    return (
        <div className='md:flex md:min-h-screen'>
            <div className={` ${compress ? 'md:w-[6%] pl-8' : 'md:w-1/4 p-11'} transition-all duration-[250ms] pt-5 bg-gray-50`}>

                {compress ? (

                    <button
                        className='mx-auto text-3xl cursor-pointer'
                        onClick={() => setCompress()}
                    >&rarr;</button>

                ) : (

                    <>

                        <div className='text-right'>
                            <button
                                className='text-4xl cursor-pointer mr-0'
                                onClick={() => setCompress()}
                            >x</button>
                        </div>

                        <h2 className='my-10 text-4xl text-center'>ClassRoom</h2>

                        <nav className='flex flex-col '>
                            <Link to="/clases" className='mb-5 text-xl'>Classes</Link>
                            <Link to="/tareas/all" className='mb-5 text-xl'>Tareas</Link>

                            <ul className='mt-7'>
                                <li className='flex flex-col'>
                                    <Link to="/clases/1" className='mb-3 text-md'>Clase 1</Link>
                                </li>
                            </ul>
                        </nav>
                    </>

                )}

            </div>

            <div className={`${compress ? 'w-full' : 'w-3/4'} md:h-screen md:overflow-y-scroll`}>
                <Outlet/>
            </div>
        </div>
    )
};

export default Layout;
