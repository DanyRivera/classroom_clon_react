import { useContext } from 'react';
import AppContext from '../context/App/AppContext';
import Clase from '../components/Clase';
import BtnAgregar from '../components/BtnAgregar';

const ClasesPage = () => {

  const { compress } = useContext(AppContext);

  return (
    <>

      <BtnAgregar />

      <div className={`grid ${compress ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-10 m-16`}>
        <Clase />
      </div>

    </>
  )

};

export default ClasesPage;
