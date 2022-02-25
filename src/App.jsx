import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './layout/Layout';
import ClasesPage from './paginas/ClasesPage';
import ClasePage from './paginas/ClasePage';
import TareaPage from './paginas/TareaPage';
import AppState from './context/App/AppState';
import TareasPage from './paginas/TareasPage';
import NuevaClasePage from './paginas/NuevaClasePage';
import EditarClasePage from './paginas/EditarClasePage';
import NuevaTareaPage from './paginas/NuevaTareaPage';
import EditarTareaPage from './paginas/EditarTareaPage';

function App() {

  // console.log(import.meta.env.VITE_APP_URL)

  useEffect(() => {

    if (window.location.pathname == '/') {
      window.location.replace(`${import.meta.env.VITE_APP_URL}/clases`)
    }

    // console.log(window.location.pathname);

  }, [])

  return (

    <AppState>
      <BrowserRouter>

        <Routes>

          <Route path="/clases" element={<Layout />}>

            <Route index element={<ClasesPage />} />

            {/* Clases */}
            <Route path=":id" element={<ClasePage />} />
            <Route path="nueva" element={<NuevaClasePage />} />
            <Route path="editar/:id" element={<EditarClasePage />} />

            {/* Tareas */}
            <Route path=":id/tareas/nueva" element={<NuevaTareaPage />} />
            <Route path=":id/tareas/editar/:idTarea" element={<EditarTareaPage />} />
            <Route path=":id/tareas/:idTarea" element={<TareaPage />} />
          </Route>

          <Route path="/tareas" element={<Layout />}>
            <Route path="all" element={<TareasPage />} />
          </Route>

          {/* <Route path="*" element={<Layout />} />  */}

        </Routes>

      </BrowserRouter>
    </AppState>

  )

}

export default App
