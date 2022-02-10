import { useContext } from 'react';
import AppContext from '../context/App/AppContext';
import Clase from '../components/Clase';
import BtnAgregar from '../components/BtnAgregar';

const ClasesPage = () => {

  const { compress, clases } = useContext(AppContext);

  return (
    <>

      <BtnAgregar />

      {clases.length > 0 ? (

        <div className={`grid ${compress ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-10 m-16`}>

          {
            clases.map(clase => (
              <Clase
                key={clase.id}
                clase={clase}
              />
            ))
          }


        </div>

      ): (

        <p className='text-center text-5xl mt-40'>Aún No Creas Alguna Clase!</p>

      )}

    </>
  )

};

export default ClasesPage;
